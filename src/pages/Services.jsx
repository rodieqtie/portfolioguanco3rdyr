import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import { Code2, Database, Layout, Monitor, Server, Smartphone, Sparkles, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building React and Vite interfaces with responsive behavior, cleaner structure, and modern interaction patterns.',
    icon: Code2
  },
  {
    title: 'UI Direction',
    description: 'Creating clearer page hierarchy, polished cards, and more intentional visual presentation across a whole website.',
    icon: Layout
  },
  {
    title: 'Student Project Builds',
    description: 'Turning school ideas into actual websites, dashboards, trackers, and portfolio-ready case studies.',
    icon: Server
  },
  {
    title: 'Responsive Experience',
    description: 'Designing layouts that stay readable and attractive across desktop, tablet, and mobile screens.',
    icon: Smartphone
  },
  {
    title: 'Portfolio Positioning',
    description: 'Presenting projects, strengths, and identity in a way that feels stronger for reviews, internships, and opportunities.',
    icon: Monitor
  },
  {
    title: 'Backend Foundations',
    description: 'Growing my comfort with Node.js, APIs, form handling, and the practical side of full-stack development.',
    icon: Database
  },
  {
    title: 'Workflow Discipline',
    description: 'Using Git, GitHub, iteration, and project structure to improve how I build and refine my work over time.',
    icon: Workflow
  },
  {
    title: 'Premium Finishing',
    description: 'Adding polish through spacing, consistency, motion, hierarchy, and better storytelling in each section.',
    icon: Sparkles
  }
];

const learningAreas = [
  'Improving reusable component design and cleaner page composition',
  'Strengthening premium UI styling without losing clarity and usability',
  'Building projects that are more portfolio-ready and easier to explain',
  'Practicing better structure for case studies and project storytelling'
];

const Services = () => (
  <>
    <Navbar />
    <section className="section fade-in-element">
      <div className="section-heading">
        <span className="eyebrow">Capabilities</span>
        <h1>Skills With A More Premium Edge</h1>
      </div>
      <p className="intro">These are the areas I am actively developing as I build stronger student projects and a more refined frontend portfolio.</p>
      <div className="services">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            {...service}
          />
        ))}
      </div>
      <div className="card checklist-card premium-card">
        <span className="eyebrow">In Progress</span>
        <h3>What I Am Improving Right Now</h3>
        <ul className="detail-list">
          {learningAreas.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
    <Footer />
  </>
);

export default Services;
