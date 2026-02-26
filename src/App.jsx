import React from 'react';
import { Search, Percent } from 'lucide-react';

const Header = () => {
  return (
    <>
      <header className="flex flex-col items-center w-full mb-4 md:hidden text-center">
        <img
          src="https://i.imgur.com/Yd7Uqrc.png"
          alt="Logo Pizzeria El Paseo"
          className="w-32 h-auto object-contain bg-transparent py-4 mb-0"
        />
        <h1 className="text-gray-900 font-black text-3xl leading-none">
          Menú
        </h1>
      </header>

      <header className="hidden md:flex justify-between items-center w-full mb-8">
        <div className="flex flex-col text-left">
          <h1 className="text-gray-900 font-black text-3xl lg:text-4xl leading-tight">
            Menú Pizzeria El Paseo
          </h1>
        </div>
        <div className="shrink-0 ml-6">
          <img
            src="https://i.imgur.com/oJKAwiU.png"
            alt="Logo Pizzeria El Paseo"
            className="w-32 h-24 lg:w-40 lg:h-28 object-contain bg-transparent"
          />
        </div>
      </header>
    </>
  );
};

const SearchBar = () => {
  return (
    <div className="w-full mb-6">
      <div className="flex items-center bg-white border-2 border-[#1B9028] shadow-md rounded-2xl p-3 md:p-4 w-full transition-all focus-within:ring-2 focus-within:ring-green-50 focus-within:border-[#1b9028]">
        <Search className="text-[#1B9028] mr-3 shrink-0" size={22} />
        <input
          type="text"
          placeholder="Buscar pizza..."
          className="bg-transparent border-none outline-none w-full text-gray-800 placeholder-gray-400 text-base md:text-lg"
        />
      </div>
    </div>
  );
};

const OfferBanner = () => {
  return (
    <div className="bg-[#1B9028] rounded-3xl p-4 md:p-6 text-white flex items-center justify-between shadow-lg w-full overflow-hidden">
      <div className="flex items-center text-left w-full">
        <div className="bg-white/20 rounded-xl p-2 md:p-3 mr-4 flex items-center justify-center shrink-0">
          <Percent size={24} className="text-white md:w-8 md:h-8" />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="font-black text-lg md:text-2xl mb-0 tracking-tight text-white">¡Oferta Especial!</h2>
          <p className="text-white/95 text-xs md:text-base font-medium leading-tight mt-0.5">
            20% de descuento en tu primer pedido
          </p>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#c01013] selection:text-white">
      <main className="w-full px-6 md:px-12 py-6 md:py-10 flex flex-col items-center md:items-start max-w-full">
        <Header />
        <SearchBar />
        <OfferBanner />
      </main>
    </div>
  );
}

export default App;