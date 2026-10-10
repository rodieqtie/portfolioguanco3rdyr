import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ReactTyped } from 'react-typed';
import { ArrowRight, Code2, GraduationCap, Monitor, Sparkles } from 'lucide-react';

const stats = [
  { num: '5+', label: 'Showcase Projects' },
  { num: '2nd', label: 'Year BSIT Student' },
  { num: '12+', label: 'Frontend Skills' },
  { num: '4', label: 'Ready Demos' }
];

const quickPillars = [
  {
    title: 'Student Builder',
    text: 'I treat every school task and personal experiment as a chance to build something polished and useful.'
  },
  {
    title: 'Visual Thinker',
    text: 'I enjoy combining clean code with strong layouts so projects feel modern, clear, and professional.'
  },
  {
    title: 'Growth Focused',
    text: 'My goal is constant improvement through practice, iteration, and real project-based learning.'
  }
];

const premiumHighlights = [
  {
    icon: GraduationCap,
    title: 'Academic Foundation',
    text: 'Built around my journey as a 3rd year BSIT student at Western Institute of Technology.'
  },
  {
    icon: Code2,
    title: 'Frontend Craft',
    text: 'Focused on React, Vite, responsive layouts, interactive sections, and cleaner component structure.'
  },
  {
    icon: Sparkles,
    title: 'Presentation Quality',
    text: 'Designed to feel more premium, intentional, and showcase-ready for internships and project reviews.'
  }
];

const journey = [
  {
    title: 'Current Mission',
    text: 'Strengthening my frontend foundation by building websites that feel modern, responsive, and visually refined.'
  },
  {
    title: 'How I Learn',
    text: 'I learn by building, revising, and improving real interfaces instead of staying only in theory.'
  },
  {
    title: 'Why It Matters',
    text: 'I want every new project to show stronger design thinking, better code structure, and clearer communication.'
  }
];

const testimonials = [
  {
    quote: "Rod's portfolio shows strong momentum for a student developer and a clear eye for presentation.",
    author: 'Faculty Perspective',
    role: 'Academic Impression'
  },
  {
    quote: 'The interface direction feels more intentional than a basic class project and shows real frontend curiosity.',
    author: 'Peer Feedback',
    role: 'Student Developer View'
  },
  {
    quote: 'There is a clear effort to turn practice work into something polished and portfolio-worthy.',
    author: 'Mentor Insight',
    role: 'Growth Potential'
  }
];

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero hero-premium">
        <div className="hero-content fade-in-element">
          <span className="eyebrow">Portfolio 2026 Edition</span>
          <h1 className="hero-title">
            Rod Christian H. Guanco
            <span className="hero-typed">
              <ReactTyped
                strings={['3rd Year BSIT Student', 'Frontend-Focused Builder', 'Western Institute of Technology']}
                typeSpeed={75}
                backSpeed={45}
                loop
              />
            </span>
          </h1>
          <p className="intro">I build student projects and portfolio experiences that combine modern frontend development, clean presentation, and practical learning.</p>
          <p className="hero-summary">
            This site is designed as a premium showcase of my identity, my progress in web development, and the kind of thoughtful project presentation I want to keep improving.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              <Monitor size={18} /> Explore Projects
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Let&apos;s Connect
            </Link>
          </div>
          <div className="hero-tags">
            <span>React</span>
            <span>Vite</span>
            <span>Responsive UI</span>
            <span>Student Projects</span>
          </div>
        </div>
        <div className="hero-image fade-in-element">
          <div className="profile-frame">
            <img src="/images/profile.jpg" alt="Rod Guanco" className="profile" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Identity</span>
          <h2>Student Profile</h2>
        </div>
        <div className="info-grid">
          {quickPillars.map((item) => (
            <div key={item.title} className="card premium-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Overview</span>
          <h2>Portfolio At A Glance</h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label} className="card stat-card fade-in-element">
              <h3>{stat.num}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Strengths</span>
          <h2>What Makes This Portfolio Stronger</h2>
        </div>
        <div className="tech-stack">
          {premiumHighlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="card premium-card">
                <Icon size={38} className="glow accent-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Growth</span>
          <h2>My Journey So Far</h2>
        </div>
        <div className="info-grid">
          {journey.map((item) => (
            <div key={item.title} className="card premium-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Featured Work</span>
          <h2>Visual Showcase</h2>
        </div>
        <div className="projects">
          <div className="card premium-card">
            <div className="project-image">
              <img src="/images/project.jpg" alt="Featured project preview" />
            </div>
            <h3>Project Presentation</h3>
            <p>Featured project visuals that show how I present my work in a cleaner and more polished way.</p>
          </div>
          <div className="card premium-card">
            <div className="project-image">
              <img src="/images/letsgo.jpg" alt="Motivation visual" />
            </div>
            <h3>Creative Energy</h3>
            <p>A supporting visual that adds personality and momentum to the overall brand of the portfolio.</p>
          </div>
          <div className="card premium-card">
            <div className="project-image">
              <img src="/images/profile.jpg" alt="Personal profile" />
            </div>
            <h3>Personal Identity</h3>
            <p>My real profile image anchors the site and makes the portfolio feel more authentic and personal.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="eyebrow">Impression</span>
          <h2>How My Work Reads</h2>
        </div>
        <div className="projects">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="card premium-card testimonial-card">
              <p>&quot;{testimonial.quote}&quot;</p>
              <div className="testimonial-meta">
                <strong>{testimonial.author}</strong>
                <small>{testimonial.role}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section callout-section fade-in-element">
        <div className="callout-card">
          <div>
            <span className="eyebrow">Next Step</span>
            <h2>Explore The Full Project Collection</h2>
            <p>See the student projects, tools, and portfolio work that define my current direction as a frontend-focused BSIT student.</p>
          </div>
          <Link to="/projects" className="btn btn-primary">
            Visit Projects <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
