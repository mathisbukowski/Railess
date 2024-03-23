import React from 'react';

const AboutComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-white">
            <div className="w-3/4 h-96 bg-cover bg-center mt-20 mx-auto rounded-3xl shadow-lg" style={{backgroundImage: "url('/bg-home.jpg')"}}></div>
            <div className="max-w-2xl text-center mt-20 mb-40">
                <h2 className="text-3xl font-bold mb-4">About us !</h2>
                <p className="text-lg text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut imperdiet magna. Vivamus non orci nec turpis rutrum cursus. Cras lacinia congue magna, eget congue lacus faucibus sit amet. Phasellus aliquam lacinia elit, ut fermentum risus vehicula non. Quisque laoreet consequat turpis non convallis.
                </p>
            </div>
        </div>
    );
}

export default AboutComponent;
