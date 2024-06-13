import { useEffect } from 'react';

export default function ContactComponent() {
    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Contact Us</h2>


                <div className="mt-10">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Join us on Discord</h3>
                    <div className="flex justify-center">
                        <iframe
                            src="https://discord.com/widget?id=1234788512792969277&theme=dark"
                            width="350"
                            height="500"
                            allowTransparency="true"
                            frameBorder="0"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                            className="rounded-lg shadow-md"
                        ></iframe>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">Contact us by mail at :</h3>
                    <p className="text-lg text-gray-700">
                        <a href="mailto:contact@votreprojet.com" className="text-blue-600 hover:underline ml-2">
                            contact@railess.fr
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}