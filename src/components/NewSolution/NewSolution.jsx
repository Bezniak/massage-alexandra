import React from "react";
import {useTranslation} from "react-i18next";

const NewSolution = () => {
    const {t} = useTranslation();


    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-24 px-10 py-20 bg-[#FAF8F6]">

            <div className="flex gap-12 md:w-1/2">
                <div className="w-1/3">
                    <img
                        src="newSolution_1.jpg"
                        alt="newSolution_1"
                    />
                </div>
                <div className="w-2/3">
                    <img
                        src="newSolution_2.jpg"
                        alt="newSolution_2"
                    />
                </div>
            </div>

            <div className="md:w-1/2 text-center md:text-left">
                <h2>
                    {t("newSolutionTitle")}
                </h2>
                <p className="mt-4 leading-relaxed">
                    {t("newSolutionDesc")}
                </p>
                <button className='mt-16 hover:underline transition hover:cursor-pointer text-sm font-medium'>
                    {t("seeMore")}
                </button>
            </div>
        </div>
    );
};

export default NewSolution;
