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
                                    href={`mailto:some@gmail.com`}
                                    className='hover:underline transition'
                                >
                                    some@gmail.com
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
                                © {year} <NavLink to={ROUTES.HOME} onClick={handleClick}>Massage Grodno™</NavLink>.
                                    &nbsp;
                                    <a href="https://contragent.by/unp/590210932"
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="hover:text-white transition"
                                    >
                                        <br/>
                                        {t("UNP")}
                                    </a>
                                    &nbsp;
                                    {t("all_right_reserved")}
                            </span>
                        </div>
                        <div className='flex mx-auto gap-8'>
                            <a href="https://www.facebook.com/profile.php?id=100070173889307" target='_blank'
                               className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 8 19">
                                    <path fillRule="evenodd"
                                          d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <span className="sr-only">Facebook page</span>
                            </a>
                            <a href="https://www.instagram.com/ivsoft.by" target='_blank'
                               className="text-gray-400 hover:text-white">
                                <FaInstagramSquare className="w-6 h-6"/>
                            </a>
                            <a
                                href="https://www.tiktok.com/@ivsoft.by"
                                target='_blank'
                                className="text-gray-400 hover:text-white"
                            >
                                <FaTiktok className="w-6 h-6"/>
                            </a>
                            <a href="viber://chat?number=%2B375295210417"
                               target='_blank'
                               className="text-gray-400 hover:text-white">
                                <FaViber className="w-6 h-6"/>
                            </a>
                            <a href="https://github.com/Bezniak"
                               target='_blank'
                               className="text-gray-400 hover:text-white">
                                <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd"
                                          d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <span className="sr-only">GitHub account</span>
                            </a>
                            <a href="https://t.me/ivan_bezniak" target='_blank'
                               className="text-gray-400 hover:text-white">
                                <FaTelegram className="w-6 h-6"/>
                            </a>
                            <a href="mailto:ivsoft.ask@gmail.com" target='_blank'
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
                            > {t("ivan_bezniak")}</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;