'use client';
import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const images = [
    '/pg1.jpg',
    '/pg2.jpg',
    '/pg3.jpg',
    '/pg4.jpg',
    '/pg5.jpg',
    '/pg6.jpg',
    '/pg7.jpg',
    '/pg8.jpg',
    '/pg9.jpg',
    '/pg10.jpg'
    // Add as many images as you want
];

const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="slideshow-container">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`slideshow-image ${index === currentIndex ? 'active' : ''}`}
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            ))}
        </div>
    );
};

export default Slideshow;
