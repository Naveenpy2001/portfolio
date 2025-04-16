import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || 'all';
    
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    
    if (!fs.existsSync(uploadDir)) {
      return NextResponse.json({ images: [] });
    }
    
    let images = [];
    
    if (category === 'all') {
      // Get all categories
      const categories = fs.readdirSync(uploadDir).filter(file => 
        fs.statSync(path.join(uploadDir, file)).isDirectory()
      );
      
      // Get images from all categories
      for (const cat of categories) {
        const catDir = path.join(uploadDir, cat);
        const catImages = fs.readdirSync(catDir)
          .filter(file => ['.jpg', '.jpeg', '.png', '.gif', '.webp']
            .includes(path.extname(file).toLowerCase()))
          .map(file => ({
            filename: file,
            path: `/uploads/${cat}/${file}`,
            category: cat
          }));
        
        images = [...images, ...catImages];
      }
    } else {
      // Get images from specific category
      const catDir = path.join(uploadDir, category);
      if (fs.existsSync(catDir)) {
        images = fs.readdirSync(catDir)
          .filter(file => ['.jpg', '.jpeg', '.png', '.gif', '.webp']
            .includes(path.extname(file).toLowerCase()))
          .map(file => ({
            filename: file,
            path: `/uploads/${category}/${file}`,
            category
          }));
      }
    }
    
    return NextResponse.json({ images });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}