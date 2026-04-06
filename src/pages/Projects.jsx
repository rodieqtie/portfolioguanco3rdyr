import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { GitBranch } from 'lucide-react';
import { studentProjects } from './StudentProjects.js';

const projectNotes = [
  {
    title: 'Purpose',
    text: 'Each project is presented not only as code, but as a complete visual case study with clear highlights and tools.'
  },
  {
    title: 'Presentation',
    text: 'I want project pages to feel premium, readable, and easy to scan for recruiters, teachers, or collaborators.'
  },
  {
    title: 'Direction',
    text: 'This collection will grow into a stronger record of my progress in React, UI structure, and frontend execution.'
  }
];

const Projects = () => (
  <>
    <Navbar />
    <section className="section fade-in-element">
      <div className="section-heading">
        <span className="eyebrow">Projects</span>
        <h1>Student Work With Stronger Presentation</h1>
      </div>
      <p className="intro">A curated showcase of real builds, learning projects, and frontend practice pieces presented with a more premium portfolio style.</p>
      <div className="projects">
        {studentProjects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}
      </div>
      <div className="info-grid">
        {projectNotes.map((note) => (
          <div key={note.title} className="card premium-card">
            <h3>{note.title}</h3>
            <p>{note.text}</p>
          </div>
        ))}
      </div>
      <div className="callout-card compact-callout">
        <div>
          <span className="eyebrow">Portfolio Direction</span>
          <h3>More Projects Will Continue To Refine This Collection</h3>
          <p>As I complete more coursework and personal builds, this page will become a stronger reflection of both my technical skill and design maturity.</p>
        </div>
        <a href="https://github.com/rodguanco" className="btn btn-primary" target="_blank" rel="noreferrer">
          <GitBranch size={18} /> View GitHub
        </a>
      </div>
    </section>
    <Footer />
  </>
);

export default Projects;
