import React from 'react';
import Navbar from '../../../components/Navbar/Navbar'; // Adjust path as necessary
import About from '../../../components/About/About';
import Slideshow from '../../../components/Slideshow/Slideshow';
import Footer from '../../../components/Footer/Footer';  // Adjust path as necessary

const AboutPage = () => {
    return (
        <div>
            <Navbar />
            <Slideshow />
            <About />
            <Footer />
        </div>
    );
};

export default AboutPage;
