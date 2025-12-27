import { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-stone-900 text-white py-12 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          
          {/* Logo Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tighter mb-1">CAFE JOY</h2>
            <p className="text-stone-500 text-[10px] uppercase tracking-[0.3em]">Crafting Joy Since 2010</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors"><FaInstagram size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors"><FaFacebookF size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors"><FaTwitter size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors"><FaPinterestP size={20} /></a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-stone-500 text-xs uppercase tracking-widest">
              © 2025 Cafe Joy. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 bg-amber-700 text-white rounded-full shadow-2xl transition-all duration-500 hover:bg-amber-600 hover:-translate-y-2 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <FaArrowUp size={18} />
      </button>
    </footer>
  );
}