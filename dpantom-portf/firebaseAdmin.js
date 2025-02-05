import admin from 'firebase-admin';
import path from 'path';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config(); // Load environment variables from the .env file

// Load the service account key dynamically from the environment variable
const serviceAccountPath = process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH;

if (!serviceAccountPath) {
  throw new Error("Missing FIREBASE_SERVICE_ACCOUNT_KEY_PATH in .env file");
}

// Ensure the service account file exists
const resolvedPath = path.resolve(serviceAccountPath);
console.log("Resolved Path:", resolvedPath); // Debug: check the path
if (!fs.existsSync(resolvedPath)) {
  throw new Error(`Service account file does not exist at the resolved path: ${resolvedPath}`);
}

// Read the service account file and parse it
const serviceAccount = JSON.parse(fs.readFileSync(resolvedPath, 'utf8'));

// Log the service account to verify its structure
console.log("Service Account:", serviceAccount); // Debugging log

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

console.log("Firebase Admin SDK initialized successfully!");

// Function to assign the admin role to a user
export const setAdminRole = async (uid) => {
  try {
    await admin.auth().setCustomUserClaims(uid, { admin: true });
    console.log(`Admin role assigned to user: ${uid}`);
  } catch (error) {
    console.error("Error assigning admin role:", error);
  }
};

// Function to check if a user has admin privileges
export const checkAdminStatus = async (uid) => {
  try {
    const user = await admin.auth().getUser(uid);
    return user.customClaims?.admin === true; // Returns true if the user is an admin
  } catch (error) {
    console.error("Error checking admin status:", error);
    return false;
  }
};
