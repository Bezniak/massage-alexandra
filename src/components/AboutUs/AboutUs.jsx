import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import RequestForm from "./RequestForm.jsx";
import MetaTags from "../../common/MetaTags.jsx";

const scaleIn = {
    hidden: {opacity: 0, scale: 0.8},
    visible: {opacity: 1, scale: 1, transition: {duration: 1}}
};

const AboutUs = () => {
    const {t} = useTranslation();
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <MetaTags page="aboutUs"/>
            <div>
                <motion.div
                    className='md:bg-[url(/aboutUsBig.jpg)] h-screen bg-center bg-no-repeat bg-cover bg-[url(/aboutUsMobile.jpg)] flex items-center justify-center'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    <h1 className="container text-white text-center z-10">
                        {t("aboutUs")}
                    </h1>
                </motion.div>
                <div className='container mx-auto py-10 md:py-20 px-5 md:px-0'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.2}}
                        variants={scaleIn}
                    >
                        <h2 className='text-center'>{t("aboutUsTitle.title")}</h2>
                        <h3 className='mt-20 mb-10 font-semibold'>{t("aboutUsTitle.whyChooseUs")}</h3>
                    </motion.div>

                    <div className='flex flex-wrap items-center justify-center md:justify-between gap-12'>
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                            <motion.figure
                                key={index}
                                className="relative max-w-sm"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: false, amount: 0.2}}
                                variants={scaleIn}
                            >
                                <img className="rounded-lg" src={`/decore_${index}.jpg`} alt="image description"/>
                                <h3 className='text-black font-medium'>{t(`aboutUsTitle.title_${index}`)}</h3>
                            </motion.figure>
                        ))}
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.2}}
                        variants={scaleIn}
                    >
                        <h3 className='mt-20 mb-10 text-center font-semibold'>{t("aboutUsTitle.askTitle")}</h3>
                        {!showForm && (
                            <div className='text-center'>
                                <button
                                    onClick={() => setShowForm(!showForm)}
                                    className='tracking-widest w-fit py-4 px-6 bg-[var(--dark-buttom)] text-white uppercase hover:bg-red-500 transition'
                                >
                                    {t("leaveRequest")}
                                </button>
                            </div>
                        )}
                        {showForm && (<RequestForm/>)}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
