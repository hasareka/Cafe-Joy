import { useState, useEffect } from 'react';
import img1 from '../assets/images/screen 1 coffee.jpg';
import img2 from '../assets/images/screen 2.jpg';
import img3 from '../assets/images/screen 3 cafe.jpg';

const slides = [
  { img: img1, title: "Brewed Fresh, Every Morning", sub: "Start your day with the perfect cup", cta: "View Menu" },
  { img: img2, title: "Moments That Taste Like Home", sub: "Fresh pastries, warm smiles", cta: "View Menu" },
  { img: img3, title: "Where Every Sip Feels Like Joy", sub: "Relax. Connect. Enjoy.", cta: "View Menu" }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); // Cycles every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-3000 ease-in-out ${
            index === current ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          {/* 1. THE IMAGE */}
          <img src={slide.img} className="h-full w-full object-cover opacity-70" alt="Cafe" />

          {/* 2. THE GRADIENT OVERLAY (New Tweak) */}
          {/* This creates a subtle dark fade from the middle to the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>

          {/* 3. THE CONTENT CONTAINER */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pt-20">
            <h1
              className={`text-5xl md:text-8xl font-bold mb-4 drop-shadow-2xl transition-all duration-1000 ${
                index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {slide.title}
            </h1>
            <p
              className={`text-lg md:text-xl font-medium tracking-[0.3em] uppercase mb-10 transition-all duration-1000 delay-300 ${
                index === current ? "opacity-90 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {slide.sub}
            </p>

            <div
              className={`transition-all duration-1000 delay-500 ${
                index === current ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
              }`}
            >
              <button className="group relative px-8 py-4 bg-amber-700 hover:bg-amber-600 text-white font-bold tracking-widest uppercase text-sm transition-all duration-300 rounded-sm overflow-hidden shadow-xl hover:shadow-amber-900/40 hover:-translate-y-1">
                <span className="relative z-10">{slide.cta}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      ))}
      {/* 4. SLIDE INDICATORS (New Tweak) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)} // Allows user to click dots
            className={`group relative h-3 transition-all duration-500 rounded-full ${
              index === current ? "w-8 bg-amber-600" : "w-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Optional: Add a tiny tooltip or glow on hover */}
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-transform bg-black/50 text-[10px] px-2 py-1 rounded text-white uppercase tracking-tighter">
              0{index + 1}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}