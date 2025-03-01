import React from 'react';
import {useTranslation} from "react-i18next";

const PhotoCollage = () => {
    const {t} = useTranslation();


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Текстовый блок */}
            <div className="order-1 md:order-none bg-[var(--soft-white)] flex flex-col justify-between p-5 h-96">
                <img className="w-16 h-16 object-contain mx-auto" src="/massageIcons_1.png" alt="logo 1"/>
                <div className="text-center">
                    <h3 className="text-lg font-semibold tracking-tight mb-4">
                        {t("photoCollectionTitle_1")}
                    </h3>
                    <p className="text-sm">
                        {t("photoCollectionDesc_1")}
                    </p>
                </div>
            </div>

            {/* Фотоблоки */}
            <div className="order-2 md:order-none h-96">
                <img className="w-full h-full object-cover" src="/photo_2.png" alt="photo 2"/>
            </div>

            <div className="order-3 md:order-none bg-[var(--light-blue)] flex flex-col justify-between p-5 h-96">
                <img className="w-16 h-16 object-contain mx-auto" src="/icon_2.svg" alt="logo 1"/>
                <div className="text-center">
                    <h3 className="text-lg font-semibold tracking-tight mb-4">
                        {t("photoCollectionTitle_2")}
                    </h3>
                    <p className="text-sm">
                        {t("photoCollectionDesc_2")}
                    </p>
                </div>
            </div>

            <div className="order-4 md:order-none h-96">
                <img className="w-full h-full object-cover" src="/photo_1.png" alt="photo 1"/>
            </div>

            <div className="order-6 md:order-none h-96">
                <img className="w-full h-full object-cover" src="/photo_3.png" alt="photo 3"/>
            </div>

            <div className="order-5 md:order-none bg-[var(--light-blue)] flex flex-col justify-between p-5 h-96">
                <img className="w-16 h-16 object-contain mx-auto" src="/icon_3.png" alt="logo 1"/>
                <div className="text-center">
                    <h3 className="text-lg font-semibold tracking-tight mb-4">
                        {t("photoCollectionTitle_3")}
                    </h3>
                    <p className="text-sm">
                        {t("photoCollectionDesc_3")}
                    </p>
                </div>
            </div>

            <div className="order-8 md:order-none h-96">
                <img className="w-full h-full object-cover" src="/photo_4.png" alt="photo 4"/>
            </div>

            <div className="order-7 md:order-none bg-[var(--soft-white)] flex flex-col justify-between p-5 h-96">
                <img className="w-16 h-16 object-contain mx-auto" src="/icon_4.png" alt="logo 1"/>
                <div className="text-center">
                    <h3 className="text-lg font-semibold tracking-tight mb-4">
                        {t("photoCollectionTitle_4")}
                    </h3>
                    <p className="text-sm">
                        {t("photoCollectionDesc_4")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PhotoCollage;
