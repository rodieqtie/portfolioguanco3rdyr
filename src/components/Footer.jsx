import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <span className="eyebrow">Portfolio</span>
        <h4>Rod Christian H. Guanco</h4>
        <p>3rd Year BSIT Student</p>
        <p>Western Institute of Technology</p>
        <p>Iloilo City, Philippines</p>
      </div>
      <div className="footer-section">
        <span className="eyebrow">Explore</span>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Tech Stacks</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <span className="eyebrow">Core Focus</span>
        <ul>
          <li>React and Vite Development</li>
          <li>Responsive UI and Layout Design</li>
          <li>Project Presentation and Portfolio Growth</li>
        </ul>
      </div>
      <div className="footer-section">
        <span className="eyebrow">Direction</span>
        <p>Built to present school work, personal growth, and a more premium frontend identity as a student developer.</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2026 Rod Christian H. Guanco. Crafted with React, Vite, and a stronger premium design direction.</p>
    </div>
  </footer>
);

export default Footer;
