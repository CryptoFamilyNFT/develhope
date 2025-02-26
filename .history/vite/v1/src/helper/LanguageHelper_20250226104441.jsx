export default class LanguageHelper {
    
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
                return 'Hello';
            case 'es':
                return 'Hola';
            case 'fr':
                return 'Bonjour';
            default:
                return 'Hello';
        }
    }

}