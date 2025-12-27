import React from 'react';
import { Link } from 'react-router-dom';

const FullMenu = () => {
  return (
    <div className="bg-stone-50 min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-stone-900 mb-4 italic">The Signature Collection</h1>
          <p className="text-amber-700 uppercase tracking-widest text-sm font-semibold">Every bean tells a story</p>
        </div>

        {/* Example of a more detailed list layout */}
        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-bold text-stone-800 mb-8 border-l-4 border-amber-700 pl-4">Signature Espresso</h2>
            <div className="grid gap-6">
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <div>
                  <h4 className="font-bold">Honey Lavender Latte</h4>
                  <p className="text-sm text-stone-500">Local honey, organic lavender buds, double espresso.</p>
                </div>
                <span className="font-bold text-amber-700">$6.50</span>
              </div>
              {/* Add more items... */}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-stone-800 mb-8 border-l-4 border-amber-700 pl-4">Signature Savories</h2>
            <div className="grid gap-6">
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <div>
                  <h4 className="font-bold">Avocado Sourdough Toast</h4>
                  <p className="text-sm text-stone-500">Chili flakes, radish, microgreens, lemon zest.</p>
                </div>
                <span className="font-bold text-amber-700">$12.00</span>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-20 text-center">
          <Link to="/" className="bg-stone-200 px-6 py-2 rounded-full text-stone-600 hover:bg-stone-300 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FullMenu;