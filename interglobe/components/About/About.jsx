import React from 'react'; // Adjust the path according to your project structure
import './About.css'; // You'll create this CSS file for styling

const About = () => {
    return (
        <div>
            <div className="p-5 sm:p-7 md:p-10 lg:p-12 max-w-full sm:max-w-[700px] md:max-w-[900px] lg:max-w-[1200px] mx-auto font-jost">
                <h1 className="text-green-700 font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mb-5">Choose Interglobe for quality, accuracy, and reliability in cargo inspection and loss adjustment services. Your cargo's quality and standard are our top priorities.</h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-loose mb-5">
                Interglobe Surveyors and Loss Adjusters is a distinguished entity in the Cargo Quality Inspection Industry, specializing in the meticulous inspection and assessment of both perishable and non-perishable goods, with a primary emphasis on fruits and vegetables. Boasting over <span className='bold'>25 years</span> of expertise in this field, we initially operated under the name <span className='bold'>INTERGLOBE MARINE CONSULTANTS LLC</span>. Now, under the banner of <span className='bold'>INTERGLOBE SURVEYORS AND LOSS ADJUSTERS LLC</span>, we persist in delivering our unwavering commitment to excellence in inspection services.<br/><br/>Interglobe operates inside UAE, ensuring that their cargo is inspected and adjusted wherever it may be in UAE.
                </p>
                <ul className="list-disc ml-5 mb-5 text-base sm:text-lg md:text-xl text-gray-800 leading-loose">
                    <li>The activities of the company are mainly confined to Container Damage Surveys, Sealing/Unsealing, inspection of perishable and non perishable cargo imported by various major dealers and cargo underwriters in UAE, and on behalf of suppliers in USA, Mexico, Spain, Chile, Egypt, Ecuador, Italy, Australia, South Africa, Argentina, China, India, Turkey, etc.</li>
                </ul>
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl mb-3">Perishable and Non-perishiable cargo surveys:</h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-loose mb-5">
                    Interglobe Marine carriers out inspection of perishable cargo. Some of the Commodities included are:
                </p>
                <ul className="list-disc ml-5 mb-5 text-base sm:text-lg md:text-xl text-gray-800 leading-loose">
                    <li>Fruits</li>
                    <li>Vegetable</li>
                    <li>Frozen Food Stuff</li>
                    <li>Meats</li>
                    <li>Beverages and Other Food Stuffs</li>
                </ul>
                <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-loose">
                    Interglobe provides testing and inspection expertise for agricultural commodities and related products. Interglobe offers a complete range of services to support the Indian and international agricultural product trading community. Our independent testing, inspection, and certification services ensure that our client’s business interests are protected during custody transfer, transportation, and storage of valuable cargo.
                </p>
            </div>
        </div>
    );
};

export default About;
