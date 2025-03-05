import React from 'react';
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

const Follow = () => {
    const {t} = useTranslation();

    // Animation variants
    const fadeIn = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 2}},
    };

    return (
        <div className="grid grid-cols-3 items-center w-full gap-4">
            {/* Левая часть с картинками */}
            <motion.div
                className="grid grid-cols-2 gap-4 w-full h-[500px]"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.2}} // Trigger animation on every scroll
            >
                <motion.img
                    src="/inst_1.jpg"
                    alt="photo"
                    className="w-full h-full object-cover"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                />
                <motion.img
                    src="/inst_2.jpg"
                    alt="photo"
                    className="w-full h-full object-cover"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                />
            </motion.div>

            {/* Центральный блок с текстом */}
            <motion.div
                className="text-center flex flex-col items-center justify-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.2}} // Trigger animation on every scroll
            >
                <a
                    href="https://www.instagram.com/massage_aliaksandra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-3xl cursor-pointer font-light hover:text-red-500 transition-colors"
                >
                    {t("followUs")}
                </a>
                <motion.img
                    src="/sunset.png"
                    alt="sun"
                    className="size-32"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                />
            </motion.div>

            {/* Правая часть с картинками */}
            <motion.div
                className="grid grid-cols-2 gap-4 w-full h-[500px]"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.2}} // Trigger animation on every scroll
            >
                <motion.img
                    src="/inst_3.png"
                    alt="photo"
                    className="w-full h-full object-cover"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                />
                <motion.img
                    src="/inst_4.png"
                    alt="photo"
                    className="w-full h-full object-cover"
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                />
            </motion.div>
        </div>
    );
};

export default Follow;
