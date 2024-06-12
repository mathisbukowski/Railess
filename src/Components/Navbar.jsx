import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FcDocument, FcAbout, FcServices, FcPhone } from "react-icons/fc";


export default function NavbarComponent() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (path) => {
        setActiveLink(path);
        setIsOpen(false);
    };

    const navItems = [
        { path: '/about', label: 'About', icon: FcAbout },
        { path: '/service', label: 'Service', icon: FcServices },
        { path: '/documentation', label: 'Documentation', icon: FcDocument },
        { path: '/contact', label: 'Contact', icon: FcPhone },
    ];

    return (
        <div className="flex flex-col md:flex-row justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
            <h1 className="w-full text-3xl font-bold font-rubik text-gradient mb-4 md:mb-0">
                <Link to="/">Railess.</Link>
            </h1>
            <ul className={`-mr-12 w-full md:flex md:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
                {navItems.map((item) => (
                    <li key={item.path} className="flex flex-col justify-center">
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`p-4 font-bold text-center text-xl rounded-2xl ${
                                activeLink === item.path
                                    ? 'text-white bg-lineColor'
                                    : 'text-blue-500 bg-white border border-blue-500 hover:bg-blue-100'
                            }`}
                            onClick={() => handleClick(item.path)}
                            style={{ transition: 'background-color 0.3s' }}
                        >
                            <span className="flex items-center">
                                <item.icon className="inline-block mr-2 " size={20} />
                                {item.label}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}