import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Database, Globe, Wrench, Brain, User, GraduationCap, Briefcase, FolderOpen, Star, ChevronDown, Menu, X, Download } from 'lucide-react';


// Header Component
const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];


  const handleDownloadResume = async () => {
    try {
      // First, try to fetch the PDF to check if it exists
      const response = await fetch('/assets/Bharathesh_resume.pdf');
      
      if (!response.ok) {
        // If PDF doesn't exist, show an alert
        alert('Resume PDF not found. Please make sure Saniha_resume.pdf is placed in the public/assets/ folder.');
        return;
      }

      // Create download link
      const link = document.createElement('a');
      link.href = '/assets/Bharathesh_resume.pdf';
      link.download = 'Bharathesh_resume.pdf';
      link.target = '_blank'; // Open in new tab as fallback
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: try to open in new tab
      window.open('/assets/Saniha_resume.pdf', '_blank');
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Bharathesh K
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ['Java Developer', 'Problem Solver', 'Tech Enthusiast', 'Innovator'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Bharathesh K
          </h1>
          <div className="text-xl md:text-2xl text-gray-700 mb-8 h-8">
            <span className="animate-pulse">
              {texts[currentText]}
            </span>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate programming enthusiast driven to solve complex problems and continuously learn and grow. 
            Making meaningful contributions to innovative projects in the world of technology.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/Bharathesh004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bharathesh-k"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="flex justify-center">
            <ChevronDown size={32} className="text-gray-400 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <User className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate programming enthusiast currently pursuing my Master's in Computer Application. 
                With a strong foundation in Java development and problem-solving skills, I've tackled over 250+ LeetCode problems, 
                demonstrating my commitment to continuous learning and growth.
              </p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Star className="text-yellow-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">My Goal</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To contribute meaningfully to innovative projects and make a lasting impact in the world of technology. 
                I believe in the power of code to solve real-world problems and create positive change.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-1 rounded-2xl">
              <div className="bg-white p-8 rounded-2xl">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto flex items-center justify-center">
                    <Code size={48} className="text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">250+</h3>
                  <p className="text-gray-600">LeetCode Problems Solved</p>
                  <div className="flex justify-center space-x-4 text-sm text-gray-500">
                    <span>• Java Developer</span>
                    <span>• Problem Solver</span>
                    <span>• Tech Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Education Section Component
const EducationSection = () => {
  const education = [
    {
      degree: "Master Of Computer Application",
      institution: "Shree Devi Institute Of Technology Kenjar",
      duration: "Dec 2023 - Sep 2025",
      cgpa: "8.7",
      description: "Advanced studies in computer applications with focus on software development and system design."
    },
    {
      degree: "Bachelor Of Computer Application",
      institution: "Shree Devi Institute Of Technology Ballalbag",
      duration: "Aug 2020 - Sep 2023",
      cgpa: "7.5",
      description: "Comprehensive foundation in computer applications, programming, and software engineering principles."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <GraduationCap className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    CGPA: {edu.cgpa}
                  </span>
                  <span className="text-gray-600 text-sm">{edu.duration}</span>
                </div>
              </div>
              <p className="text-gray-700 font-medium mb-2">{edu.institution}</p>
              <p className="text-gray-600">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center mb-4 md:mb-0">
              <Briefcase className="text-blue-600 mr-3" size={24} />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Java Developer Intern</h3>
                <p className="text-gray-700 font-medium">CODTECH IT SOLUTION</p>
              </div>
            </div>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
              Dec 2024 - Jan 2025
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-gray-700">
                Learned and applied Java Swing and AWT to build interactive and user-friendly desktop applications.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <p className="text-gray-700">
                Developed a GUI-based application with features such as form validation, event handling, 
                and dynamic UI components to enhance user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code className="text-blue-600" size={24} />,
      skills: ["Java", "Python", "JavaScript"],
      color: "blue"
    },
    {
      title: "Web / Backend",
      icon: <Globe className="text-green-600" size={24} />,
      skills: ["HTML", "CSS", "React", "Flask"],
      color: "green"
    },
    {
      title: "Databases",
      icon: <Database className="text-purple-600" size={24} />,
      skills: ["MySQL", "MySQL Workbench"],
      color: "purple"
    },
    {
      title: "Tools",
      icon: <Wrench className="text-orange-600" size={24} />,
      skills: ["Git", "GitHub"],
      color: "orange"
    },
    {
      title: "Concepts",
      icon: <Brain className="text-indigo-600" size={24} />,
      skills: ["OOP", "DBMS", "Advance DSA", "OS"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 hover:border-blue-300",
      green: "bg-green-50 border-green-200 hover:border-green-300",
      purple: "bg-purple-50 border-purple-200 hover:border-purple-300",
      orange: "bg-orange-50 border-orange-200 hover:border-orange-300",
      indigo: "bg-indigo-50 border-indigo-200 hover:border-indigo-300"
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${getColorClasses(category.color)} p-6 rounded-2xl border-2 transition-all hover:shadow-lg hover:scale-105`}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold ml-3 text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Globe className="text-blue-600 mr-3" size={20} />
              Networking
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Network Troubleshooting", "LAN / WAN Configuration", "Firewall"].map((skill, index) => (
                <span key={index} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <User className="text-green-600 mr-3" size={20} />
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Communication", "Technical Documentation", "Problem Solving"].map((skill, index) => (
                <span key={index} className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: "Budget Control System",
      description: "A comprehensive finance management tool that helps users track their income and expenses efficiently. Features a user-friendly interface built with Python Tkinter and stores data securely using MySQL.",
      technologies: ["Python", "Tkinter", "MySQL", "Matplotlib"],
      features: [
        "User-friendly interface with Python Tkinter",
        "Secure data storage using MySQL",
        "Insightful spending summaries with visualizations",
        "Income and expense tracking"
      ]
    },
    {
      title: "AI Voice Assistant",
      description: "An AI-powered voice assistant using Python that processes voice commands, generates intelligent responses using OpenAI, and replies through speech synthesis.",
      technologies: ["Python", "OpenAI", "Speech Recognition", "Text-to-Speech"],
      features: [
        "Voice command processing",
        "OpenAI integration for intelligent responses",
        "Speech synthesis for audio replies",
        "Web searches and reminders functionality",
        "Hands-free conversational experience"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <FolderOpen className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {

    const handleDownloadResume = async () => {
    try {
      // First, try to fetch the PDF to check if it exists
      const response = await fetch('/assets/Bharathesh_resume.pdf');
      
      if (!response.ok) {
        // If PDF doesn't exist, show an alert
        alert('Resume PDF not found. Please make sure Saniha_resume.pdf is placed in the public/assets/ folder.');
        return;
      }

      // Create download link
      const link = document.createElement('a');
      link.href = '/assets/Bharathesh_resume.pdf';
      link.download = 'Bharathesh_resume.pdf';
      link.target = '_blank'; // Open in new tab as fallback
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: try to open in new tab
      window.open('/assets/Saniha_resume.pdf', '_blank');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Let's Connect!</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, 
              and connecting with fellow developers. Feel free to reach out!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">bharathkudupu6360@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Phone</p>
                  <p className="text-gray-600">6360724901</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <User className="text-purple-600" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Location</p>
                  <p className="text-gray-600">Kudupu, Mangalore</p>
                </div>
              </div>
            </div>


            
            
            <div className="mt-8 flex space-x-4">
              <a
                href="https://github.com/Bharathesh004"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/bharathesh-k"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-400 to-purple-500 p-1 rounded-2xl">
            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Mail size={32} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Ready to collaborate?</h4>
              <p className="text-gray-600 mb-6">
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you!
              </p>
              <a
                href="mailto:bharathkudupu6360@gmail.com"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all hover:scale-105 inline-block"
              >
                Send Message
              </a>
            </div>
          </div>

          <div className="mb-8">
         <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </button>
        </div>
      









        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          © 2025 Bharathesh K. Crafted with ❤️ and lots of code.
        </p>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="w-full flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <AboutSection />
          <EducationSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
      
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-in;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default App;