import { TagCloud } from '@frank-mayer/react-tag-cloud';
import { useScroll } from '@react-spring/three';

const Skills = () => {
  const { scrollYProgress } = useScroll();

  return (
    <section
      id="skills"
      className="py-5 skills-section"
      style={{ transform: `scale(${1 + scrollYProgress * 0.1})` }}
    >
      <TagCloud
        options={(w) => ({
          radius: Math.min(600, w.innerWidth) / 3,
          maxSpeed: "fast",
          initSpeed: "normal",
          direction: 135,
          keep: true
        })}
        className="skill-cloud"
      >
        {[
          "Python", "Machine Learning", "TensorFlow", 
          "Django", "React", "AWS", "Docker", 
          "Kubernetes", "NLP", "CI/CD", "Git",
          "SQL", "NoSQL", "JavaScript", "Go"
        ]}
      </TagCloud>
    </section>
  );
};

export default Skills; // ✅ Ensuring default export