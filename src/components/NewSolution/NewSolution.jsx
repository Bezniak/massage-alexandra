import React from "react";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";

const NewSolution = () => {
    const {t} = useTranslation();

    // Animation variants
    const fadeIn = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 1}},
    };

    const slideIn = {
        hidden: {x: -100, opacity: 0},
        visible: {x: 0, opacity: 1, transition: {duration: 1}},
    };

    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-24 px-10 py-20 bg-[#FAF8F6]">
            <motion.div
                className="flex gap-12 md:w-1/2"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.2}} // Trigger every time it comes into view
            >
                <div className="w-1/3">
                    <motion.img
                        src="newSolution_1.jpg"
                        alt="newSolution_1"
                        variants={slideIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.2}} // Trigger every time it comes into view
                    />
                </div>
                <div className="w-2/3">
                    <motion.img
                        src="newSolution_2.jpg"
                        alt="newSolution_2"
                        variants={slideIn}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.2}} // Trigger every time it comes into view
                    />
                </div>
            </motion.div>

            <motion.div
                className="md:w-1/2 text-center md:text-left"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{once: false, amount: 0.2}} // Trigger every time it comes into view
            >
                <h2>{t("newSolutionTitle")}</h2>
                <p className="mt-4 leading-relaxed">{t("newSolutionDesc")}</p>
                <motion.button
                    className="mt-16 hover:underline transition hover:cursor-pointer text-sm font-medium"
                    whileHover={{scale: 1.1}}
                >
                    {t("seeMore")}
                </motion.button>
            </motion.div>
        </div>
    );
};

export default NewSolution;
