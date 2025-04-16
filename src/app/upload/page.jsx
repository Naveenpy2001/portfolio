'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '../css/upload.css';

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('general');
  const [uploadedImages, setUploadedImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
        if (!response.ok) throw new Error('Failed to fetch images');
        const data = await response.json();
        setUploadedImages(data.map(img => ({
          ...img,
          uniqueKey: img._id || img.id || Math.random().toString(36).substring(2, 9)
        })));
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Failed to load images');
        setUploadedImages([]);
      }
    };
    fetchImages();
  }, []);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    
    if (selectedFile) {
      if (!selectedFile.type.match('image.*')) {
        setError('Please select an image file (JPEG, PNG, etc.)');
        return;
      }
      
      if (selectedFile.size > 5 * 1024 * 1024) {
        setError('File size should be less than 5MB');
        return;
      }
      
      setFile(selectedFile);
      setError('');
      
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDeletePreview = () => {
    setFile(null);
    setPreview(null);
  };

  const handleDeleteImage = async (imageId) => {
    try {
      const response = await fetch(`/api/images/${imageId}`, {
        method: 'DELETE',
      });
      
      if (response.ok) {
        setUploadedImages(prev => prev.filter(img => img._id !== imageId && img.id !== imageId));
      } else {
        const data = await response.json();
        setError(data.message || 'Failed to delete image');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file first');
      return;
    }
    
    setIsUploading(true);
    setError('');
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('category', category);
      
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        const newImage = await response.json();
        setUploadedImages(prev => [{
          ...newImage,
          uniqueKey: newImage._id || newImage.id || Math.random().toString(36).substring(2, 9)
        }, ...prev]);
        setFile(null);
        setPreview(null);
      } else {
        const data = await response.json();
        setError(data.message || 'Upload failed');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <h1 className="upload-title">Upload a Photo</h1>
      
      <form onSubmit={handleSubmit} className="upload-form">
        <div className="form-group">
          <label className="form-label">Category</label>
          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-select"
          >
            <option value="general">General</option>
            <option value="nature">Nature</option>
            <option value="people">People</option>
            <option value="architecture">Architecture</option>
            <option value="food">Food</option>
          </select>
        </div>
        
        <div className="file-input-container">
          <label className="file-input-label">
            Choose File
            <input 
              type="file" 
              onChange={handleFileChange} 
              className="file-input"
              accept="image/*"
            />
          </label>
          {file && <span className="file-name">{file.name}</span>}
        </div>
        
        {preview && (
          <div className="preview-container">
            <img 
              src={preview} 
              alt="Preview" 
              className="preview-image"
            />
            <button 
              onClick={handleDeletePreview}
              className="delete-preview-button"
              type="button"
            >
              Delete
            </button>
          </div>
        )}
        
        {error && <p className="error-message">{error}</p>}
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={isUploading || !file}
        >
          {isUploading ? 'Uploading...' : 'Upload Photo'}
        </button>
      </form>

      <div className="uploaded-images">
        <h2>Your Uploaded Images</h2>
        {uploadedImages.length === 0 ? (
          <p>No images uploaded yet.</p>
        ) : (
          <div className="image-grid">
            {uploadedImages.map((image) => (
              <div key={image.uniqueKey} className="image-item">
                <img 
                  src={image.url} 
                  alt={image.name || 'Uploaded image'} 
                  className="uploaded-image"
                />
                <div className="image-meta">
                  <span>{image.name || 'Untitled'}</span>
                  <span className="image-category">{image.category}</span>
                </div>
                <button
                  onClick={() => handleDeleteImage(image._id || image.id)}
                  className="delete-image-button"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}