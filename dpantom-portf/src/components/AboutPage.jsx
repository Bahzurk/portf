// eslint-disable-next-line no-unused-vars
import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AboutPage() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        p: 3,
      }}
    >
      <Card sx={{ maxWidth: 500, textAlign: "center" }}>
        <CardContent>
          <Avatar
            sx={{
              bgcolor: blue[500],
              width: 100,
              height: 100,
              margin: "0 auto 16px",
            }}
          >
            M
          </Avatar>
          <Typography variant="h4" gutterBottom>
            {t("about.title")} {/* Translated 'About Me' title */}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("about.intro")}
            <strong>{t("about.role")}</strong> {/* Translated job role */}
            {t("about.technologies")}
            <strong>{t("about.tools.react")}</strong>,
            <strong>{t("about.tools.materialUI")}</strong>,
            {t("about.tools.materialFiller")}
            <strong>{t("about.tools.modernTech")}</strong>.
            {t("about.expertise")}
            <strong>{t("about.field")}</strong>
            {t("about.education.school")}, {t("about.education.focus")}
          </Typography>
          <Typography variant="body1" paragraph>
            {t("about.languages.currentFocus")}
            <strong>{t("about.languages.futureGoals")}</strong>
            {t("about.languages.languageSkills")}
          </Typography>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/projects"
            sx={{ mt: 3 }}
          >
            {t("about.cta.buttonText")} {/* Translated button text */}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AboutPage;
