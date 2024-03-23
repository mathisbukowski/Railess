import React from 'react';

function FeatureCard({ icon, title, description }) {
    return (
        <div className="flex flex-col items-center p-4 w-[400px] h-72 bg-white rounded-2xl border border-gray-200 shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
            <div className="flex-shrink-0">
                <img className="h-12 w-12" src={icon} alt="icon" />
            </div>
            <div className="text-center mt-3 flex flex-col flex-grow">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <p className="mt-2 text-sm text-gray-500">{description}</p>
            </div>
        </div>
    );
}


function Cards() {
    return (
        <div className="py-10 bg-gray-50">
            <div className="flex justify-center">
                <div className="grid gap-6 gap-x-[200px] grid-cols-2 justify-items-center mx-4 lg:w-2/3 xl:w-1/2">
                    <FeatureCard
                        icon="/service.svg"
                        title="Un pilote pour vous"
                        description="À définir."
                    />
                    <FeatureCard
                        icon="/support.svg"
                        title="Mesures sanitaires"
                        description="À définir."
                    />
                    <FeatureCard
                        icon="/icon.svg"
                        title="Un service client rapide"
                        description="Une fois vos billets commandés sur le site, vous les recevez sous les 15 minutes par courriel."
                    />
                    <FeatureCard
                        icon="/time.svg"
                        title="À définir"
                        description="À définir."
                    />
                </div>
            </div>
        </div>
    );
}

export default Cards;
