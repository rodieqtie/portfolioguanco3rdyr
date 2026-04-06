import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, GitBranch, Link2 } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <Link to="/" className="logo brand-block">
        <img src="/images/profile.jpg" alt="Rod Christian H. Guanco" className="brand-avatar" />
        <span>
          <strong>Rod Guanco</strong>
          <small>BSIT 2nd Year</small>
        </span>
      </Link>
      <nav className={isMenuOpen ? 'active' : ''}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={toggleMenu}>Home</Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={toggleMenu}>About</Link>
        <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={toggleMenu}>Projects</Link>
        <Link to="/services" className={location.pathname === '/services' ? 'active' : ''} onClick={toggleMenu}>Tech Stacks</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={toggleMenu}>Contact</Link>
      </nav>
      <div className="navbar-right">
        <div className="social-nav">
          <a href="https://github.com/rodguanco" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
            <GitBranch size={20} />
          </a>
          <a href="https://linkedin.com/in/rodguanco" className="social-link" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <Link2 size={20} />
          </a>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <div className="hamburger" onClick={toggleMenu}>Menu</div>
      </div>
    </header>
  );
};

export default Navbar;
