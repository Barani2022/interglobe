import React from 'react';
import './Hero.css'; 

const Hero = () => {
    return (
        <div className="relative text-center text-white font-jost">
            <img src="/The-Benefits-of-Eating-Fruits-and-Vegetables.jpg" alt="Fruits and Vegetables" className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[530px] object-cover" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-jost">
                Genunity is our priority.
            </div>
        </div>
    );
};

export default Hero;