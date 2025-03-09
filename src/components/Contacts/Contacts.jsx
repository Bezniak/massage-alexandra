import React from 'react';
import {useTranslation} from "react-i18next";
import {handleAddressClick} from "../../common/helpers.js";
import {IoLocation} from "react-icons/io5";
import {NavLink} from "react-router-dom";
import {LuPhone} from "react-icons/lu";
import {IoIosMail} from "react-icons/io";
import {FaViber} from "react-icons/fa";
import {FaSquareInstagram, FaTelegram} from "react-icons/fa6";
import Map from "../../Map/Map.jsx";
import {motion} from "framer-motion";

const Contacts = () => {
    const {t} = useTranslation();


    return (
        <>
            {/*<MetaTags page="contacts"/>*/}
            <div>
                <motion.div
                    className='md:bg-[url(/contactsBig.jpg)] h-screen bg-center bg-no-repeat bg-cover bg-[url(/contactsMobile.jpg)] flex items-center justify-center'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    <h1 className="container text-white text-center z-10">
                        {t("contacts")}
                    </h1>
                </motion.div>

                <div
                    className='container p-4 mt-10 mb-32 md:w-10/12 mx-auto flex md:flex-row flex-col justify-center items-start md:gap-20'>
                    <div className='flex flex-1 flex-col items-start justify-start'>
                        <div className='mx-auto'>
                            <h2 className='text-2xl text-center'>
                                {t("contactsPage.location")}
                            </h2>
                            <ul className='mt-8 flex flex-col items-start gap-3'>
                                <li onClick={handleAddressClick}
                                    className='mr-3 group flex items-center justify-center rounded'
                                >
                                    <IoLocation
                                        className='mr-3 size-6 text-gray-900 group-hover:text-red-500 transition'/>
                                    <NavLink to="" className='group-hover:text-red-500 transition'>
                                        {t("address")}
                                    </NavLink>
                                </li>
                                <li className='mr-3 group flex items-center justify-center rounded'>
                                    <LuPhone
                                        className='mr-3 size-6 text-gray-900 group-hover:text-red-500 transition'/>
                                    <NavLink to={`tel:+375445859844`}
                                             className='group-hover:text-red-500 transition'>
                                        +375 (44) 585-98-44
                                    </NavLink>
                                </li>
                                <li className='mr-3 group flex items-center justify-center rounded'>
                                    <IoIosMail
                                        className='mr-3 size-6 text-gray-900 group-hover:text-red-500 transition'/>
                                    <NavLink to={`mailto:some@gmail.com`}
                                             className='group-hover:text-red-500 transition'>
                                        some@gmail.com
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className='mx-auto'>
                            <h2 className='text-2xl text-center mt-10 mb-8'>
                                {t("contactsPage.loinUs")}
                            </h2>
                            <ul className='flex flex-row justify-evenly text-2xl text-[var(--footer)]'>
                                {/*<li>*/}
                                {/*    <a*/}
                                {/*        className='hover:text-[var(--active)] transition'*/}
                                {/*        href="https://www.facebook.com/profile.php?id=100059235169418"*/}
                                {/*        target="_blank"*/}
                                {/*        rel="noreferrer"*/}
                                {/*    >*/}
                                {/*        <FaFacebook/>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                <li>
                                    <a
                                        className='hover:text-[var(--active)] transition'
                                        href="https://www.instagram.com/massage_aliaksandra/"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaSquareInstagram/>
                                    </a>
                                </li>
                                {/*<li>*/}
                                {/*    <a*/}
                                {/*        className='hover:text-[var(--active)] transition'*/}
                                {/*        href="https://www.linkedin.com/in/%D0%BD%D0%B0%D1%82%D0%B0%D0%BB%D1%8C%D1%8F-%D0%B2%D0%B8%D0%BA%D1%82%D0%BE%D1%80%D0%BE%D0%B2%D0%BD%D0%B0-78baa82b0/"*/}
                                {/*        target="_blank"*/}
                                {/*        rel="noreferrer"*/}
                                {/*    >*/}
                                {/*        <FaLinkedin/>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                {/*    <a*/}
                                {/*        className='hover:text-[var(--active)] transition'*/}
                                {/*        href="https://www.tiktok.com/@massage_baranovichi?_t=8kjALrIXlpt&_r=1"*/}
                                {/*        target="_blank"*/}
                                {/*        rel="noreferrer"*/}
                                {/*    >*/}
                                {/*        <FaTiktok/>*/}
                                {/*    </a>*/}
                                {/*</li>*/}
                                <li>
                                    <a
                                        className='hover:text-[var(--active)] transition'
                                        href="https://t.me/AliaksandraSV"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaTelegram/>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='hover:text-[var(--active)] transition'
                                        href="https://invite.viber.com/?number=%2B375445859844"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FaViber/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex-1 mx-auto'>
                        <h2 className='text-2xl text-center mb-5 mt-10'>
                            {t("contactsPage.workingHours")}
                        </h2>
                        <p className='text-center'>
                            {t("contactsPage.byAppointment")}
                        </p>
                    </div>
                </div>
                <Map/>
            </div>
        </>
    );
};

export default Contacts;