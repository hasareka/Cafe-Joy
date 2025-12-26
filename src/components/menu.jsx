// Example using your existing images or standard placeholder naming
import espressoImg from '../assets/images/espresso.jpeg';
import Caramel from '../assets/images/Caramel Macchiato.jpg';
import VelvetLatte from '../assets/images/Velvet Latte.jpg';

import FrenchPress from '../assets/images/French Press.jpg';
import PourOver from '../assets/images/Pour Over (V60).jpg';
import ColdBrew from '../assets/images/Cold Brew.jpg';

import ButterCroissant from '../assets/images/Butter Croissant.jpg';
import AlmondDanishes from '../assets/images/Almond Danishes.jpg';
import DarkChocoMuffin from '../assets/images/Dark Choco Muffin.jpg';

const menuData = [
  {
    category: "Specialty Coffee",
    items: [
      { name: "Espresso", price: "$3.50", desc: "Pure, intense, and aromatic.", image: espressoImg },
      { name: "Caramel Macchiato", price: "$5.00", desc: "Espresso with milk and vanilla.", image: Caramel },
      { name: "Velvet Latte", price: "$4.50", desc: "Our signature smooth-textured latte.", image: VelvetLatte },
    ]
  },
  {
    category: "Handcrafted Brews",
    items: [
      { name: "French Press", price: "$6.00", desc: "Full-bodied coffee for two.", image: FrenchPress },
      { name: "Pour Over (V60)", price: "$5.50", desc: "Clean and vibrant single-origin.", image: PourOver },
      { name: "Cold Brew", price: "$5.00", desc: "Slow-steeped for 18 hours.", image: ColdBrew },
    ]
  },
  {
    category: "Fresh Pastries",
    items: [
      { name: "Butter Croissant", price: "$4.00", desc: "Flaky, buttery, and baked fresh.", image: ButterCroissant },
      { name: "Almond Danishes", price: "$4.50", desc: "Sweet almond filling with flakes.", image: AlmondDanishes },
      { name: "Dark Choco Muffin", price: "$3.75", desc: "Rich Belgian chocolate chunks.", image: DarkChocoMuffin },
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-amber-700 font-bold tracking-[0.3em] uppercase text-xs">Taste the Joy</span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900">Our Menu</h2>
          <div className="w-24 h-[2px] bg-amber-700 mx-auto mt-4"></div>
        </div>

        {/* Menu Grid */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
          {menuData.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <h3 className="text-2xl font-bold text-stone-800 border-b border-stone-200 pb-4 flex items-center gap-3">
                <span className="w-2 h-2 bg-amber-700 rounded-full"></span>
                {section.category}
              </h3>
              
              <div className="space-y-8">
                {section.items.map((item, i) => (
                  <div key={i} className="flex gap-4 group cursor-pointer">
                    {/* Item Thumbnail */}
                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg shadow-md border border-stone-200">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    </div>

                    {/* Item Details */}
                    <div className="flex-1">
                      <div className="flex justify-between items-baseline mb-1">
                        <h4 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                          {item.name}
                        </h4>
                        <div className="flex-1 border-b border-dotted border-stone-300 mx-2"></div>
                        <span className="text-amber-700 font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-stone-500 line-clamp-2 italic">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center border-t border-stone-200 pt-10">
          <p className="text-stone-400 text-xs uppercase tracking-widest mb-6">
            * Sourced ethically • Roasted daily • Joy in every sip
          </p>
          <button className="px-10 py-4 bg-stone-900 text-white font-bold hover:bg-amber-700 transition-all duration-300 uppercase text-xs tracking-widest shadow-xl rounded-sm">
            Explore Full Signature Menu
          </button>
        </div>
      </div>
    </section>
  );
}