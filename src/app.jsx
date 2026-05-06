import { Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';


function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Home Page</h2>
      <p>Welcome to the Home page! This is the main landing area.</p>
    </div>
  );
}

function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>About Page</h2>
      <p>This is the About page where you can learn more about us.</p>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Contact Page</h2>
      <p>Get in touch with us on the Contact page.</p>
    </div>
  );
}


function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', margin: '0 auto', maxWidth: '800px' }}>
      <nav style={{ padding: '15px 20px', backgroundColor: '#f0f0f0', borderRadius: '8px', marginTop: '20px' }}>
        <ul style={{ listStyleType: 'none', display: 'flex', gap: '30px', padding: 0, margin: 0 }}>
          <li>
            <Link to="/home" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>About</Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Contact</Link>
          </li>
        </ul>
      </nav>

      <main style={{ marginTop: '20px', border: '1px solid #eee', borderRadius: '8px', minHeight: '300px' }}>
        <Routes>
          {/* Redirect the root path to /home */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          
          {/* Define the routes for the pages */}
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
