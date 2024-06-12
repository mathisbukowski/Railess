import React from 'react';
import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";
import ServiceComponent from "../Components/Service.jsx";

export default function Service() {
    return (
        <div>
            <Navbar />
            <ServiceComponent />
            <Newsletter />
            <Footer />
        </div>
    );
};