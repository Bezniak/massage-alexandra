import React from 'react';
import {useTranslation} from "react-i18next";
import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';

const Membership = () => {
    const {t} = useTranslation();

    return (
        <>
            {/*<MetaTags page="membership"/>*/}
            <div>
                <motion.div
                    className='md:bg-[url(/membershipBig.jpg)] h-screen bg-center bg-no-repeat bg-cover bg-[url(/membershipMobile.jpg)] flex items-center justify-center'
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1}}
                >
                    <h1 className="container text-white text-center z-10">
                        {t("membership")}
                    </h1>
                </motion.div>

                <div className='container mx-auto py-20 grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {[
                        {
                            img: "/certificate.jpg",
                            title: "membershipPage.certificateTitle",
                            desc: "membershipPage.certificateDesc"
                        },
                        {
                            img: "/subscription.png",
                            title: "membershipPage.subscriptionTitle",
                            desc: "membershipPage.subscriptionDesc"
                        }
                    ].map((item, index) => {
                        // Intersection Observer Hook without triggerOnce
                        const {ref, inView} = useInView({
                            threshold: 0.5 // Trigger when 50% of the element is in view
                        });

                        return (
                            <motion.div
                                key={index}
                                ref={ref}  // Attach the ref to the element
                                className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"
                                initial={{opacity: 0, y: 50}} // Start hidden and below
                                animate={{
                                    opacity: inView ? 1 : 0,
                                    y: inView ? 0 : 50
                                }} // Animate every time the element is in view
                                transition={{duration: 0.6, delay: index * 0.2}}
                            >
                                <div className="h-96 flex-shrink-0">
                                    <img className="w-full h-full object-contain" src={item.img} alt={t(item.title)}/>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h2 className="mb-4 text-xl font-semibold">{t(item.title)}</h2>
                                    <p className="text-justify text-lg flex-grow">{t(item.desc)}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Membership;
