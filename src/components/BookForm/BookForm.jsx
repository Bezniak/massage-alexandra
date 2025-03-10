import React, {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {CiCalendar} from 'react-icons/ci';
import {FiPhone} from 'react-icons/fi';
import {MdOutlineDriveFileRenameOutline} from 'react-icons/md';
import {useTranslation} from 'react-i18next';
import Select from 'react-select';
import dayjs from 'dayjs';
import {useAuth} from "../../context/AuthContext.jsx";
import 'dayjs/locale/ru'; // Импортируем нужную локаль
import 'dayjs/locale/en'; // Импортируем английскую локаль
import { registerLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import enGB from 'date-fns/locale/en-GB';

const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

const BookForm = ({additionalStyle}) => {
    const {register, handleSubmit, watch, setValue, formState: {errors}, clearErrors} = useForm();
    const [selectedDate, setSelectedDate] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [dateError, setDateError] = useState(false);  // New state for date error
    const {t} = useTranslation();
    const [selectedMassages, setSelectedMassages] = useState([]);
    const [availableTimes, setAvailableTimes] = useState([]);
    const {locale} = useAuth();


    const massageOptions = (t) => [
        {value: 'individualRejuvenationProgram', label: t("massages.individual_rejuvenation_program.name"), price: 75},
        {value: 'rejuvenatingFacialMassage', label: t("massages.rejuvenating_facial_massage.name"), price: 55},
        {value: 'rejuvenatingFacialMassage', label: t("massages.liftingMask.name"), price: 20},
        {value: 'rejuvenatingFacialMassage', label: t("massages.taping_one_zone.name"), price: 15},
        {value: 'back', label: t("massages.back.name"), price: 40},
        {value: 'neckShoulder', label: t("massages.neckShoulder.name"), price: 25},
        {value: 'cupping', label: t("massages.cupping.name"), price: 10},
    ];

    const handleChange = (selectedOptions) => {
        setSelectedMassages(selectedOptions || []);
        setValue("massageType", selectedOptions?.map(option => option.value) || []);  // Сохраняем только значения
        clearErrors("massageType");
    };

    const totalPrice = selectedMassages.reduce((sum, massage) => sum + massage.price, 0).toFixed(2);

    useEffect(() => {
        if (!selectedDate) return;
        const selectedDay = dayjs(selectedDate).day(); // 0 - воскресенье, 1 - понедельник, ..., 6 - суббота
        if (selectedDay === 0 || selectedDay === 6) {
            setAvailableTimes([]);
            setValue("time", "");
            return;
        }
        let startHour, endHour;
        if ([1, 3, 5].includes(selectedDay)) { // Понедельник, Среда, Пятница
            startHour = 9;
            endHour = 15;
        } else if ([2, 4].includes(selectedDay)) { // Вторник, Четверг
            startHour = 9;
            endHour = 19;
        }
        const now = dayjs();
        const isToday = dayjs(selectedDate).isSame(now, 'day');
        let times = [];

        for (let hour = startHour; hour <= endHour; hour++) {
            const timeString = `${hour}:00`;
            const timeValue = dayjs(selectedDate).hour(hour).minute(0);
            if (isToday && timeValue.isBefore(now.add(1, 'hour'))) continue; // Не показывать прошедшее время
            times.push({value: timeString, label: timeString});
        }
        setAvailableTimes(times);
        setValue("time", ""); // Сбрасываем время при смене даты
    }, [selectedDate]);

    useEffect(() => {
        const locales = { ru, en: enGB };
        registerLocale(locale, locales[locale] || enGB);
    }, [locale]);

    const handleTimeChange = (selectedOption) => {
        setValue("time", selectedOption ? selectedOption.value : "");
        clearErrors("time"); // Clear error for time when a valid selection is made
    };


    const sendTelegramMessage = async (data) => {
        try {
            const now = new Date();
            const formattedDate = now.toLocaleDateString('ru-RU');
            const formattedTime = now.toLocaleTimeString('ru-RU', {hour: '2-digit', minute: '2-digit'});

            if (!selectedDate) {
                setDateError(true); // Set date error state to true
                return;
            }

            // Получаем названия выбранных массажей
            const massageTypes = selectedMassages.map((massage) => massage.label).join(', ') || 'Не выбрано';

            const message = encodeURIComponent(
                `Запись на массаж с сайта!\n` +
                `Запись оформлена ${formattedDate} в ${formattedTime}\n` +
                `Имя: ${data.name}\n` +
                `Телефон: ${data.phone}\n` +
                `Дата: ${selectedDate.toLocaleDateString('ru-RU')}\n` +
                `Время: ${data.time}\n` +
                `Виды массажа: ${massageTypes}\n` +  // Используем названия выбранных массажей
                `Сумма: ${totalPrice} BYN`           // Добавляем сумму
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
            massageType: selectedMassages.map((massage) => massage.label).join(', ')  // Исправлено здесь
        });
        setIsSubmitted(true);
    };

    return (
        <div className='md:min-h-[75vh] xs:h-fit flex flex-col items-center justify-center gap-8 p-5'>
            {isSubmitted ? (
                <div className='text-center'>
                    <h1 className='text-xl font-bold mb-4'>
                        {t("thankYouMessageBooking.thanks")}
                    </h1>
                    <p className='text-2xl'>{t("thankYouMessageBooking.youBookOn")} {bookingDetails.time} {t("thankYouMessageBooking.onDate")} {bookingDetails.date} {t("thankYouMessageBooking.on")} {bookingDetails.massageType}</p>
                    <p className='text-2xl'>{t("thankYouMessageBooking.address")}</p>
                    <p className='text-2xl'>{t("thankYouMessageBooking.sum")} {totalPrice} BYN</p>
                </div>
            ) : (
                <>
                    <h1 className={`${additionalStyle ? 'hidden' : 'block'} text-center`}>
                        {t("enjoyTitle")}
                    </h1>
                    <img src='/sunset.png' alt='sunset' className={`${additionalStyle ? 'hidden' : 'block'} size-28`}/>
                    <div className='flex justify-center items-center w-full'>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className={`flex flex-col ${additionalStyle ? 'lg:flex-col' : 'lg:flex-row'} gap-10 items-center justify-center mx-auto container w-full`}
                        >

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
                                            onChange={(date) => setSelectedDate(date)}
                                            minDate={new Date()}
                                            filterDate={(date) => ![0, 6].includes(dayjs(date).day())} // Запрещаем выбор субботы и воскресенья
                                            popperPlacement="bottom-start"
                                            dateFormat='dd-MM-yyyy'
                                            placeholderText={t("selectDate")}
                                            className='w-full p-2 outline-none focus:outline-none'
                                            locale={locale}
                                        />
                                        <CiCalendar className='size-6 text-gray-500'/>
                                    </div>
                                </div>
                                {dateError && <p className='text-red-500 text-sm'>{t("selectDate")}</p>}
                            </div>
                            <div className='w-full'>
                                <div className="border-b-1 flex flex-col items-center mb-4">
                                    <div className="relative w-full">
                                        <Select
                                            options={availableTimes}
                                            isDisabled={availableTimes.length === 0}
                                            onChange={(option) => setValue("time", option?.value || "")}
                                            placeholder={t("selectTime")}
                                            className="w-full"
                                            styles={{
                                                control: (base) => ({
                                                    ...base,
                                                    border: "none",
                                                    boxShadow: "none",
                                                }),
                                            }}
                                            value={availableTimes.find((time) => time.value === watch("time")) || null}
                                        />
                                        <input
                                            type="hidden"
                                            {...register("time", {required: true})}
                                        />
                                    </div>
                                </div>
                                {errors.time && <p className="text-red-500 text-sm text-center">{t("required")}</p>}
                            </div>

                            <div className='w-full'>
                                <div className='border-b-1 mb-4'>
                                    <Select
                                        isMulti
                                        options={massageOptions(t)}
                                        className='basic-multi-select border-none focus:ring-0'
                                        classNamePrefix='select'
                                        onChange={handleChange}
                                        placeholder={t("selectMassageType")}
                                    />
                                    <input
                                        type="hidden"
                                        {...register("massageType", {required: true})}
                                    />
                                </div>
                                {errors.massageType &&
                                    <p className='text-red-500 text-sm text-center'>{t("required")}</p>}
                            </div>

                            {additionalStyle && totalPrice > 0 && (
                                <div className='w-full text-center mt-4'>
                                    <p className='text-lg font-bold'>{t("totalPrice")}: {totalPrice} BYN</p>
                                </div>
                            )}

                            <div className='w-full'>
                                <button type='submit'
                                        className='tracking-widest w-full py-3 px-3 bg-[var(--dark-buttom)] text-white uppercase hover:bg-red-500 transition'
                                >
                                    {t("bookButton")}
                                </button>
                            </div>
                        </form>
                    </div>
                    {!additionalStyle && totalPrice > 0 && (
                        <div className='w-full text-center mt-4'>
                            <p className='text-lg font-bold'>{t("totalPrice")}: {totalPrice} BYN</p>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default BookForm;
