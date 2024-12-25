import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, Drawer, List, ListItem, ListItemText, IconButton, useMediaQuery, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon
import LanguageSwitcher from './LanguageSwitcher'; // Import LanguageSwitcher component
import { useTheme } from '@mui/material/styles';  // For breakpoints

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen is small
  const [drawerOpen, setDrawerOpen] = useState(false); // State to control drawer

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Michael Szurko
        </Typography>

        {/* Show Hamburger Menu Icon on Mobile */}
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={() => toggleDrawer(true)} // Open the drawer
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            {/* Drawer for Mobile */}
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={() => toggleDrawer(false)} // Close the drawer
            >
              <List>
                <ListItem button component={Link} to="/" onClick={() => toggleDrawer(false)}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/about" onClick={() => toggleDrawer(false)}>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem button component={Link} to="/projects" onClick={() => toggleDrawer(false)}>
                  <ListItemText primary="Projects" />
                </ListItem>
                <ListItem button component={Link} to="/contact" onClick={() => toggleDrawer(false)}>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          // Show horizontal nav on desktop
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/projects">
              Projects
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Box>
        )}

        <LanguageSwitcher />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
