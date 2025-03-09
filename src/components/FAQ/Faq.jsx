import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import {motion} from 'framer-motion';

const Faq = () => {
    const {t} = useTranslation();
    const [openItemIds, setOpenItemIds] = useState([]);

    const toggleItem = (id) => {
        setOpenItemIds((prevIds) =>
            prevIds.includes(id)
                ? prevIds.filter((itemId) => itemId !== id)
                : [...prevIds, id]
        );
    };

    const faq = [
        {
            id: 1,
            ask: t("faqPage.ask_1"),
            answer: t("faqPage.answer_1")
        },
        {
            id: 2,
            ask: t("faqPage.ask_2"),
            answer: t("faqPage.answer_2")
        },
        {
            id: 3,
            ask: t("faqPage.ask_3"),
            answer: t("faqPage.answer_3")
        },
        {
            id: 4,
            ask: t("faqPage.ask_4"),
            answer: t("faqPage.answer_4")
        },
        {
            id: 5,
            ask: t("faqPage.ask_5"),
            answer: t("faqPage.answer_5")
        },
        {
            id: 6,
            ask: t("faqPage.ask_6"),
            answer: t("faqPage.answer_6")
        },
        {
            id: 7,
            ask: t("faqPage.ask_7"),
            answer: t("faqPage.answer_7")
        },
        {
            id: 8,
            ask: t("faqPage.ask_8"),
            answer: t("faqPage.answer_8")
        },
        {
            id: 9,
            ask: t("faqPage.ask_9"),
            answer: t("faqPage.answer_9")
        },
        {
            id: 10,
            ask: t("faqPage.ask_10"),
            answer: t("faqPage.answer_10")
        },
        {
            id: 11,
            ask: t("faqPage.ask_11"),
            answer: t("faqPage.answer_11")
        },
        {
            id: 12,
            ask: t("faqPage.ask_12"),
            answer: t("faqPage.answer_12")
        },
        {
            id: 13,
            ask: t("faqPage.ask_13"),
            answer: t("faqPage.answer_13")
        },
        {
            id: 14,
            ask: t("faqPage.ask_14"),
            answer: t("faqPage.answer_14")
        },
        {
            id: 15,
            ask: t("faqPage.ask_15"),
            answer: t("faqPage.answer_15")
        },
    ];

    return (
        <div>
            <motion.div
                className='md:bg-[url(/faqBig.jpg)] h-screen bg-center bg-no-repeat bg-cover bg-[url(/faqMobile.jpg)] flex items-center justify-center'
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1}}
            >
                <h1 className="container text-white text-center z-50">
                    {t("FAQuestion")}
                </h1>
            </motion.div>

            <div className='container mx-auto p-5 my-10'>
                <div className="flex flex-wrap gap-8">
                    {faq.map((item) => (
                        <div
                            id={`accordion-collapse-${item.id}`}
                            key={item.id}
                            className="md:w-2/5 w-full mx-auto"
                        >
                            <h2 id={`accordion-collapse-heading-${item.id}`}>
                                <button
                                    type="button"
                                    className="flex items-center justify-between w-full p-5 font-medium border border-[var(--footer)] rounded"
                                    onClick={() => toggleItem(item.id)}
                                    aria-expanded={openItemIds.includes(item.id)}
                                    aria-controls={`accordion-collapse-body-${item.id}`}
                                >
                                    <p className="text-lg text-left">{item.ask}</p>
                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 shrink-0 transform ${
                                            openItemIds.includes(item.id) ? "" : "rotate-180"
                                        }`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                </button>
                            </h2>
                            <motion.div
                                id={`accordion-collapse-body-${item.id}`}
                                aria-labelledby={`accordion-collapse-heading-${item.id}`}
                                initial={{opacity: 0, height: 0}}
                                animate={{
                                    opacity: openItemIds.includes(item.id) ? 1 : 0,
                                    height: openItemIds.includes(item.id) ? "auto" : 0,
                                }}
                                transition={{duration: 0.5}}
                            >
                                <div className="text-lg px-2 text-justify mt-3">
                                    <p className="mb-2">{item.answer}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
