import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, Monitor } from 'lucide-react';

const ProjectCard = ({ title, description, image, technologies, github, live, highlights = [] }) => (
  <motion.div
    className="card fade-in-element premium-card project-card"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <div className="project-image">
      <img
        src={image}
        alt={title}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = '/images/project.jpg';
        }}
      />
      <div className="project-overlay">
        <a href={live} className="project-link" target="_blank" rel="noreferrer">
          <Monitor size={20} />
        </a>
        <a href={github} className="project-link" target="_blank" rel="noreferrer">
          <GitBranch size={20} />
        </a>
      </div>
    </div>
    <div className="project-content">
      <span className="eyebrow">Case Study</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {highlights.length > 0 && (
        <ul className="project-highlights">
          {highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      )}
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub</a>
        <a href={live} target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> Live Demo</a>
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
