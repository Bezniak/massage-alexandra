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

    // Animation configuration for scaling and fading in
    const fadeInScale = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {opacity: 1, scale: 1, transition: {duration: 0.6, ease: "easeOut"}},
    };

    // Найти нужный массаж по URL
    const massage = store.massageTypes.find(m => m.url === id);

    // Simulate a loading process, you can remove it once your data fetching logic is added
    useEffect(() => {
        if (massage) {
            setLoading(false); // Set loading to false when the massage data is available
        }
    }, [massage]);

    if (loading) {
        return <Preloader />;
    }

    if (!massage) {
        return <h2 className="text-center mt-10">Массаж не найден</h2>;
    }

    return (
        <div>
            <div
                style={{backgroundImage: `url(${massage.img})`}}
                className="h-screen bg-center bg-no-repeat bg-cover md:hidden flex items-center justify-center"
            >
                <div>
                    <h1 className='text-white'>
                        {massage.name}
                    </h1>
                </div>
            </div>

            <div
                style={{backgroundImage: `url(${massage.bigImg})`}}
                className="h-screen bg-center bg-no-repeat bg-cover hidden md:flex items-center justify-center"
            >
                <div>
                    <h1 className='text-white'>
                        {massage.name}
                    </h1>
                </div>
            </div>

            <motion.h1
                className='mt-10 text-center text-3xl mb-12 dark:text-white'
                variants={fadeInScale}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
            >
                {t("massageAdvantages")}
            </motion.h1>

            <div className='flex flex-wrap justify-center gap-8 mb-20'>
                {massage.additionalInfo.map(info => (
                    <React.Fragment key={info.id}>
                        <motion.div
                            key={info.id + "_image"}
                            className="w-96 h-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                            variants={fadeInScale}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            <img src={info.image} alt="photo" className="w-full h-full object-cover rounded-lg"/>
                        </motion.div>

                        <motion.div
                            key={info.id + "_text"}
                            className="w-96 h-96 bg-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg flex items-center justify-center p-5"
                            variants={fadeInScale}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}}
                        >
                            <p className='text-center tracking-widest'>
                                {info.text}
                            </p>
                        </motion.div>
                    </React.Fragment>
                ))}
            </div>

            <div className='mb-18 h-44 w-fit mx-auto flex items-center'>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className='tracking-widest w-fit py-4 px-10 rounded-md bg-[var(--dark-buttom)] text-white uppercase hover:bg-red-500 transition'
                >
                    {t("bookButton")}
                </button>

                {isModalOpen && <ModalWindow isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
            </div>


        </div>
    );
};

export default Massage;
