
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('testimonials');
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
  
  useEffect(() => {
    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      quote: "HackSignal transformed our outdated systems into a cutting-edge digital platform that increased our operational efficiency by 300%. Their AI solutions have revolutionized how we analyze customer data.",
      stars: 5
    },
    {
      name: "Michael Chen",
      position: "Founder, DataFlex",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      quote: "The cybersecurity audit conducted by HackSignal identified critical vulnerabilities in our infrastructure that other firms missed. Their team's expertise and thorough approach saved us from potential data breaches.",
      stars: 5
    },
    {
      name: "Amanda Rodriguez",
      position: "VP of Engineering, CloudNine",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      quote: "Working with HackSignal on our custom software development project was seamless. Their agile approach, clear communication, and technical excellence delivered a product that exceeded our expectations.",
      stars: 5
    }
  ];
  
  return (
    <section id="testimonials" className="section-padding pb-28 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 -right-24 w-96 h-96 bg-hackSignal-purple opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 -left-24 w-96 h-96 bg-hackSignal-purple-dark opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-lg font-medium text-hackSignal-purple mb-3 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Testimonials
          </h2>
          <h3 className={`text-3xl md:text-4xl font-bold font-sora mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            What Our Clients Say
          </h3>
          <p className={`text-gray-400 transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Don't just take our word for it. Here's what our clients have to say about 
            their experience working with HackSignal.
          </p>
        </div>
        
        <div className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${isInView ? 'opacity-100' : 'opacity-0 scale-95'}`}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-hackSignal-purple/20 to-hackSignal-purple-dark/10 rounded-3xl blur-xl"></div>
            <div className="relative card-gradient rounded-3xl p-8 md:p-12 border border-hackSignal-light/20">
              {/* Testimonial Quotes */}
              <div className="mb-8 relative h-[160px]">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === activeIndex 
                        ? 'opacity-100 translate-x-0' 
                        : index < activeIndex 
                          ? 'opacity-0 -translate-x-8' 
                          : 'opacity-0 translate-x-8'
                    }`}
                  >
                    <div className="text-4xl text-hackSignal-purple mb-6">"</div>
                    <p className="text-xl text-gray-100 italic mb-6">
                      {testimonial.quote}
                    </p>
                    <div className="flex">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} size={18} className="text-hackSignal-purple fill-hackSignal-purple" />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Testimonial Profiles */}
              <div className="flex justify-center space-x-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                      activeIndex === index 
                        ? 'opacity-100 scale-105' 
                        : 'opacity-50 hover:opacity-75'
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className={`w-16 h-16 rounded-full overflow-hidden mb-3 border-2 ${
                      activeIndex === index ? 'border-hackSignal-purple' : 'border-transparent'
                    }`}>
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h5 className="text-sm font-semibold">{testimonial.name}</h5>
                      <p className="text-xs text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation Dots */}
              <div className="mt-8 flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      activeIndex === index ? 'bg-hackSignal-purple w-6' : 'bg-hackSignal-light/30 hover:bg-hackSignal-light/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
          {["TechCorp", "InnovateAI", "SecureNet", "DataFlex", "CloudNine", "NextGen", "QuantumTech", "VisionaryApps"].map((client, index) => (
            <div 
              key={index} 
              className="bg-hackSignal-light/10 backdrop-blur-sm border border-hackSignal-light/20 rounded-lg py-6 px-4 text-center hover:border-hackSignal-purple/30 transition-all"
            >
              <span className="text-gray-300 font-medium">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
