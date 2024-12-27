// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Box, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 

const projects = [
  {
    title: 'projects.project1', // Translation key for project title
    description: 'projects.project1Description', // Translation key for project description
    link: '/projects/project-1',
  },
  {
    title: 'projects.project2',
    description: 'projects.project2Description',
    link: '/projects/project-2',
  },
  {
    title: 'projects.project3',
    description: 'projects.project3Description',
    link: '/projects/project-3',
  },
  {
    title: 'projects.project4',
    description: 'projects.project4Description',
    link: '/projects/project-4',
  },
];

function ProjectsPage() {
  const { t } = useTranslation(); 

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h3" gutterBottom align="center">
        {t('projects.title')} {/* Translated page title */}
      </Typography>
      <Grid container spacing={4}>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {t(project.title)} {/* Translated project title */}
                  </Typography>
                  <Typography variant="body2" paragraph>
                    {t(project.description)} {/* Translated project description */}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={project.link}
                    fullWidth
                  >
                    {t('projects.viewProject')} {/* Translated button text */}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" color="textSecondary" align="center" fullWidth>
            {t('projects.noProjects')} {/* Translated text for no projects */}
          </Typography>
        )}
      </Grid>
      {/* Add Contact Me Button */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button 
          variant="contained" 
          color="primary" 
          component={Link} 
          to="/contact" 
          size="large"
          sx={{ mt: 3 }}
        >
          {t('projects.buttonText')} {/* Translated 'Contact Me' button text */}
        </Button>
      </Box>
    </Box>
  );
}

export default ProjectsPage;
