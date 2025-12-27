import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#F9F8F6] text-stone-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
        
        {/* Subtle Background Text - Moved and Faded */}
        <div className="absolute top-0 -left-10 text-[12rem] font-black text-stone-200/30 select-none pointer-events-none uppercase tracking-tighter leading-none">
          Locate
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* LEFT CONTENT (7 Columns) */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-12 bg-amber-700"></span>
                <span className="text-amber-700 font-bold tracking-[0.4em] uppercase text-xs">Find Us</span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-black text-stone-900 leading-[0.9] tracking-tight">
                Visit Our <br />
                <span className="italic font-serif text-amber-700">Sanctuary</span>
              </h2>
              
              <p className="text-stone-500 text-xl max-w-lg leading-relaxed font-light italic">
                "Come for the aroma, stay for the joy. We’re located in the heart of the city's historic roasting district."
              </p>
            </div>

            {/* Structured Info Grid */}
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              
              {/* Item: Address */}
              <div className="group flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-500">
                  <FaMapMarkerAlt size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-stone-400">Our Location</h4>
                  <p className="text-stone-700 font-medium">123 Brew Street, Coffee Valley<br/>New York, NY 10001</p>
                </div>
              </div>

              {/* Item: Hours */}
              <div className="group flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-500">
                  <FaClock size={20} />
                </div>
                <div className="space-y-1 w-full">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-stone-400">Opening Hours</h4>
                  <div className="text-stone-700 text-sm">
                    <div className="flex justify-between border-b border-stone-200 pb-1 mb-1 italic">
                      <span>Mon - Fri</span> <span className="font-bold uppercase text-[10px]">07:00 - 20:00</span>
                    </div>
                    <div className="flex justify-between text-amber-700 font-bold">
                      <span>Sat - Sun</span> <span className="uppercase text-[10px]">08:00 - 22:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item: Phone */}
              <div className="group flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-500">
                  <FaPhoneAlt size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-stone-400">Direct Line</h4>
                  <p className="text-stone-700 font-medium">+1 (234) 567-890</p>
                </div>
              </div>

              {/* Item: Email */}
              <div className="group flex gap-5">
                <div className="flex-shrink-0 w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-amber-700 group-hover:bg-amber-700 group-hover:text-white transition-all duration-500">
                  <FaEnvelope size={18} />
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-xs uppercase tracking-widest text-stone-400">Inquiries</h4>
                  <p className="text-stone-700 font-medium underline decoration-amber-700/30 underline-offset-4">hello@cafejoy.com</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT MAP (5 Columns) */}
          <div className="lg:col-span-5 relative group">
            {/* Soft Glow behind map */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-amber-600 to-amber-100 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl border border-white">
               <div className="relative h-[500px] rounded-2xl overflow-hidden bg-stone-200">
                  {/* Grainy Texture Map Placeholder */}
                  <div className="absolute inset-0 bg-stone-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="relative mb-6">
                        <div className="absolute inset-0 bg-amber-700/30 blur-2xl rounded-full scale-150 animate-pulse"></div>
                        <FaMapMarkerAlt size={64} className="text-amber-700 relative z-10" />
                      </div>
                      <p className="text-stone-500 font-bold uppercase tracking-[0.4em] text-[10px]">Location Data Encrypted</p>
                    </div>
                  </div>

                  {/* Glassmorphism Bottom Bar */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/70 backdrop-blur-lg p-4 rounded-xl shadow-lg border border-white/50 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Live Status</p>
                      <p className="text-xs font-bold text-stone-800">Normal Traffic • Open Now</p>
                    </div>
                    <button className="px-4 py-2 bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-amber-700 transition-colors rounded-lg shadow-md">
                      Directions
                    </button>
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}