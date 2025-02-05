import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase"; // Path to firebase.js
import { Container, TextField, Button, Typography, Box, Alert } from '@mui/material'; // Import MUI components

const Auth = () => {
  const [passwordInput, setPasswordInput] = useState(""); // Track the first password input
  const [email, setEmail] = useState(""); // Track email for Firebase login
  const [password, setPassword] = useState(""); // Track password for Firebase login
  const [isFirstPasswordCorrect, setIsFirstPasswordCorrect] = useState(false); // Track if first password is correct
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track if user is authenticated via Firebase
  const [isAdmin, setIsAdmin] = useState(false); // Track if user is an admin
  const [errorMessage, setErrorMessage] = useState(""); // Track error message
  const navigate = useNavigate();

  const correctFirstPassword = import.meta.env.VITE_ADMIN_PASSWORD; // First password from .env

  const handleFirstPasswordSubmit = (e) => {
    e.preventDefault();
    // Check if the first password is correct
    if (passwordInput === correctFirstPassword) {
      setIsFirstPasswordCorrect(true); // Unlock the admin login page
    } else {
      setErrorMessage("Incorrect first password! Please try again.");
    }
  };

  const handleFirebaseLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sign In with Firebase Authentication
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully");

      // After successful sign-in, check if user is the admin
      const user = auth.currentUser; // Get current authenticated user

      const idTokenResult = await user.getIdTokenResult();
      if (idTokenResult.claims.admin) {
        setIsAuthenticated(true); // Allow access if admin
        setIsAdmin(true); // Set admin status
        navigate("/admin"); // Redirect to the admin page
      } else {
        setIsAuthenticated(true);
        navigate("/home"); // Redirect regular user to the home page
      }
    } catch (error) {
      console.error("Error:", error.message);
      setErrorMessage("Incorrect email or password. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign the user out of Firebase
      setIsAuthenticated(false);
      setIsAdmin(false);
      navigate("/"); // Redirect to home or login page
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  // Step 1: First password protection (before Firebase login)
  if (!isFirstPasswordCorrect) {
    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 3,
            borderRadius: 1,
            boxShadow: 3,
            backgroundColor: 'transparent',
            color: 'white',
          }}
        >
          <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
            Enter First Password to Access Admin Login:
          </Typography>
          {errorMessage && (
            <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
              {errorMessage}
            </Alert>
          )}
          <form onSubmit={handleFirstPasswordSubmit} style={{ width: '100%' }}>
            <TextField
              variant="outlined"
              label="First Password"
              type="password"
              fullWidth
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required
              sx={{
                mb: 2,
                '& .MuiInputLabel-root': { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: 'white' },
                  '&.Mui-focused fieldset': { borderColor: 'white' },
                  color: 'white',
                },
              }}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#115293' } }}>
              Unlock Admin Login
            </Button>
          </form>
        </Box>
      </Container>
    );
  }

  // Step 2: Firebase login after first password verification
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 3,
          borderRadius: 1,
          boxShadow: 3,
          backgroundColor: 'transparent',
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ color: 'white' }}>
          Admin Login
        </Typography>
        {errorMessage && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {errorMessage}
          </Alert>
        )}
        <form onSubmit={handleFirebaseLoginSubmit} style={{ width: '100%' }}>
          <TextField
            variant="outlined"
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{
              mb: 2,
              '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
                color: 'white',
              },
            }}
          />
          <TextField
            variant="outlined"
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            sx={{
              mb: 2,
              '& .MuiInputLabel-root': { color: 'white' },
              '& .MuiOutlinedInput-root': {
                '& fieldset': { borderColor: 'white' },
                '&.Mui-focused fieldset': { borderColor: 'white' },
                color: 'white',
              },
            }}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#115293' } }}>
            Sign In
          </Button>
        </form>

        {isAdmin && (
          <>
            <Typography variant="body1" sx={{ color: 'white', mt: 2 }}>
              You are now in Admin Mode
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#d32f2f', '&:hover': { backgroundColor: '#9a0007' }, mt: 2 }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        )}
      </Box>
    </Container>
  );
};

export default Auth;
