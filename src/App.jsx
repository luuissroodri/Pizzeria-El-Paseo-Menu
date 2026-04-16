import React from 'react';
import {
  ArrowLeft,
  Search,
  Heart,
  Clock,
  MapPin,
  Plus,
  Rocket,
  Sparkles,
  Search as SearchIcon,
  Wifi,
  Signal,
  Battery,
  Menu,
  ChevronLeft,
  Circle,
  Instagram,
  MessageCircle,
  Music2
} from 'lucide-react';


const App = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Main Container - Now Full Screen for Mobile Deployment */}
      <div className="flex flex-col min-h-screen">

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">

          {/* Section 2: Banner & Brand Image */}
          <div className="relative h-64 w-full">
            <img
              src="https://i.imgur.com/2QKfhtQ.jpeg"
              alt="Pizzeria El Paseo Banner"
              className="w-full h-full object-cover"
            />
            {/* Overlay Navigation Icons */}
            <div className="absolute top-4 right-4">
              <button className="bg-white/20 backdrop-blur-md p-2.5 rounded-full text-white shadow-lg border border-white/30 hover:bg-white/30 transition-all">
                <Search size={22} strokeWidth={3} />
              </button>
            </div>
            {/* Pizzeria El Paseo Circular Logo Overlay */}
            <div className="absolute -bottom-6 left-6 w-24 h-24 bg-white rounded-full p-1.5 shadow-2xl border-4 border-white overflow-hidden z-20">
              <img
                src="https://i.imgur.com/Yd7Uqrc.png"
                alt="Pizzeria El Paseo"
                className="w-full h-full object-contain p-2"
              />
            </div>
          </div>

          {/* Section 3: Store Header */}
          <div className="bg-white px-6 pt-10 pb-4 rounded-t-[2.5rem] -mt-4 relative z-10">
            <div className="flex justify-between items-center mb-3">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Pizzeria El Paseo</h1>
              <div className="flex gap-4">
                {/* Instagram */}
                <a 
                  href="https://www.instagram.com/pizzeriaelpaseomgta" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#C4121A] hover:opacity-80 transition-opacity"
                >
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.885 5.885 0 004.14 23.37c.765.297 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.89 5.89 0 002.126-1.384 5.89 5.89 0 001.384-2.126c.297-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.89 5.89 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.584-.071 4.85c-.055 1.17-.249 1.805-.415 2.227a3.813 3.813 0 01-.896 1.382 3.813 3.813 0 01-1.382.896c-.422.164-1.056.36-2.226.413-1.266.057-1.647.072-4.85.072s-3.584-.015-4.85-.072c-1.17-.055-1.805-.249-2.227-.415a3.813 3.813 0 01-1.382-.896 3.813 3.813 0 01-.896-1.382c-.164-.422-.36-1.056-.413-2.227-.057-1.266-.072-1.647-.072-4.85s.015-3.584.072-4.85c.055-1.17.249-1.805.415-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413 1.266-.057 1.646-.07 4.85-.07zm0 3.678a6.162 6.162 0 10.001 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 11.001-8.001A4 4 0 0112 16zm7.846-10.405a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                  </svg>
                </a>
                {/* WhatsApp */}
                <a 
                  href="https://api.whatsapp.com/send/?phone=584248925818&text&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#C4121A] hover:opacity-80 transition-opacity"
                >
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                  </svg>
                </a>
                {/* TikTok */}
                <a 
                  href="https://www.tiktok.com/@pizzeriaelpaseomgta?is_from_webapp=1&sender_device=pc" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[#C4121A] hover:opacity-80 transition-opacity"
                >
                  <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1 .05A6.33 6.33 0 0 0 5 20.1a6.33 6.33 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-slate-50 rounded-xl p-3 flex items-center justify-between text-[11px] font-bold text-slate-500">
              <div className="flex items-center gap-2">
                <span>Miercoles a Lunes</span>
                <div className="w-[1px] h-3 bg-slate-300"></div>
                <span>5:00 pm - 12:00 am</span>
              </div>
              <a 
                href="https://maps.app.goo.gl/NuUgWKdsan2eZets5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-emerald-400 font-black hover:text-emerald-500 transition-colors"
              >
                Ver ubicación
              </a>
            </div>
          </div>

          {/* Section 4: Highlights Banner */}
          <div className="px-5 mb-6">
            <div className="bg-[#004524] rounded-2xl p-5 relative overflow-hidden shadow-xl border border-white/10">
              <div className="relative z-10 flex flex-col items-center text-center">
                <h3 className="text-white font-black text-xl mb-1 flex items-center gap-2">
                  ¡Explora Nuestro Menú!
                </h3>
                <p className="text-white/90 text-[13px] font-bold uppercase tracking-wider">
                  Descubre todas nuestras especialidades y variedades
                </p>
              </div>
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/10 rounded-full -ml-12 -mb-12 pointer-events-none" />
            </div>
          </div>

          {/* Section 5: Menu Category - Galáctico */}
          <div className="px-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Pizzas</h2>
              <Rocket size={20} className="text-slate-900" />
            </div>

            {/* Pizza Hawaiiana Card */}
            <div className="bg-white border border-slate-100 rounded-3xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="w-32 h-32 relative flex-shrink-0 bg-slate-50 rounded-2xl overflow-hidden p-0">
                <img
                  src="https://i.imgur.com/PwTzGKW.jpeg"
                  alt="Hawaiiana"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 justify-between pt-1">
                <div>
                  <h4 className="text-slate-900 font-bold text-base mb-1">Hawaiiana</h4>
                  <p className="text-slate-400 text-[11px] leading-tight font-medium">Salsa + Queso + Jamón + Piña</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-900 font-black text-lg">$8.00</span>
                  </div>
                  <button className="bg-white border border-slate-100 shadow-sm w-10 h-10 rounded-xl flex items-center justify-center text-teal-400 hover:bg-slate-50 active:scale-95 transition-all">
                    <Plus size={24} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Menu Category - Especialidades */}
          <div className="px-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Especialidades</h2>
              <div className="flex text-slate-900">
                <SearchIcon size={18} strokeWidth={3} />
                <Sparkles size={16} strokeWidth={3} className="-ml-1" />
              </div>
            </div>

            {/* Al Filetto Especial Card */}
            <div className="bg-white border border-slate-100 rounded-3xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="w-32 h-32 relative flex-shrink-0 bg-slate-50 rounded-2xl overflow-hidden p-0">
                <img
                  src="https://i.imgur.com/DrTo9EF.jpeg"
                  alt="Al Filetto Especial"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col flex-1 justify-between pt-1">
                <div>
                  <h4 className="text-slate-900 font-bold text-base mb-1">Al Filetto</h4>
                  <p className="text-slate-400 text-[11px] leading-tight font-medium">Queso + Tomate Pelado + Orégano + Albahaca</p>
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-slate-900 font-black text-lg">$24.00</span>
                  </div>
                  <button className="bg-white border border-slate-100 shadow-sm w-10 h-10 rounded-xl flex items-center justify-center text-teal-400 hover:bg-slate-50 active:scale-95 transition-all">
                    <Plus size={24} strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Menu Category - Icónicos */}
          <div className="px-6 pb-4 opacity-50">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Icónicos</h2>
              <Sparkles size={20} className="text-slate-900" />
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;