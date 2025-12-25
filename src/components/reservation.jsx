import { useState } from 'react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    guests: '2',
    time: '10:00'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your table for ${formData.guests} is requested.`);
  };

  return (
    <section id="reservation" className="py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: INFO & HOURS */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-amber-600 font-bold tracking-[0.3em] uppercase text-xs">Book a Table</span>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">Secure Your <span className="text-amber-600">Joyful</span> Moment</h2>
              <p className="text-stone-400 text-lg max-w-md">
                Whether it's a morning meeting or a quiet afternoon retreat, we'll have your favorite spot waiting for you.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <h4 className="font-bold text-amber-600 uppercase tracking-widest text-sm">Opening Hours</h4>
                <p className="text-stone-300 text-sm">Mon - Fri: 7:00 AM - 8:00 PM</p>
                <p className="text-stone-300 text-sm">Sat - Sun: 8:00 AM - 10:00 PM</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold text-amber-600 uppercase tracking-widest text-sm">Location</h4>
                <p className="text-stone-300 text-sm">123 Brew Street, Coffee Valley</p>
                <p className="text-stone-300 text-sm">New York, NY 10001</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: RESERVATION FORM */}
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-2xl text-stone-900">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full p-3 bg-stone-50 border border-stone-200 focus:border-amber-700 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Date</label>
                <input 
                  type="date" 
                  required
                  className="w-full p-3 bg-stone-50 border border-stone-200 focus:border-amber-700 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Time</label>
                <select 
                  className="w-full p-3 bg-stone-50 border border-stone-200 focus:border-amber-700 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, time: e.target.value})}
                >
                  <option>10:00 AM</option>
                  <option>12:00 PM</option>
                  <option>02:00 PM</option>
                  <option>04:00 PM</option>
                  <option>06:00 PM</option>
                </select>
              </div>

              <div className="sm:col-span-2 space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500">Number of Guests</label>
                <input 
                  type="number" 
                  min="1" 
                  max="10" 
                  defaultValue="2"
                  className="w-full p-3 bg-stone-50 border border-stone-200 focus:border-amber-700 outline-none transition-all"
                  onChange={(e) => setFormData({...formData, guests: e.target.value})}
                />
              </div>

              <button className="sm:col-span-2 mt-4 bg-amber-700 hover:bg-amber-800 text-white font-bold py-4 uppercase tracking-[0.2em] text-sm transition-all shadow-lg hover:-translate-y-1">
                Confirm Reservation
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}