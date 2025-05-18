
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-hackSignal-dark border-t border-hackSignal-light/20 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold font-sora mb-4">
              <span className="text-white">Hack</span>
              <span className="text-hackSignal-purple">Signal</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Powering the Future with Code, AI, and Security
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-hackSignal-purple transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hackSignal-purple transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hackSignal-purple transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-hackSignal-purple transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/#about" className="text-gray-400 hover:text-hackSignal-purple transition-colors">About Us</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-hackSignal-purple transition-colors">Services</a></li>
              <li><a href="/#join" className="text-gray-400 hover:text-hackSignal-purple transition-colors">Join the Team</a></li>
              <li><a href="/#order" className="text-gray-400 hover:text-hackSignal-purple transition-colors">Order a Solution</a></li>
              <li><a href="/#blog" className="text-gray-400 hover:text-hackSignal-purple transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/#services" className="text-gray-400 hover:text-hackSignal-purple transition-colors">Custom Software Development</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-hackSignal-purple transition-colors">AI & Generative AI Solutions</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-hackSignal-purple transition-colors">Cybersecurity Audits</a></li>
              <li><a href="/#services" className="text-gray-400 hover:text-hackSignal-purple transition-colors">Tech Consulting</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mt-1 mr-2 text-hackSignal-purple" />
                <a href="mailto:info@hacksignal.com" className="text-gray-400 hover:text-hackSignal-purple transition-colors">
                  info@hacksignal.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mt-1 mr-2 text-hackSignal-purple" />
                <span className="text-gray-400">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 mr-2 text-hackSignal-purple" />
                <span className="text-gray-400">
                  Tech District, Innovation City,<br />
                  Digital Avenue 123
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="mt-12 border-t border-hackSignal-light/20 pt-8 pb-4">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-white font-semibold mb-4">Subscribe to our Newsletter</h4>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-2 rounded-lg bg-hackSignal-light/30 border border-hackSignal-light/50 text-white focus:outline-none focus:ring-2 focus:ring-hackSignal-purple"
              />
              <button className="bg-hackSignal-purple hover:bg-hackSignal-purple-dark text-white px-4 py-2 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>© {year} HackSignal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
