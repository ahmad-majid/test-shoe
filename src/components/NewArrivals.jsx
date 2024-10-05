import React, { useState } from 'react';
import './styles/NewArrivals.css'; // Make sure to create a CSS file for styling

const products = [
    {
        imgSrc: 'https://static.wixstatic.com/media/33e1cd_05ea5b4c1aea402ea8f0e685301cd2e4~mv2.png',
        name: 'Product 1',
        price: '$49.99',
    },
    {
        imgSrc: 'https://static.wixstatic.com/media/33e1cd_258194970ba046269ac3b36d54351def~mv2.png',
        name: 'Product 2',
        price: '$59.99',
    },
    {
        imgSrc: 'https://static.wixstatic.com/media/33e1cd_0d4dba692be1409d95924e34e3704c48~mv2.png',
        name: 'Product 3',
        price: '$39.99',
    },
    {
        imgSrc: 'https://static.wixstatic.com/media/33e1cd_680606b2ef1841e8a831fdb659e01189~mv2.png',
        name: 'Product 4',
        price: '$29.99',
    },
    {
        imgSrc: 'https://static.wixstatic.com/media/33e1cd_4ae9cd2486254f8ab82bdc448a3abe0d~mv2.png',
        name: 'Product 5',
        price: '$69.99',
    },
    {
        imgSrc: 'https://static.wixstatic.com/media/33e1cd_d069418f635c40cd9c7dcbe231f7d2ef~mv2.png',
        name: 'Product 6',
        price: '$79.99',
    },
    {
        imgSrc: 'https://static.wixstatic.com/media/33e1cd_05b23e49341b47dfb3716be55f24432b~mv2.png',
        name: 'Product 7',
        price: '$89.99',
    },
    {
        imgSrc: 'https://static.wixstatic.com/media/33e1cd_91e6c41f0a074219ac5314d9a72d3a4f~mv2.png',
        name: 'Product 8',
        price: '$99.99',
    },
    {
        imgSrc: 'https://static.wixstatic.com/media/33e1cd_490fd52ea1af49d297af5c4d3be06385~mv2.png',
        name: 'Product 9',
        price: '$109.99',
    },
];

const NewArrivals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4; // Display 4 images in a grid
    const maxIndex = Math.ceil(products.length / itemsPerPage) - 1;

    const nextPage = () => {
        if (currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevPage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="new-arrivals">
            <h2>New Arrivals</h2>
            <div className="products-container">
                {products.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage).map((product, index) => (
                    <div className="product-card" key={index}>
                        <img src={product.imgSrc} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
            <div className="navigation-buttons">
                <button onClick={prevPage} disabled={currentIndex === 0} className="prev-button">
                    <span className="arrow-left">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path fillRule="evenodd" d="M8.70710678,4.99810828 L15.068,11.3651083 L15.0722115,11.3620693 L15.7793183,12.0691761 L15.776,12.0721083 L15.7782433,12.0758831 L15.0711365,12.7829899 L15.069,12.7801083 L8.70710678,19.1434929 L8,18.4363861 L14.361,12.0721083 L8,5.70521506 L8.70710678,4.99810828 Z" />
                        </svg>
                    </span>
                </button>
                <button onClick={nextPage} disabled={currentIndex === maxIndex} className="next-button">
                    <span className="arrow-right">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                            <path fillRule="evenodd" d="M15.2928932,4.99810828 L8.932,11.3651083 L8.92778849,11.3620693 L8.22068167,12.0691761 L8.224,12.0721083 L8.2217567,12.0758831 L8.92886348,12.7829899 L8.931,12.7801083 L15.2928932,19.1434929 L16,18.4363861 L9.639,12.0721083 L16,5.70521506 L15.2928932,4.99810828 Z" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    );
};

export default NewArrivals;
