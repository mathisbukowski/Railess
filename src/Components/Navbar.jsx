import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FcDocument, FcAbout, FcServices, FcPhone } from "react-icons/fc";
import { useTranslation } from "react-i18next";



export default function NavbarComponent() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const [isOpen, setIsOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)


    const handleClick = (path) => {
        setActiveLink(path);
        setIsOpen(false);
    };

    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
        setSelectedLanguage(lng);
    };

    const navItems = [
        { path: '/about', label: t('navbar.about'), icon: FcAbout },
        { path: '/service', label: t('navbar.service'), icon: FcServices },
        { path: '/documentation', label: t('navbar.documentation'), icon: FcDocument },
        { path: '/contact', label: t('navbar.contact'), icon: FcPhone },
    ];

    const languageOptions = [
        { code: 'en', label: 'English', emoji: '🇺🇸' },
        { code: 'fr', label: 'Français', emoji: '🇫🇷' },
        { code: 'es', label: 'Español', emoji: '🇪🇸' },
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
                <li className="flex items-center">
                    <div className="relative">
                        <button className="p-4 font-bold text-center text-xl rounded-2xl text-white bg-lineColor flex items-center" onClick={() => setIsOpen(!isOpen)}>
                            <span className="inline-block mr-2" role="img" aria-label={selectedLanguage}>
                                {languageOptions.find((lang) => lang.code === selectedLanguage)?.emoji}
                            </span>
                            {t('Language')}
                        </button>
                        {isOpen && (
                            <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
                                {languageOptions.map((option) => (
                                    <li key={option.code} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer" onClick={() => handleLanguageChange(option.code)}>
                                        <span className="inline-block mr-2" role="img" aria-label={option.label}>
                                            {option.emoji}
                                        </span>
                                        <p className="text-bgColor">
                                            {option.label}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </li>
            </ul>
        </div>
    );
}