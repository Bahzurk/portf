// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Flag from 'react-world-flags';  // Import the react-world-flags library

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Change language function
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  // List of supported languages with corresponding country codes (ISO 3166-1 alpha-2 codes)
  const languages = [
    { code: 'en', label: 'EN', flag: 'US' },  // 'US' for United States flag
    { code: 'ru', label: 'РУ', flag: 'RU' },  // 'RU' for Russia flag
    // Add more languages here as needed
  ];

  return (
    <Box display="flex" justifyContent="flex-end" p={2}>
      {languages.map(({ code, label, flag }) => (
        <Tooltip key={code} title={label === 'EN' ? 'English' : 'Русский'}>
          <Button
            color={currentLanguage === code ? 'primary' : 'inherit'}
            onClick={() => changeLanguage(code)}
            sx={{ marginRight: 1, display: 'flex', alignItems: 'center' }}
            aria-label={`Switch to ${label}`}
          >
            <Flag code={flag} style={{ width: 24, height: 16, marginRight: 8 }} /> {/* Flag Image */}
            {label}
          </Button>
        </Tooltip>
      ))}
    </Box>
  );
};

export default LanguageSwitcher;
