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
  Circle
} from 'lucide-react';


const App = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex justify-center p-0 md:p-8 font-sans">
      {/* Mobile Frame Container (1080x2340 aspect ratio simulated) */}
      <div className="bg-white w-full max-w-[430px] shadow-2xl overflow-hidden relative flex flex-col min-h-screen md:min-h-[850px] md:max-h-[932px] md:rounded-[3rem] md:border-[8px] md:border-black">

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
            <div className="flex justify-between items-start mb-3">
              <h1 className="text-2xl font-black text-slate-900 tracking-tight">Pizzeria El Paseo</h1>
              <Heart size={24} className="text-slate-900" strokeWidth={2} />
            </div>

            {/* Badges */}
            <div className="flex gap-2 mb-4">
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full">
                <div className="w-4 h-4 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-[8px] font-bold">✓</span>
                </div>
                <span className="text-[11px] font-bold text-slate-700">Cashea</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-full">
                <span className="text-[11px]">🏆</span>
                <span className="text-[11px] font-bold text-slate-700">Ganas 2x Más!</span>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-slate-50 rounded-xl p-3 flex items-center justify-between text-[11px] font-bold text-slate-500">
              <div className="flex items-center gap-2">
                <span>Miercoles a Lunes</span>
                <div className="w-[1px] h-3 bg-slate-300"></div>
                <span>5:00 pm - 12:00 am</span>
              </div>
              <button className="text-emerald-400 font-black">Ver ubicación</button>
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