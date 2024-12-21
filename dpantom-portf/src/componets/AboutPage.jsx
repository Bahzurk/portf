import { Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';

function AboutPage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 3 }}>
      <Card sx={{ maxWidth: 500, textAlign: 'center' }}>
        <CardContent>
          <Avatar sx={{ bgcolor: blue[500], width: 100, height: 100, margin: '0 auto 16px' }}>
            A
          </Avatar>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            I'm a front-end developer with a passion for creating beautiful and functional websites. I specialize in building
            responsive and interactive web applications using modern tools like React, Material-UI, and more.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AboutPage;
