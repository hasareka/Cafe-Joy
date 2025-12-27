import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Track active link

  const navLinks = ['Home', 'About', 'Menu', 'Reservation', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      // Background change logic
      setIsScrolled(window.scrollY > 50);

      // Active section logic: Detect which section is in view
      const sections = ['home', 'about', 'menu', 'reservation', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isOpen ? "bg-black/90 backdrop-blur-lg" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto p-6 text-white">
        
        {/* LOGO WITH BEAN ICON */}
        <div className="flex items-center space-x-2 group cursor-pointer">
          <svg 
            className="w-6 h-6 text-amber-600 group-hover:rotate-12 transition-transform duration-300" 
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M19.5,6C19,5.2 18,4.7 17,4.3C15.6,3.8 14.1,3.6 12.6,3.6C10.5,3.6 8.5,4.1 6.8,5.1C5,6.2 3.6,7.8 2.8,9.7C2,11.6 1.8,13.7 2.3,15.7C2.7,17.7 3.8,19.5 5.4,20.8C6.9,22 8.9,22.7 10.9,22.7C12.3,22.7 13.8,22.4 15.1,21.9C16.4,21.4 17.6,20.6 18.6,19.6C21,17 22.1,13.4 21.6,9.8C21.3,8.4 20.6,7 19.5,6M15.5,15.5C14,17 11.5,17 9.5,15.5C8.5,14.7 8,13.7 8,12.7C8,11.7 8.5,10.7 9.5,9.9C10.5,9.1 12,8.8 13.5,9C15,9.2 16.3,10 17.1,11.2C17.9,12.4 18.1,14 17.5,15.5C17.2,16.2 16.7,16.9 16,17.4L15.5,15.5Z" />
          </svg>
          <h1 className="text-xl md:text-2xl font-bold tracking-tighter"><a href='#'>CAFE JOY</a></h1>
        </div>
        
        {/* DESKTOP LINKS WITH ACTIVE UNDERLINE */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a 
                key={link} 
                href={`#${id}`} 
                className={`relative group transition-colors duration-300 ${isActive ? 'text-amber-500' : 'hover:text-amber-500'}`}
              >
                {link}
                {/* Underline: Full width if active, zero width if not (grows on hover) */}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-amber-600 transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            );
          })}
        </div>

        {/* MOBILE BUTTON */}
        <button className="md:hidden p-2 flex flex-col gap-1.5" onClick={() => setIsOpen(!isOpen)}>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-black/95 ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="flex flex-col space-y-4 p-8 items-center text-sm font-medium tracking-[0.2em] uppercase text-white">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              onClick={() => setIsOpen(false)}
              className={activeSection === link.toLowerCase() ? 'text-amber-500' : ''}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;