import React from 'react';
import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";

const About = () => {
    return (
        <div>
            <Navbar />
            <h1>About Page</h1>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default About;