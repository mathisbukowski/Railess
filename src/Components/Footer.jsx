import {
    FaGithubSquare,
    FaTrain,
    FaDatabase
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import SNCF from "/sncf.png";

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col lg:flex-row items-center text-gray-300">
            <div className="lg:mr-8">
                <h1 className="w-full text-3xl font-bold text-lineColor font-kode">Railess.</h1>
                <p className="py-4 text-textColor text-lg">
                    A project made for treating Open Data with SCNF API.
                </p>
                <div className="flex justify-start md:w-[75%] my-4">
                    <Link to="https://github.com/mathisbukowski/Epitech-Jam">
                        <FaGithubSquare size={30} className="my-[12px] mr-4" color="#223240"/>
                    </Link>
                    <Link to="https://www.sncf.com/fr">
                        <FaTrain size={30} className="my-[12px] mr-4" color="#223240"/>
                    </Link>
                    <Link to="https://ressources.data.sncf.com/api/explore/v2.1/console">
                        <FaDatabase size={30} className="my-[12px]" color="#223240" />
                    </Link>
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-center lg:justify-between mt-[16px] mx-[150px]">
                <div className="mr-20">
                    <h6 className="font-extrabold text-textColor text-xl">Support</h6>
                    <ul>
                        <li className="py-2 text-lg text-lineColor"><Link to="https://github.com/mathisbukowski/Epitech-Jam/blob/main/README.md">Documentation</Link></li>
                        <li className="py-2 text-lg text-lineColor">API Status</li>
                    </ul>
                </div>
                <div className="mr-20">
                    <h6 className="font-extrabold text-textColor text-xl">Company</h6>
                    <ul>
                        <li className="py-2 text-lg text-lineColor"><Link to="/About">About Us</Link></li>
                        <li className="py-2 text-lg text-lineColor"><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-extrabold text-textColor text-xl">Legal</h6>
                    <ul>
                        <li className="py-2 text-lineColor text-lg"><Link to="/policies">Policy</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );

};

export default Footer;