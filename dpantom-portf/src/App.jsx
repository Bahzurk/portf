import 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/HomePage';
import About from './components/AboutPage';
import Contact from './components/ContactPage';
import Projects from './components/ProjectsPage';
import Project1Page from './components/ProjectSubpages/Project1Page';
import Project2Page from './components/ProjectSubpages/Project2Page';
import Project3Page from './components/ProjectSubpages/Project3Page';
import Project4Page from './components/ProjectSubpages/Project4Page';
import Project5Page from './components/ProjectSubpages/Project5Page';
import Project6Page from './components/ProjectSubpages/Project6Page';
import NotFound from './components/NotFound';
import Auth from './components/Auth';

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
            <Route path="/projects/project-1" element={<Project1Page />} />
            <Route path="/projects/project-2" element={<Project2Page />} />
            <Route path="/projects/project-3" element={<Project3Page />} />
            <Route path="/projects/project-4" element={<Project4Page />} />
            <Route path="/projects/project-5" element={<Project5Page />} />
            <Route path="/projects/project-6" element={<Project6Page />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} /> {/* Route for Auth page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
