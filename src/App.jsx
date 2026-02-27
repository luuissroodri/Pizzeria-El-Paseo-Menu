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

const AppHeader = React.forwardRef((props, ref) => {
  return (
    <div className="w-full bg-white pt-6 pb-2 px-6 mb-2 flex flex-col items-center md:hidden">
      <img
        src="https://i.imgur.com/Yd7Uqrc.png"
        alt="Logo"
        className="w-20 h-auto mb-6 object-contain"
      />
      <div className="w-full relative group h-20 bg-[#c01013] rounded-[2.5rem] p-1 shadow-xl overflow-hidden active:scale-[0.98] transition-all">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12 pointer-events-none" />
        <div className="flex items-center h-full px-6 relative z-10">
          <Search size={24} className="text-white mr-3 opacity-90" strokeWidth={3} />
          <input
            ref={ref}
            type="text"
            placeholder="Buscar en el menú..."
            className="bg-transparent border-none outline-none w-full text-white placeholder-white/70 font-black text-lg"
          />
        </div>
      </div>
    </div>
  );
});
AppHeader.displayName = 'AppHeader';

const DesktopHeader = React.forwardRef((props, ref) => (
  <header className="hidden md:flex justify-between items-center w-full mb-10 pt-6 px-12 max-w-7xl mx-auto">
    <div className="flex flex-col text-left">
      <h1 className="text-gray-900 font-black text-4xl lg:text-5xl leading-tight">
        Menú Paseo
      </h1>
      <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-sm mt-2">Pizzeria El Paseo</p>
    </div>
    <div className="flex items-center gap-8">
      <div className="w-96 relative">
        <div className="flex items-center bg-white border-2 border-gray-100 focus-within:border-[#c01013] rounded-2xl p-4 transition-all shadow-sm">
          <Search size={22} className="text-gray-400 mr-3" />
          <input
            ref={ref}
            type="text"
            placeholder="¿Qué te apetece hoy?..."
            className="bg-transparent border-none outline-none w-full text-gray-800 placeholder-gray-400 font-medium text-lg"
          />
        </div>
      </div>
      <img
        src="https://i.imgur.com/oJKAwiU.png"
        alt="Logo"
        className="w-32 h-auto object-contain"
      />
    </div>
  </header>
));
DesktopHeader.displayName = 'DesktopHeader';

const MenuBanner = () => (
  <div className="w-full px-6 mb-8 md:hidden">
    <div className="py-3 bg-white rounded-[2.5rem] border border-gray-100 flex items-center justify-center shadow-sm">
      <span className="text-gray-400 font-black text-[10px] uppercase tracking-[0.5em] ml-[0.5em]">MENÚ</span>
    </div>
  </div>
);


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
const CategoriesModal = ({ isOpen, onClose, activeCategory, setActiveCategory }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-[250] ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={onClose}
      />
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-[3rem] z-[300] transition-transform duration-500 transform shadow-[0_-20px_50px_rgba(0,0,0,0.1)] ${isOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
      >
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mt-4 mb-6" />
        <div className="px-8 pb-12">
          <h2 className="text-gray-900 font-black text-2xl mb-8 text-center uppercase tracking-tight">Selecciona Categoría</h2>
          <div className="grid grid-cols-3 gap-4">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    onClose();
                  }}
                  className={`flex flex-col items-center justify-center p-5 rounded-3xl transition-all duration-300 ${isActive ? 'bg-[#c01013] text-white shadow-lg' : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                    }`}
                >
                  <Icon size={28} strokeWidth={isActive ? 2.5 : 2} className="mb-2" />
                  <span className={`text-[10px] font-black uppercase tracking-tight text-center ${isActive ? 'text-white' : 'text-gray-600'}`}>
                    {cat.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const BottomNav = ({ activeCategory, setActiveCategory, onSearchClick, isMenuOpen, setIsMenuOpen, isScrolled }) => {
  return (
    <>
      <CategoriesModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <div className="fixed bottom-0 left-0 right-0 z-[200] md:hidden h-20 bg-[#c01013] rounded-t-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
        <div className="relative h-full flex items-center px-10">
          <div
            onClick={() => setIsMenuOpen(true)}
            className="absolute left-1/2 -top-10 -translate-x-1/2 z-[210] flex flex-col items-center pointer-events-auto cursor-pointer"
          >
            {!isScrolled && !isMenuOpen && (
              <div className="absolute -top-14 animate-bounce flex flex-col items-center transition-opacity duration-500">
                <div className="bg-white text-[#c01013] text-[10px] font-black px-4 py-1.5 rounded-full shadow-2xl border-2 border-gray-50 whitespace-nowrap mb-1 uppercase tracking-tighter">PULSA PARA VER CATEGORÍAS</div>
                <div className="w-3 h-3 bg-white rotate-45 -mt-2.5 border-r-2 border-b-2 border-gray-50" />
              </div>
            )}

            <div className={`w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-2xl border-[6px] border-gray-100 transition-all duration-300 ${isMenuOpen ? 'scale-110' : ''} ${!isScrolled ? 'animate-pulse' : ''}`}>
              <CookingPot size={36} strokeWidth={2.5} className="text-[#c01013]" />
            </div>
            <div className="mt-2 bg-white px-3 py-1 rounded-full shadow-md border border-gray-50 flex items-center justify-center">
              <span className="text-[#c01013] font-black uppercase text-[10px] tracking-widest">CATEGORÍAS</span>
            </div>
          </div>

          <div className="flex-1 flex justify-start">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onSearchClick();
              }}
              className="flex flex-col items-center justify-center text-white/90 hover:text-white transition-colors"
            >
              <Search size={26} strokeWidth={2.5} />
              <span className="text-[10px] font-black uppercase mt-1">Buscar</span>
            </button>
          </div>

          <div className="flex-1 flex justify-end">
            <button className="flex flex-col items-center justify-center text-white/90 hover:text-white transition-colors">
              <ShoppingCart size={26} strokeWidth={2.5} />
              <span className="text-[10px] font-black uppercase mt-1">Carrito</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

function App() {
  const [activeCategory, setActiveCategory] = useState('pizzas');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchFocus = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-32 md:pb-10">

      <AppHeader ref={searchInputRef} />

      <DesktopHeader ref={searchInputRef} />

      <main className="w-full max-w-7xl mx-auto flex flex-col items-center md:items-start overflow-hidden">
        <MenuBanner />

        <section className="w-full px-4 md:px-12 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {pizzas.map((pizza) => (
              <PizzaCard key={pizza.id} pizza={pizza} />
            ))}
          </div>
        </section>
      </main>

      <BottomNav
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        onSearchClick={handleSearchFocus}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isScrolled={isScrolled}
      />
    </div>
  );
}

export default App;