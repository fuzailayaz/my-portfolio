import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Project 1',
      description: 'A full-stack web application built with React and Node.js, designed to streamline project management tasks.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'An e-commerce platform with a responsive design and secure payment integration.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      title: 'Project 3',
      description: 'A real-time chat application using WebSocket and React for seamless communication.',
      image: 'https://via.placeholder.com/300',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.link} className="btn btn-custom">View Project</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;