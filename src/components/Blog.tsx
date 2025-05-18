
import React, { useState, useEffect } from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('blog');
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
  
  const blogPosts = [
    {
      title: "The Future of Generative AI in Enterprise Solutions",
      excerpt: "Explore how generative AI is transforming enterprise solutions and creating new opportunities for innovation.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      author: "Alex Johnson",
      date: "May 15, 2023",
      category: "Artificial Intelligence"
    },
    {
      title: "Best Practices for Securing Cloud Infrastructure",
      excerpt: "Learn key strategies and best practices for maintaining robust security in your cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=800",
      author: "Samantha Chen",
      date: "April 22, 2023",
      category: "Cybersecurity"
    },
    {
      title: "Building Scalable Microservices Architecture",
      excerpt: "A comprehensive guide to designing and implementing scalable microservices for modern applications.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      author: "Michael Rodriguez",
      date: "March 18, 2023",
      category: "Software Development"
    }
  ];
  
  return (
    <section id="blog" className="section-padding relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-64 right-1/3 w-96 h-96 bg-hackSignal-purple opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-64 left-1/4 w-96 h-96 bg-hackSignal-purple opacity-5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-lg font-medium text-hackSignal-purple mb-3 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Blog & Updates
          </h2>
          <h3 className={`text-3xl md:text-4xl font-bold font-sora mb-6 transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Insights from Our Experts
          </h3>
          <p className={`text-gray-400 transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0 -translate-y-10'}`}>
            Stay up-to-date with the latest trends, insights, and innovations in technology, 
            AI, and cybersecurity from our team of industry experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className={`card-gradient rounded-2xl overflow-hidden border border-hackSignal-light/20 hover:border-hackSignal-purple/30 transition-all duration-500 hover:shadow-lg hover:shadow-hackSignal-purple/5 hover-lift ${
                isInView ? 'opacity-100' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-6">
                <div className="inline-block bg-hackSignal-purple/20 text-hackSignal-purple text-xs font-medium rounded-full px-3 py-1 mb-4">
                  {post.category}
                </div>
                
                <h4 className="text-xl font-bold mb-3">{post.title}</h4>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="flex items-center mr-4">
                      <User size={14} className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <a 
                    href="#" 
                    className="text-hackSignal-purple hover:text-hackSignal-purple-light transition-colors flex items-center"
                  >
                    <span className="mr-1">Read</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center space-x-2 bg-transparent border border-hackSignal-purple/50 hover:border-hackSignal-purple text-white font-medium px-6 py-3 rounded-lg transition-all hover:bg-hackSignal-purple/10"
          >
            <span>View All Articles</span>
            <ArrowRight size={16} />
          </a>
        </div>
        
        <div className={`mt-24 bg-hackSignal-purple/10 backdrop-blur-sm border border-hackSignal-purple/20 rounded-2xl p-8 lg:p-12 transition-all duration-700 delay-600 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3">
              <h4 className="text-2xl font-bold font-sora mb-4">Subscribe to Our Newsletter</h4>
              <p className="text-gray-300 mb-6">
                Get the latest tech insights, company updates, and exclusive content delivered straight to your inbox.
              </p>
            </div>
            
            <div className="lg:col-span-2">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-3 rounded-lg bg-hackSignal-dark/60 border border-hackSignal-light/30 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-hackSignal-purple hover:bg-hackSignal-purple-dark text-white font-medium px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-hackSignal-purple/20"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
