'use client';
import React, { useState } from 'react';
import './Info.css';

const Info = () => {

    const services = [
        {
            id: 1,
            title: 'Quality Inspection',
            icon: '/quality-control.png', // Path to the icon in the public folder
            description: 'We offer meticulous quality inspections for both perishable and non-perishable goods, especially fruits, vegetables, and other food items. Our experienced team implements advanced techniques and industry-standard protocols to assess product quality, ensuring compliance with international standards.'
        },
        {
            id: 2,
            title: 'Loss Adjustment',
            icon:  '/risk.png',// Path to the icon in the public folder
            description: 'In the unfortunate event of cargo loss or damage, our loss adjustors step in to provide expert assessments, facilitating fair and timely insurance claims. We work diligently to minimize financial losses for our clients.'
        },
        {
            id: 3,
            title: 'Risk Mitigation',
            icon: '/risk-management.png', // Path to the icon in the public folder
            description: 'Interglobe offers risk assessment and mitigation strategies to help clients minimize the chances of cargo loss or damage during transportation. Our proactive approach helps prevent potential issues before they occur.'
        }
    ];

    const whyChooseUs = [
        {
            id: 1,
            title: 'Experience',
            image: '/man1.jpg.jpg', // Adjust the path if necessary
            description: 'With nearly three decades in the industry, we have accumulated a wealth of experience and expertise in cargo quality inspection and loss adjustment.'
        },
        {
            id: 2,
            title: 'Accuracy',
            image: '/acc.jpg', // Adjust the path if necessary
            description: 'Our commitment to accuracy and attention to detail ensures that our clients receive precise and reliable inspection reports.'
        },
        {
            id: 3,
            title: 'Client-Centric Approach',
            image: '/business.jpg', // Adjust the path if necessary
            description: 'We prioritize our clients\' needs, offering tailored solutions to meet their specific requirements.'
        }
    ];

    return (
        <div>
            {/* Our Mission Section */}
            <div className="flex p-2 bg-green-700 items-center relative h-[50px] sm:h-[60px] md:h-[70px] lg:h-[75px] font-jost">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold">
                    Our Mission.
                </div>
            </div>
            <div className="flex flex-col sm:flex-row bg-gray-100 h-[200px] sm:h-[250px] md:h-[300px] lg:h-[320px] w-full font-jost">
                <div className="flex justify-center text-center text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 leading-loose p-5 sm:p-10 md:p-12 lg:p-16 items-center">
                    At Interglobe, our mission is to provide comprehensive, accurate, and reliable cargo quality inspection services to ensure the integrity, safety, and quality of goods in transit. We are committed to delivering actionable insights to our clients, enabling them to make informed decisions and mitigate risks associated with their cargo.
                </div>
            </div>

            {/* Our Services Section */}
            <div className="text-center border-t-2 border-b-2 border-gray-300 bg-gray-100 py-2.5 md:py-5 font-jost">
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-green-700">
                    Our Services.
                </div>
            </div>
            <div className="flex flex-col bg-gray-100 py-8">
                <div className="flex flex-col md:flex-row justify-around mt-10 px-5 md:px-10">
                    {services.map(service => (
                        <div
                            key={service.id}
                            className="service-item"
                        >
                            <div className="service-content">
                                <img src={service.icon} alt={service.title} className="service-icon" />
                                <div className="service-title">{service.title}</div>
                            </div>
                            <div className="service-description">
                                {service.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center border-t-2 border-b-2 border-gray-300 bg-gray-100 py-2.5 md:py-5 font-jost">
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-green-700">
                    Why Choose Us.
                </div>
            </div>
            <div className="flex flex-col bg-gray-100 py-8">
                <div className="flex flex-wrap justify-around mt-10 px-5 md:px-10">
                    {whyChooseUs.map(item => (
                        <div key={item.id} className="w-full md:w-1/3 text-center mb-10">
                            <img src={item.image} alt={item.title} className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-5 rounded-lg shadow-md" />
                            <div className="text-lg md:text-xl font-bold text-green-700 mb-2 font-jost">{item.title}</div>
                            <div className="text-base md:text-lg text-gray-700 font-jost">{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Info;
