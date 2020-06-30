import React, { useContext } from 'react';

import { languageOptions } from './languages';

import { LanguageContext } from './Language';

export default function LanguageSelector() {
   const languageContext = useContext(LanguageContext);


  const handleLanguageChange = (event) => {
    const selectedLanguage = languageOptions.find(item => item.id === event.target.value);
    console.log( "lang === ", selectedLanguage.id)
    localStorage.setItem('selectedLang', selectedLanguage.id);
    // set selected language by calling context method
    languageContext.setLanguage(localStorage.getItem('selectedLang'));
        window.location.reload(false);

  };


  return (
    <div className="lang__selector__contener">
      {languageOptions.map(item => (
        <button className="lang__selector"
        onClick={handleLanguageChange}
      value={localStorage.getItem('selectedLang')}

          key={item.id}
          value={item.id}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
};