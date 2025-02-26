import React from "react";

export const IAppContext = {
    context: null,
    setContext: () => {},
    load: false,
    reload: false
}

export const AppContext = React.createContext(null);

