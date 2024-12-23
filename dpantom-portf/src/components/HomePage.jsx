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
      I’m a front-end developer with a passion for creating visually appealing and user-friendly websites. I specialize in building responsive, interactive web applications using modern tools like React, Material-UI, and other front-end technologies. My goal is to craft seamless, functional, and aesthetically pleasing experiences for users.

I have a strong background in UX/UI design from Miami University, where I gained a deep understanding of design principles, user behavior, and how to create intuitive interfaces that users enjoy interacting with. This foundation in design plays a significant role in my development process, ensuring that functionality and user experience are always top priorities.

While I am currently focused on front-end development, I have a growing interest in the fields of IT and cybersecurity. I am eager to expand my technical knowledge and skills, and I aspire to eventually transition into these areas to work on the security and infrastructure side of technology.

In addition, I have limited proficiency in Russian and plan to continue developing my language skills. I believe this will open up exciting career opportunities down the road, particularly in global or multinational tech environments.

As I continue my journey in tech, I’m excited about the future and the opportunities to diversify my skill set while exploring new challenges in IT and cybersecurity.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/about">
        Learn More About Me
      </Button>
    </Box>
  );
}

export default HomePage;
