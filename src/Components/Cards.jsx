import React from 'react';
import {motion} from "framer-motion";

const MotionDiv = motion.div;

function FeatureCard({ icon, title, description, displayInitial }) {
    return (
        <MotionDiv
            className="flex flex-col items-center p-6 w-72 h-72 bg-white rounded-2xl border border-gray-300 shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105"
            initial={{ x: displayInitial }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        >
            <div className="flex-shrink-0">
                <img className="h-16 w-16" src={icon} alt="icon" />
            </div>
            <div className="text-center mt-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="mt-3 text-gray-600">{description}</p>
            </div>
        </MotionDiv>
    );
}


export default function Cards() {
    return (
        <div className="py-10">
            <div className="flex justify-center">
                <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center mx-4">
                    <FeatureCard
                        icon="/service.svg"
                        title="User SaaS"
                        description="A service created by users for users. We are constantly improving our service. Do not hesitate to give us your opinion."
                        displayInitial={-1000}
                    />
                    <FeatureCard
                        icon="/time.svg"
                        title="Saving Time"
                        description="With Railess, you can earn a lot on your train searches. We want to be the fastest service as possible."
                        displayInitial={1000}
                    />
                    <FeatureCard
                        icon="/support.svg"
                        title="Reactive Support"
                        description="Our support service is very fast and efficient. We are here to help you. Do not hesitate to contact us."
                        displayInitial={-1000}
                    />
                    <FeatureCard
                        icon="/icon.svg"
                        title="Beta Version"
                        description="Our service is brand new, there may be some unknown bugs. Get closer to the support if necessary. Your opinion is important to us. "
                        displayInitial={1000}
                    />
                </div>
            </div>
        </div>
    );
}
