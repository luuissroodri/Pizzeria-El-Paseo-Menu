import React, { useState } from 'react';
import { Search, Percent, Pizza, GlassWater, Salad, CakeSlice, Star } from 'lucide-react';

const pizzas = [
  {
    id: 1,
    name: 'Pepperoni Clasica',
    description: 'Salsa de tomate, mozzarella y abundante pepperoni.',
    price: 12.50,
    rating: 4.9,
    image: 'https://i.imgur.com/H4uRJju.jpeg',
  },
  {
    id: 2,
    name: 'Hawaiana Special',
    description: 'Jamon selva negra, piña caramelizada y extra queso.',
    price: 13.90,
    rating: 4.7,
    image: 'https://i.imgur.com/mF6r6Bk.jpeg',
  },
  {
    id: 3,
    name: 'Paseo Especial',
    description: 'Bacon, champiñones, cebolla morada y pimientos frescos.',
    price: 15.50,
    rating: 4.8,
    image: 'https://i.imgur.com/gZDaxkJ.jpeg',
  },
  {
    id: 4,
    name: 'Vegetariana Premium',
    description: 'Tomates cherry, aceitunas negras, cebolla y albahaca.',
    price: 11.90,
    rating: 4.6,
    image: 'https://i.imgur.com/VaVFoCt.jpeg',
  }
];

const categories = [
  { id: 'pizzas', name: 'Pizzas', icon: Pizza },
  { id: 'bebidas', name: 'Bebidas', icon: GlassWater },
  { id: 'ensaladas', name: 'Ensaladas', icon: Salad },
  { id: 'postres', name: 'Postres', icon: CakeSlice }
];

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
      <div className="flex items-center bg-white border-2 border-[#1B9028] shadow-md rounded-2xl p-3 md:p-4 w-full transition-all focus-within:ring-2 focus-within:ring-green-50 focus-within:border-[#1B9028]">
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
    <div className="bg-[#c01013] rounded-3xl p-4 md:p-6 text-white flex items-center justify-between shadow-lg w-full overflow-hidden">
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

const PizzaCard = ({ pizza }) => {
  const [selectedSize, setSelectedSize] = useState('M');

  return (
    <div className="bg-white rounded-[2.5rem] p-4 md:p-5 shadow-xl hover:shadow-2xl transition-all group relative border border-gray-50 flex flex-col h-full">
      <div className="absolute top-7 right-7 z-10 bg-white rounded-full px-2.5 py-1 flex items-center gap-1 shadow-md border border-gray-100">
        <Star size={14} className="fill-[#FFB800] text-[#FFB800]" />
        <span className="font-bold text-[10px] md:text-xs text-gray-800">{pizza.rating}</span>
      </div>

      <div className="relative aspect-square w-full mb-5 overflow-hidden rounded-[2rem] bg-gray-50 flex items-center justify-center">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="flex flex-col flex-grow px-1">
        <h3 className="font-black text-lg md:text-xl text-gray-900 leading-tight mb-1">
          {pizza.name}
        </h3>
        <p className="text-gray-400 text-[10px] md:text-xs font-medium line-clamp-2 mb-4 leading-tight">
          {pizza.description}
        </p>

        <div className="flex gap-2 mb-6">
          {['S', 'M', 'L'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm transition-all duration-300 ${selectedSize === size
                  ? 'bg-[#FF7A01] text-white shadow-md'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-[#FF7A01] font-black text-xl md:text-2xl">
            ${pizza.price.toFixed(2)}
          </span>
          <button className="bg-[#FF7A01] text-white px-5 md:px-7 py-2 md:py-2.5 rounded-full font-bold text-xs md:text-sm hover:scale-105 active:scale-95 transition-all shadow-md">
            Elegir
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [activeCategory, setActiveCategory] = useState('pizzas');

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#FF7A01] selection:text-white">
      <main className="w-full px-6 md:px-12 py-6 md:py-10 flex flex-col items-center md:items-start max-w-full">
        <Header />
        <SearchBar />
        <OfferBanner />

        <section className="w-full mt-8 mb-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 no-scrollbar scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${isActive
                      ? 'bg-[#1B9028] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  <Icon size={20} />
                  <span className="font-bold">{cat.name}</span>
                </button>
              );
            })}
          </div>
        </section>

        <section className="w-full mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {pizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;