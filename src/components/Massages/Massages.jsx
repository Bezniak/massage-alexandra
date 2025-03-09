import React, {useEffect, useState} from 'react';
import {useTranslation} from "react-i18next";
import {createStore} from "../../store/store.js";
import {NavLink} from "react-router-dom";
import {handleClick} from "../../common/helpers.js";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";
import {Preloader} from "../Preloader/Preloader.jsx";
import {motion} from 'framer-motion';

const Massages = () => {
    const {t} = useTranslation();
    const [store, setStore] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = createStore(t);
            setStore(data);
            setIsLoading(false);
        };

        fetchData();
    }, [t]);

    if (isLoading) {
        return <Preloader/>;
    }

    return (
        <div>
            <motion.div
                className='md:bg-[url(/services.jpg)] h-screen bg-center bg-no-repeat bg-cover bg-[url(/servicesMobile.jpg)] flex items-center justify-center'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <h1 className="container text-white text-center z-50">
                    {t("servicesTitle")}
                </h1>
            </motion.div>

            <div
                className='container mx-auto flex flex-wrap gap-12 p-5 md:p-20 justify-center md:justify-between items-center'>
                {store.massageTypes.map((massage) => (
                    <motion.div
                        key={massage.id}
                        id={massage.id}
                        className="max-w-sm border border-gray-200 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                        initial={{opacity: 0, scale: 0.8, rotate: -10}}  // Начальное состояние
                        whileInView={{opacity: 1, scale: 1, rotate: 0}} // Анимация при попадании в область видимости
                        transition={{duration: 0.8, type: "spring", stiffness: 100, damping: 20}} // Плавный переход
                    >
                        <NavLink to={`/massage/${massage.url}`} onClick={handleClick}>
                            <img src={massage.img} alt={massage.title} className="rounded-t-lg"/>
                        </NavLink>
                        <div className='p-3'>
                            <NavLink to={`/massage/${massage.url}`} onClick={handleClick}
                                     className="block mt-4 mb-4 text-2xl hover:text-red-500 font-semibold">
                                {massage.name}
                            </NavLink>
                            <p className="mb-10 font-light text-right">
                                {massage.price} BYN {typeof massage.time === 'number' ? `(${massage.time} ${t("minutes")})` : `(${massage.time})`}
                            </p>
                            <div className='flex justify-between items-center'>
                                <NavLink to={`/massage/${massage.url}`} onClick={handleClick}
                                         className='tracking-widest text-sm font-medium text-[var(--dark-buttom)] uppercase hover:text-red-500 transition'
                                >
                                    {t("more")}
                                </NavLink>
                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className='tracking-widest w-fit py-2 px-4 rounded-lg bg-[var(--dark-buttom)] text-white uppercase hover:bg-red-500 transition'
                                >
                                    {t("bookButton")}
                                </button>

                                {isModalOpen && <ModalWindow isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Massages;
