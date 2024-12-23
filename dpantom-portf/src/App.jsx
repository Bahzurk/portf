import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/HomePage';
import About from './components/AboutPage';
import Contact from './components/ContactPage';
import Projects from './components/ProjectsPage';
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Navbar will remain at the top */}
        <Navbar />
        
        {/* Main content will take the remaining space */}
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
