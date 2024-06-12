import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div className="w-full py-[5rem] px-4 bg-white">
                <div className="container mx-auto py-10">
                    <h1 className="text-4xl font-bold text-center text-black-800 mb-8">Contact Us</h1>
                    <div className="flex justify-center">
                        <div className="max-w-lg w-full">
                            <p className="text-lg text-black-600 mb-4">We'd love to hear from you. Contact us using the form below:</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-lg text-black-600">You can also reach us via:</p>
                        <p className="text-lg text-black-600">Email: contact@mathisbukowski.fr</p>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
};