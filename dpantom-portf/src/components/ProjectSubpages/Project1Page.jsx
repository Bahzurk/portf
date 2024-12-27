// src/components/projectSubpages/Project1Page.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

function Project1Page() {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom align="center">
        {t('projects.project1Title')} {/* Translated project title */}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('projects.project1Description')} {/* Translated project description */}
      </Typography>
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/projects"
        >
          {t('projects.backToProjects')} {/* Translated button text */}
        </Button>
      </Box>
    </Box>
  );
}

export default Project1Page;
