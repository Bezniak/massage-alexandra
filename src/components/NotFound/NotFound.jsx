import React from 'react';
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";

const NotFound = () => {
    const {t} = useTranslation();


    return (
        <div
            className='md:bg-[url(/contactsBig.jpg)] h-screen bg-center bg-no-repeat bg-cover bg-[url(/contactsMobile.jpg)] flex flex-col gap-10 items-center justify-center'>
            <h1 className="container text-white text-center z-50">
                {t("pageNotFoundTitle")}
            </h1>
            <NavLink to={ROUTES.HOME}
                     className='tracking-widest w-fit py-3 px-6 bg-white text-black rounded uppercase hover:bg-red-500 hover:text-white transition'
            >
                {t("to_main")}
            </NavLink>
        </div>
    );
};

export default NotFound;