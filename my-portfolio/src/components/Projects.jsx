import { useSpring, animated } from '@react-spring/web';
import ProjectCard from './ProjectCard'; // ✅ Corrected import

const projects = [
  {
    title: "Intelligent Bug Tracking",
    tech: ["Python", "NLP", "Flask"],
    description: "AI-powered bug resolution platform with ML classification",
    link: "https://github.com/fuzailayaz"
  },
];

const Projects = () => {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200
  });

  return (
    <section id="projects" className="py-5">
      <animated.div style={springs}>
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </animated.div>
    </section>
  );
};

export default Projects; // ✅ Ensuring default export