// eslint-disable-next-line no-unused-vars
import React, { useRef } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import emailjs from '@emailjs/browser';

function ContactPage() {
  const { t } = useTranslation(); // Initialize the translation hook
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_yv7zqfn', 'template_4ta2sck', form.current, 'DZsiZXKoNPkuNDxmq')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert(t('contact.successMessage')); // Translated success message
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert(t('contact.errorMessage')); // Translated error message
        }
      );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        p: 3,
        backgroundColor: '#f5f5f5',
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ color: '#333', fontWeight: 'bold', textAlign: 'center' }}
      >
        {t('contact.title')} {/* Translated title */}
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
        <form ref={form} onSubmit={sendEmail} noValidate autoComplete="off" style={{ width: '100%' }}>
          <TextField
            name="user_name"
            label={t('contact.nameLabel')} // Translated 'Your Name' label
            variant="outlined"
            fullWidth
            margin="normal"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            name="user_email"
            label={t('contact.emailLabel')} // Translated 'Your Email' label
            variant="outlined"
            fullWidth
            margin="normal"
            required
            type="email"
            sx={{ mb: 2 }}
          />
          <TextField
            name="message"
            label={t('contact.messageLabel')} // Translated 'Your Message' label
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            required
            sx={{ mb: 3 }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            sx={{
              mt: 2,
              width: '100%',
            }}
          >
            {t('contact.buttonText')}
          </Button>
        </form>
      </Paper>
    </Box>
  );
}

export default ContactPage;
