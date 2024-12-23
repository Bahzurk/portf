import { Box, TextField, Button, Typography, Paper } from '@mui/material';

function ContactPage() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        p: 3, 
        backgroundColor: '#f5f5f5' 
      }}
    >
      <Typography 
        variant="h3" 
        gutterBottom
        sx={{ color: '#333', fontWeight: 'bold', textAlign: 'center' }} 
      >
        Contact Me
      </Typography>

      <Paper 
        elevation={3} 
        sx={{
          p: { xs: 2, sm: 4 }, 
          width: '100%',
          maxWidth: 600, 
          backgroundColor: '#fff', 
          borderRadius: 2,
        }}
      >
        <form noValidate autoComplete="off" style={{ width: '100%' }}>
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ mb: 2 }} 
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            margin="normal"
            sx={{ mb: 2 }} 
          />
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            sx={{ mb: 3 }} 
          />
          <Button 
            variant="contained" 
            color="primary" 
            type="submit" 
            sx={{ 
              mt: 2, 
              width: '100%' 
            }}
          >
            Send Message
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default ContactPage;
