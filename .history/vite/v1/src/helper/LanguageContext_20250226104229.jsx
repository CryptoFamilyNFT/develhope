import React from "react";

export const IAppContext = {
    context: null,
    setContext: () => {},
    loaded: false,
    reload: true
}

export const LanguageContext = React.createContext(null);

