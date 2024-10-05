import React, { useState } from "react";
import nextIcon from "../assets/images/icon-next.svg";
import prevIcon from "../assets/images/icon-previous.svg";
const LightboxGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (index) => {
    setSelectedImage(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const switchImage = (index) => {
    setSelectedImage(index);
  };

  const nextImage = () => {
    if (selectedImage < images.length - 1) {
      switchImage(selectedImage + 1);
    }
  };

  const prevImage = () => {
    if (selectedImage > 0) {
      switchImage(selectedImage - 1);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} onClick={() => openLightbox(index)}>
            <img
              src={image.thumbnailUrl}
              alt={`Thumbnail ${index}`}
              className={`cursor-pointer w-20 h-20 rounded-lg ${
                selectedImage === index ? "border-orange" : ""
              }`}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center">
          <div className="max-w-3xl w-full p-4">
            <div className="relative">
              <button
                className="absolute top-[50%] -left-3 text-white text-2xl cursor-pointer"
                onClick={prevImage}
              >
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                  <img src={prevIcon} alt="next" className="h-3" />
                </div>
              </button>
              <button
                className="absolute top-[50%] -right-3 text-white text-2xl cursor-pointer"
                onClick={nextImage}
              >
                <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                  <img src={nextIcon} alt="next" className="h-3" />
                </div>
              </button>
              <button
                className="absolute -top-8 right-2 text-white text-2xl cursor-pointer"
                onClick={closeLightbox}
              >
                {/* <img src={closeIcon} alt="next" /> */}
                &times;
              </button>
              <img
                src={images[selectedImage]?.imageUrl}
                alt={`Productge ${selectedImage}`}
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LightboxGallery;
