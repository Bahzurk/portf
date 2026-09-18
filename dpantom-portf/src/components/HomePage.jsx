// eslint-disable-next-line no-unused-vars
import React from "react";
import { Box, Typography, Button, Grid, Card, CardActionArea, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SkillsSection from "./SkillsSection";

// Edit these to your actual featured projects
const FEATURED_PROJECTS = [
  { title: "Project 1", description: "Short one-line description.", to: "/projects/project-1" },
  { title: "Project 2", description: "Short one-line description.", to: "/projects/project-2" },
  { title: "Project 3", description: "Short one-line description.", to: "/projects/project-3" },
];

function HomePage() {
  const { t } = useTranslation();

  return (
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      {/* Hero */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "70vh",
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          {t("homepage.welcome")}
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: 600 }}>
          {t("homepage.description")}
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/about">
          {t("homepage.learnMore")}
        </Button>
      </Box>

      {/* Skills */}
      <SkillsSection />

      {/* Featured projects */}
      <Box sx={{ px: { xs: 2, md: 6 }, pb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom textAlign="center" sx={{ mb: 4 }}>
          Featured Work
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {FEATURED_PROJECTS.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <Card>
                <CardActionArea component={Link} to={project.to}>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default HomePage;