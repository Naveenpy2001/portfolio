import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const category = formData.get('category');
    
    if (!file) {
      return NextResponse.json({ message: 'No file uploaded' }, { status: 400 });
    }
    
    // Create buffer from file
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Create upload directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    // Create category directory if it doesn't exist
    const categoryDir = path.join(uploadDir, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir);
    }
    
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.name);
    const filename = file.name.replace(ext, '') + '-' + uniqueSuffix + ext;
    const filepath = path.join(categoryDir, filename);
    
    // Write file
    await fs.promises.writeFile(filepath, buffer);
    
    return NextResponse.json({ 
      success: true,
      filename,
      category,
      path: `/uploads/${category}/${filename}`
    });
    
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}