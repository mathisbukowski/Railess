import { Link } from 'react-router-dom';

import { useTranslation } from "react-i18next";

export default function Newsletter() {
    const { t } = useTranslation();

    return (
        <div className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                        {t('newsletter.slogan')}
                    </h1>
                    <p>      {t('newsletter.descriptions')}</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                        <input
                            className="p-3 flex w-full rounded-md text-[#223240]"
                            type="email"
                            placeholder={t('newsletter.input')}
                        />
                        <button
                            className="bg-colorSecond text-textColor rounded-md font-medium w-48 ml-4 my-6 px-6 py-3 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                            {t('newsletter.button')}
                        </button>
                    </div>
                    <p>
                        {t('newsletter.description')}{" "}
                        <span className="text-colorSecond"><Link to="/policies">      {t('newsletter.span')}.</Link></span>
                    </p>
                </div>
            </div>
        </div>
    );
};