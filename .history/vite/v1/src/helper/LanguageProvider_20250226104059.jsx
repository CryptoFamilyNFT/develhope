/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { IAppContext, LanguageContext } from "./LanguageContext";
import LanguageHelper from "./LanguageHelper";

const LanguageProvider = ({ children }) => {
    const [context, setContext] = React.useState(IAppContext.loaded, IAppContext.reload);

    const saveContext = (context) => {
      setContext(context);
    };

    useEffect(() => {
      const ctx = LanguageHelper.getInitiLang(context)
      saveContext({...ctx, loaded: true, connected: false});
    });

    return <LanguageContext.Provider value={{context, saveContext}}>{children}</LanguageContext.Provider>;
  };

  export default LanguageProvider;
