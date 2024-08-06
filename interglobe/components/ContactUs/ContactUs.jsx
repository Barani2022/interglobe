'use client';
import React, {useState} from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        validateField(name, value);
    };

    const validateField = (name, value) => {
        let error = '';
        if (name === 'name' && value.trim() === '') {
            error = 'Name is required';
        } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            error = 'Invalid email address';
        } else if (name === 'phone' && !/^\+?[1-9]\d{1,14}$/.test(value)) {
            error = 'Invalid phone number';
        } else if (name === 'message' && value.trim() === '') {
            error = 'Message is required';
        }

        setErrors({
            ...errors,
            [name]: error,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, message } = formData;

        validateField('name', name);
        validateField('email', email);
        validateField('phone', phone);
        validateField('message', message);

        if (!errors.name && !errors.email && !errors.phone && !errors.message) {
            console.log(formData);
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
            setErrors({});
        } else {
            alert('Please correct the errors in the form.');
        }
    };

    return (
        <div>
            <div className="relative text-center text-white font-jost">
                <img src="/contactus.jpg" alt="Fruits and Vegetables" className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[530px] object-cover filter blur-sm opacity-70" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                    Contact Us
                </div>
            </div>
            <div className="flex flex-col bg-white h-auto p-3 sm:p-5 md:max-w-[800px] lg:max-w-[1200px] mx-auto font-jost">
            <div className="text-green-700 font-bold text-sm sm:text-base md:text-lg lg:text-xl mb-3 sm:mb-5">
                        Interglobe Surveyors and Loss Adjustors is your trusted partner in the Cargo Quality Inspection Industry. For inquiries or to discuss your cargo inspection needs, please contact us:
                    </div>
            <div className="w-full bg-gray-100 p-4 sm:p-5 rounded-lg shadow-md mx-auto"> 
                    <form onSubmit={handleSubmit}>
                    <div className="mb-3 sm:mb-4">
                            <label htmlFor="name" className="block mb-1 sm:mb-2 font-bold text-xs sm:text-sm md:text-base text-gray-800">Name<span className="text-red-500">*</span></label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            {errors.name && <p className="error-text">{errors.name}</p>}
                        </div>
                        <div className="mb-3 sm:mb-4">
                            <label htmlFor="email" className="block mb-1 sm:mb-2 font-bold text-xs sm:text-sm md:text-base text-gray-800">Email<span className="text-red-500">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}
                        </div>
                        <div className="mb-3 sm:mb-4">
                            <label htmlFor="phone" className="block mb-1 sm:mb-2 font-bold text-xs sm:text-sm md:text-base text-gray-800">Phone<span className="text-red-500">*</span></label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            />
                            {errors.phone && <p className="error-text">{errors.phone}</p>}
                        </div>
                        <div className="mb-3 sm:mb-4">
                            <label htmlFor="message" className="block mb-1 sm:mb-2 font-bold text-xs sm:text-sm md:text-base text-gray-800">Message<span className="text-red-500">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                required
                                className="w-full p-2 border border-gray-300 rounded-lg"
                            ></textarea>
                            {errors.message && <p className="error-text">{errors.message}</p>}
                        </div>
                        <button type="submit" className="inline-block p-2.5 bg-green-700 text-white rounded-lg font-bold text-base sm:text-lg">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;