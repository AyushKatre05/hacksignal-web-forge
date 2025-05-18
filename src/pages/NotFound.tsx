
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  useEffect(() => {
    document.title = "404 - Page Not Found | HackSignal";
  }, []);

  return (
    <div className="min-h-screen bg-hackSignal flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-4xl font-bold font-sora mb-2">
            <span className="text-white">4</span>
            <span className="text-hackSignal-purple">0</span>
            <span className="text-white">4</span>
          </h1>
          <p className="text-2xl text-gray-300">Page Not Found</p>
        </div>
        
        <div className="glass-card p-8 mb-8">
          <p className="text-gray-400 mb-6">
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center bg-hackSignal-purple hover:bg-hackSignal-purple-dark text-white font-medium px-6 py-3 rounded-lg transition-all"
          >
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </Link>
        </div>
        
        <div>
          <p className="text-sm text-gray-500">
            Need assistance? <a href="/#contact" className="text-hackSignal-purple hover:text-hackSignal-purple-light transition-colors">Contact our support team</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
