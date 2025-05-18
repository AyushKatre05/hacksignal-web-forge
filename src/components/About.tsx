
import React, { useEffect, useState } from 'react';
import { CheckCircle, Code, Brain, Shield } from 'lucide-react';

const About = () => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
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
  
  const values = [
    { 
      title: "Innovation First", 
      description: "We constantly push the boundaries of technology to create solutions that set new industry standards.",
      icon: <Code className="text-hackSignal-purple" size={24} />
    },
    { 
      title: "Technical Excellence", 
      description: "Our team of experts is committed to delivering high-quality code and robust architectures.",
      icon: <Brain className="text-hackSignal-purple" size={24} />
    },
    { 
      title: "Security Minded", 
      description: "We integrate security best practices at every stage of development for uncompromised protection.",
      icon: <Shield className="text-hackSignal-purple" size={24} /> 
    }
  ];
  
  const stats = [
    { number: "95%", label: "Client Satisfaction" },
    { number: "120+", label: "Projects Completed" },
    { number: "18+", label: "Countries Served" },
    { number: "35+", label: "Tech Experts" }
  ];
  
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-64 -right-64 w-96 h-96 bg-hackSignal-purple opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-64 -left-64 w-96 h-96 bg-hackSignal-purple opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-lg font-medium text-hackSignal-purple mb-3 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            About Us
          </h2>
          <h3 className={`text-3xl md:text-4xl font-bold font-sora mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            We're on a Mission to Redefine Tech
          </h3>
          <p className={`text-gray-400 transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            HackSignal was founded with a clear vision: to harness the power of cutting-edge technology 
            to solve complex problems and drive innovation across industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-hackSignal-purple/20 to-hackSignal-purple-dark/10 rounded-2xl blur-xl"></div>
              <div className="relative glass-card overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=800" 
                  alt="Our Team" 
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute top-4 left-4 glass-card p-4 max-w-[200px]">
                <div className="text-sm font-medium text-white">Founded in 2019</div>
                <div className="text-xs text-gray-400 mt-1">With a mission to transform industries through technology innovation</div>
              </div>
            </div>
          </div>
          
          <div className={`space-y-8 transition-all duration-700 delay-400 ${isInView ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
            <h4 className="text-2xl font-bold font-sora">Our Story</h4>
            <div className="space-y-4 text-gray-400">
              <p>
                Founded by a team of tech enthusiasts with backgrounds from leading tech companies, 
                HackSignal emerged from a shared vision to create technology that makes a difference.
              </p>
              <p>
                What started as a small team of developers has grown into a global tech powerhouse, 
                delivering innovative solutions across software development, AI, and cybersecurity.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible, working with forward-thinking 
                clients who share our passion for technology that transforms.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-hackSignal-purple" />
                <span className="text-gray-300">Agile Methodology</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-hackSignal-purple" />
                <span className="text-gray-300">24/7 Tech Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle size={20} className="text-hackSignal-purple" />
                <span className="text-gray-300">Data-Driven Approach</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="text-center mb-8">
            <h4 className={`text-2xl font-bold font-sora transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
              Our Core Values
            </h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`glass-card p-6 transition-all duration-700 hover-lift ${isInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="mb-4">
                  {value.icon}
                </div>
                <h5 className="text-xl font-semibold mb-3">{value.title}</h5>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-8 transition-all duration-700 delay-900 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-hackSignal-purple">{stat.number}</div>
              <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
