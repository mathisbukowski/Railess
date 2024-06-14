import React from 'react';
import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";
import NavbarComponent from "../Components/Navbar.jsx";
import ContactComponent from "../Components/Contact.jsx";

export default function Contact() {
    return (
        <div>
            <NavbarComponent/>
            <ContactComponent />
            <Footer/>
        </div>
    );
};