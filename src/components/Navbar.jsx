import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, GitBranch } from 'lucide-react';

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
          <small>3rd Year BSIT Student</small>
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
          <a href="https://github.com/rodieqtie" className="social-link" target="_blank" rel="noopener noreferrer" title="GitHub">
            <GitBranch size={20} />
          </a>
          <a href="https://www.facebook.com/pipoyhernia6" className="social-link" target="_blank" rel="noopener noreferrer" title="Facebook">
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false">
              <path
                d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.2c0-.9.3-1.5 1.6-1.5H16V2.8c-.4-.1-1.6-.2-3-.2-3 0-5 1.8-5 5.2v2.9H5.6V13h2.4v8h5.5Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          type="button"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <div className="hamburger" onClick={toggleMenu}>Menu</div>
      </div>
    </header>
  );
};

export default Navbar;
