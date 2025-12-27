import aboutImg from '../assets/images/coffee shop about.jpg';
import detailImg1 from '../assets/images/screen 1 coffee.jpg';
import detailImg2 from '../assets/images/screen 2.jpg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-28 bg-stone-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* LEFT: IMAGE GALLERY */}
          <div className="relative animate-fade-in">
            {/* Decorative background */}
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-amber-100/60 -z-0"></div>

            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* Main Image */}
              <div className="col-span-2 h-80 md:h-96 overflow-hidden rounded-sm shadow-2xl">
                <img
                  src={aboutImg}
                  alt="Cafe Atmosphere"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Detail Image 1 */}
              <div className="h-40 md:h-52 overflow-hidden rounded-sm shadow-xl">
                <img
                  src={detailImg1}
                  alt="Coffee Craft"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>

              {/* Detail Image 2 */}
              <div className="h-40 md:h-52 overflow-hidden rounded-sm shadow-xl">
                <img
                  src={detailImg2}
                  alt="Fresh Pastries"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* Experience Badge */}
            {/* Floating Experience Badge - Adjusted for the new grid */}
            <div className="absolute -bottom-6 -right-4 z-20 bg-amber-700 text-white p-5 shadow-2xl hidden sm:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-[10px] uppercase tracking-[0.2em]">Years of Brewing</p>
            </div>
          </div>

          {/* RIGHT: TEXT */}
          <div className="space-y-8 animate-fade-in">
            {/* Section label */}
            <div className="flex items-center space-x-3">
              <span className="block w-12 h-[1px] bg-amber-700"></span>
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-amber-700">
                Est. 2010
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 leading-tight">
              Our Story: A Passion for the{" "}
              <span className="text-amber-700">Perfect Roast</span>
            </h2>

            {/* Content */}
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                At <b>Cafe Joy</b>, we don't just serve coffee; we curate
                experiences. What started as a small corner shop has grown into
                a beloved community hub, dedicated to the art of the slow pour.
              </p>

              <blockquote className="border-l-4 border-amber-700 pl-6 italic bg-amber-50/60 py-3">
                “We believe the best conversations happen over a steaming cup of
                freshly ground beans.”
              </blockquote>

              <p>
                Every morning, our master roasters hand-select the finest
                Arabica beans to ensure that your first sip is nothing short of
                extraordinary.
              </p>
            </div>

            {/* Button */}
            <Link 
              to="/heritage" 
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-stone-900 text-white font-semibold uppercase text-xs tracking-widest overflow-hidden"
            >
              <span className="relative z-10">Discover Our Heritage</span>
              <span className="absolute inset-0 bg-amber-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute top-1/2 -right-24 -translate-y-1/2 text-[15rem] font-bold text-stone-200/40 select-none hidden lg:block">
        JOY
      </div>
    </section>
  );
}

export default About;
