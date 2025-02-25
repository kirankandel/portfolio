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
          <h1 className="text-3xl font-bold text-amber-900">The Career Journey of {cvData.profile.name}</h1>
          <h2 className="text-lg italic text-amber-800">{cvData.profile.title}</h2>
        </div>

        {/* Interactive Elements - Positioned to match the map's landmarks */}
        <div className="absolute inset-0">
          {/* Education (Mountains) */}
          <div 
            className="absolute top-1/4 left-1/3 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => handleLocationClick('education', cvData.education)}
          >
            <div className="bg-amber-50/80 p-2 rounded-lg shadow-lg">
              <h3 className="text-sm font-bold">Mountains of Knowledge</h3>
            </div>
          </div>

          {/* Experience (Ship) */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => handleLocationClick('experience', cvData.experience)}
          >
            <div className="bg-amber-50/80 p-2 rounded-lg shadow-lg">
              <h3 className="text-sm font-bold">Journey Waters</h3>
            </div>
          </div>

          {/* Projects (Castle) */}
          <div 
            className="absolute top-1/3 right-1/3 cursor-pointer hover:scale-110 transition-transform"
            onClick={() => handleLocationClick('projects', cvData.projects)}
          >
            <div className="bg-amber-50/80 p-2 rounded-lg shadow-lg">
              <h3 className="text-sm font-bold">Project Fortress</h3>
            </div>
          </div>

          {/* Rest of your interactive elements positioned similarly */}
        </div>

        {/* Legend and other UI elements remain the same */}
      </div>

      {/* Scroll overlay remains the same */}
    </div>
  );
};

export default CareerJourneyMap;