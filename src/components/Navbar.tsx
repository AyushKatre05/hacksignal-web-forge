
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'join', 'order', 'blog', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/#home', id: 'home' },
    { name: 'About', path: '/#about', id: 'about' },
    { name: 'Services', path: '/#services', id: 'services' },
    { name: 'Join the Team', path: '/#join', id: 'join' },
    { name: 'Order a Solution', path: '/#order', id: 'order' },
    { name: 'Blog', path: '/#blog', id: 'blog' },
    { name: 'Contact', path: '/#contact', id: 'contact' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-hackSignal/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold font-sora">
              <span className="text-white">Hack</span>
              <span className="text-hackSignal-purple">Signal</span>
            </h1>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={link.path} 
                className={`text-sm font-medium transition-colors duration-300 hover:text-hackSignal-purple ${
                  activeSection === link.id ? 'text-hackSignal-purple' : 'text-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white hover:text-hackSignal-purple transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-hackSignal-dark/95 backdrop-blur-lg mt-4 rounded-lg p-4 border border-hackSignal-purple/20 animate-fade-in">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a 
                    href={link.path} 
                    className={`block py-2 px-4 text-sm font-medium hover:bg-hackSignal-purple/10 rounded-lg transition-colors ${
                      activeSection === link.id ? 'text-hackSignal-purple' : 'text-gray-300'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
