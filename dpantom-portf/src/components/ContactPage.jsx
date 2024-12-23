// /components/ContactPage.jsx
import { Box, TextField, Button, Typography } from '@mui/material';

function ContactPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', p: 3 }}>
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ maxWidth: 500 }}
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ maxWidth: 500 }}
        />
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          sx={{ maxWidth: 500 }}
        />
        <Button variant="contained" color="primary" type="submit">
          Send Message
        </Button>
      </form>
    </Box>
  );
}

export default ContactPage;
