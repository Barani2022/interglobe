import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Info from '../../components/Info/Info'; // Adjust the path according to your project structure
import Footer from '../../components/Footer/Footer';

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Info />
            {/* Other components and content for the home page */}
            {/* <h1>Welcome to My Website</h1>
            <p>This is the home page content.</p> */}
            <Footer />
        </div>
    );
};

export default HomePage;


