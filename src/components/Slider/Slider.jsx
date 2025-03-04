import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {motion} from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import {Autoplay, Pagination} from 'swiper/modules';
import {useTranslation} from "react-i18next";

const Slider = () => {
    const {t} = useTranslation();

    return (
        <div className='relative w-full h-screen'>
            <motion.h1
                initial={{opacity: 0, y: -50}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 2}}
                className='absolute top-1/2 left-1/2 text-center transform -translate-x-1/2 text-white -translate-y-1/2 z-10'
            >
                {t("sliderTitle")}
            </motion.h1>
            <Swiper
                centeredSlides={true}
                loop={true}
                speed={2000}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper smooth-transition"
                style={{overflow: 'hidden'}}
            >
                <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <motion.div
                        initial={{scale: 1.2}}
                        animate={{scale: 1}}
                        transition={{duration: 5, repeat: Infinity, repeatType: "reverse"}}
                        className='relative w-full h-full'
                    >
                        <div className='overlay'></div>
                        <img src="/slider_1.jpg" alt="slider_1" className="w-full h-full object-cover"/>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <motion.div
                        initial={{scale: 1.2}}
                        animate={{scale: 1}}
                        transition={{duration: 5, repeat: Infinity, repeatType: "reverse"}}
                        className='relative w-full h-full'
                    >
                        <div className='overlay'></div>
                        <img src="/slider_2.jpg" alt="slider_2" className="w-full h-full object-cover"/>
                    </motion.div>
                </SwiperSlide>
                <SwiperSlide style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <motion.div
                        initial={{scale: 1.2}}
                        animate={{scale: 1}}
                        transition={{duration: 5, repeat: Infinity, repeatType: "reverse"}}
                        className='relative w-full h-full'
                    >
                        <img src="/slider_3.jpg" alt="slider_3" className="w-full h-full object-cover"/>
                    </motion.div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
