import React from "react";

export const ILangContext = {
    context: null,
    setContext: () => {},
    loaded: false,
    reload: true
}

export const LanguageContext = React.createContext(null);

