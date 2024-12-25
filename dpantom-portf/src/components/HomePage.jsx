import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';  // Importing the useTranslation hook

function HomePage() {
  const { t } = useTranslation();  

  return (
    <Box 
      sx={{
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        textAlign: 'center', 
        bgcolor: 'background.default',
        color: 'text.primary', 
        p: 2
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        {t('homepage.welcome')}  {/* Translated welcome text */}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('homepage.description')}  {/* Translated description */}
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/about">
        {t('homepage.learnMore')}  {/* Translated button text */}
      </Button>
    </Box>
  );
}

export default HomePage;
