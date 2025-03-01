import React, {createContext, useContext, useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import i18n from "i18next";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [theme, setTheme] = useState(Cookies.get('theme') || 'light');
    const [locale, setLocale] = useState(Cookies.get('i18nextLng') || 'ru'); // Добавляем локаль


    useEffect(() => {
        document.body.className = theme;
        Cookies.set('theme', theme, {expires: 365});
    }, [theme]);

    useEffect(() => {
        i18n.changeLanguage(locale); // Обновляем язык в i18next
        Cookies.set('i18nextLng', locale, {expires: 365}); // Обновляем куку локали
    }, [locale]);


    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const changeLocale = (newLocale) => {
        setLocale(newLocale); // Изменяем локаль
    };

    return (
        <AuthContext.Provider value={{theme, toggleTheme, locale, changeLocale}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
