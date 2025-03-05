import React from 'react';
import {useTranslation} from "react-i18next";
import {motion} from 'framer-motion';

const Benefits = () => {
    const {t} = useTranslation();

    // Animation variant for fade-in and slide-up
    const fadeInUp = {
        hidden: {opacity: 0, y: 90},
        visible: {opacity: 2, y: 0, transition: {duration: 1}},
    };

    return (
        <div className='flex bg-[url(/benefits.jpg)] bg-no-repeat bg-cover p-8 text-white'>
            <div className='md:container md:mx-auto flex flex-wrap justify-center items-start pt-20 pb-20'>
                <motion.h1
                    className='w-full text-center mb-10 text-2xl font-bold'
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: false, amount: 0.2}} // Trigger every time it comes into view
                >
                    {t("benefitsTitle")}
                </motion.h1>
                <div className='grid md:grid-cols-2 xs:grid-cols-1 gap-10 justify-center items-center'>
                    <motion.div
                        className='w-full flex flex-col items-center'
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.2}} // Trigger every time it comes into view
                    >
                        <img src="/yoga.png" alt="yoga" className='size-18'/>
                        <h3 className='text-lg font-semibold'>
                            {t("benefitsTitle_1")}
                        </h3>
                        <p className='text-center'>
                            {t("benefitsDesc_1")}
                        </p>
                    </motion.div>
                    <motion.div
                        className='w-full flex flex-col items-center'
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.2}} // Trigger every time it comes into view
                    >
                        <img src="/body-massage.png" alt="body-massage" className='size-18'/>
                        <h3 className='text-lg font-semibold'>
                            {t("benefitsTitle_2")}
                        </h3>
                        <p className='text-center'>
                            {t("benefitsDesc_2")}
                        </p>
                    </motion.div>
                    <motion.div
                        className='w-full flex flex-col items-center'
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.2}} // Trigger every time it comes into view
                    >
                        <img src="/facial-treatment.png" alt="facial-treatment" className='size-18'/>
                        <h3 className='text-lg font-semibold'>
                            {t("benefitsTitle_3")}
                        </h3>
                        <p className='text-center'>
                            {t("benefitsDesc_3")}
                        </p>
                    </motion.div>
                    <motion.div
                        className='w-full flex flex-col items-center'
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: false, amount: 0.2}} // Trigger every time it comes into view
                    >
                        <img src="/back.png" alt="back" className='size-18'/>
                        <h3 className='text-lg font-semibold'>
                            {t("benefitsTitle_4")}
                        </h3>
                        <p className='text-center'>
                            {t("benefitsDesc_4")}
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
