import React from 'react';
import Newsletter from "../Components/Newsletter.jsx";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";

export default function Policies() {
    return (
        <div>
            <Navbar />
            <div className="w-full py-[5rem] px-4 bg-white">
                <h1 style={{ textAlign: 'center', fontWeight: 'bold', color: 'black', margin: 'auto' }} class = 'text-4xl'>Privacy Policy</h1>
                <p style={{ fontWeight: 'bold', color: 'black'}} className=" text-2xl font-bold text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-2">General Policy</p>
                <p style={{ color: 'black'}} className=" text-1xl text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">This Privacy Policy describes how Railess. collects, uses and safeguards the information you provide to us when you use our website (railess.fr). Please read this policy carefully before using the Site or providing any information to us. By using the Site, you are accepting the practices described in this Privacy Policy.</p>
                <p style={{ fontWeight: 'bold', color: 'black'}} className=" text-2xl font-bold text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-2">Collection and Use of Information</p>
                <p style={{ color: 'black'}} className=" text-1xl  text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">We do not collect any personally identifiable information about users of our Site. When you browse our Site, no personal data is collected, stored or transmitted to third parties.</p>
                <p style={{ fontWeight: 'bold', color: 'black'}} className=" text-2xl font-bold text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-2">Cookies</p>
                <p style={{ color: 'black'}} className=" text-1xl text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">Our Site does not use cookies to collect personal information.</p>
                <p style={{ fontWeight: 'bold', color: 'black'}} className=" text-2xl font-bold text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-2">Information sharing</p>
                <p style={{ color: 'black'}} className=" text-1xl text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">Since we do not collect any personally identifiable information, we do not share any information with third parties.</p>
                <p style={{ fontWeight: 'bold', color: 'black'}} className=" text-2xl font-bold text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-2">Security</p>
                <p style={{ color: 'black'}} className=" text-1xl text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">We are committed to protecting your personal information, even when we do not collect it. We maintain appropriate physical, electronic and administrative safeguards to protect the information we do not collect from unauthorized access, alteration, disclosure or destruction.</p>
                <p style={{ fontWeight: 'bold', color: 'black'}} className=" text-2xl font-bold text-lineColor font-kode max-w-[1250px] mx-auto grid lg:grid-cols-2">Changes to the Privacy Policy</p>
                <p style={{ color: 'black'}} className=" text-1xl text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">We reserve the right to modify this Privacy Policy at any time. Changes will be effective immediately upon posting on the Site. By continuing to use the Site, you agree to be bound by any changes to this Privacy Policy.</p>
                <p style={{ fontWeight: 'bold', color: 'black'}} className=" text-2xl font-bold text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-2">Contact us</p>
                <p style={{ color: 'black'}} className=" text-1xl text-lineColor font-kode max-w-[1240px] mx-auto grid lg:grid-cols-1">If you have any questions about this Privacy Policy, you can contact us at contact@mathisbukowski.fr</p>
            </div>
            <Newsletter />
            <Footer />
        </div>
    );
};