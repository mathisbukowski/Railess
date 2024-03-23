import { useState } from "react";
import Typed from "typed.js"
import { motion } from "framer-motion";
import {Link} from "react-router-dom";

const MotionDiv = motion.div;
const Hero = () =>  {


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
                            Unlock the Fast Track !
                        </h1>
                        <p className="md:text-3xl sm:text-2xl text-lg mx-[25px]">
                            An App to streamline your journeys.
                        </p>
                        <button
                            className="bg-lineColor w-[200px] rounded-md font-extrabold my-6 py-3 text-textColor mx-[50px]">
                            <Link to="/service">Get Started</Link>
                        </button>
                    </div>
                </MotionDiv>
                <MotionDiv
                    initial={{ x: 1000 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
                    className="md:w-1/2"
                >
                    <img src="/bg-home.jpg" className="w-full h-auto rounded-3xl" alt="Background"/>
                </MotionDiv>
            </div>
        </div>
    );
}

export default Hero;