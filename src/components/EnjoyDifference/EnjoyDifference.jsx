import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {CiCalendar} from 'react-icons/ci';
import {FiPhone} from 'react-icons/fi';
import {MdOutlineDriveFileRenameOutline} from 'react-icons/md';
import {useTranslation} from 'react-i18next';

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const EnjoyDifference = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [selectedDate, setSelectedDate] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [dateError, setDateError] = useState(false);  // New state for date error
    const {t} = useTranslation();

    const sendTelegramMessage = async (data) => {
        try {
            const now = new Date();
            const formattedDate = now.toLocaleDateString('ru-RU');
            const formattedTime = now.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});

            if (!selectedDate) {
                setDateError(true); // Set date error state to true
                return;
            }

            const message = encodeURIComponent(
                `Запись на массаж с сайта!\n` +
                `Запись оформлена ${formattedDate} в ${formattedTime}\n` +
                `Имя: ${data.name}\n` +
                `Телефон: ${data.phone}\n` +
                `Дата: ${selectedDate.toLocaleDateString('ru-RU')}\n` +
                `Время: ${data.time}\n` +
                `Вид массажа: ${data.massageType}`
            );

            const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&text=${message}`;

            const response = await fetch(url, {method: 'GET'});

            if (!response.ok) throw new Error('Ошибка при отправке сообщения');
        } catch (error) {
            console.error('Ошибка отправки в Telegram:', error);
            alert('Не удалось отправить запись, попробуйте снова.');
        }
    };

    const onSubmit = async (data) => {
        if (!selectedDate) {
            setDateError(true); // Set date error state to true
            return;
        }
        await sendTelegramMessage(data);
        setBookingDetails({
            name: data.name,
            time: data.time,
            date: selectedDate.toLocaleDateString('ru-RU'),
            massageType: data.massageType
        });
        setIsSubmitted(true);
    };

    return (
        <div className='md:h-[75vh] xs:h-fit flex flex-col items-center justify-center gap-8 p-5'>
            {isSubmitted ? (
                <div className='text-center'>
                    <h1 className='text-xl font-bold mb-4'>
                        {t("thankYouMessageBooking.thanks")}
                    </h1>
                    <p className='text-2xl'>{t("thankYouMessageBooking.youBookOn")} {bookingDetails.time} {t("thankYouMessageBooking.onDate")} {bookingDetails.date} {t("thankYouMessageBooking.on")} {bookingDetails.massageType}</p>
                    <p className='text-2xl'>{t("thankYouMessageBooking.address")}</p>
                </div>
            ) : (
                <>
                    <h1 className='text-center'>
                        {t("enjoyTitle")}
                    </h1>
                    <img src='/sunset.png' alt='sunset' className='size-28'/>
                    <div className='flex justify-center items-center w-full'>
                        <form onSubmit={handleSubmit(onSubmit)}
                              className='flex flex-col lg:flex-row gap-10 items-center justify-center mx-auto container w-full'>
                            <div className='flex flex-col items-center w-full'>
                                <div className='w-full border-b-1 mb-4'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <input type='text'
                                               placeholder={t("name")}
                                               {...register('name', {required: true})}
                                               className='w-full p-2 outline-none focus:outline-none'
                                        />
                                        <MdOutlineDriveFileRenameOutline className='size-6 text-gray-500'/>
                                    </div>
                                </div>
                                {errors.name && <p className='text-red-500 text-sm'>{t("required")}</p>}
                            </div>
                            <div className='flex flex-col items-center w-full'>
                                <div className='w-full border-b-1 mb-4'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <input
                                            type='tel'
                                            placeholder={t("enterPhoneNumber")}
                                            {...register('phone', {
                                                required: true,
                                                pattern: {
                                                    value: /^\+?\d{1,3}(\s?|\(\d{1,4}\))?([\s.-]?\d{1,4}){2,}$/,
                                                    message: t("enterValidPhone"),
                                                }
                                            })}
                                            onInput={(e) => e.target.value = e.target.value.replace(/[^\d+()\-.\s]/g, '')}
                                            className='w-full p-2 outline-none focus:outline-none'
                                        />
                                        <FiPhone className='size-6 text-gray-500'/>
                                    </div>
                                </div>
                                {errors.phone && <p className='text-red-500 text-sm'>{t("required")}</p>}
                            </div>
                            <div className='w-full'>
                                <div className='flex flex-col items-center border-b-1 mb-4'>
                                    <div className='w-full flex flex-row items-center justify-between'>
                                        <DatePicker
                                            selected={selectedDate}
                                            onChange={(date) => {
                                                setSelectedDate(date);
                                                if (date) {
                                                    setDateError(false);
                                                }
                                            }}
                                            minDate={new Date()}
                                            dateFormat='dd-MM-yyyy'
                                            placeholderText={t("selectDate")}
                                            className='w-full p-2 outline-none focus:outline-none'
                                        />

                                        <CiCalendar className='size-6 text-gray-500'/>
                                    </div>
                                </div>
                                {dateError && <p className='text-red-500 text-sm'>{t("selectDate")}</p>}
                            </div>
                            <div className='flex flex-col items-center w-full'>
                                <div className='w-full border-b-1 mb-4'>
                                    <select {...register('time', {required: true})}
                                            className='w-full p-2 outline-none focus:outline-none'>
                                        <option value=''>{t("selectTime")}</option>
                                        {Array.from({length: 12}, (_, i) => i + 8).map((hour) => (
                                            <option key={`${hour}:00`} value={`${hour}:00`}>
                                                {`${hour}:00`}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                {errors.time && <p className='text-red-500 text-sm'>{t("required")}</p>}
                            </div>
                            <div className='flex flex-col items-center w-full'>
                                <div className='w-full border-b-1 mb-4'>
                                    <select {...register('massageType', {required: true})}
                                            className='w-full p-2 outline-none focus:outline-none'>
                                        <option value=''>{t("selectMassageType")}</option>
                                        <option value='Расслабляющий массаж'>Расслабляющий массаж</option>
                                        <option value='Глубокий массаж'>Глубокий массаж</option>
                                        <option value='Спортивный массаж'>Спортивный массаж</option>
                                    </select>
                                </div>
                                {errors.massageType && <p className='text-red-500 text-sm'>{t("required")}</p>}
                            </div>
                            <div className='w-full'>
                                <button type='submit'
                                        className='tracking-widest w-full py-3 bg-[var(--dark-buttom)] text-white uppercase hover:cursor-pointer hover:bg-[var(--dark-buttom)]'
                                >
                                    {t("bookButton")}
                                </button>
                            </div>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
};

export default EnjoyDifference;
