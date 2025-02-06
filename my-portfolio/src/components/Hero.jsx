import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center" style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <div className="container text-center">
        <h1 className="display-4">Hi, I'm [Muhammad Fuzail Ayaz]</h1>
        <p className="lead">A passionate Software Developer with expertise in building scalable and efficient applications.</p>
        <Link to="about" smooth={true} duration={500} className="btn btn-custom">Learn More</Link>
      </div>
    </section>
  );
};

export default Hero;