
import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Loader } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [isInView, setIsInView] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contact');
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
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      toast.success('Message sent successfully!', {
        description: 'We will respond to your inquiry as soon as possible.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail className="text-hackSignal-purple" size={24} />,
      title: "Email",
      content: "info@hacksignal.com",
      link: "mailto:info@hacksignal.com"
    },
    {
      icon: <Phone className="text-hackSignal-purple" size={24} />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="text-hackSignal-purple" size={24} />,
      title: "Office",
      content: "Tech District, Innovation City, Digital Avenue 123",
      link: "https://maps.google.com"
    }
  ];
  
  const faqItems = [
    {
      question: "What technologies does HackSignal work with?",
      answer: "We work with a wide range of technologies including Python, JavaScript, React, Node.js, TensorFlow, PyTorch, AWS, Google Cloud, and more."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A small project might take 4-8 weeks, while larger enterprise solutions can take 3-6 months or more."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes, we offer various maintenance and support packages to ensure your solution continues to perform optimally after launch."
    },
    {
      question: "Can you work with our existing technology stack?",
      answer: "Absolutely. We're experienced in integrating with existing systems and can adapt to your current technology ecosystem."
    }
  ];
  
  return (
    <section id="contact" className="section-padding bg-hackSignal-dark relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-hackSignal/60 to-transparent"></div>
        <div className="absolute -bottom-64 right-1/4 w-96 h-96 bg-hackSignal-purple opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-lg font-medium text-hackSignal-purple mb-3 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Contact Us
          </h2>
          <h3 className={`text-3xl md:text-4xl font-bold font-sora mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Get in Touch
          </h3>
          <p className={`text-gray-400 transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Have questions or ready to start your project? Contact our team for expert assistance 
            and learn how we can help you achieve your technology goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mb-16">
          <div className="lg:col-span-2 space-y-8">
            <div className={`transition-all duration-700 delay-300 ${isInView ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-hackSignal-light/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold mb-1">{item.title}</h5>
                      <a 
                        href={item.link} 
                        className="text-gray-400 hover:text-hackSignal-purple transition-colors"
                      >
                        {item.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0 -translate-x-10'}`}>
              <h4 className="text-2xl font-bold font-sora mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-hackSignal-light/20 flex items-center justify-center text-gray-300 hover:text-hackSignal-purple hover:bg-hackSignal-light/30 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-hackSignal-light/20 flex items-center justify-center text-gray-300 hover:text-hackSignal-purple hover:bg-hackSignal-light/30 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.033 10.033 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-hackSignal-light/20 flex items-center justify-center text-gray-300 hover:text-hackSignal-purple hover:bg-hackSignal-light/30 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-hackSignal-light/20 flex items-center justify-center text-gray-300 hover:text-hackSignal-purple hover:bg-hackSignal-light/30 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className={`card-gradient rounded-2xl p-8 border border-hackSignal-light/20 transition-all duration-700 delay-400 ${isInView ? 'opacity-100 shadow-lg shadow-hackSignal-purple/5' : 'opacity-0 translate-x-10'}`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-hackSignal-purple/20 flex items-center justify-center">
                  <MessageCircle size={20} className="text-hackSignal-purple" />
                </div>
                <h4 className="text-xl font-bold">Send Us a Message</h4>
              </div>
              
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
                      placeholder="john.doe@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-hackSignal/80 border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-hackSignal/80 border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple focus:border-transparent"
                    placeholder="Tell us about your inquiry..."
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-hackSignal-purple hover:bg-hackSignal-purple-dark text-white font-medium px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-hackSignal-purple/20 focus:ring-2 focus:ring-hackSignal-purple focus:ring-offset-2 focus:ring-offset-hackSignal-dark flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader size={20} className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <div className={`text-center mb-10 transition-all duration-700 delay-600 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            <h4 className="text-2xl font-bold font-sora">Frequently Asked Questions</h4>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`glass-card p-6 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <h5 className="text-lg font-semibold mb-3">{item.question}</h5>
                  <p className="text-gray-400">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className={`rounded-2xl overflow-hidden transition-all duration-700 delay-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="relative h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910367!2d-122.41941550000001!3d37.77493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1684266882279!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="HackSignal Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
