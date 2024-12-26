import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import { useTheme } from '@mui/material/styles';  // For breakpoints
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import LanguageSwitcher from './LanguageSwitcher'; // Import LanguageSwitcher component

function Navbar() {
  const { t } = useTranslation(); // Initialize translation hook
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is small
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* On Mobile, Move Hamburger to the Left */}
        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => toggleDrawer(true)} // Open the drawer
            aria-label="menu"
            sx={{ position: 'absolute', left: 16 }} // Position the hamburger menu to the left
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ flexGrow: 1 }} /> // On desktop, take up space to center the name
        )}

        {/* Center the Name on Desktop */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: isMobile ? 'right' : 'center' }}>
          {t('navbar.title')}  {/* Translated navbar title */}
        </Typography>

        {/* Show Hamburger Menu Icon on Mobile */}
        {isMobile ? (
          // Drawer for Mobile
          <Drawer
            anchor="left" // Move drawer to the left for better UX
            open={drawerOpen}
            onClose={() => toggleDrawer(false)} // Close the drawer
          >
            <List>
              {/* Translated navigation links */}
              <ListItem button component={Link} to="/" onClick={() => toggleDrawer(false)}>
                <ListItemText primary={t('navbar.home')} />
              </ListItem>
              <ListItem button component={Link} to="/about" onClick={() => toggleDrawer(false)}>
                <ListItemText primary={t('navbar.about')} />
              </ListItem>
              <ListItem button component={Link} to="/projects" onClick={() => toggleDrawer(false)}>
                <ListItemText primary={t('navbar.projects')} />
              </ListItem>
              <ListItem button component={Link} to="/contact" onClick={() => toggleDrawer(false)}>
                <ListItemText primary={t('navbar.contact')} />
              </ListItem>
            </List>
          </Drawer>
        ) : (
          // Show horizontal nav on desktop
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              {t('navbar.home')}
            </Button>
            <Button color="inherit" component={Link} to="/about">
              {t('navbar.about')}
            </Button>
            <Button color="inherit" component={Link} to="/projects">
              {t('navbar.projects')}
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              {t('navbar.contact')}
            </Button>
          </Box>
        )}

        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
