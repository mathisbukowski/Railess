import {
    FaGithubSquare,
    FaTrain,
    FaDatabase
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import SNCF from "/sncf.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 flex flex-col lg:flex-row items-center text-gray-300">
            <div className="lg:mr-8">
                <h1 className="w-full text-3xl font-bold font-rubik text-gradient">Railess.</h1>
                <p className="py-4 text-textColor text-lg">
                    {t('footer.description')}
                </p>
                <div className="flex justify-start md:w-[75%] my-4">
                    <Link to="https://github.com/mathisbukowski/Epitech-Jam">
                        <FaGithubSquare size={30} className="my-[12px] mr-4" color="#EE7154"/>
                    </Link>
                    <Link to="https://www.sncf.com/fr">
                        <FaTrain size={30} className="my-[12px] mr-4" color="#EE7154"/>
                    </Link>
                    <Link to="https://ressources.data.sncf.com/api/explore/v2.1/console">
                        <FaDatabase size={30} className="my-[12px]" color="#EE7154" />
                    </Link>
                </div>
            </div>
            <div className="lg:col-span-2 flex justify-center lg:justify-between mt-[16px] mx-[150px]">
                <div className="mr-20">
                    <h6 className="font-extrabold text-colorSecond text-xl">{t('footer.text_support')}</h6>
                    <ul>
                        <li className="py-2 text-lg text-textColor"><Link to="/Documentation">{t('footer.text_doc')}</Link></li>
                        <li className="py-2 text-lg text-textColor"><Link to="/Documentation#api-status">{t('footer.text_api')}</Link></li>
                    </ul>
                </div>
                <div className="mr-20">
                    <h6 className="font-extrabold text-colorSecond text-xl">{t('footer.text_comp')}</h6>
                    <ul>
                        <li className="py-2 text-lg text-textColor"><Link to="/About">{t('footer.text_about')}</Link></li>
                        <li className="py-2 text-lg text-textColor"><Link to="/Contact">{t('footer.text_contact')}</Link></li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-extrabold text-colorSecond text-xl">{t('footer.text_leg')}</h6>
                    <ul>
                        <li className="py-2 text-textColor text-lg"><Link to="/policies"> {t('footer.text_policy')}</Link></li>
                        <li className="py-2 text-textColor text-lg"><Link to="/policies">{t('footer.text_terms')}</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );

};