import { Link } from 'react-router-dom';

export default function Newsletter() {
    return (
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        Don't want to forget any of our new updates ?
                    </h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input
                            className="p-3 flex w-full rounded-md text-[#223240]"
                            type="email"
                            placeholder="Enter Email"
                        />
                        <button
                            className="bg-colorSecond text-textColor rounded-md font-medium w-48 ml-4 my-6 px-6 py-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                            Notify Me
                        </button>
                    </div>
                    <p>
                        We care bout the protection of your data. Read our{" "}
                        <span className="text-colorSecond"><Link to="/policies">Privacy Policy.</Link></span>
                    </p>
                </div>
            </div>
        </div>
    );
};