import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

function Image() {
    const images = ["/bg-home1.jpg", "/bg-home2.jpg", "/bg-home3.jpg"];
    const [imageIndex, setImageIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsTransitioning(false);
            }, 1000);
        }, 8000);
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <motion.img
            key={imageIndex}
            src={images[imageIndex]}
            className="w-full h-auto rounded-3xl transition-opacity duration-1000 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: isTransitioning ? 0 : 1 }}
            alt="Background"
        />
    );
}

export default function Hero() {
    return (
        <div className="text-white">
            <div className="max-w-[calc(100vw - 40px)] mt-[-96px] w-full h-screen mx-auto px-6 md:flex md:flex-row items-center">
                <MotionDiv
                    initial={{ x: -1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                    className="md:w-1/2"
                >
                    <div className="text-left mx-[70px] mt-[150px]">
                        <h1 className="md:text-3xl sm:text-xl text-lg font-bold md:py-6">
                            Unlock the Fast Track!
                        </h1>
                        <p className="md:text-3xl sm:text-2xl text-lg mx-[25px]">
                            An App to streamline your journeys.
                        </p>
                        <button className="bg-colorSecond w-[200px] rounded-md font-extrabold my-6 py-3 text-myWhite mx-[50px]">
                            <Link to="/service">Get Started !</Link>
                        </button>
                    </div>
                </MotionDiv>
                <MotionDiv
                    initial={{x: 1000}}
                    animate={{x: 0}}
                    transition={{ duration: 2.5, type: "spring", stiffness: 120 }}
                    className="md:w-1/2"
                >
                    <Image />
                </MotionDiv>
            </div>
        </div>
    );
}
