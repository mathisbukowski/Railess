import React from 'react';
import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";
import RoutesDocComponent from "../Components/routesDoc.jsx";

export default function Documentation() {
    return (
        <div>
            <Navbar />
            <RoutesDocComponent />
            <Newsletter />
            <Footer />
        </div>
    )
};