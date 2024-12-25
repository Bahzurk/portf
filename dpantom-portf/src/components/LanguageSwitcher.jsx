import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button'; 

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
  };

  return (
    <div>
      {/* Language buttons */}
      <Button color="inherit" onClick={() => changeLanguage('en')}>
        English
      </Button>
      <Button color="inherit" onClick={() => changeLanguage('ru')}>
        Русский
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
