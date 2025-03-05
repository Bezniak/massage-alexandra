import React from 'react';
import {useTranslation} from "react-i18next";
import {motion, useAnimation} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const fadeInUp = {
    hidden: {opacity: 0, y: 30},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: 'easeOut'}}
};

const PhotoCollage = () => {
    const {t} = useTranslation();
    const controls = useAnimation();
    const {ref, inView} = useInView({
        triggerOnce: false,  // Чтобы анимация повторялась каждый раз при появлении
        threshold: 0.2       // Процент элемента, который должен быть виден для активации
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [inView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
        >
            {/* Текстовый блок */}
            <motion.div
                variants={fadeInUp}
                className="order-1 md:order-none bg-[var(--soft-white)] flex flex-col justify-between p-5 h-96"
            >
                <img className="w-16 h-16 object-contain mx-auto" src="/massageIcons_1.png" alt="logo 1"/>
                <div className="text-center">
                    <h3 className="text-lg font-semibold tracking-tight mb-4">
                        {t("photoCollectionTitle_1")}
                    </h3>
                    <p className="text-sm">
                        {t("photoCollectionDesc_1")}
                    </p>
                </div>
            </motion.div>

            {/* Фотоблоки */}
            <motion.div variants={fadeInUp} className="order-2 md:order-none h-96">
                <img className="w-full h-full object-cover" src="/photo_2.png" alt="photo 2"/>
            </motion.div>

            <motion.div
                variants={fadeInUp}
                className="order-3 md:order-none bg-[var(--light-blue)] flex flex-col justify-between p-5 h-96"
            >
                <img className="w-16 h-16 object-contain mx-auto" src="/icon_2.svg" alt="logo 2"/>
                <div className="text-center">
                    <h3 className="text-lg font-semibold tracking-tight mb-4">
                        {t("photoCollectionTitle_2")}
                    </h3>
                    <p className="text-sm">
                        {t("photoCollectionDesc_2")}
                    </p>
                </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-4 md:order-none h-96">
                <img className="w-full h-full object-cover" src="/photo_1.png" alt="photo 1"/>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-6 md:order-none h-96">
                <img className="w-full h-full object-cover" src="/photo_3.png" alt="photo 3"/>
            </motion.div>

            <motion.div
                variants={fadeInUp}
                className="order-5 md:order-none bg-[var(--light-blue)] flex flex-col justify-between p-5 h-96"
            >
                <img className="w-16 h-16 object-contain mx-auto" src="/icon_3.png" alt="logo 3"/>
                <div className="text-center">
                    <h3 className="text-lg font-semibold tracking-tight mb-4">
                        {t("photoCollectionTitle_3")}
                    </h3>
                    <p className="text-sm">
                        {t("photoCollectionDesc_3")}
                    </p>
                </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="order-8 md:order-none h-96">
                <img className="w-full h-full object-cover" src="/photo_4.png" alt="photo 4"/>
            </motion.div>

            <motion.div
                variants={fadeInUp}
                className="order-7 md:order-none bg-[var(--soft-white)] flex flex-col justify-between p-5 h-96"
            >
                <img className="w-16 h-16 object-contain mx-auto" src="/icon_4.png" alt="logo 4"/>
                <div className="text-center">
                    <h3 className="text-lg font-semibold tracking-tight mb-4">
                        {t("photoCollectionTitle_4")}
                    </h3>
                    <p className="text-sm">
                        {t("photoCollectionDesc_4")}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PhotoCollage;
