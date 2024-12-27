// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Project3Page() {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom>
        {t('projects.project3Title')} {/* Translated project title */}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('projects.project3Description')} {/* Translated project description */}
      </Typography>
      
      {/* Add more content related to Project 3 here */}

      <Button variant="contained" color="primary" component={Link} to="/projects">
        {t('projects.backToProjects')} {/* Translated text for back button */}
      </Button>
    </Box>
  );
}

export default Project3Page;
