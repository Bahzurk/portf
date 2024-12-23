import { Box, TextField, Button, Typography } from '@mui/material';

function ContactPage() {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      p: 3 
    }}>
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      
      <form noValidate autoComplete="off" style={{ width: '100%', maxWidth: 500 }}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ mb: 2 }} // Adds margin-bottom to space out the fields
        />
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
          sx={{ mb: 2 }} // Adds margin-bottom to space out the fields
        />
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          sx={{ mb: 3 }} // Adds margin-bottom to space out the fields
        />
        <Button 
          variant="contained" 
          color="primary" 
          type="submit" 
          sx={{ mt: 2 }} // Adds margin-top to space out the button from the message field
        >
          Send Message
        </Button>
      </form>
    </Box>
  );
}

export default ContactPage;
