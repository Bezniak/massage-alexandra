import React from 'react';
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {FaInstagramSquare, FaTiktok, FaViber} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa6";
import {MdOutlineMailOutline} from "react-icons/md";
import {handleClick} from "../../common/helpers.js";
import {createStore} from "../../store/store.js";

const Footer = () => {
    const {t} = useTranslation();
    const year = new Date().getFullYear();
    const store = createStore(t);


    return (
        <footer className="bg-gray-800">
            <div className="mx-auto w-full max-w-screen-xl">
                <div className="grid grid-cols-1 gap-12 px-4 py-6 lg:py-8 md:grid-cols-3">

                    <div className='flex flex-col gap-5'>
                        <NavLink to={ROUTES.HOME} onClick={handleClick}>
                            <img src="/logoWhite.svg"
                                 alt="logo"
                                 className='size-24'
                            />
                        </NavLink>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">

                            <li className='mb-4'>
                                {t("address")}
                            </li>
                            <li className='mb-4'>
                                {t("enterPhoneNumber")}: &nbsp;
                                <a href={`tel:+375445859844`}
                                   className='hover:underline transition'
                                   target="_blank"
                                >
                                    +375 (44) 585-98-44
                                </a>
                            </li>
                            <li className='mb-4'>
                                Email: &nbsp;
                                <a
                                    href={`mailto:savmassage.grodno@gmail.com`}
                                    className='hover:underline transition'
                                >
                                    savmassage.grodno@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase text-white">
                            {t("massageType")}
                        </h3>
                        <ul className="text-gray-500 dark:text-gray-400 font-medium">
                            {store.massageTypes.map((massage) => (
                                <li key={massage.id} className="mb-4" onClick={handleClick}>
                                    <NavLink to={`/massage/${massage.url}`} onClick={handleClick}
                                             className="hover:underline">
                                        {massage.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-6 text-sm font-semibold uppercase text-white">
                            {t("aboutUs")}
                        </h3>
                        <ul className="flex flex-col text-gray-500 font-medium">
                            <li className="mb-4">
                                <NavLink to={ROUTES.ABOUT_US} className="hover:underline"
                                         onClick={handleClick}>
                                    {t("aboutUs")}
                                </NavLink>
                            </li>
                            <li className="mb-4">
                                <NavLink to={ROUTES.FAQ} className="hover:underline"
                                         onClick={handleClick}>
                                    {t("FAQ")}
                                </NavLink>
                            </li>
                            <li className="mb-4">
                                <NavLink to={ROUTES.MEMBERSHIP} className="hover:underline"
                                         onClick={handleClick}>
                                    {t("membership")}
                                </NavLink>
                            </li>
                            <li className="mb-4">
                                <NavLink to={ROUTES.CONTACTS} className="hover:underline"
                                         onClick={handleClick}>
                                    {t("contacts")}
                                </NavLink>
                            </li>
                            <li className="mb-4">
                                <NavLink to={ROUTES.PRIVACY_POLICY} className="hover:underline"
                                         onClick={handleClick}>
                                    {t("pp")}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="px-4 py-6 bg-gray-900 flex flex-col items-center justify-between">
                    <div className="flex flex-wrap gap-8 mt-4 justify-between w-full space-x-5 rtl:space-x-reverse">
                        <div className='text-center mx-auto'>
                                <span className="text-base text-white text-center">
                                © {year} <NavLink to={ROUTES.HOME} onClick={handleClick}>SAV-massage™</NavLink>.
                                    &nbsp;
                                    <br/>
                                    {t("UNP")}.
                                    &nbsp;
                                    {t("all_right_reserved")}
                            </span>
                        </div>
                        <div className='flex mx-auto gap-8'>
                            <a href="https://www.instagram.com/massage_aliaksandra" target='_blank'
                               className="text-gray-400 hover:text-white">
                                <FaInstagramSquare className="w-6 h-6"/>
                            </a>
                            <a href="https://invite.viber.com/?number=%2B375445859844"
                               target='_blank'
                               className="text-gray-400 hover:text-white">
                                <FaViber className="w-6 h-6"/>
                            </a>
                            <a href="https://t.me/AliaksandraSV" target='_blank'
                               className="text-gray-400 hover:text-white">
                                <FaTelegram className="w-6 h-6"/>
                            </a>
                            <a href="mailto:savmassage.grodno@gmail.com" target='_blank'
                               className="text-gray-400 hover:text-white">
                                <MdOutlineMailOutline className="w-6 h-6"/>
                            </a>
                        </div>
                    </div>
                    <div className='text-center mt-10'>
                        <p className='text-white text-sm'>
                            {t("developed_by")} &nbsp;
                            <a href="https://www.linkedin.com/in/ivan-bezniak-2634a11a0/"
                               rel="noreferrer"
                               target="_blank"
                               className='hover:text-[var(--white)] transition'
                            > {t("ivan_bezniak")}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;