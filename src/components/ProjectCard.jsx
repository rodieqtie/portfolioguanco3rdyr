import { motion } from 'framer-motion';
import { ArrowUpRight, GitBranch, Monitor } from 'lucide-react';

const ProjectCard = ({ title, description, image, technologies, github, live, highlights = [] }) => {
  const hasGitHub = Boolean(github && github.trim());
  const hasLive = Boolean(live && live.trim());

  return (
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
          {hasLive && (
            <a href={live} className="project-link" target="_blank" rel="noreferrer" aria-label={`Open ${title} live preview`}>
              <Monitor size={20} />
            </a>
          )}
          {hasGitHub && (
            <a href={github} className="project-link" target="_blank" rel="noreferrer" aria-label={`Open ${title} on GitHub`}>
              <GitBranch size={20} />
            </a>
          )}
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
        {(hasGitHub || hasLive) && (
          <div className="project-links">
            {hasGitHub && (
              <a href={github} target="_blank" rel="noreferrer"><GitBranch size={16} /> GitHub</a>
            )}
            {hasLive && (
              <a href={live} target="_blank" rel="noreferrer"><ArrowUpRight size={16} /> Live Demo</a>
            )}
          </div>
        )}
        {!hasGitHub && !hasLive && (
          <div className="project-links">
            <span className="tech-tag project-status">In progress</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
