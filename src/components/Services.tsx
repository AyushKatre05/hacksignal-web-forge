
import React, { useEffect, useState } from 'react';
import { Code, Brain, Shield, HeadsetIcon } from 'lucide-react';

const Services = () => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('services');
      if (!section) return;
      
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight * 0.75) {
        setIsInView(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const services = [
    {
      icon: <Code size={30} className="text-hackSignal-purple" />,
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your specific business needs, from web and mobile applications to enterprise systems.",
      features: [
        "Scalable Architecture",
        "Cross-Platform Development",
        "API Integration",
        "Cloud Deployment"
      ]
    },
    {
      icon: <Brain size={30} className="text-hackSignal-purple" />,
      title: "AI & Generative AI Solutions",
      description: "Cutting-edge AI solutions that leverage machine learning and generative models to create intelligent systems for your business.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Systems",
        "Predictive Analytics"
      ]
    },
    {
      icon: <Shield size={30} className="text-hackSignal-purple" />,
      title: "Cybersecurity Audits & Infrastructure",
      description: "Comprehensive security assessments and infrastructure development to protect your digital assets from threats.",
      features: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Infrastructure",
        "Compliance Consulting"
      ]
    },
    {
      icon: <HeadsetIcon size={30} className="text-hackSignal-purple" />,
      title: "Tech Consulting",
      description: "Expert technology consulting to help you make informed decisions about your tech stack and digital strategy.",
      features: [
        "Technology Assessment",
        "Digital Transformation",
        "Cloud Strategy",
        "Tech Stack Optimization"
      ]
    }
  ];
  
  return (
    <section id="services" className="section-padding bg-hackSignal-dark relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-hackSignal/60 to-transparent"></div>
        <div className="absolute -bottom-64 left-1/4 w-96 h-96 bg-hackSignal-purple opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-lg font-medium text-hackSignal-purple mb-3 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Our Services
          </h2>
          <h3 className={`text-3xl md:text-4xl font-bold font-sora mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Cutting-edge Solutions for Modern Challenges
          </h3>
          <p className={`text-gray-400 transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            We offer a comprehensive suite of technology services designed to help businesses 
            innovate, grow, and stay secure in today's rapidly evolving digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`card-gradient p-8 rounded-2xl border border-hackSignal-light/20 transition-all duration-700 hover:border-hackSignal-purple/30 hover:shadow-lg hover:shadow-hackSignal-purple/5 ${
                isInView ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-gray-400 mb-6">{service.description}</p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 mt-2 mr-3 bg-hackSignal-purple rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <a 
                  href="#order" 
                  className="inline-flex items-center text-hackSignal-purple hover:text-hackSignal-purple-light transition-colors"
                >
                  <span className="mr-2">Learn more</span>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M3.33337 8H12.6667" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M8.66669 4L12.6667 8L8.66669 12" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`mt-16 text-center transition-all duration-700 delay-700 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
          <h4 className="text-xl font-bold mb-4">Not sure which service you need?</h4>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Our technology experts are ready to analyze your business challenges and recommend the perfect solution.
          </p>
          <a 
            href="#contact"
            className="inline-flex bg-hackSignal-purple hover:bg-hackSignal-purple-dark text-white font-medium px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-hackSignal-purple/20"
          >
            Schedule a Consultation
          </a>
        </div>
        
        {/* Tech Stack */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h4 className={`text-2xl font-bold font-sora mb-4 transition-all duration-700 delay-800 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
              Our Technology Stack
            </h4>
            <p className={`text-gray-400 max-w-2xl mx-auto transition-all duration-700 delay-900 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
              We leverage industry-leading technologies to build robust, scalable, and secure solutions.
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 transition-all duration-700 delay-1000 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            {["React", "Python", "Node.js", "TensorFlow", "AWS", "Docker", "Kubernetes", "GraphQL", "MongoDB", "PostgreSQL", "Flutter", "Go"].map((tech, index) => (
              <div 
                key={index} 
                className="bg-hackSignal-light/10 backdrop-blur-sm border border-hackSignal-light/20 rounded-lg py-4 px-6 text-center hover:border-hackSignal-purple/30 transition-all"
              >
                <span className="text-gray-300 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
