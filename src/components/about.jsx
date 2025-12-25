import aboutImg from '../assets/images/coffee shop about.jpg';
// Make sure to import two more detail images
import detailImg1 from '../assets/images/screen 1 coffee.jpg'; 
import detailImg2 from '../assets/images/screen 2.jpg';

function About() {
  return (
    <section id="about" className="relative py-24 bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: MINI GALLERY GRID */}
          <div className="relative">
            {/* Background decorative box */}
            <div className="absolute -top-6 -left-6 w-1/2 h-1/2 bg-amber-100/60 -z-0"></div>
            
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* Main Large Image - Spans 2 columns */}
              <div className="col-span-2 overflow-hidden rounded-sm shadow-xl h-80 md:h-96">
                <img 
                  src={aboutImg} 
                  alt="Cafe Atmosphere" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              
              {/* Small Detail 1 */}
              <div className="overflow-hidden rounded-sm shadow-xl h-40 md:h-52">
                <img 
                  src={detailImg1} 
                  alt="Coffee Craft" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                />
              </div>

              {/* Small Detail 2 */}
              <div className="overflow-hidden rounded-sm shadow-xl h-40 md:h-52">
                <img 
                  src={detailImg2} 
                  alt="Fresh Pastries" 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                />
              </div>
            </div>

            {/* Floating Experience Badge - Adjusted for the new grid */}
            <div className="absolute -bottom-6 -right-4 z-20 bg-amber-700 text-white p-5 shadow-2xl hidden sm:block">
              <p className="text-3xl font-bold">15+</p>
              <p className="text-[10px] uppercase tracking-[0.2em]">Years of Brewing</p>
            </div>
          </div>

          {/* RIGHT SIDE: TEXT CONTENT */}
          <div className="relative z-10 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-[1px] bg-amber-700"></div>
                <span className="text-amber-700 font-bold tracking-[0.3em] uppercase text-xs">Est. 2010</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-stone-900 leading-tight">
                Our Story: A Passion for the <span className="text-amber-700">Perfect Roast</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
              <p>
                At <b>Cafe Joy</b>, we don't just serve coffee; we curate experiences. What started as a small corner shop has grown into a beloved community hub, dedicated to the art of the slow pour.
              </p>
              
              <p className="text-base italic border-l-4 border-amber-700 pl-6 py-2 bg-amber-50/50">
                "We believe the best conversations happen over a steaming cup of freshly ground beans."
              </p>
              
              <p>
                Every morning, our master roasters hand-select the finest Arabica beans to ensure that your first sip is nothing short of extraordinary.
              </p>
            </div>

            <div className="pt-4">
              <button className="group relative px-8 py-4 bg-stone-900 text-white font-bold transition-all duration-300 uppercase text-xs tracking-widest overflow-hidden">
                <span className="relative z-10">Discover Our Heritage</span>
                <div className="absolute inset-0 bg-amber-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </div>

        </div>
      </div>
      
      {/* Background Text Flourish */}
      <div className="absolute top-1/2 -right-20 -translate-y-1/2 text-[15rem] font-bold text-stone-200/40 select-none -z-0 hidden lg:block">
        JOY
      </div>
    </section>
  );
}

export default About;