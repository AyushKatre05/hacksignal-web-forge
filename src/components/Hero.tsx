
import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element, index) => {
        const speed = index * 0.2 + 0.1;
        (element as HTMLElement).style.transform = `translateY(${scrollPosition * speed}px)`;
      });
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(26,31,44,1) 0%, rgba(19,23,34,1) 100%)'
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-hero-pattern bg-cover"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-hackSignal-purple opacity-20 rounded-full blur-3xl parallax"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-hackSignal-purple-dark opacity-20 rounded-full blur-3xl parallax"></div>
        <div className="absolute -bottom-24 right-1/3 w-64 h-64 bg-hackSignal-purple-light opacity-20 rounded-full blur-3xl parallax"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block bg-hackSignal-light/20 backdrop-blur-sm border border-hackSignal-purple/30 rounded-full px-4 py-2 mb-6">
                <p className="text-sm text-gray-300">
                  <span className="text-hackSignal-purple font-medium">New:</span> Introducing our Generative AI Solutions
                </p>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sora leading-tight">
                <span className="text-gradient">Powering the Future</span>
                <br /> with <span className="text-caret">Code, AI, and Security</span>
              </h1>
              
              <p className="mt-6 text-lg text-gray-300 max-w-xl">
                HackSignal delivers cutting-edge technology solutions that transform businesses 
                through innovative software development, artificial intelligence, and robust cybersecurity.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a href="#order" className="bg-hackSignal-purple hover:bg-hackSignal-purple-dark text-white font-medium px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-hackSignal-purple/20 focus:ring-2 focus:ring-hackSignal-purple focus:ring-offset-2 focus:ring-offset-hackSignal-dark">
                  Order Your Solution
                </a>
                <a href="#join" className="bg-transparent border border-hackSignal-purple/50 hover:border-hackSignal-purple text-white font-medium px-8 py-3 rounded-lg transition-all hover:bg-hackSignal-purple/10">
                  Join Our Team
                </a>
              </div>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-wrap items-center gap-8 mt-6">
                <p className="text-sm text-gray-400">Trusted by innovative companies:</p>
                <div className="flex flex-wrap gap-8">
                  <div className="text-gray-400 font-medium">TechCorp</div>
                  <div className="text-gray-400 font-medium">AI Ventures</div>
                  <div className="text-gray-400 font-medium">CyberShield</div>
                  <div className="text-gray-400 font-medium">DataFlex</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`lg:col-span-5 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-hackSignal-purple/20 to-hackSignal-purple-dark/20 rounded-2xl blur-xl"></div>
              <div className="glass-card p-1 relative">
                <div className="rounded-xl overflow-hidden bg-hackSignal-dark">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800"
                    alt="Advanced Technology"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 glass-card p-4 animate-float">
                  <div className="text-sm font-medium text-white">AI-Powered Solutions</div>
                  <div className="text-xs text-gray-400 mt-1">Cutting-edge machine learning</div>
                </div>
                <div className="absolute -top-6 -left-6 glass-card p-4 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="text-sm font-medium text-white">Cyber Security</div>
                  <div className="text-xs text-gray-400 mt-1">Enterprise-grade protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center text-gray-400 hover:text-hackSignal-purple transition-colors">
            <span className="text-xs mb-2">Scroll Down</span>
            <ArrowRight size={16} className="transform rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
