import React from 'react';
import {
  FaTools,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaCode,
  FaEye,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTwitter,
  FaInstagram,
  FaAws,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiFlutter,
  SiLeetcode,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
} from 'react-icons/si';

import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Carousel } from 'react-bootstrap';
import ContactForm from '../src/components/contactForm';

const homePageImages = [
  'https://i.ibb.co/wNFYdZ4r/homepage1.jpg',
  'https://i.ibb.co/xt1XG8mP/homepage2.jpg',
  'https://i.ibb.co/B5X2KgHF/homepage3.jpg',
  'https://i.ibb.co/0yvvtVBj/homepage4.jpg',
];

const skills = [
  { name: 'HTML 5', icon: <FaHtml5 className="text-danger" /> },
  { name: 'CSS 3', icon: <FaCss3Alt className="text-primary" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-warning" /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-400" /> },
  { name: 'React.js', icon: <FaReact className="text-info" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'FlutterFlow', icon: <SiFlutter className="text-cyan-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-500" /> },
  { name: 'RESTful APIs', icon: <FaDatabase className="text-success" /> },
  { name: 'Sequelize (ORM)', icon: <SiSequelize className="text-blue-300" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-500" /> },
  { name: 'Git', icon: <FaGitAlt className="text-danger" /> },
  { name: 'GitHub', icon: <FaGithub className="text-white text-3xl" /> },
  { name: 'AWS', icon: <FaAws className="text-orange-500" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
];

const projects = [
  {
    name: 'Task Management App',
    description:
      'A web-based task management application that allows users to create, edit, delete, and track their daily tasks efficiently. It includes user authentication and real-time task updates.',
    technologies: 'React, Node.js, PostgreSQL, JWT Authentication',
    features: [
      'User authentication (JWT-based login & signup)',
      'Create, update, and delete tasks',
      'Drag and drop to manage task priorities',
      'Progress tracking with status updates',
    ],
    images: [
      'https://i.ibb.co/LbWHh3w/Task3.jpg',
      'https://i.ibb.co/prdzgJjW/Task1.jpg',
      'https://i.ibb.co/gMpbhZCX/Task2.jpg',
    ],
    link: 'https://github.com/SanjeevVE/Task-Todo',
    demo: 'https://new-task-todo.netlify.app/'
  },
  {
    name: 'Communication Suite',
    description:
      'A robust messaging system that allows businesses to send OTPs and transactional messages via multiple channels like SMS, WhatsApp, and Email.',
    technologies: 'Node.js, Express, Twilio API, PostgreSQL',
    features: [
      'Supports SMS, WhatsApp, and Email OTPs',
      'Secure API endpoints for message delivery',
      'Rate limiting & spam protection',
      'Message delivery tracking',
    ],
    images: [
      'https://i.ibb.co/p6cxVmM0/Communication1.jpg',
      'https://i.ibb.co/d0H7MvNy/Communication2.jpg',
      'https://i.ibb.co/5hccwYBQ/Communication3.jpg',
    ]
  },
  {
    name: 'Certificate Generator',
    description:
      'An online tool that allows institutions and organizations to generate professional-looking certificates dynamically with personalized details.',
    technologies: 'React, Tailwind CSS',
    features: [
      'Custom certificate templates',
      'Dynamic name & course insertion',
      'PDF export functionality',
      'Dark & light mode support',
    ],
    images: [
      'https://i.ibb.co/Q73drTjp/Certificate1.jpg',
      'https://i.ibb.co/fVbGhFbY/Certificate2.jpg',
      'https://i.ibb.co/35XXw6W3/Certificate3.jpg',
    ],
    link: 'https://github.com/SanjeevVE/Fast-Certify',
    demo: 'https://fast-certify.netlify.app/'
  },
];

const Portfolio = () => {
  return (
    <motion.div
      id="header"
      className="container-fluid text-center d-flex flex-column align-items-center justify-content-center"
      style={{
        background:
          'linear-gradient(135deg, rgba(2, 31, 42, 0.9) 0%, rgba(2, 0, 36, 0.9) 80%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        minHeight: '100vh',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        paddingTop: '100px',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <header className="mb-4 d-flex flex-column align-items-center text-center">
        <motion.div
          className="d-flex align-items-center gap-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div style={{
            width: '200px',
            height: '200px',
            borderRadius: '20%',
            border: '4px solid #14ace5',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)'
          }}>
            <img
              src="/LinkedInProfile1.png"
              alt="Sanjeev V E"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          <motion.h1
            className="display-2 fw-bold text-light"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello, I'm <span className="text-warning">Sanjeev V E</span>
          </motion.h1>
        </motion.div>

        <motion.p
          className="fs-3 mt-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <Typewriter
            options={{
              strings: [
                'A Passionate Developer',
                'A Problem Solver',
                'A Software Engineer',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.p>

        <button
          className="btn btn-warning mt-3"
          onClick={() =>
            document
              .getElementById('projects')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          View My Projects
        </button>
        <button
          className="btn btn-outline-warning mt-3 ms-3"
          onClick={() =>
            document
              .getElementById('contact')
              .scrollIntoView({ behavior: 'smooth' })
          }
        >
          Contact Me
        </button>
      </header>

      <div className="container mt-5">
        <Carousel fade interval={2000} className="mb-5 shadow-lg rounded">
          {homePageImages.map((image, index) => (
            <Carousel.Item key={index}>
              <div style={{ 
                height: '500px', 
                width: '100%', 
                overflow: 'hidden',
                borderRadius: '8px'
              }}>
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Homepage image ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>


      {/* Skills */}

      <section
        id="skills"
        className="text-center py-5 w-100"
        style={{
          backgroundColor: '#0f172a',
          color: '#ffffff',
          marginBottom: '80px',
        }}
      >
        <h2 className="fw-bold text-warning mb-4">
          I have experience with these technologies
        </h2>
        <div className="container">
          <div className="row justify-content-center">
            {skills.map((skill, index) => (
              <div key={index} className="col-6 col-md-3 col-lg-2 mb-4">
                <div className="p-4 d-flex flex-column align-items-center shadow-lg rounded bg-dark">
                  <div className="fs-1">{skill.icon}</div>
                  <p className="mt-2 fw-bold text-light">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Projects */}

      <section
        id="projects"
        className="py-5 w-100"
        style={{
          background: 'linear-gradient(135deg, #0a192f, #122c51)',
          color: '#ffffff',
          marginBottom: '80px',
        }}
      >
        <motion.h2
          className="display-4 fw-bold text-center mb-5"
          style={{
            color: '#14ace5',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          My Projects
        </motion.h2>

        <div className="container">
          {projects.map(
            (
              { name, description, technologies, features, link, demo, images, deployed },
              index
            ) => (
              <div
                key={name}
                className={`row align-items-center mb-5 ${
                  index % 2 !== 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className="col-md-6">
                  <div className="p-3 bg-dark rounded shadow-lg" style={{ height: '350px' }}>
                    <Carousel fade interval={1500} style={{ height: '100%' }}>
                      {images.map((image, idx) => (
                        <Carousel.Item key={idx} style={{ height: '320px' }}>
                          <div style={{ 
                            height: '320px', 
                            width: '100%', 
                            overflow: 'hidden',
                            borderRadius: '6px'
                          }}>
                            <img
                              src={image}
                              alt={`${name} screenshot ${idx + 1}`}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                            />
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  </div>
                </div>

                <div className="col-md-6">
                  <div
                    className="p-4 rounded shadow-lg"
                    style={{
                      backgroundColor: '#1b2b44',
                      borderLeft: '5px solid #14ace5',
                    }}
                  >
                    <h3 className="fw-bold" style={{ color: '#14ace5' }}>
                      {name}
                    </h3>
                    <p className="fs-5">{description}</p>
                    <p className="fw-bold text-light">
                      <span className="text-info">Technologies:</span>{' '}
                      {technologies}
                    </p>
                    <ul className="text-light">
                      {features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>

                    <div className="mt-3 d-flex align-items-center flex-wrap gap-2">
                      {link && (
                        <a href={link} className="btn btn-outline-info">
                          <FaCode className="me-2" /> Code
                        </a>
                      )}
                      {demo && (
                        <a href={demo} className="btn btn-info">
                          <FaEye className="me-2" /> Demo
                        </a>
                      )}
  
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </section>

      

      {/* Contact */}

      <section
        id="contact"
        className="mb-5 text-center w-100"
        style={{
          backgroundColor: '#131921',
          color: '#ffffff',
          padding: '50px 0',
        }}
      >
        <motion.h2 className="h2 fw-semibold mb-4 text-warning">
          Contact Me
        </motion.h2>

        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 d-flex align-items-stretch">
              <div className="p-4 shadow-lg rounded bg-dark w-100 d-flex flex-column justify-content-center text-center">
                <div className="mb-4" style={{
                  width: '150px',
                  height: '150px',
                  margin: '0 auto',
                  borderRadius: '20%',
                  border: '4px solid #ffc107',
                  overflow: 'hidden'
                }}>
                  <img
                    src="/LinkedInProfile1.png"
                    alt="Sanjeev V E"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>

                <h3 className="fw-bold text-warning mb-3">My Details</h3>
                <div className="d-flex align-items-center gap-3 justify-content-center">
                  <FaPhone className="fs-2 text-warning" />
                  <p className="fs-5 mb-0">+91 9600402172</p>
                </div>
                <div className="d-flex align-items-center gap-3 justify-content-center mt-3">
                  <FaEnvelope className="fs-2 text-warning" />
                  <p className="fs-5 mb-0">sanjeeveswaramoorthy@gmail.com</p>
                </div>

                <div className="mt-4">
                  <a
                    href="https://drive.google.com/file/d/1-hz6QCoiu3MLE1LCIRW5mWZyqt8gbuL3/view?usp=sharing"
                    className="btn btn-warning px-4 py-2"
                  >
                    📄 Download Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md-6 d-flex align-items-stretch">
              <div className="p-4 shadow-lg rounded bg-dark w-100 d-flex flex-column justify-content-center">
                <h3 className="fw-bold text-warning mb-3 text-center">
                  Give your Feedback
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h4 className="text-light">Connect with me on Social Media</h4>
            <div className="d-flex justify-content-center gap-4 mt-3">
              <a
                href="https://github.com/SanjeevVE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning fs-1"
              >
                <FaGithub className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjeev-v-e-389422192"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning fs-1"
              >
                <FaLinkedin className="social-icon" />
              </a>
              <a
                href="https://leetcode.com/u/sanjeeveswaramoorthy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning fs-1"
              >
                <SiLeetcode className="social-icon" />
              </a>
              <a
                href="https://x.com/Sanjeev262001"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning fs-1"
              >
                <FaTwitter className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/sanjeev_v_e/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warning fs-1"
              >
                <FaInstagram className="social-icon" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <button
        className="btn btn-outline-info m-3"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        🔝 Back to Top
      </button>

      <footer
        className="text-center py-3 w-100"
        style={{
          backgroundColor: '#0a192f',
          color: '#ffffff',
          fontSize: '1rem',
          letterSpacing: '1px',
          position: 'relative',
          bottom: '0',
          width: '100vw',
        }}
      >
        <div className="container">
          <p className="mb-0">
            🚀 Portfolio by
            <span className="text-warning fw-bold"> Sanjeev V E</span> ©{' '}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Portfolio;