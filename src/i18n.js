import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/trasnlationEN.json';
import translationES from './locales/es/translationES.json';


//Translations
const resources = {
    en:{
        translation: translationEN
    },
    es:{
        translation: translationES
    }
};

i18n
 .use(initReactI18next) //passes i18n down to react-i18next
 .init({
    resources,
    lng:'es',
    keySeparator: false,
    interpolation:{
        escapeValue: false// 
    }
});

export default i18n;