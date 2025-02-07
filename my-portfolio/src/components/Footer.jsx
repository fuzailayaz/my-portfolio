import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: 'bi-github', url: 'https://github.com/fuzailayaz' },
    { icon: 'bi-linkedin', url: 'https://linkedin.com/in/fuzailayaz' },
    { icon: 'bi-envelope', url: 'mailto:fuzailayaz@icloud.com' }
  ];

  const currentYear = new Date().getFullYear(); // ✅ Better readability

  return (
    <footer className="bg-dark-2 py-5">
      <div className="container text-center">
        <div className="social-links mb-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3 text-teal-400 fs-4"
            >
              <motion.i className={`bi ${link.icon}`} whileHover={{ scale: 1.2 }} />
            </a>
          ))}
        </div>
        <p className="text-muted">
          © {currentYear} Muhammad Fuzail Ayaz. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer; // ✅ Changed to default export to match import in App.js