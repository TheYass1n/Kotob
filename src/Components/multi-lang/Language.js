import React, { useState, createContext, useContext } from 'react';

import { languageOptions, dictionaryList } from './languages';

const lang = localStorage.getItem('selectedLang') || languageOptions;
// create the language context with selected language value on localstorage
export const LanguageContext = createContext({
  language: lang,
  dictionary: dictionaryList[lang] || dictionaryList[languageOptions[0].id]
});

// it provides the language context to app
export function LanguageProvider(props) {
  const languageContext = useContext(LanguageContext);
  const [language, setLanguage] = useState(languageContext.language);
  const [dictionary, setDictionary] = useState(languageContext.dictionary);

  const provider = {
    language,
    dictionary,
    setLanguage: (selectedLanguage) => {
      setLanguage(selectedLanguage);
      setDictionary(dictionaryList[selectedLanguage.id]);
    }
  };

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  );
};

// get text according to id & current language
export function Text(props) {
  const languageContext = useContext(LanguageContext);

  return languageContext.dictionary[props.tid];
};