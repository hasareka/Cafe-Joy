import React from 'react';

const Heritage = () => {
  return (
    <div className="bg-stone-50 min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-stone-900 mb-8 border-b border-amber-200 pb-4">
          Our <span className="text-amber-700">Heritage</span>
        </h1>
        
        <div className="space-y-12">
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-amber-800 mb-4">The Early Days (2010)</h2>
              <p className="text-stone-600 leading-relaxed">
                Cafe Joy started as a small, three-table shop in a quiet corner of the city. 
                Our founder believed that if you roasted the beans with care, the people would follow.
              </p>
            </div>
            <div className="bg-stone-200 h-64 rounded-sm shadow-inner">
               {/* Add an old-style black & white photo here */}
            </div>
          </section>

          <section className="bg-stone-900 text-white p-10 rounded-sm">
            <h2 className="text-2xl font-bold text-amber-500 mb-4">The Secret Roast</h2>
            <p className="text-stone-300">
              Over 15 years, we perfected a slow-roasting technique that brings out the 
              natural chocolate and nut notes of the Arabica bean without any bitterness.
            </p>
          </section>

          <div className="text-center pt-8">
            <a href="/" className="text-amber-700 font-bold uppercase tracking-widest text-sm hover:underline">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heritage;