import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Heart,
  Clock,
  MapPin,
  Plus,
  Minus,
  X,
  Trash2,
  ShoppingCart,
  Rocket,
  Pizza,
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
  Music2,
  Utensils,
  Fish,
  Leaf,
  CupSoda,
  Drumstick,
  Beef
} from 'lucide-react';


const PIZZAS = [
  {
    name: "Margarita",
    ingredients: "Salsa + Queso",
    image: "https://i.imgur.com/fZiHLMB.jpeg",
    prices: { P: 4.50, M: 7.00, G: 10.00 }
  },
  {
    name: "Napoli",
    ingredients: "Salsa + Queso + Anchoas",
    image: "https://i.imgur.com/TyTv0mz.jpeg",
    prices: { P: 6.00, M: 9.50, G: 13.50 }
  },
  {
    name: "Al Filetto",
    ingredients: "Queso + Tomate Pelado + Orégano + Albahaca",
    image: "https://i.imgur.com/TEcE7QA.jpeg",
    prices: { P: 5.50, M: 8.00, G: 11.50 }
  },
  {
    name: "Marinera",
    ingredients: "Salsa + Queso + Mariscos",
    image: "https://i.imgur.com/TrTzbB9.png",
    prices: { P: 16.00, M: 25.00, G: 34.00 }
  },
  {
    name: "Tropical",
    ingredients: "Salsa + Queso + Jamón + Maíz",
    image: "https://i.imgur.com/HSDYnr2.jpeg",
    prices: { P: 8.00, M: 12.00, G: 16.50 }
  },
  {
    name: "Prosciutto-Funghi",
    ingredients: "Salsa + Queso + Jamón + Champiñón",
    image: "https://i.imgur.com/SC0ONRE.jpeg",
    prices: { P: 8.50, M: 13.00, G: 17.50 }
  },
  {
    name: "Todo Quesos",
    ingredients: "Salsa + Queso Azul + Edam + Parmesano + Mozzarella",
    image: "https://i.imgur.com/zMVxIvc.jpeg",
    prices: { P: 10.50, M: 15.00, G: 18.50 }
  },
  {
    name: "Vegetariana",
    ingredients: "Salsa + Queso + Cebolla + Pimentón + Champiñón + Maíz",
    image: "https://i.imgur.com/EsRo18S.jpeg",
    prices: { P: 9.50, M: 12.50, G: 17.50 }
  },
  {
    name: "4 Estaciones",
    ingredients: "Salsa + Queso + Jamón + Champiñones + Salchichón",
    image: "https://i.imgur.com/DaGzMtD.png",
    prices: { P: 13.00, M: 18.50, G: 24.00 }
  },
  {
    name: "Caprichosa",
    ingredients: "Salsa + Queso + Jamón + Salchichón + Tocineta",
    image: "https://i.imgur.com/cJh4ymd.jpeg",
    prices: { P: 14.50, M: 20.00, G: 26.00 }
  },
  {
    name: "Hawaiiana",
    ingredients: "Salsa + Queso + Jamón + Piña",
    image: "https://i.imgur.com/PwTzGKW.jpeg",
    prices: { P: 8.00, M: 11.50, G: 15.50 }
  },
  {
    name: "Al Filetto Especial",
    ingredients: "Filetto de Pomodoro + Aceite de Oliva + Jamón Serrano + Albahaca + Queso Parmesano + Borde de Queso",
    image: "https://i.imgur.com/DrTo9EF.jpeg",
    prices: { M: 24.00, G: 31.00 }
  },
  {
    name: "Chucho",
    ingredients: "Queso + Chucho + Plátano",
    image: "https://i.imgur.com/SwPOweb.png",
    prices: { P: 8.50, M: 13.50, G: 18.50 }
  },
  {
    name: "Gluten Free",
    ingredients: "Opción saludable con masa sin gluten, salsa artesanal y queso premium.",
    image: "https://i.imgur.com/fZiHLMB.jpeg",
    prices: { M: 12.50 }
  },
  {
    name: "Calzone",
    ingredients: "Salsa + Queso + Jamón + Champiñón (Masa de pizza doblada)",
    image: "https://i.imgur.com/o6MlbfA.jpeg",
    prices: { UNICO: 8.50 },
    noExtras: true
  }
];

const EXTRAS_CONFIG = {
  "Cebolla": { P: 1.50, M: 2.00, G: 2.50 },
  "Pimentón": { P: 1.50, M: 2.00, G: 2.50 },
  "Tomate": { P: 1.50, M: 2.00, G: 2.50 },
  "Berenjena": { P: 1.50, M: 2.00, G: 2.50 },
  "Piña": { P: 1.50, M: 2.00, G: 2.50 },
  "Jamón": { P: 2.00, M: 2.50, G: 3.00 },
  "Anchoas": { P: 1.50, M: 2.50, G: 3.50 },
  "Champiñón": { P: 2.00, M: 3.50, G: 4.50 },
  "Tocineta": { P: 4.50, M: 5.50, G: 6.50 },
  "Salchichón": { P: 4.50, M: 5.50, G: 6.50 },
  "Peperoni": { P: 2.00, M: 2.50, G: 3.50 },
  "Pollo (100 grs.)": { G: 2.50 },
  "Camarones (100 grs.)": { G: 6.50 },
  "Maíz": { P: 1.50, M: 2.50, G: 3.50 },
  "Extra Queso": { P: 2.50, M: 3.50, G: 4.50 },
  "Jamón Serrano (50 grs.)": { G: 10.50 },
  "Aceitunas": { P: 2.00, M: 2.50, G: 3.00 },
  "Borde de Queso": { M: 6.00, G: 8.00 },
  "Queso Parmesano (10 grs.)": { G: 3.00 }
};

const PASTAS_PRODUCTS = [
  {
    name: "Pasta de camarones",
    ingredients: "Pasta perfectamente al dente bañada en nuestra cremosa salsa blanca con camarones frescos.",
    image: "https://i.imgur.com/7VmjM4j.jpeg",
    prices: { UNICO: 20.00 },
    noExtras: true
  }
];

const HAMBURGUESAS_PRODUCTS = [
  {
    name: "Club House",
    ingredients: "Jamón, queso, tocineta, huevo, ensalada, pollo y papas.",
    image: "https://i.imgur.com/DsAKgfb.jpeg",
    prices: { UNICO: 9.00 },
    noExtras: true
  },
  {
    name: "Hamburguesa El Paseo",
    ingredients: "Carne, jamón, queso, huevo, tocineta, ensalada y papas.",
    image: "https://i.imgur.com/jAl3OXY.png",
    prices: { UNICO: 9.00 },
    noExtras: true
  },
  {
    name: "Hamburguesa de Pollo El Paseo",
    ingredients: "Pollo, jamón, queso, huevo, tocineta, ensalada y papas.",
    image: "https://i.imgur.com/neUiVLo.jpeg",
    prices: { UNICO: 9.00 },
    noExtras: true
  }
];

const SUGERENCIAS_PRODUCTS = [
  {
    name: "Torre de Calamares",
    ingredients: "Crujientes aros de calamar servidos con salsa tártara y limón.",
    image: "https://i.imgur.com/R4E8LUL.jpeg",
    imagePosition: "center 95%",
    prices: { UNICO: 21.00 },
    noExtras: true
  },
  {
    name: "Degustación Marina (2 Per)",
    ingredients: "Variedad premium de productos del mar preparados con el toque especial de nuestra cocina.",
    image: "https://i.imgur.com/MZXYDec.jpeg",
    prices: { UNICO: 33.00 },
    noExtras: true
  },
  {
    name: "Guacucos al Ajillo",
    ingredients: "Frescos guacucos salteados.",
    image: "https://i.imgur.com/FVSvhG4.jpeg",
    prices: { UNICO: 14.00 },
    noExtras: true
  },
  {
    name: "Ceviche",
    ingredients: "Pescado fresco marinado en jugo de limón con cebolla morada, cilantro y nuestro toque secreto.",
    image: "https://i.imgur.com/sExDJSN.jpeg",
    prices: { UNICO: 14.00 },
    noExtras: true
  },
  {
    name: "Burrata",
    ingredients: "Queso burrata artesanal servido sobre una cama de rúcula fresca y tomates confitados.",
    image: "https://i.imgur.com/GaF16fx.jpeg",
    prices: { UNICO: 15.00 },
    noExtras: true
  },
  {
    name: "Envoltini de Berenjenas",
    ingredients: "Rollitos de berenjena rellenos de mezcla de quesos y bañados en nuestra salsa especial.",
    image: "https://i.imgur.com/9e9ibE8.jpeg",
    prices: { UNICO: 10.00 },
    noExtras: true
  }
];

const ENSALADAS_PRODUCTS = [
  {
    name: "Ensalada Capresa",
    ingredients: "Rodajas de tomate fresco, mozzarella de búfala y albahaca, bañadas en aceite de oliva y pesto.",
    image: "https://i.imgur.com/UWWTrxe.jpeg",
    prices: { UNICO: 7.00 },
    noExtras: true
  }
];

const BEBIDAS_PRODUCTS = [
  {
    name: "Refresco en Botella",
    ingredients: "Variedad de refrescos nacionales en presentación de botella.",
    image: "https://i.imgur.com/qyyL98u.jpeg",
    prices: { UNICO: 1.25 },
    noExtras: true
  },
  {
    name: "Malta Botella",
    ingredients: "Refrescante malta nacional fría.",
    image: "https://i.imgur.com/34Ih5hL.jpeg",
    prices: { UNICO: 1.25 },
    noExtras: true
  },
  {
    name: "Limonada Frappe",
    ingredients: "Limonada recién exprimida con el punto justo de frappé.",
    image: "https://i.imgur.com/UTi4i08.jpeg",
    prices: { UNICO: 3.25 },
    noExtras: true
  },
  {
    name: "Batido de Lechoza",
    ingredients: "Fresca y cremosa lechoza batida al momento.",
    image: "https://i.imgur.com/LTJlg54.jpeg",
    prices: { UNICO: 2.75 },
    noExtras: true
  },
  {
    name: "Batido de Fresa",
    ingredients: "Fresas naturales seleccionadas, batidas al momento.",
    image: "https://i.imgur.com/fPyo3dh.jpeg",
    prices: { UNICO: 3.75 },
    noExtras: true
  },
  {
    name: "Batido de Parchita",
    ingredients: "Parchita natural seleccionada y batida al momento.",
    image: "https://i.imgur.com/PJcAynE.jpeg",
    prices: { UNICO: 3.75 },
    noExtras: true
  }
];

const MAR_PRODUCTS = [
  {
    name: "Ensalada de Catalana",
    ingredients: "Exquisita combinación de productos del mar sobre una cama de vegetales frescos.",
    image: "https://i.imgur.com/u3AU6CB.jpeg",
    prices: { UNICO: 12.00 },
    noExtras: true
  },
  {
    name: "Pulpo al Gusto",
    ingredients: "Tierno pulpo preparado a su elección (al ajillo, a la vinagreta o a la plancha).",
    image: "https://i.imgur.com/1hcaTNH.png",
    prices: { UNICO: 25.00 },
    noExtras: true
  },
  {
    name: "Parrilla de Mariscos y Pescado (2 Per)",
    ingredients: "Surtido premium de mariscos y pescado fresco a la brasa, servido con acompañantes.",
    image: "https://i.imgur.com/k5N23E3.jpeg",
    prices: { UNICO: 46.00 },
    noExtras: true
  },
  {
    name: "Tapas de Sardinas",
    ingredients: "Sardinas frescas preparadas al estilo tradicional.",
    image: "https://i.imgur.com/OzfdThM.jpeg",
    prices: { UNICO: 5.00 },
    noExtras: true
  }
];

const POSTRES = [
  {
    name: "Banana Split",
    ingredients: "Delicioso postre con tres sabores de helado, banana, sirope y topping.",
    image: "https://i.imgur.com/jHSNUmO.jpeg",
    prices: { UNICO: 8.50 },
    noExtras: true
  },
  {
    name: "Sunday",
    ingredients: "Cremosa copa de helado con topping de chocolate o caramelo.",
    image: "https://i.imgur.com/6PgWNsW.jpeg",
    prices: { UNICO: 7.50 },
    noExtras: true
  },
  {
    name: "Tinita",
    ingredients: "Copa de helado individual, ideal para un antojo rápido.",
    image: "https://i.imgur.com/hdPwiQX.jpeg",
    prices: { UNICO: 4.50 },
    noExtras: true
  },
  {
    name: "Porción de Torta",
    ingredients: "Variedad de tortas caseras servidas en ricas porciones.",
    image: "https://i.imgur.com/Lt90BhJ.jpeg",
    prices: { UNICO: 5.50 },
    noExtras: true
  },
  {
    name: "Quesillo",
    ingredients: "El clásico postre casero venezolano con textura cremosa y caramelo.",
    image: "https://i.imgur.com/bjft7Em.jpeg",
    prices: { UNICO: 4.50 },
    noExtras: true
  },
  {
    name: "Tiramisú",
    ingredients: "Exquisito postre italiano con capas de bizcocho café y crema mascarpone.",
    image: "https://i.imgur.com/b9MF1mD.jpeg",
    prices: { UNICO: 7.00 },
    noExtras: true
  }
];

const PizzaCard = ({ name, ingredients, image, prices, onSelect, noExtras, imagePosition = "center" }) => {
  const availableSizes = ['P', 'M', 'G', 'UNICO'].filter(s => prices[s] !== undefined);
  const [size, setSize] = useState(availableSizes[0] || 'UNICO');

  return (
    <div
      onClick={() => onSelect({ name, ingredients, image, prices, defaultSize: size, noExtras })}
      className="bg-white border border-slate-100 rounded-3xl p-4 flex gap-4 shadow-sm hover:shadow-md active:scale-[0.98] transition-all cursor-pointer relative overflow-hidden mb-4 last:mb-0"
    >
      <div className="w-28 h-28 relative flex-shrink-0 bg-slate-50 rounded-2xl overflow-hidden p-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          style={{ objectPosition: imagePosition }}
        />
      </div>
      <div className="flex flex-col flex-1 justify-between pt-1">
        <div>
          <h4 className="text-slate-900 font-bold text-base mb-0.5">{name}</h4>
          <p className="text-slate-400 text-[10px] leading-tight font-medium line-clamp-2">{ingredients}</p>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          {/* Selector de Tamaño - Solo si hay más de una opción real */}
          {availableSizes.filter(s => s !== 'UNICO').length > 1 ? (
            <div className="flex bg-slate-100 p-1 rounded-lg w-fit mt-1" onClick={(e) => e.stopPropagation()}>
              {availableSizes.filter(s => s !== 'UNICO').map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-3 py-1 text-[10px] rounded-md transition-all duration-200 ${size === s
                      ? 'bg-[#C4121A] shadow-sm text-white font-black'
                      : 'text-slate-400 font-bold hover:text-slate-600'
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          ) : (
            <div className="h-4" />
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-slate-900 font-black text-lg">
                ${(prices[size] || prices['UNICO']).toFixed(2)}
              </span>
            </div>
            <div className="bg-[#C4121A] w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-lg">
              <Plus size={20} strokeWidth={3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryCarousel = ({ activeCategory, onCategoryChange, onOpenMenu }) => {
  const categories = ['Pizzas', 'Pasta', 'Mar', 'Sugerencias', 'Ensaladas', 'Hamburguesas', 'Postres', 'Bebidas'];

  return (
    <div className="flex items-center px-6 mb-8 gap-4 overflow-hidden">
      {/* Hamburger Menu Icon */}
      <button
        onClick={onOpenMenu}
        className="p-2 -ml-2 text-slate-900 border-r border-slate-100 pr-4 transition-transform active:scale-90"
      >
        <Menu size={24} strokeWidth={2.5} />
      </button>

      {/* Tabs list */}
      <div className="flex overflow-x-auto gap-8 hide-scrollbar py-2 items-center flex-1">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className="relative flex flex-col items-center group whitespace-nowrap pt-1"
            >
              <span className={`text-[15px] transition-all duration-300 font-bold leading-none ${
                isActive ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
              }`}>
                {cat}
              </span>
              {/* Underline Indicator */}
              <div className={`mt-2 h-0.5 bg-[#C4121A] rounded-full transition-all duration-300 ${
                isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
              }`} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

const CategoryMenuOverlay = ({ isOpen, onClose, onSelect, activeCategory }) => {
  const categories = [
    { name: 'Pizzas', icon: Pizza },
    { name: 'Pasta', icon: Utensils },
    { name: 'Mar', icon: Fish },
    { name: 'Sugerencias', icon: Sparkles },
    { name: 'Ensaladas', icon: Leaf },
    { name: 'Hamburguesas', icon: Beef },
    { name: 'Postres', icon: CupSoda },
    { name: 'Bebidas', icon: Rocket },
  ];

  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = originalStyle; };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250] animate-in fade-in duration-200">
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-2xl animate-in slide-in-from-left duration-300 overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900">Categorías</h2>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
            <X size={20} strokeWidth={3} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {categories.map((cat) => {
            const phoneNumber = "584248925818";
            const Icon = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => { onSelect(cat.name); onClose(); }}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-2xl transition-all ${
                  isActive ? 'bg-red-50 text-[#C4121A]' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className={`${isActive ? 'text-[#C4121A]' : 'text-slate-400'}`}>
                  <Icon size={20} strokeWidth={2.5} />
                </div>
                <span className="font-bold text-base">{cat.name}</span>
              </button>
            );
          })}
        </div>
        <div className="p-6 bg-slate-50 border-t border-slate-100">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Pizzeria El Paseo</p>
        </div>
      </div>
    </div>
  );
};



/* --- Componentes del Carrito --- */

const ProductModal = ({ item, onClose, onAddToCart }) => {
  const availableSizes = item ? ['P', 'M', 'G'].filter(s => item.prices[s] !== undefined) : [];
  const [size, setSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState([]);

  // Sincronizar tamaño inicial cuando cambia el item
  useEffect(() => {
    if (item) {
      const sizes = ['P', 'M', 'G'].filter(s => item.prices[s] !== undefined);
      setSize(item.defaultSize || sizes[0]);
      setQuantity(1);
      setSelectedExtras([]);
    }
  }, [item]);

  useEffect(() => {
    if (item) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = originalStyle; };
    }
  }, [item]);

  useEffect(() => {
    if (item) {
      setSelectedExtras(prev => prev.filter(extra => EXTRAS_CONFIG[extra][size] !== undefined));
    }
  }, [size, item?.name]);

  if (!item) return null;

  const toggleExtra = (extraName) => {
    setSelectedExtras(prev => 
      prev.includes(extraName) 
        ? prev.filter(e => e !== extraName) 
        : [...prev, extraName]
    );
  };

  const basePrice = item.prices[size];
  const extrasTotal = selectedExtras.reduce((sum, extra) => sum + (EXTRAS_CONFIG[extra][size] || 0), 0);
  const unitPrice = basePrice + extrasTotal;
  const totalPrice = unitPrice * quantity;

  return (
    <div className="fixed inset-0 z-[300] bg-white flex flex-col animate-in fade-in duration-200">
      {/* Botón de Regreso Fijo */}
      <button
        onClick={onClose}
        className="fixed top-6 left-6 w-11 h-11 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl active:scale-90 transition-all z-[310] border border-slate-100"
      >
        <ArrowLeft size={22} className="text-slate-900" strokeWidth={3} />
      </button>

      {/* Área de Scroll Unificada */}
      <div className="flex-1 overflow-y-auto hide-scrollbar pb-12">
        {/* Imagen Hero - Ahora parte del scroll */}
        <div className="h-[45vh] w-full relative">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-full object-cover" 
            style={{ objectPosition: item.imagePosition || 'center' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        {/* Contenido */}
        <div className="px-6 pt-8">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">{item.name}</h2>
            <p className="text-slate-500 font-medium leading-relaxed text-lg">{item.ingredients}</p>
          </div>

          {/* Selector de Tamaño - Solo si hay disponibles (P, M, G) */}
          {availableSizes.length > 0 && !item.noExtras && (
            <div className="mb-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Seleccionar tamaño</h3>
                <span className="text-xs font-black text-[#C4121A] bg-red-50 px-2 py-1 rounded-lg">Obligatorio</span>
              </div>
              <div className="flex bg-slate-100 p-1.5 rounded-2xl w-fit">
                {availableSizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-8 py-3 text-sm rounded-xl transition-all duration-300 ${size === s
                        ? 'bg-[#C4121A] shadow-lg text-white font-black scale-[1.02]'
                        : 'text-slate-500 font-bold hover:text-slate-700'
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Adicionales - Solo si el item permite extras */}
          {!item.noExtras && (
            <div className="mb-10">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-6">Añadir Adicionales</h3>
              <div className="space-y-3">
                {Object.entries(EXTRAS_CONFIG).map(([name, prices]) => {
                  const extraPrice = prices[size];
                  if (extraPrice === undefined) return null;

                  const isSelected = selectedExtras.includes(name);

                  return (
                    <button
                      key={name}
                      onClick={() => toggleExtra(name)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                        isSelected 
                          ? 'border-[#C4121A] bg-red-50/30' 
                          : 'border-slate-100 bg-white hover:border-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${
                          isSelected ? 'bg-[#C4121A] border-[#C4121A]' : 'border-slate-200'
                        }`}>
                          {isSelected && <Plus size={14} className="text-white" strokeWidth={4} />}
                        </div>
                        <span className={`font-bold text-sm ${isSelected ? 'text-slate-900' : 'text-slate-600'}`}>
                          {name}
                        </span>
                      </div>
                      <span className={`text-sm font-black ${isSelected ? 'text-[#C4121A]' : 'text-slate-400'}`}>
                        +${extraPrice.toFixed(2)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
          {/* Botones de Acción al Final del Scroll */}
          <div className="mt-8 pt-8 border-t border-slate-200 flex items-center gap-4">
            {/* Cantidad */}
            <div className="flex items-center bg-slate-100 rounded-2xl p-1 gap-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-slate-900 font-black hover:bg-white rounded-xl transition-all"
              >
                <Minus size={18} strokeWidth={3} />
              </button>
              <span className="w-8 text-center font-black text-slate-900 text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-slate-900 font-black hover:bg-white rounded-xl transition-all"
              >
                <Plus size={18} strokeWidth={3} />
              </button>
            </div>

            <button
              onClick={() => onAddToCart({ 
                ...item, 
                size, 
                quantity, 
                unitPrice: basePrice, 
                selectedExtras,
                extrasTotalPerUnit: extrasTotal
              })}
              className="flex-1 bg-[#C4121A] h-14 rounded-xl flex items-center justify-between px-6 text-white shadow-xl active:scale-95 transition-all"
            >
              <span className="text-sm font-black uppercase tracking-wider">Agregar</span>
              <div className="flex items-center gap-2">
                <div className="w-px h-6 bg-white/20" />
                <span className="text-lg font-black">${totalPrice.toFixed(2)}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutModal = ({ isOpen, onClose, cart, updateQuantity, deliveryMode, setDeliveryMode, note, setNote, onConfirm }) => {
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = originalStyle; };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const BOX_PRICES = { 'P': 0.25, 'M': 0.80, 'G': 1.00 };
  const subtotalPizzas = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const subtotalExtras = cart.reduce((sum, item) => sum + (item.extrasTotalPerUnit * item.quantity), 0);
  const totalCajas = cart.reduce((sum, item) => sum + (BOX_PRICES[item.size] || 0) * item.quantity, 0);
  const totalFinal = subtotalPizzas + subtotalExtras + totalCajas;

  return (
    <div className="fixed inset-0 z-[250] bg-white flex flex-col animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
        <button onClick={onClose} className="p-2 -ml-2 text-slate-900 hover:bg-slate-50 rounded-full transition-colors">
          <ChevronLeft size={28} strokeWidth={3} />
        </button>
        <h2 className="text-lg font-black text-slate-900 tracking-tight uppercase">Checkout</h2>
        <div className="w-10" /> {/* Spacer */}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-10 hide-scrollbar">
        {/* Cart Items */}
        <div className="space-y-8 mb-10">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Mis Productos</h3>
          {cart.map((item, index) => (
            <div key={`${item.name}-${item.size}-${item.selectedExtras?.join(',')}`} className="flex flex-col gap-3 animate-in fade-in duration-300">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-slate-900 truncate pr-2">
                      {item.name} {item.size !== 'UNICO' ? `(${item.size})` : ''}
                    </h4>
                    <span className="font-black text-slate-900 text-sm whitespace-nowrap">${((item.unitPrice + item.extrasTotalPerUnit) * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-bold">${(item.unitPrice + item.extrasTotalPerUnit).toFixed(2)} c/u</span>
                    <div className="flex items-center bg-slate-100 rounded-xl p-0.5 gap-2">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="w-7 h-7 flex items-center justify-center text-slate-900 transition-all hover:bg-white rounded-lg"
                      >
                        {item.quantity === 1 ? <Trash2 size={14} className="text-red-500" strokeWidth={3} /> : <Minus size={14} strokeWidth={3} />}
                      </button>
                      <span className="w-4 text-center font-black text-xs text-slate-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="w-7 h-7 flex items-center justify-center text-slate-900 transition-all hover:bg-white rounded-lg"
                      >
                        <Plus size={14} strokeWidth={3} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Desglose de Extras en Checkout */}
              {item.selectedExtras && item.selectedExtras.length > 0 && (
                <div className="pl-20 flex flex-wrap gap-2">
                  {item.selectedExtras.map(extra => (
                    <span key={extra} className="text-[10px] font-bold text-[#C4121A] bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                      + {extra}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ... Rest of components (Delivery, Note, Summary) ... */}
        {/* Update Summary Breakdown */}
        <div className="mb-10">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-4">Modo de Entrega</h3>
          <div className="flex bg-slate-100 p-1.5 rounded-[1.5rem] gap-1">
            {['Delivery', 'Pick Up'].map((mode) => (
              <button
                key={mode}
                onClick={() => setDeliveryMode(mode)}
                className={`flex-1 py-4 rounded-2xl transition-all duration-300 font-black text-sm ${deliveryMode === mode
                    ? 'bg-[#C4121A] text-white shadow-lg scale-[1.02]'
                    : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-4">Nota para el comercio</h3>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Introduce tu nota aquí (opcional)..."
            className="w-full bg-red-50/30 border border-red-100 rounded-[1.5rem] p-5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-[#C4121A] transition-all min-h-[120px] resize-none"
          />
        </div>

        <div className="pt-6 border-t border-slate-100 mb-10">
          <div className="space-y-1.5 mb-6 px-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 font-bold">Subtotal en Pizzas</span>
              <span className="text-slate-600 font-bold">${subtotalPizzas.toFixed(2)}</span>
            </div>
            {subtotalExtras > 0 && (
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-bold">Total Adicionales</span>
                <span className="text-slate-600 font-bold">${subtotalExtras.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 font-bold">Cajas y Empaques</span>
              <span className="text-slate-600 font-bold">${totalCajas.toFixed(2)}</span>
            </div>
            
            {deliveryMode === 'Delivery' && (
              <div className="flex justify-between items-center text-sm pt-1">
                <span className="text-slate-400 font-bold">Costo Delivery</span>
                <span className="text-[#C4121A] font-black text-[10px] uppercase tracking-tighter">Pendiente (según zona)</span>
              </div>
            )}

            <div className="flex justify-between items-center pt-3 mt-3 border-t border-slate-50">
              <span className="text-slate-900 font-bold">Total a pagar</span>
              <span className="text-2xl font-black text-slate-900">${totalFinal.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={onConfirm}
            className="w-full bg-[#C4121A] text-white h-16 rounded-[2rem] flex items-center justify-center gap-3 font-black shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Rocket size={20} strokeWidth={3} />
            <span className="text-base">Confirmar Pedido vía WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const CartSummary = ({ cart, onCheckout }) => {
  if (cart.length === 0) return null;

  const total = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="fixed bottom-8 left-0 right-0 z-[90] px-6 animate-in fade-in slide-in-from-bottom duration-500">
      <button
        onClick={onCheckout}
        className="max-w-md mx-auto w-full bg-slate-900 text-white h-16 rounded-[2rem] px-8 flex items-center justify-between shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all border border-white/10"
      >
        <div className="flex items-center gap-4">
          <div className="bg-[#C4121A] w-10 h-10 rounded-full flex items-center justify-center shadow-lg">
            <ShoppingCart size={18} className="text-white" strokeWidth={3} />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Ver pedido</span>
            <span className="text-[13px] font-black leading-none">{totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-px h-8 bg-white/10" />
          <span className="text-lg font-black">${total.toFixed(2)}</span>
        </div>
      </button>
    </div>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState('Delivery');
  const [orderNote, setOrderNote] = useState('');
  const [activeCategory, setActiveCategory] = useState('Pizzas');
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        item => 
          item.name === product.name && 
          item.size === product.size && 
          JSON.stringify(item.selectedExtras) === JSON.stringify(product.selectedExtras)
      );
      if (existingItemIndex !== -1) {
        return prevCart.map((item, i) =>
          i === existingItemIndex
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prevCart, product];
    });
    setSelectedItem(null);
  };

  const updateCartQuantity = (index, delta) => {
    setCart(prevCart => {
      const newQuantity = prevCart[index].quantity + delta;
      if (newQuantity <= 0) {
        return prevCart.filter((_, i) => i !== index);
      }
      return prevCart.map((item, i) =>
        i === index ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const removeFromCart = (index) => {
    setCart(prevCart => prevCart.filter((_, i) => i !== index));
  };

  const sendOrder = () => {
    const BOX_PRICES = { 'P': 0.25, 'M': 0.80, 'G': 1.00 };
    const subtotalPizzas = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const subtotalExtras = cart.reduce((sum, item) => sum + (item.extrasTotalPerUnit * item.quantity), 0);
    const totalCajas = cart.reduce((sum, item) => sum + (BOX_PRICES[item.size] || 0) * item.quantity, 0);
    const totalFinal = subtotalPizzas + subtotalExtras + totalCajas;

    let message = "🍕 *Nuevo Pedido - Pizzeria El Paseo* 🍕\n\n";
    message += `📍 *Modo:* ${deliveryMode}\n`;
    
    message += `\n*Productos:*\n`;
    cart.forEach((item) => {
      let itemLine = `• ${item.quantity}x ${item.name}${item.size !== 'UNICO' ? ` (${item.size})` : ''} - $${((item.unitPrice + item.extrasTotalPerUnit) * item.quantity).toFixed(2)}`;
      message += itemLine + '\n';
      
      if (item.selectedExtras && item.selectedExtras.length > 0) {
        item.selectedExtras.forEach(extra => {
          const extraPrice = EXTRAS_CONFIG[extra][item.size];
          message += `  + ${extra} ($${extraPrice.toFixed(2)})\n`;
        });
      }
    });

    if (totalCajas > 0) {
      message += `\n📦 *Empaques/Cajas:* $${totalCajas.toFixed(2)}\n`;
    }

    if (orderNote.trim()) {
      message += `\n📝 *Nota:* ${orderNote}\n`;
    }

    message += `\n------------------------------\n`;
    message += `*Total General: $${totalFinal.toFixed(2)}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/584248925818?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Main Container - Now Full Screen for Mobile Deployment */}
      <div className="flex flex-col min-h-screen">

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">

          {/* Section 2: Banner & Brand Image */}
          <div className="relative h-56 w-full">
            <img
              src="https://i.imgur.com/2QKfhtQ.jpeg"
              alt="Pizzeria El Paseo Banner"
              className="w-full h-full object-cover"
            />
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
            <div className="bg-slate-50 rounded-xl p-4 flex items-center justify-between gap-4 text-slate-500">
              <div className="flex flex-col gap-1 text-[13px] font-bold">
                <span className="whitespace-nowrap text-slate-900 tracking-tight">Miércoles a Lunes</span>
                <span className="whitespace-nowrap text-slate-400 font-medium tracking-tight">5:00 pm - 12:00 am</span>
              </div>
              <a
                href="https://maps.app.goo.gl/NuUgWKdsan2eZets5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-900 font-black text-sm whitespace-nowrap underline decoration-1 underline-offset-4 hover:opacity-75 transition-opacity shrink-0"
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

          {/* New Section: Categories Carousel */}
          <CategoryCarousel 
            activeCategory={activeCategory} 
            onCategoryChange={(category) => {
              setActiveCategory(category);
              const element = document.getElementById(`section-${category}`);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            onOpenMenu={() => setIsCategoryMenuOpen(true)}
          />

          {/* Section 5: Menu Category - Pizzas */}
          <div id="section-Pizzas" className="px-6 mb-8 mt-4">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Pizzas</h2>
              <Pizza size={20} className="text-slate-900" />
            </div>

            {PIZZAS.map((pizza) => (
              <PizzaCard key={pizza.name} {...pizza} onSelect={setSelectedItem} />
            ))}
          </div>

          {/* Section: Menu Category - Pastas */}
          <div id="section-Pasta" className="px-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Pastas</h2>
              <Utensils size={20} className="text-slate-900" />
            </div>
            {PASTAS_PRODUCTS.map((prod) => (
              <PizzaCard key={prod.name} {...prod} onSelect={setSelectedItem} />
            ))}
          </div>

          {/* Section: Menu Category - Mar */}
          <div id="section-Mar" className="px-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Mar</h2>
              <Fish size={20} className="text-slate-900" />
            </div>
            {MAR_PRODUCTS.map((prod) => (
              <PizzaCard key={prod.name} {...prod} onSelect={setSelectedItem} />
            ))}
          </div>

          {/* Section 6: Menu Category - Sugerencias */}
          <div id="section-Sugerencias" className="px-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Sugerencias</h2>
              <Sparkles size={20} className="text-slate-900" />
            </div>
            {SUGERENCIAS_PRODUCTS.map((prod) => (
              <PizzaCard key={prod.name} {...prod} onSelect={setSelectedItem} />
            ))}
          </div>

          {/* Section: Menu Category - Ensaladas */}
          <div id="section-Ensaladas" className="px-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Ensaladas</h2>
              <Leaf size={20} className="text-slate-900" />
            </div>
            {ENSALADAS_PRODUCTS.map((prod) => (
              <PizzaCard key={prod.name} {...prod} onSelect={setSelectedItem} />
            ))}
          </div>

          {/* Section: Menu Category - Hamburguesas */}
          <div id="section-Hamburguesas" className="px-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Hamburguesas</h2>
              <Beef size={20} className="text-slate-900" />
            </div>
            {HAMBURGUESAS_PRODUCTS.map((prod) => (
              <PizzaCard key={prod.name} {...prod} onSelect={setSelectedItem} />
            ))}
          </div>

          {/* Section: Menu Category - Postres */}
          <div id="section-Postres" className="px-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Postres</h2>
              <CupSoda size={20} className="text-slate-900" />
            </div>
            {POSTRES.map((postre) => (
              <PizzaCard key={postre.name} {...postre} onSelect={setSelectedItem} />
            ))}
          </div>

          {/* Section: Menu Category - Bebidas (New) */}
          <div id="section-Bebidas" className="px-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Bebidas</h2>
              <Rocket size={20} className="text-slate-900" />
            </div>

            {BEBIDAS_PRODUCTS.map((prod) => (
              <PizzaCard key={prod.name} {...prod} onSelect={setSelectedItem} />
            ))}
          </div>

        </div>

      </div>

      <ProductModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCart}
      />
      {!selectedItem && !isCheckoutOpen && !isCategoryMenuOpen && (
        <CartSummary
          cart={cart}
          onCheckout={() => setIsCheckoutOpen(true)}
        />
      )}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        updateQuantity={updateCartQuantity}
        deliveryMode={deliveryMode}
        setDeliveryMode={setDeliveryMode}
        note={orderNote}
        setNote={setOrderNote}
        onConfirm={sendOrder}
      />
      <CategoryMenuOverlay
        isOpen={isCategoryMenuOpen}
        onClose={() => setIsCategoryMenuOpen(false)}
        onSelect={(category) => {
          setIsCategoryMenuOpen(false);
          setActiveCategory(category);
          setTimeout(() => {
            const element = document.getElementById(`section-${category}`);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 300);
        }}
        activeCategory={activeCategory}
      />

    </div>
  );
};

export default App;