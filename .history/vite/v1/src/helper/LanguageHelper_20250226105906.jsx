export default class LanguageHelper {
    static context

    constructor(context) {
        this.context = context;
    }
    
    static getInitiLang(context) {
        context = {...context, lang: 'en'};
        return context;
    }

    static getLanguage() {
        return 'en';
    }

    static switchText(lang) {
        switch (lang) {
            case 'en':
                return 'Hello World';
            case 'es':
                return 'Hola Mundo';
            case 'fr':
                return 'Bonjour le monde';
            default:
                return 'Hello World';
        }
    }

}