import React from 'react';
import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";

const Contact = () => {
    return (
        <div>
            <Navbar />
            <h1>Contact Page</h1>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default Contact;