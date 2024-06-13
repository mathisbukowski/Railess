import React from 'react';
import {Link} from "react-router-dom";

export default function AboutComponent() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4 h-96 bg-cover bg-center mt-20 mx-auto rounded-3xl shadow-lg"
                 style={{backgroundImage: "url('/bg-home1.jpg')"}}></div>
            <div className="max-w-2xl text-center mt-20 mb-40">
                <h2 className="text-3xl font-bold mb-4 text-textColor">About us !</h2>
                <p className="mt-4 text-lg text-textColor">
                    Welcome to our corner of innovation! We are a dynamic team of six passionate students from Epitech,
                    spanning across our first and second years of study. Driven by the ethos of exploration and
                    creativity, we embarked on a journey to tackle the realm of Open Data.
                </p>
                <p className="mt-4 text-lg text-textColor">
                    With boundless enthusiasm, we delved into the vast landscape of possibilities and unanimously chose
                    to explore the realm of Open Data. Among the myriad of options, we found ourselves drawn to the rich
                    tapestry of information provided by the SNCF. Thus, our mission was born – to harness the power of
                    Open Data to streamline access to essential railway information.
                </p>
                <p className="mt-4 text-lg text-textColor">
                    Through collaborative effort and tireless dedication, we crafted a digital platform empowered by the
                    SNCF API. Our goal? To provide users with swift and seamless access to vital data pertaining to
                    railway stations. Whether it's departure times, platform information, or service updates, our
                    platform stands as a beacon of efficiency in the realm of transportation information.
                </p>
                <p className="mt-4 text-lg text-textColor">
                    Beyond the mere development of a website, our endeavor symbolizes a fusion of innovation and
                    utility. It represents our collective commitment to leveraging technology for the betterment of
                    society, making essential information accessible at the click of a button.
                </p>
                <p className="mt-4 text-lg text-textColor">
                    As we continue to navigate the ever-evolving landscape of technology and data, we invite you to join
                    us on this exhilarating journey. Together, let's unlock the potential of Open Data and pave the way
                    for a brighter, more connected future.
                </p>
                <button
                    className="mt-20 bg-colorSecond w-[200px] rounded-md font-extrabold py-3 text-textColor mx-[50px]">
                    <Link to="/service">Welcome Aboard !</Link>
                </button>
            </div>
        </div>
    );
};