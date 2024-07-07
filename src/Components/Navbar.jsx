import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FcDocument, FcAbout, FcServices, FcPhone } from "react-icons/fc";
import { useTranslation } from "react-i18next";


export default function NavbarComponent() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const handleClick = (path) => {
        setActiveLink(path);
        setIsOpen(false);
    };

    const navItems = [
        { path: '/about', label: t('navbar.about'), icon: FcAbout },
        { path: '/service', label: t('navbar.service'), icon: FcServices },
        { path: '/documentation', label: t('navbar.documentation'), icon: FcDocument },
        { path: '/contact', label: t('navbar.contact'), icon: FcPhone },
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
                                    ? 'text-blue-500 bg-white border border-blue-500 hover:bg-blue-100'
                                    : 'text-white bg-lineColor '
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