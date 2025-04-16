'use client';
import { useState, useEffect } from 'react';
import '../css/gallery.css';
import SectionBox from './NameComponent';


export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('all');
  const [displayCount, setDisplayCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null);
  const [categories, setCategories] = useState(['all', 'general', 'nature', 'people', 'architecture', 'food']);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/images?category=${category}`);
        if (response.ok) {
          const data = await response.json();
          setImages(data.images);
        } else {
          setError('Failed to load images');
        }
      } catch (err) {
        setError('Network error. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchImages();
  }, [category]);

  const loadMore = () => {
    setDisplayCount(prev => prev + 8);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const visibleImages = images.slice(0, displayCount);

  return (
    <>
    <SectionBox title={"Mobile Photography"} description={"Capturing creativity, light, and moments through the lens of a smartphone"} borderColor={"#00BFFF"}/>
    <div className="gallery-container">
      <div className="gallery-controls">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setDisplayCount(8);
          }}
          className="category-select"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="loading-message">Loading images...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : images.length === 0 ? (
        <div className="empty-message">No images found in this category.</div>
      ) : (
        <>
          <div className="gallery-grid">
            {visibleImages.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => openModal(image)}
              >
                <img
                  src={image.path}
                  alt={`Gallery image ${index + 1}`}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="image-info">
                  <span className="image-category">{image.category}</span>
                </div>
              </div>
            ))}
          </div>

          {displayCount < images.length && (
            <div className="load-more-container">
              <button onClick={loadMore} className="load-more-button">
                Load More
              </button>
            </div>
          )}
        </>
      )}

      {selectedImage && (
        <div className="image-modal">
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              &times;
            </button>
            <img 
              src={selectedImage.path} 
              alt="Selected" 
              className="modal-image"
            />
            <div className="modal-info">
              <span>{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}