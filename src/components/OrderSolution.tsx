
import React, { useState, useEffect } from 'react';
import { Upload, Clock, DollarSign, Loader } from 'lucide-react';
import { toast } from 'sonner';

const OrderSolution = () => {
  const [isInView, setIsInView] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
    deadline: '',
    budget: ''
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('order');
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
      toast.success('Project request submitted successfully!', {
        description: 'Our team will review your request and get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        description: '',
        deadline: '',
        budget: ''
      });
    }, 1500);
  };
  
  const projectTypes = [
    "Custom Software Development",
    "AI & Machine Learning Solution",
    "Generative AI Implementation",
    "Cybersecurity Audit",
    "Tech Infrastructure Setup",
    "Data Analytics Solution",
    "Mobile App Development",
    "Web Application",
    "Other (Specify in description)"
  ];
  
  const timeframes = [
    "Less than 1 month",
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "More than 12 months",
    "Not sure yet"
  ];
  
  const budgetRanges = [
    "Less than $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "More than $250,000",
    "Not sure yet"
  ];
  
  return (
    <section id="order" className="section-padding bg-hackSignal-dark relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-hackSignal/60 to-transparent"></div>
        <div className="absolute -bottom-64 right-1/3 w-96 h-96 bg-hackSignal-purple opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-lg font-medium text-hackSignal-purple mb-3 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Order a Solution
          </h2>
          <h3 className={`text-3xl md:text-4xl font-bold font-sora mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Ready to Transform Your Business?
          </h3>
          <p className={`text-gray-400 transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Tell us about your project, and our team of experts will create a customized solution 
            that meets your unique needs and challenges.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`card-gradient rounded-2xl p-8 border border-hackSignal-light/20 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 shadow-lg shadow-hackSignal-purple/5' : 'opacity-0 translate-y-10'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-hackSignal/80 border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
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
                    className="w-full px-4 py-3 rounded-lg bg-hackSignal/80 border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                    placeholder="john.doe@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-hackSignal/80 border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                  placeholder="Acme Inc."
                />
              </div>
              
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-hackSignal/80 border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                  Project Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-hackSignal/80 border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                  placeholder="Describe your project needs, goals, and any specific requirements..."
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="deadline" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                    <Clock size={16} className="mr-2 text-hackSignal-purple" />
                    Project Timeline
                  </label>
                  <select
                    id="deadline"
                    name="deadline"
                    value={formData.deadline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-hackSignal/80 border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    {timeframes.map((timeframe, index) => (
                      <option key={index} value={timeframe}>{timeframe}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2 flex items-center">
                    <DollarSign size={16} className="mr-2 text-hackSignal-purple" />
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-hackSignal/80 border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="bg-hackSignal-light/10 rounded-lg p-4 flex items-start space-x-4">
                <Upload size={24} className="text-hackSignal-purple mt-1" />
                <div>
                  <h5 className="text-white font-medium mb-1">Upload Project Files (Optional)</h5>
                  <p className="text-gray-400 text-sm mb-3">
                    Share documents, wireframes, or any other files that might help us understand your project better.
                  </p>
                  <input
                    type="file"
                    className="text-gray-400 text-sm cursor-pointer"
                    multiple
                  />
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-hackSignal-purple hover:bg-hackSignal-purple-dark text-white font-medium px-8 py-4 rounded-lg transition-all hover:shadow-lg hover:shadow-hackSignal-purple/20 focus:ring-2 focus:ring-hackSignal-purple focus:ring-offset-2 focus:ring-offset-hackSignal-dark flex justify-center items-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader size={20} className="animate-spin mr-2" />
                      Submitting Request...
                    </>
                  ) : "Submit Project Request"}
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Initial Consultation",
                description: "We'll discuss your project needs and provide expert advice."
              },
              {
                title: "Detailed Proposal",
                description: "Receive a comprehensive proposal with timeline and pricing."
              },
              {
                title: "Solution Delivery",
                description: "Our team will develop and deliver your custom solution."
              }
            ].map((step, index) => (
              <div 
                key={index}
                className={`glass-card p-6 transition-all duration-700 hover-lift ${isInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="w-10 h-10 rounded-full bg-hackSignal-purple/20 flex items-center justify-center mb-4">
                  <span className="text-hackSignal-purple font-bold">{index + 1}</span>
                </div>
                <h5 className="text-lg font-semibold mb-2">{step.title}</h5>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSolution;
