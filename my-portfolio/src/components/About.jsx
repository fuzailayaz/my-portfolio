import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">About Me</h2>
        <div className="row">
          <div className="col-md-6">
            <img src="https://via.placeholder.com/400" alt="Profile" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <p className="lead">
              I am a software developer with a strong passion for creating innovative solutions. I specialize in full-stack development, with expertise in React, Node.js
              , and modern web technologies. I have experience building scalable and efficient applications that solve real-world problems.
            </p>
            <p>
              My journey in software development began with a curiosity for how things work, and it has grown into a career where I continuously learn and adapt to new technologies. I enjoy collaborating with teams to deliver high-quality products and am always eager to take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;