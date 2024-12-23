// /components/HomePage.jsx
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
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
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1" paragraph>
        I'm a passionate developer showcasing my work. Explore my projects and learn more about me.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/about">
        Learn More About Me
      </Button>
    </Box>
  );
}

export default HomePage;
