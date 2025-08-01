import React, { useState, useEffect } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Download, Menu, X } from 'lucide-react';
// import photo from "C:\FullStackDevelopmenttranning\portfoilo\Portfoilo\src\assets\Screenshot 2025-04-27 093514.png";
const Port = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "SnapCart",
      category: "Full-Stack Development",
      description: "Built a full-stack e-commerce authentication system with secure admin/user registration and login with profile image upload.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      tech: ["React", "React Router", "Axios", "Node.js", "MongoDB", "Multer"],
      link: "#"
    },
    // {
    //   id: 2,
    //   title: "User Authentication System",
    //   category: "Web Development",
    //   description: "Developed a secure login and registration system using React and Firebase Authentication with real-time database integration.",
    //   image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    //   tech: ["React", "Firebase", "Authentication", "Real-time Database"],
    //   link: "#"
    // },
    {
      id: 3,
      title: "High Quality Image Generation",
      category: "Web Development",
      description: "Developed a web app using JavaScript that generates high-quality images through Unsplash API integration with responsive interface.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["JavaScript", "HTML/CSS", "Fetch API", "JSON", "Unsplash API"],
      link: "#"
    },
    // {
    //   id: 4,
    //   title: "Smart Helmet",
    //   category: "IoT Development",
    //   description: "A safety device for motorcyclists with sensors to detect accidents in real-time and send alerts with GPS location to emergency services.",
    //   image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
    //   tech: ["Arduino Uno", "GSM Module", "GPS", "Sound Sensor", "Battery"],
    //   link: "#"
    // }
  ];

  const skills = [
    { name: "Python", level: 75 },
    { name: "Java", level: 65 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 70 },
    { name: "HTML/CSS", level: 80 },
    { name: "Firebase", level: 65 }
  ];

  const experience = [
    {
      title: "JavaScript Developer Intern",
      company: "Slash Mark",
      period: "May 2024 - July 2024",
      description: "Learned JavaScript for Web Development and applied problem-solving and OOP principles through practical projects."
    },
    {
      title: "Student - Computer Science",
      company: "Madanapalle Institute of Technology & Science",
      period: "2021 - Present",
      description: "Currently pursuing CSIT with CGPA 8.47. Active in web development workshops and technical competitions."
    },
    {
      title: "Technical Workshop Participant",
      company: "MITS College",
      period: "2023",
      description: "Participated in Web Development Workshop focusing on HTML, CSS, and JavaScript basics. Also took part in College-Level Tech Quiz."
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo">
              Portfolio
            </div>
            
            {/* Desktop Navigation */}
            <div className="nav-desktop">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="nav-mobile">
            <div className="nav-mobile-content">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="nav-mobile-link"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div 
          className="hero-bg"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="hero-avatar">
            <div className="avatar-circle">
              {/* <img src="\src\assets\a.jpeg" alt="SMD ZAID" /> */}
              {/* <img src="/a.jpeg" alt="SMD ZAID" /> */}
              <img src="/a.jpeg" alt="SMD ZAID" />
            </div>
          </div>
        <div className="hero-content">
          <h1 className="hero-title">
            Shaik Mohammed Zaid
          </h1>
          
          <p className="hero-subtitle">
            Full Stack Developer & Computer Science Student
          </p>
          
          <p className="hero-description">
            CSIT student at MITS with expertise in web development and cloud computing. 
            Passionate about creating innovative solutions using modern technologies like React, Node.js, and Python.
          </p>
          
          <div className="hero-buttons">
            <button 
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary"
            >
              View My Work
              <ChevronRight size={20} className="btn-icon" />
            </button>
            <a href="\src\assets\zaid-resuma-UP.pdf" download className="btn btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
              <Download size={20} className="btn-icon-left" />
              Download
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
              I'm a passionate Computer Science student at Madanapalle Institute of Technology & Science 
              with a strong foundation in web development and cloud computing. My journey began with 
              curiosity about technology and has evolved into expertise in modern web technologies.
            </p>
            <p className="about-text">
              I specialize in Python, Java, and JavaScript, with hands-on experience in React, Node.js, 
              and database technologies. I've completed multiple projects including e-commerce platforms, 
              authentication systems, and IoT solutions. I believe in continuous learning and solving 
              real-world problems through code.
            </p>
            
            <div className="about-details">
              <div className="experience-section">
                <h3 className="subsection-title">Experience</h3>
                <div className="experience-list">
                  {experience.map((exp, index) => (
                    <div key={index} className="experience-item">
                      <h4 className="experience-title">{exp.title}</h4>
                      <p className="experience-company">{exp.company}</p>
                      <p className="experience-period">{exp.period}</p>
                      <p className="experience-description">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="skills-section">
                <h3 className="subsection-title">Skills</h3>
                <div className="skills-list">
                  {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                      <div className="skill-header">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div 
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              Here are some of my recent projects that showcase my skills and passion for creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                  />
                  <div className="project-category">
                    <span>{project.category}</span>
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    className="project-link"
                  >
                    View Project
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-description">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info-section">
              <h3 className="contact-subtitle">Let's Connect</h3>
              <p className="contact-text">
                I'm always open to discussing new opportunities, creative ideas, or potential collaborations.
              </p>
              
              <div className="contact-details">
                <div className="contact-detail">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>
                  <div className="contact-detail-content">
                    <p className="contact-label">Email</p>
                    <p className="contact-value">shaikmohammadzaid8786@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>
                  <div className="contact-detail-content">
                    <p className="contact-label">Phone</p>
                    <p className="contact-value">+91 8096622823</p>
                  </div>
                </div>
                
                <div className="contact-detail">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-detail-content">
                    <p className="contact-label">Location</p>
                    <p className="contact-value">Rayachoty, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
              
              <div className="social-links">
                <a href="https://github.com/zaidshaik09" 
                  target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={20} aria-label="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/shaikzaid09" 
                  target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={20} aria-label="LinkedIn" />
                </a>
              </div>
            </div>
            
            <div className="contact-form-section">
              <div className="contact-form">
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Your Name"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea 
                    rows={5}
                    className="form-textarea"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button 
                  type="button"
                  className="form-submit"
                  onClick={() => alert('Message sent! (This is a demo)')}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              © 2024 Shaik Mohammed Zaid. All rights reserved. Built with React and CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Port;