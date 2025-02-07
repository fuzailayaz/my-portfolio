import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { motion, useScroll } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Canvas className="canvas">
        <Stars radius={100} depth={50} count={5000} factor={4} />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />

      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
    </motion.main>
  );
};

export default App; // ✅ Ensuring default export