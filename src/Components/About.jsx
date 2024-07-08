import React from 'react';
import {Link} from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function AboutComponent() {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="w-3/4 h-96 bg-cover bg-center mt-20 mx-auto rounded-3xl shadow-lg"
                 style={{backgroundImage: "url('/bg-home1.jpg')"}}></div>
            <div className="max-w-2xl text-center mt-20 mb-40">
                <h2 className="text-3xl font-bold mb-4 text-textColor">{t('about.title')}</h2>
                <p className="mt-4 text-lg text-textColor">
                    {t('about.desc_part1')}
                </p>
                <p className="mt-4 text-lg text-textColor">
                    {t('about.desc_part2')}
                </p>
                <p className="mt-4 text-lg text-textColor">
                    {t('about.desc_part3')}
                </p>
                <p className="mt-4 text-lg text-textColor">
                    {t('about.desc_part4')}
                </p>
                <p className="mt-4 text-lg text-textColor">
                    {t('about.desc_part5')}
                </p>
                <button
                    className="mt-20 bg-colorSecond w-[200px] rounded-md font-extrabold py-3 text-textColor mx-[50px]">
                    <Link to="/service">{t('about.button')}</Link>
                </button>
            </div>
        </div>
    );
};