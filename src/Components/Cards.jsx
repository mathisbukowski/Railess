import React from 'react';

function FeatureCard({ icon, title, description }) {
    return (
        <div className="flex flex-col items-center p-4 w-[400px] h-64 bg-white rounded-2xl border border-gray-200 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="flex-shrink-0">
                <img className="h-12 w-12" src={icon} alt="icon" />
            </div>
            <div className="text-center mt-3 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <p className="mt-2 text-gray-500 text-md">{description}</p>
            </div>
        </div>
    );
}


export default function Cards() {
    return (
        <div className="py-10 bg-gray-50">
            <div className="flex justify-center">
                <div className="grid gap-6 gap-x-[200px] grid-cols-2 justify-items-center mx-4 lg:w-2/3 xl:w-1/2">
                    <FeatureCard
                        icon="/service.svg"
                        title="User SaaS"
                        description="A service created by users for users."
                    />
                    <FeatureCard
                        icon="/time.svg"
                        title="Saving Time"
                        description="With Railess, you can earn a lot on your train searches."
                    />
                    <FeatureCard
                        icon="/support.svg"
                        title="Reactive Support"
                        description="Our support service is very fast and efficient."
                    />
                    <FeatureCard
                        icon="/icon.svg"
                        title="Beta Version"
                        description="Our service is brand new, there may be some unknown bugs. Get closer to the support if necessary."
                    />
                </div>
            </div>
        </div>
    );
};
