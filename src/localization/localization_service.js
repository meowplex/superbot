import { I18n } from "i18n";
import { fileURLToPath } from 'url';
import path, { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const en = new I18n({
    locales: ['en', 'ru'],
    directory: path.join(__dirname, '/locales'),
})
en.setLocale('en');

const ru = new I18n({
    locales: ['en', 'ru'],
    directory: path.join(__dirname, '/locales'),
})
ru.setLocale('ru')


export class LocalizationService {

    i18n;   

    constructor(locale){
        switch (locale){
            case ('ru'):{
                this.i18n = ru;
                break;
            }
            default: {
                this.i18n = en;
                break;
            }
        }
    }

    get(phrase, count){
        return this.i18n.__n(phrase, count);
    }
    
}