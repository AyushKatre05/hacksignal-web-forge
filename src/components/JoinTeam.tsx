
import React, { useState, useEffect } from 'react';
import { CheckCircle, Loader } from 'lucide-react';
import { toast } from 'sonner';

const JoinTeam = () => {
  const [isInView, setIsInView] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedin: '',
    role: '',
    message: ''
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('join');
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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Application submitted successfully!', {
        description: 'We will review your application and get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        linkedin: '',
        role: '',
        message: ''
      });
    }, 1500);
  };
  
  const benefits = [
    "Remote-first work environment",
    "Flexible working hours",
    "Competitive salary & equity options",
    "Health insurance & wellness benefits",
    "Professional development budget",
    "Regular team retreats",
    "Latest tech equipment",
    "Open source contribution time"
  ];
  
  const roles = [
    "Software Engineer",
    "AI/ML Engineer",
    "Data Scientist",
    "Cybersecurity Specialist",
    "DevOps Engineer",
    "UX/UI Designer",
    "Product Manager",
    "Technical Writer"
  ];
  
  return (
    <section id="join" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-64 left-1/4 w-96 h-96 bg-hackSignal-purple opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-64 right-1/4 w-96 h-96 bg-hackSignal-purple opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-lg font-medium text-hackSignal-purple mb-3 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Join the Team
          </h2>
          <h3 className={`text-3xl md:text-4xl font-bold font-sora mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Build the Future with Us
          </h3>
          <p className={`text-gray-400 transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Join our team of passionate technologists who are pushing the boundaries of what's possible. 
            We're always looking for talented individuals who share our vision and values.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-8 transition-all duration-700 delay-300 ${isInView ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h4 className="text-2xl font-bold font-sora mb-6">Why Join HackSignal?</h4>
              <p className="text-gray-400 mb-8">
                At HackSignal, we're building a community of technology enthusiasts who are passionate about 
                creating solutions that matter. We value innovation, collaboration, and continuous learning.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={18} className="text-hackSignal-purple" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold font-sora mb-6">Current Openings</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {roles.map((role, index) => (
                  <div 
                    key={index} 
                    className="bg-hackSignal-light/10 border border-hackSignal-light/20 rounded-lg py-3 px-4 hover:border-hackSignal-purple/30 transition-all hover:bg-hackSignal-light/20"
                  >
                    <span className="text-gray-300">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card p-6">
              <h5 className="text-xl font-semibold mb-4">Our Culture</h5>
              <p className="text-gray-400">
                We believe in fostering a culture of innovation, inclusivity, and growth. Our team members are 
                encouraged to experiment, learn from failures, and celebrate successes together.
              </p>
              
              <div className="mt-6">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                  alt="Team Culture" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-card p-8">
              <h4 className="text-2xl font-bold font-sora mb-6">Apply Now</h4>
              <p className="text-gray-400 mb-8">
                Interested in joining our team? Fill out the application form below, and we'll get back to you soon.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-hackSignal-dark border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-hackSignal-dark border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                    placeholder="john.doe@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-300 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-hackSignal-dark border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>
                
                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">
                    Position You're Interested In
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-hackSignal-dark border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                  >
                    <option value="">Select a position</option>
                    {roles.map((role, index) => (
                      <option key={index} value={role}>{role}</option>
                    ))}
                    <option value="Other">Other (Specify in message)</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Why do you want to join HackSignal?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-hackSignal-dark border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                    placeholder="Tell us about yourself and why you'd be a great fit..."
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-hackSignal-purple hover:bg-hackSignal-purple-dark text-white font-medium px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-hackSignal-purple/20 focus:ring-2 focus:ring-hackSignal-purple focus:ring-offset-2 focus:ring-offset-hackSignal-dark flex justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={20} className="animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : "Submit Application"}
                  </button>
                </div>
                
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;
