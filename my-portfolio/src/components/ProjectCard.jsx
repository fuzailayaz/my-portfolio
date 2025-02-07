import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      className="project-card glass-card"
      initial={{ y: 100, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
    >
      <h3>{project.title}</h3>

      {/* Tech Stack Badges */}
      <div className="tech-stack">
        {(Array.isArray(project.tech) ? project.tech : []).map((tech, i) => (
          <span key={i} className="tech-pill">{tech}</span>
        ))}
      </div>

      <p>{project.description}</p>

      {/* View Details Link */}
      <a 
        href={project.link || '#'} 
        className="project-link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        View Details →
      </a>
    </motion.div>
  );
};

export default ProjectCard; // ✅ Ensures correct import