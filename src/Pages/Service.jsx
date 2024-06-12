import React from 'react';
import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";
import ServiceComponent from "../Components/Service.jsx";
import NavbarComponent from "../Components/Navbar.jsx";

export default function Service() {
    return (
        <div>
            <NavbarComponent />
            <ServiceComponent />
            <Newsletter />
            <Footer />
        </div>
    );
};