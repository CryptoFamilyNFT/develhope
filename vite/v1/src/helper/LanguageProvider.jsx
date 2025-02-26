/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { ILangContext, LanguageContext } from "./LanguageContext";
import LanguageHelper from "./LanguageHelper";

const LanguageProvider = ({ children }) => {
    const [context, setContext] = React.useState(ILangContext.loaded, ILangContext.reload);

    const saveContext = (context) => {
      setContext(context);
    };

    useEffect(() => {
      const ctx = LanguageHelper.getInitiLang(context)
      saveContext({...ctx, loaded: true, reload: false});
    }, []);

    return <LanguageContext.Provider value={{context, saveContext}}>{children}</LanguageContext.Provider>;
  };

  export default LanguageProvider;
