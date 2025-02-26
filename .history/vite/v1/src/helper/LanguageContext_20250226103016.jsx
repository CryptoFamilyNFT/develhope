import React from "react";

export const IAppContext = {
    context: null,
    setContext: () => {},
    loaded: false,
    reload: true
}

export const AppContext = React.createContext(null);

