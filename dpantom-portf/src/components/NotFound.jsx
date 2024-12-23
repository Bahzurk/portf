// /components/NotFoundPage.jsx
import 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default NotFound;
