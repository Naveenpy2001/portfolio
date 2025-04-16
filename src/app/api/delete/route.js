import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function DELETE(request) {
  try {
    const { imagePath } = await request.json();
    
    if (!imagePath) {
      return NextResponse.json(
        { message: 'Image path is required' },
        { status: 400 }
      );
    }

    // Construct full file path
    const filePath = path.join(process.cwd(), 'public', imagePath);
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { message: 'Image not found' },
        { status: 404 }
      );
    }

    // Delete the file
    fs.unlinkSync(filePath);
    
    return NextResponse.json({ 
      success: true,
      message: 'Image deleted successfully'
    });
    
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}