import { FaFacebookF, FaInstagram, FaTwitter, FaPinterestP } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          
          {/* Logo Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tighter mb-1">CAFE JOY</h2>
            <p className="text-stone-500 text-[10px] uppercase tracking-[0.3em]">Crafting Joy Since 2010</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors"><FaInstagram size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors"><FaFacebookF size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors"><FaTwitter size={20} /></a>
            <a href="#" className="text-stone-400 hover:text-amber-600 transition-colors"><FaPinterestP size={20} /></a>
          </div>

          {/* Back to top or Copyright */}
          <div className="text-center md:text-right">
            <p className="text-stone-500 text-xs uppercase tracking-widest">
              © 2025 Cafe Joy. All Rights Reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}