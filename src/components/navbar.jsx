import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 50px, change the state
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 p-6 ${
        isScrolled 
          ? "bg-black/80 backdrop-blur-lg py-4" // Darker & compact on scroll
          : "bg-transparent py-6"               // Elegant & airy at the top
      }`}
    >
      <div className="flex justify-between items-center max-w-6xl mx-auto text-white">
        <h1 className="text-2xl font-bold tracking-tighter">CAFE JOY</h1>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-widest uppercase">
          <a href="#" className="hover:text-amber-500 transition-colors">Home</a>
          <a href="#" className="hover:text-amber-500 transition-colors">About</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Menu</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Reservation</a>
          <a href="#" className="hover:text-amber-500 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;