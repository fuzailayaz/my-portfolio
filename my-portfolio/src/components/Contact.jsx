import { useSpring, animated } from '@react-spring/web';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

 const Contact = () => {
  const [formSpring, setFormSpring] = useSpring(() => ({
    opacity: 0,
    y: 50
  }));

  useEffect(() => {
    setTimeout(() => {
      setFormSpring({ opacity: 1, y: 0 });
    }, 200);
  }, [setFormSpring]);

  return (
    <section id="contact" className="py-5 min-vh-100">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        
        <animated.div style={formSpring} className="row glass-card p-5">
          <div className="col-md-6">
            <motion.div whileHover={{ scale: 1.05 }} className="mb-4">
              <h3 className="text-teal-400 mb-4">Contact Details</h3>
              <p className="text-white">
                <i className="bi bi-geo-alt me-2"></i>
                Hazaribagh, Jharkhand, India
              </p>
              <p className="text-white">
                <i className="bi bi-phone me-2"></i>
                +91 7986789643
              </p>
              <p className="text-white">
                <i className="bi bi-envelope me-2"></i>
                fuzailayaz@icloud.com
              </p>
            </motion.div>
          </div>
          
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control bg-transparent text-white"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control bg-transparent text-white"
                  placeholder="Email"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control bg-transparent text-white"
                  rows="5"
                  placeholder="Message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="btn btn-primary" // ✅ Ensured proper styling
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </animated.div>
      </div>
    </section>
  );
};
export default Contact;