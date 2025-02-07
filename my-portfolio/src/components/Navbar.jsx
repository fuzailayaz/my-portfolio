import { Container, Navbar, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const NavbarComponent = () => {
  const navItems = [
    { name: 'About', target: 'about' },
    { name: 'Projects', target: 'projects' },
    { name: 'Skills', target: 'skills' },
    { name: 'Contact', target: 'contact' }
  ];

  return (
    <Navbar expand="lg" className="fixed-top glass-nav py-3">
      <Container>
        {/* Animated Brand Name */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <Navbar.Brand className="text-teal-400 fs-3 fw-bold">
            FUZAIL.dev
          </Navbar.Brand>
        </motion.div>

        {/* Navbar Toggle Button for Mobile View */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Navbar Content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.target}
                  spy={true}
                  smooth={true}
                  offset={-70} // Adjust based on navbar height
                  duration={500}
                  className="nav-link text-white"
                  activeClass="active-link"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent; // ✅ Ensures correct import in App.js
