import {
    FaGithubSquare
} from "react-icons/fa";
import SNCF from "/sncf.png";

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col lg:flex-row items-center text-gray-300">
            <div className="lg:mr-8">
                <h1 className="w-full text-3xl font-bold text-lineColor font-kode">Railess.</h1>
                <p className="py-4 text-textColor text-lg">
                    A project made for treating Open Data with SCNF API
                </p>
                <div className="flex justify-between md:w-[75%] my-4">
                    <img src={SNCF} alt="SNCF Logo" className="w-[80px] h-[40px]"/>
                    <FaGithubSquare size={30} className="my-[12px]" color="#223240" />
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-center lg:justify-between mt-[16px] mx-[150px]">
                <div className="mr-8">
                    <h6 className="font-extrabold text-textColor text-xl">Support</h6>
                    <ul>
                        <li className="py-2 text-lg text-lineColor">Documentation</li>
                        <li className="py-2 text-lg text-lineColor">API Status</li>
                    </ul>
                </div>
                <div className="mr-8">
                    <h6 className="font-extrabold text-textColor text-xl">Company</h6>
                    <ul>
                        <li className="py-2 text-lg text-lineColor">About</li>
                        <li className="py-2 text-lg text-lineColor">Contact</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-extrabold text-textColor text-xl">Legal</h6>
                    <ul>
                        <li className="py-2 text-lineColor text-lg">Policy</li>
                        <li className="py-2 text-lg text-lineColor">Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );

};

export default Footer;