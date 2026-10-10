import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const qualities = [
  {
    title: 'Creative Thinking',
    text: 'I enjoy translating ideas into interfaces that feel clean, modern, and visually balanced.'
  },
  {
    title: 'Student Discipline',
    text: 'I approach learning with patience, curiosity, and the mindset that each build should teach me something new.'
  },
  {
    title: 'Premium Presentation',
    text: 'I care about how projects look, read, and guide the viewer, not just whether they technically work.'
  }
];

const timeline = [
  {
    stage: 'Foundation',
    text: 'Started building confidence in HTML, CSS, JavaScript, and responsive layout basics.'
  },
  {
    stage: 'Frontend Growth',
    text: 'Moved into React and Vite to create more interactive, reusable, and modern interfaces.'
  },
  {
    stage: 'Portfolio Direction',
    text: 'Now focused on presenting my work in a more polished and internship-ready way.'
  }
];

const About = () => (
  <>
    <Navbar />
    <section className="about-container section">
      <div className="about-text fade-in-element">
        <span className="eyebrow">About Me</span>
        <h1>Building My Identity As A Student Developer</h1>
        <h3>3rd Year BSIT Student | Western Institute of Technology</h3>
        <p>My name is Rod Christian H. Guanco, and I am currently a 3rd year Bachelor of Science in Information Technology student at Western Institute of Technology in Iloilo City.</p>
        <p>I am especially interested in frontend development because it allows me to combine technical problem solving with design, structure, and presentation. I enjoy creating interfaces that are responsive, easy to understand, and visually refined.</p>
        <p>This portfolio is part of that growth. It is not just a collection of pages, but a representation of how I think, how I learn, and how I want my work to be seen.</p>
        <div className="skills">
          <h3>Core Skills</h3>
          <ul>
            <li>React.js, Vite, Routing, Hooks</li>
            <li>HTML5, CSS3, JavaScript ES6+</li>
            <li>Responsive Layouts and UI Structure</li>
            <li>Node.js Basics and REST API Integration</li>
            <li>Git, GitHub, Deployment Workflows</li>
            <li>Portfolio and Project Presentation</li>
          </ul>
        </div>
      </div>
      <div className="about-image fade-in-element">
        <img src="/images/profile.jpg" alt="Rod profile" className="about-photo" />
        <img src="/images/project.jpg" alt="Featured project" className="about-photo" />
        <img src="/images/logo.jpg" alt="Project logo" className="about-photo" />
        <img src="/images/letsgo.jpg" alt="Lets Go group project" className="about-photo" />
      </div>
    </section>

    <section className="section">
      <div className="section-heading">
        <span className="eyebrow">Mindset</span>
        <h2>Personal Highlights</h2>
      </div>
      <div className="info-grid">
        {qualities.map((quality) => (
          <div key={quality.title} className="card premium-card">
            <h3>{quality.title}</h3>
            <p>{quality.text}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="section">
      <div className="section-heading">
        <span className="eyebrow">Timeline</span>
        <h2>Growth As A Developer</h2>
      </div>
      <div className="timeline-grid">
        {timeline.map((item) => (
          <div key={item.stage} className="card premium-card timeline-card">
            <span className="timeline-badge">{item.stage}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>

    <Footer />
  </>
);

export default About;
