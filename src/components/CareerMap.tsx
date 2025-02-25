import React, { useState, useEffect } from 'react';
import { Map, Compass, Ship } from 'lucide-react';
import Image from 'next/image';

type LocationType = 'education' | 'experience' | 'projects' | 'skills' | 'profile' | 'contact' | 'specialization';

const CareerJourneyMap = () => {
  const [activeLocation, setActiveLocation] = useState(null);
  const [showScroll, setShowScroll] = useState(false);
  const [scrollContent, setScrollContent] = useState<any>({}); // Replace 'any' with proper type based on your data structure
  const [showLegend, setShowLegend] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<LocationType | null>(null);  
  // CV Data based on the provided information
  const cvData = {
    profile: {
      name: "Kiran Kandel",
      title: "Software Developer",
      description: "As a Software Engineer with a diverse background in web development and project management, I bring a robust skill set including RESTful API integration, full-stack development, and machine learning applications. My academic foundation in Computer Engineering is complemented by hands-on experience in building efficient, scalable web applications and a personal commitment to continuous technological advancement."
    },
    education: [
      {
        degree: "Bachelors in Computer Engineering",
        institution: "Himalaya College of Engineering",
        years: "2015-2019",
        details: "Core focus on software architecture and systems design principles."
      },
      {
        degree: "Masters in Information Technology",
        institution: "CDCSIT, Tribhuwan University",
        years: "2023-Present",
        details: "Specializing in advanced web technologies and AI applications."
      }
    ],
    experience: [
      {
        role: "Software Engineer",
        company: "Arthasoft Solutions",
        years: "2021-2024",
        description: "In my role at Arthasoft Solutions, I was pivotal in developing core features of our Node.js-based applications, with a particular emphasis on customizing and enhancing open source projects to meet our specific business needs. My responsibilities included optimizing application performance, implementing security best practices, and developing custom modules to extend the capabilities of existing systems. I worked closely with cross-disciplinary teams to integrate these custom solutions seamlessly, ensuring robust, scalable, and maintainable code across our product suite."
      },
      {
        role: "Software Engineer",
        company: "ReadyToWork Corp",
        years: "2020-2021",
        description: "At ReadyToWork Corp, I specialized as a Frontend Developer, crafting user-centric web applications using Next.js and React.js. My focus was on building scalable, server-side rendered solutions that improved SEO and performance, while delivering a seamless user experience. I led the implementation of responsive UIs, integrating RESTful services, and managing state with React Hooks and Context API. My commitment to clean, maintainable code and agile methodologies drove continuous application enhancements and cross-functional team collaboration."
      },
      {
        role: "Web Developer",
        company: "MBSYS Group",
        years: "2019-2020",
        description: "In my role at MBSYS Group, I led the development of RESTful services for e-commerce applications, significantly enhancing our platform's performance and scalability. I was responsible for the entire web application stack, from designing robust databases to creating dynamic front-end interfaces with ReactJS and Node.JS, including an innovative web crawler project."
      },
      {
        role: "Lecturer",
        company: "Yeti International College",
        years: "Part-time",
        description: "As a Lecturer in Computer Science with a focus on C programming and system analysis, I empowered students to grasp complex technical concepts and practical applications. I was responsible for curating the curriculum, delivering lectures, and facilitating hands-on lab sessions that reinforced core principles and coding practices."
      }
    ],
    projects: [
      {
        name: "E-commerce Platform",
        tech: ["Node.js", "React", "MongoDB"],
        description: "Full-stack e-commerce solution with payment gateway integration and advanced inventory management."
      },
      {
        name: "ML-based Recommendation Engine",
        tech: ["Python", "TensorFlow", "Flask"],
        description: "Personalized content recommendation system using collaborative filtering algorithms."
      },
      {
        name: "Web Crawler System",
        tech: ["Node.js", "JavaScript", "Redis"],
        description: "Distributed web crawler for e-commerce data extraction and competitive analysis."
      }
    ],
    skills: [
      { name: "JavaScript", level: 5, category: "Programming" },
      { name: "Java", level: 4, category: "Programming" },
      { name: "Python", level: 4, category: "Programming" },
      { name: "Rust", level: 3, category: "Programming" },
      { name: "React.js", level: 5, category: "Frontend" },
      { name: "Next.js", level: 4, category: "Frontend" },
      { name: "Node.js", level: 5, category: "Backend" },
      { name: "RESTful APIs", level: 5, category: "Backend" },
      { name: "System Design", level: 4, category: "Architecture" },
      { name: "Database Design", level: 4, category: "Data" },
      { name: "Data Analysis", level: 4, category: "Data" },
      { name: "Machine Learning", level: 3, category: "AI" },
      { name: "Prompt Engineering", level: 3, category: "AI" }
    ],
    contact: {
      phone: "+9779866555282",
      email: "kirankandel007@gmail.com",
      website: "kirankandel.com.np",
      location: "Kathmandu, Nepal"
    }
  };

  const handleLocationClick = (locationType: string, locationData: any) => {
    setActiveLocation(locationType as any);
    setScrollContent(locationData);
    setShowScroll(true);
  };

  const closeScroll = () => {
    setShowScroll(false);
  };

  const toggleLegend = () => {
    setShowLegend(!showLegend);
  };

  // Simulate gentle animation for map elements
  useEffect(() => {
    const interval = setInterval(() => {
      // This would typically update animation states
      // For example, wave positions or tree sway angles
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden font-serif">
      {/* Background Map Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/treasure_map.png")',
          filter: 'sepia(20%)'
        }}
      />

      {/* Map Overlay for better contrast */}
      <div className="absolute inset-0 bg-amber-900/10" />

      {/* Content Container */}
      <div className="relative z-10 w-full h-full p-8">
        {/* Map Header */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-center z-10 px-6 py-3 bg-amber-50/90 rounded-lg border-2 border-amber-900">
          <h1 className="text-3xl font-bold text-amber-900">My Journey</h1>
          <h2 className="text-lg italic text-amber-800">{cvData.profile.title}</h2>
        </div>

        {/* Interactive Elements - Positioned to match the map's landmarks */}
        <div className="absolute inset-0">
          {/* Projects */}
          <div 
            className="absolute top-1/4 left-1/3 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => handleLocationClick('projects', cvData.projects)}
          >
            <div className="bg-amber-50/80 p-2 rounded-lg shadow-lg">
              <h3 className="text-sm font-bold">Project Fortress</h3>
            </div>
          </div>

          {/* Experience */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => handleLocationClick('experience', cvData.experience)}
          >
            <div className="bg-amber-50/80 p-2 rounded-lg shadow-lg">
              <h3 className="text-sm font-bold">Journey Waters</h3>
            </div>
          </div>

          {/* Education */}
          <div 
            className="absolute top-1/3 right-1/3 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => handleLocationClick('education', cvData.education)}
          >
            <div className="bg-amber-50/80 p-2 rounded-lg shadow-lg">
              <h3 className="text-sm font-bold">Mountains of Knowledge</h3>
            </div>
          </div>

          {/* Skills */}
          <div 
            className="absolute bottom-1/4 right-1/4 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => handleLocationClick('skills', cvData.skills)}
          >
            <div className="bg-amber-50/80 p-2 rounded-lg shadow-lg">
              <h3 className="text-sm font-bold">Skills Forest</h3>
            </div>
          </div>

          {/* Contact */}
          <div 
            className="absolute bottom-1/3 left-1/4 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => handleLocationClick('contact', cvData.contact)}
          >
            <div className="bg-amber-50/80 p-2 rounded-lg shadow-lg">
              <h3 className="text-sm font-bold">Contact Treasure</h3>
            </div>
          </div>

          {/* Profile */}
          <div 
            className="absolute top-1/3 left-1/4 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => handleLocationClick('profile', cvData.profile)}
          >
            <div className="bg-amber-50/80 p-2 rounded-lg shadow-lg">
              <h3 className="text-sm font-bold">Profile Harbor</h3>
            </div>
          </div>
        </div>

        {/* Legend and other UI elements remain the same */}
      </div>

      {/* Scroll Overlay */}
      {showScroll && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div 
            className="w-11/12 max-w-2xl max-h-[80vh] overflow-y-auto rounded-lg p-8 relative"
            style={{
              backgroundColor: '#f3e6d0',
              backgroundImage: `
                radial-gradient(#d7c4a1 2px, transparent 2px),
                linear-gradient(#e8d5b5 2px, transparent 2px)
              `,
              backgroundSize: '32px 32px, 32px 32px',
              boxShadow: 'inset 0 0 60px rgba(139, 69, 19, 0.2)',
              border: '8px solid #8B4513',
              borderRadius: '10px'
            }}
          >
            {/* Close Button */}
            <button 
              onClick={closeScroll}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-primary-dark text-primary-light hover:bg-primary border-2 border-primary"
            >
              ×
            </button>

            {/* Update content container backgrounds */}
            <div className="relative">
              {/* Content sections remain the same, just updating their background classes */}
              {activeLocation === 'education' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary-dark text-center border-b-2 border-primary-dark/20 pb-2">
                    Educational Journey
                  </h2>
                  {scrollContent.map((edu: { degree: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; institution: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; years: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; details: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                    <div key={index} className="bg-primary-light/30 p-4 rounded-lg border border-primary-dark/20 shadow-inner">
                      <h3 className="text-xl font-bold text-amber-900">{edu.degree}</h3>
                      <p className="text-amber-800 font-semibold">{edu.institution}</p>
                      <p className="text-amber-700">{edu.years}</p>
                      <p className="mt-2 text-gray-700">{edu.details}</p>
                    </div>
                  ))}
                </div>
              )}
              {activeLocation === 'experience' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary-dark text-center border-b-2 border-primary-dark/20 pb-2">Professional Experience</h2>
                  {scrollContent.map((exp: { role: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; years: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; company: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                    <div key={index} className="bg-primary-light/30 p-4 rounded-lg border border-primary-dark/20 shadow-inner">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-bold text-amber-900">{exp.role}</h3>
                        <span className="text-sm bg-amber-200 px-2 py-1 rounded-full">{exp.years}</span>
                      </div>
                      <p className="text-amber-800 font-semibold">{exp.company}</p>
                      <p className="mt-2 text-gray-700">{exp.description}</p>
                    </div>
                  ))}
                </div>
              )}
              {activeLocation === 'projects' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary-dark text-center border-b-2 border-primary-dark/20 pb-2">Project Showcase</h2>
                  {scrollContent.map((project: { name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; tech: any[]; description: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }, index: React.Key | null | undefined) => (
                    <div key={index} className="bg-primary-light/30 p-4 rounded-lg border border-primary-dark/20 shadow-inner">
                      <h3 className="text-xl font-bold text-amber-900">{project.name}</h3>
                      <div className="flex flex-wrap gap-2 my-2">
                        {project.tech.map((tech: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, idx: React.Key | null | undefined) => (
                          <span key={idx} className="bg-amber-900/10 text-amber-900 text-sm px-2 py-1 rounded-full border border-amber-900/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <p className="mt-2 text-gray-700">{project.description}</p>
                    </div>
                  ))}
                </div>
              )}
              {activeLocation === 'skills' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary-dark text-center border-b-2 border-primary-dark/20 pb-2">Skills & Expertise</h2>
                  {Object.entries(scrollContent.reduce((acc: { [x: string]: any[]; }, skill: { category: string | number; }) => {
                    if (!acc[skill.category]) acc[skill.category] = [];
                    acc[skill.category].push(skill);
                    return acc;
                  }, {})).map(([category, skills]) => (
                    <div key={category} className="bg-primary-light/30 p-4 rounded-lg border border-primary-dark/20 shadow-inner">
                      <h3 className="text-lg font-bold text-amber-900 mb-3">{category}</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {(skills as any[]).map((skill, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <span className="text-amber-900">{skill.name}</span>
                            <div className="w-24 h-2 bg-amber-900/10 rounded-full">
                              <div 
                                className="h-full bg-amber-900/40 rounded-full"
                                style={{ width: `${(skill.level / 5) * 100}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeLocation === 'contact' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary-dark text-center border-b-2 border-primary-dark/20 pb-2">Contact Information</h2>
                  <div className="bg-primary-light/30 p-4 rounded-lg border border-primary-dark/20 shadow-inner">
                    <div className="grid gap-4 text-amber-900">
                      <p><span className="font-bold">Email:</span> {scrollContent.email}</p>
                      <p><span className="font-bold">Phone:</span> {scrollContent.phone}</p>
                      <p><span className="font-bold">Website:</span> {scrollContent.website}</p>
                      <p><span className="font-bold">Location:</span> {scrollContent.location}</p>
                    </div>
                  </div>
                </div>
              )}
              {activeLocation === 'profile' && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-primary-dark text-center border-b-2 border-primary-dark/20 pb-2">About Me</h2>
                  <div className="bg-primary-light/30 p-4 rounded-lg border border-primary-dark/20 shadow-inner">
                    <h3 className="text-xl font-bold text-amber-900">{scrollContent.name}</h3>
                    <p className="text-amber-800 font-semibold">{scrollContent.title}</p>
                    <p className="mt-2 text-gray-700">{scrollContent.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Legend and other UI elements remain the same */}
    </div>
  );
};

export default CareerJourneyMap;