export default class LanguageHelper {
    
    static getInitiLang(context) {
        context = {...context, lang: 'en'};
        return context;
    }


}