import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';

function AboutPage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 3 }}>
      <Card sx={{ maxWidth: 500, textAlign: 'center' }}>
        <CardContent>
          <Avatar sx={{ bgcolor: blue[500], width: 100, height: 100, margin: '0 auto 16px' }}>
            M
          </Avatar>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
          I’m a <strong>front-end developer</strong> passionate about creating responsive, user-friendly websites using <strong>React</strong>, <strong>Material UI</strong>, and modern web technologies. With a strong background in <strong>UX/UI design</strong> from Miami University, I focus on building seamless, intuitive experiences that prioritize <strong>both</strong> functionality and design.

Currently, I’m focused on front-end development but am eager to expand into <strong>IT</strong> and <strong>cybersecurity</strong>. I’m also working to improve my <strong>Russian</strong>, which I see as a valuable asset for future global opportunities.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AboutPage;
