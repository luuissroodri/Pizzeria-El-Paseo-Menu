import React, { useState, useRef } from 'react';
import { Search, Percent, Pizza, GlassWater, Salad, CakeSlice, Star, Soup, Fish, Drumstick, Utensils, Sparkles, ChevronLeft, ChevronRight, LayoutGrid, ShoppingCart, CookingPot } from 'lucide-react';

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
  { id: 'pastas', name: 'Pastas', icon: Soup },
  { id: 'mar', name: 'Mar', icon: Fish },
  { id: 'aves', name: 'Aves', icon: Drumstick },
  { id: 'ensaladas', name: 'Ensaladas', icon: Salad },
  { id: 'hamburguesas', name: 'Hamburguesas', icon: Utensils },
  { id: 'bebidas', name: 'Bebidas', icon: GlassWater },
  { id: 'sugerencias', name: 'Sugerencias', icon: Sparkles }
];

const Header = () => {
  return (
    <>
      <header className="flex flex-col items-center w-full mb-2 md:hidden text-center pt-8">
        <img
          src="https://i.imgur.com/Yd7Uqrc.png"
          alt="Logo Pizzeria El Paseo"
          className="w-24 h-auto object-contain bg-transparent py-2"
        />
        <h1 className="text-gray-900 font-black text-2xl leading-none">
          Menú
        </h1>
      </header>

      <header className="hidden md:flex justify-between items-center w-full mb-6 pt-4">
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

const SearchBar = React.forwardRef((props, ref) => {
  return (
    <div className="w-full mb-4 md:mb-6">
      <div className="flex items-center bg-white border-2 border-[#c01013] shadow-md rounded-2xl p-3 md:p-4 w-full transition-all focus-within:ring-2 focus-within:ring-red-50 focus-within:border-[#c01013]">
        <Search className="text-[#c01013] mr-3 shrink-0" size={22} />
        <input
          ref={ref}
          type="text"
          placeholder="Buscar pizza..."
          className="bg-transparent border-none outline-none w-full text-gray-800 placeholder-map-400 text-base md:text-lg"
        />
      </div>
    </div>
  );
});
SearchBar.displayName = 'SearchBar';

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

        <div className="flex gap-1.5 mb-4">
          {['S', 'M', 'L'].map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-[10px] md:text-sm transition-all duration-300 ${selectedSize === size
                ? 'bg-[#c01013] text-white shadow-md'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-[#c01013] font-black text-base md:text-2xl">
            ${pizza.price.toFixed(2)}
          </span>
          <button className="border-2 border-[#c01013] text-[#c01013] px-3 md:px-7 py-1.5 md:py-2 rounded-full font-bold text-[10px] md:text-sm hover:bg-[#c01013] hover:text-white active:scale-95 transition-all shadow-sm">
            Elegir
          </button>
        </div>
      </div>
    </div>
  );
};

const BottomNav = ({ activeCategory, setActiveCategory, onSearchClick }) => {
  const navItems = [
    { id: 'pizzas', name: 'Pizzas', icon: Pizza },
    { id: 'pastas', name: 'Pastas', icon: Soup },
    { id: 'null', name: '', icon: null },
    { id: 'mar', name: 'Mar', icon: Fish },
    { id: 'bebidas', name: 'Bebidas', icon: GlassWater },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#c01013] border-t border-white/10 flex justify-around items-center py-2 px-4 md:hidden z-[100] shadow-[0_-4px_25px_rgba(0,0,0,0.15)] rounded-t-[2.5rem] antialiased">
      {navItems.map((item, index) => {
        if (index === 2) {
          return (
            <button
              key="search-btn"
              onClick={onSearchClick}
              className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl -mt-10 border-4 border-[#c01013] ring-4 ring-white/10 active:scale-95 transition-all z-[110]"
            >
              <Search size={22} strokeWidth={3} className="text-[#c01013]" />
            </button>
          );
        }
        const Icon = item.icon;
        const isActive = activeCategory === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveCategory(item.id)}
            className={`w-12 flex flex-col items-center gap-1 transition-all duration-300 ${isActive ? 'text-white' : 'text-white/50'}`}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} className="transition-all duration-300" />
            <span className="text-[9px] font-extrabold uppercase tracking-widest">{item.name}</span>
          </button>
        );
      })}
    </nav>
  );
};

const StickyCart = () => (
  <button className="fixed top-4 left-4 z-[110] bg-[#c01013] text-white p-3 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all border-2 border-white/20">
    <ShoppingCart size={24} />
  </button>
);

function App() {
  const [activeCategory, setActiveCategory] = useState('pizzas');
  const scrollRef = useRef(null);
  const searchInputRef = useRef(null);

  const handleSearchFocus = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 pb-24 md:pb-10">
      <StickyCart />
      <main className="w-full px-6 md:px-12 py-6 md:py-10 flex flex-col items-center md:items-start max-w-full">
        <Header />
        <SearchBar ref={searchInputRef} />
        <section className="w-full mt-2 mb-8">
          <div className="flex justify-center md:mx-auto mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50/50 border border-red-100 rounded-full shadow-sm hover:bg-red-50 transition-colors">
              <CookingPot size={14} className="text-[#c01013]" />
              <span className="text-[#c01013] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">Categorías</span>
            </div>
          </div>

          <div className="relative group max-w-6xl mx-auto w-full">
            <button
              onClick={() => scroll('left')}
              className="absolute left-[-15px] md:left-[-25px] top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-2 border border-gray-100 text-[#c01013] hover:scale-110 transition-all flex md:opacity-0 md:group-hover:opacity-100 lg:hidden"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6" />
            </button>

            <div
              ref={scrollRef}
              className="flex items-center lg:flex-wrap lg:justify-center gap-4 overflow-x-auto lg:overflow-visible pb-6 no-scrollbar scroll-smooth px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <style>{`
                .no-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex flex-col items-center justify-center min-w-[80px] w-[80px] h-[90px] rounded-[2rem] p-2 transition-all duration-300 border-2 shrink-0 ${isActive
                      ? 'bg-[#c01013] text-white border-[#c01013] shadow-xl'
                      : 'bg-white text-gray-400 border-gray-100 hover:border-red-100 hover:bg-red-50/20 shadow-sm'
                      }`}
                  >
                    <div className={`w-9 h-9 flex items-center justify-center rounded-xl mb-1.5 transition-colors ${isActive ? 'bg-white/20 text-white' : 'bg-red-50 text-[#c01013]'}`}>
                      <Icon size={18} />
                    </div>
                    <span className={`font-black text-[9px] md:text-[10px] uppercase tracking-tight transition-colors ${isActive ? 'text-white' : 'text-gray-600'}`}>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => scroll('right')}
              className="absolute right-[-15px] md:right-[-25px] top-1/2 -translate-y-1/2 z-20 bg-white shadow-xl rounded-full p-2 border border-gray-100 text-[#c01013] hover:scale-110 transition-all flex md:opacity-0 md:group-hover:opacity-100 lg:hidden"
            >
              <ChevronRight size={20} className="md:w-6 md:h-6" />
            </button>
          </div>
        </section>

        <section className="w-full mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 px-2 md:px-0">
            {pizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        </section>
      </main>
      <BottomNav activeCategory={activeCategory} setActiveCategory={setActiveCategory} onSearchClick={handleSearchFocus} />
    </div>
  );
}

export default App;