import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Skills = () => {
  useEffect(() => {
    gsap.from(".skill-bar", { duration: 1, width: 0, ease: "power4.out", stagger: 0.2 });
  }, []);

  const skills = [
    { name: 'React', level: 90 },
    { name: 'JavaScript', level: 95 },
    { name: 'Node.js', level: 85 },
    { name: 'HTML/CSS', level: 98 },
    { name: 'Bootstrap', level: 90 },
    { name: 'Git', level: 92 },
  ];

  return (
    <section id="skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Skills</h2>
        <div className="row">
          {skills.map((skill, index) => (
            <div key={index} className="col-md-6">
              <div className="skill">
                <h4>{skill.name}</h4>
                <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;