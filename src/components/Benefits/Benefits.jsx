import React from 'react';
import {useTranslation} from "react-i18next";

const Benefits = () => {
    const {t} = useTranslation();

    return (
        <div className='flex bg-[url(/benefits.jpg)] bg-no-repeat bg-cover p-8 text-white'>
            <div className='md:container md:mx-auto flex flex-wrap justify-center items-start pt-20 pb-20'>
                <h1 className='w-full text-center mb-10 text-2xl font-bold'>
                    {t("benefitsTitle")}
                </h1>
                <div className='grid md:grid-cols-2 xs:grid-cols-1 gap-10 justify-center items-center'>
                    <div className='w-full flex flex-col items-center'>
                        <img src="/yoga.png" alt="yoga" className='size-18'/>
                        <h3 className='text-lg font-semibold'>
                            {t("benefitsTitle_1")}
                        </h3>
                        <p className='text-center'>
                            {t("benefitsDesc_1")}
                        </p>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <img src="/body-massage.png" alt="yoga" className='size-18'/>
                        <h3 className='text-lg font-semibold'>
                            {t("benefitsTitle_2")}
                        </h3>
                        <p className='text-center'>
                            {t("benefitsDesc_2")}
                        </p>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <img src="/facial-treatment.png" alt="yoga" className='size-18'/>
                        <h3 className='text-lg font-semibold'>
                            {t("benefitsTitle_3")}
                        </h3>
                        <p className='text-center'>
                            {t("benefitsDesc_3")}
                        </p>
                    </div>
                    <div className='w-full flex flex-col items-center'>
                        <img src="/back.png" alt="yoga" className='size-18'/>
                        <h3 className='text-lg font-semibold'>
                            {t("benefitsTitle_4")}
                        </h3>
                        <p className='text-center'>
                            {t("benefitsDesc_4")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
