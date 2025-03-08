import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

const RequestForm = () => {
    const {t} = useTranslation();

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm();
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = async (data) => {
        const now = new Date();
        const formattedDate = now.toLocaleDateString("ru-RU");
        const formattedTime = now.toLocaleTimeString("ru-RU", {hour: "2-digit", minute: "2-digit"});

        const message = `
      Форма обратной связи с сайта от ${formattedDate} в ${formattedTime}:
      Имя: ${data.name}
      Email: ${data.email}
      Телефон: ${data.phone}
      Тема: ${data.subject}
      Сообщение: ${data.message}
    `;

        try {
            await fetch(TELEGRAM_API_URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({chat_id: TELEGRAM_CHAT_ID, text: message}),
            });
            setSubmitted(true);
            reset();
        } catch (error) {
            console.error("Ошибка отправки сообщения:", error);
        }
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            {submitted ? (
                <h3 className="border border-gray-200 rounded-2xl p-5 text-2xl text-center">
                    {t("aboutUsTitle.responseText")}
                </h3>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <input
                            placeholder={t("name")}
                            {...register("name",
                                {required: t("required")})}
                            className='w-full p-2 outline-none focus:outline-none border-b border-gray-300'
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>
                    <div>
                        <input
                            placeholder={t("email")}
                            type="email"
                            {...register("email", {
                                required: t("required"),
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: t("correctEmail"),
                                },
                            })}
                            className='w-full p-2 outline-none focus:outline-none border-b border-gray-300'
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div>
                        <input
                            placeholder={t("enterPhoneNumber")}
                            type="tel"
                            {...register("phone", {
                                required: t("required"),
                                pattern: {
                                    value: /^\+?[0-9]{10,15}$/,
                                    message: t("enterValidPhone"),
                                },
                            })}
                            className='w-full p-2 outline-none focus:outline-none border-b border-gray-300'
                        />
                        {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                    </div>
                    <div>
                        <input
                            placeholder={t("theme")}
                            {...register("subject",
                                {required: t("required")}
                            )
                            }
                            className='w-full p-2 outline-none focus:outline-none border-b border-gray-300'
                        />
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
                    </div>
                    <div>
                        <textarea
                            placeholder={t("message")}
                            {...register("message", {
                                required: t("required"),
                                minLength: {value: 10, message: t("minSymbols")},
                            })}
                            className='w-full p-2 outline-none focus:outline-none border-b border-gray-300 resize-none h-44'
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className='tracking-widest w-full py-3 px-3 bg-[var(--dark-buttom)] text-white uppercase hover:bg-red-500 transition'
                    >
                        {t("send")}
                    </button>
                </form>
            )}
        </div>
    );
};

export default RequestForm;