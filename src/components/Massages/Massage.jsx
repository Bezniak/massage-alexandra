import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useTranslation} from "react-i18next";
import {createStore} from "../../store/store.js";
import {motion} from 'framer-motion';
import {Preloader} from "../Preloader/Preloader.jsx";
import ModalWindow from "../ModalWindow/ModalWindow.jsx";

const Massage = () => {
    const {id} = useParams();
    const {t} = useTranslation();
    const store = createStore(t);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Новая анимация для сдвига снизу вверх с увеличением прозрачности
    const slideUpFade = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: "easeOut"}},
    };

    // Найти нужный массаж по URL
    const massage = store.massageTypes.find(m => m.url === id);

    useEffect(() => {
        if (massage) {
            setLoading(false); // Set loading to false when the massage data is available
        }
    }, [massage]);

    if (loading) {
        return <Preloader/>;
    }

    if (!massage) {
        return <h2 className="text-center mt-10">Массаж не найден</h2>;
    }

    return (
        <div>
            {/* Background Image for Mobile View */}
            <motion.div
                style={{
                    backgroundImage: `url(${massage.img})`,
                }}
                className="h-screen bg-center bg-no-repeat bg-cover md:hidden flex items-center justify-center relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileInView="visible"
                viewport={{ once: false }}
            >
                {/* Dark overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-20"></div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative z-50" // Ensure heading is above the overlay
                >
                    <h1 className="text-white text-center">{massage.name}</h1>
                </motion.div>
            </motion.div>

            {/* Desktop View */}
            <motion.div
                style={{backgroundImage: `url(${massage.bigImg})`}}
                className="h-screen bg-center bg-no-repeat bg-cover hidden md:flex items-center justify-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
                whileInView="visible"
                viewport={{once: false}}
            >
                {/* Dark overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-20"></div>

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                    className="relative z-50"
                >
                    <h1 className='text-white text-center'>
                        {massage.name}
                    </h1>
                </motion.div>
            </motion.div>


            {/* Massage Advantages Section */}
            <motion.h1
                className='mt-10 text-center text-3xl mb-12 dark:text-white'
                variants={slideUpFade}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false}} // Keeps the animation on every scroll
            >
                {t("massageAdvantages")}
            </motion.h1>

            {/* Additional Information Cards */}
            <div className='flex flex-wrap justify-center gap-8 mb-20'>
                {massage.additionalInfo.map(info => (
                    <React.Fragment key={info.id}>
                        <motion.div
                            className="w-96 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                            variants={slideUpFade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}} // Keeps the animation on every scroll
                        >
                            <img src={info.image} alt="photo" className="w-full h-full object-cover rounded-lg"/>
                        </motion.div>

                        <motion.div
                            className="w-96 h-96 bg-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg flex items-center justify-center p-5"
                            variants={slideUpFade}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: false}} // Keeps the animation on every scroll
                        >
                            <p className='text-center tracking-widest'>
                                {info.text}
                            </p>
                        </motion.div>
                    </React.Fragment>
                ))}
            </div>

            {/* Book Button Section */}
            <motion.div
                className='mb-18 h-44 w-fit mx-auto flex items-center'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.5, duration: 0.6}}
                whileInView="visible"
                viewport={{once: false}} // Keeps the animation on every scroll
            >
                <button
                    onClick={() => setIsModalOpen(true)}
                    className='tracking-widest w-fit py-4 px-10 rounded-md bg-[var(--dark-buttom)] text-white uppercase hover:bg-red-500 transition'
                >
                    {t("bookButton")}
                </button>

                {isModalOpen && <ModalWindow isOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>}
            </motion.div>
        </div>
    );
};

export default Massage;
