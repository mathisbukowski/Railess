import React from 'react';
import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";
import RoutesDocComponent from "../Components/routesDoc.jsx";
import NavbarComponent from "../Components/Navbar.jsx";

export default function Documentation() {
    return (
        <div>
            <NavbarComponent />
            <RoutesDocComponent />
            <Newsletter />
            <Footer />
        </div>
    )
};