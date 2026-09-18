// SkillsSection.jsx
// Shows your skills two ways: animated 3D balls (with category filtering) or
// a flat view with static icons grouped by category. Users can toggle between
// the two views.


import { useState, useEffect } from "react";
import {
 //Avatar,
  Box,
  //Button,
  Chip,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import TechBall from "./TechBall";


// Put matching icon files in /public/tech-icons/ (e.g. react.png, node.png)
const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "languages", label: "Languages" },
  { id: "libraries", label: "Libraries & Frameworks" },
  { id: "tools", label: "Tools" },
];


const SKILLS = [
  { name: "React", icon: "/tech-icons/libraries/react.png", category: "libraries" },
  { name: "Node.js", icon: "/tech-icons/libraries/nodedotjs.png", category: "libraries" },
  { name: "Tailwind CSS", icon: "/tech-icons/libraries/tailwindcss.png", category: "libraries" },
  { name: "MaterialUI", icon: "/tech-icons/libraries/mui.png", category: "libraries" },


  { name: "CSS", icon: "/tech-icons/languages/css.png", category: "languages" },
  { name: "JavaScript", icon: "/tech-icons/languages/javascript.png", category: "languages" },
  { name: "HTML", icon: "/tech-icons/languages/html5.png", category: "languages" },
  { name: "TypeScript", icon: "/tech-icons/languages/typescript.png", category: "languages" },
  { name: "Swift", icon: "/tech-icons/languages/swift.png", category: "languages" },


  { name: "Docker", icon: "/tech-icons/tools/docker.png", category: "tools" },
  { name: "Terraform", icon: "/tech-icons/tools/terraform.png", category: "tools" },
  { name: "Git", icon: "/tech-icons/tools/git.png", category: "tools" },
  { name: "Firebase", icon: "/tech-icons/tools/firebase.png", category: "tools" },
  { name: "VMWare", icon: "/tech-icons/tools/vmware.png", category: "tools" },
  { name: "Linux", icon: "/tech-icons/tools/linux.png", category: "tools" },
];


export default function SkillsSection() {
  // Default to animated on desktop/tablet, flat on mobile — but the user
  // can override with the toggle below.
  const [animated, setAnimated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");


  useEffect(() => {
    setAnimated(window.innerWidth >= 768);
  }, []);


  const visibleSkills =
    selectedCategory === "all"
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === selectedCategory);


  return (
    <Box sx={{ my: 6 }}>
      {/* Toggle — lets the user pick flat icons or animated 3D balls */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Typography variant="body2" color={animated ? "text.secondary" : "text.primary"}>
            Flat
          </Typography>
          <Switch
            checked={animated}
            onChange={(e) => setAnimated(e.target.checked)}
            name="animated-toggle"
            color="primary"
          />
          <Typography variant="body2" color={animated ? "text.primary" : "text.secondary"}>
            Animated
          </Typography>
        </Box>
      </Box>


      {/* Category filter — only shown in animated mode. Flat mode displays
          all categories at once with section headers. */}
      {animated && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 4 }}>
          {CATEGORIES.map((category) => (
            <Chip
              key={category.id}
              label={category.label}
              clickable
              color={selectedCategory === category.id ? "primary" : "default"}
              variant={selectedCategory === category.id ? "filled" : "outlined"}
              onClick={() => setSelectedCategory(category.id)}
            />
          ))}
        </Box>
      )}


      {/* Flat view — all categories displayed at once, static icons + names */}
            {/* Flat view — vertical category groups side by side */}
      {!animated && (
        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
          {CATEGORIES.filter((c) => c.id !== "all").map((category) => {
            const categorySkills = SKILLS.filter((s) => s.category === category.id);

            return (
              <Grid item xs={12} sm={6} md={4} key={category.id}>
                <Box
                  sx={{
                    height: "100%",
                    p: 2.5,
                    borderRadius: 3,
                    border: "1px solid",
                    borderColor: "divider",
                    backgroundColor: "background.paper",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <Typography
                    variant="h6"
                    textAlign="center"
                    sx={{ mb: 2, fontWeight: 700 }}
                  >
                    {category.label}
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1.25,
                    }}
                  >
                    {categorySkills.map((skill) => (
                      <Box
                        key={skill.name}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          p: 1.25,
                          borderRadius: 2,
                          border: "1px solid",
                          borderColor: "divider",
                          backgroundColor: "background.default",
                          transition: "transform 0.2s ease, box-shadow 0.2s ease",
                          "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: "0 6px 16px rgba(0, 0, 0, 0.08)",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={skill.icon}
                          alt={skill.name}
                          sx={{
                            width: 32,
                            height: 32,
                            objectFit: "contain",
                            flexShrink: 0,
                          }}
                        />

                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {skill.name}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      )}


      {/* Animated 3D view — filtered by selected category */}
      {animated && (
        <Grid container spacing={2} justifyContent="center">
          {visibleSkills.map((skill) => (
            <Grid item xs={4} sm={2} key={skill.name}>
              <TechBall iconUrl={skill.icon} hoverIconUrl={skill.hoverIcon} />
              <Typography variant="caption" display="block" textAlign="center">
                {skill.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}