import React, { useState } from 'react';
import './styles/FollowUs.css';

// Import local images from the assets folder
import img1 from '../assets/FollowUs/1.avif'; // Image 1
import img2 from '../assets/FollowUs/2.jpg'; // Image 2
import img3 from '../assets/FollowUs/3.jpg'; // Image 3
import img4 from '../assets/FollowUs/4.avif'; // Image 4
import img5 from '../assets/FollowUs/5.jpg'; // Image 5
import img6 from '../assets/FollowUs/6.avif'; // Image 6
import img7 from '../assets/FollowUs/7.avif'; // Image 7
import img8 from '../assets/FollowUs/8.jpg'; // Image 8
import img9 from '../assets/FollowUs/9.jpg'; // Image 9
import img10 from '../assets/FollowUs/10.jpg'; // Image 10
import img11 from '../assets/FollowUs/11.jpg'; // Image 11
import img12 from '../assets/FollowUs/12.jpg'; // Image 12

const FollowUs = () => {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12
  ];

  const [displayCount, setDisplayCount] = useState(4); // Start with 4 images displayed

  const handleReadMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + 4, images.length)); // Increment by 4 but not exceed total images
  };

  return (
    <div className="follow-us">
      <h2>Follow Us</h2>
      <div className="image-grid">
        {images.slice(0, displayCount).map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image} alt={`Sneaker ${index + 1}`} />
          </div>
        ))}
      </div>
      {displayCount < images.length && (
        <button className="read-more-button" onClick={handleReadMore}>
          Read More
        </button>
      )}
    </div>
  );
};

export default FollowUs;
