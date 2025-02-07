import { useSpring, animated } from '@react-spring/web';
import { Canvas } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';

const Hero = () => {
  const springs = useSpring({
    from: { y: 50, opacity: 0 },
    to: { y: 0, opacity: 1 },
  });

  return (
    <section className="hero vh-100 d-flex align-items-center">
      <div className="container">
        <animated.div style={springs} className="text-center">
          <Canvas camera={{ position: [0, 0, 5] }} style={{ width: "100%", height: "400px" }}>
            <ambientLight intensity={0.5} />
            <Center rotation={[-0.2, 0, 0]}>
              <Text3D
                font={`${process.env.PUBLIC_URL}/fonts/Inter_Bold.json`}
                size={0.75}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelSize={0.02}
              >
                FUZAIL AYAZ
                <meshStandardMaterial color="#2dd4bf" metalness={0.7} />
              </Text3D>
            </Center>
          </Canvas>
          <p className="mt-4 h5 text-muted">AI/ML Engineer | Full-Stack Developer</p>
          <div className="mt-4 social-links">
            <a 
              href="https://github.com/fuzailayaz" 
              className="mx-2 text-decoration-none text-teal-400"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="bi bi-github fs-3"></i>
            </a>
            <a 
              href="https://linkedin.com/in/fuzailayaz" 
              className="mx-2 text-decoration-none text-teal-400"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin fs-3"></i>
            </a>
            <a 
              href="mailto:fuzailayaz@icloud.com" 
              className="mx-2 text-decoration-none text-teal-400"
            >
              <i className="bi bi-envelope fs-3"></i>
            </a>
          </div>
        </animated.div>
      </div>
    </section>
  );
};

export default Hero;