import React, { useState } from 'react';
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
  Drumstick,
  CupSoda
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
  }
];

const PizzaCard = ({ name, ingredients, image, prices, onSelect }) => {
  const availableSizes = ['P', 'M', 'G'].filter(s => prices[s] !== undefined);
  const [size, setSize] = useState(availableSizes[0] || 'P');

  return (
    <div
      onClick={() => onSelect({ name, ingredients, image, prices, defaultSize: size })}
      className="bg-white border border-slate-100 rounded-3xl p-4 flex gap-4 shadow-sm hover:shadow-md active:scale-[0.98] transition-all cursor-pointer relative overflow-hidden mb-4 last:mb-0"
    >
      <div className="w-28 h-28 relative flex-shrink-0 bg-slate-50 rounded-2xl overflow-hidden p-0">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 justify-between pt-1">
        <div>
          <h4 className="text-slate-900 font-bold text-base mb-0.5">{name}</h4>
          <p className="text-slate-400 text-[10px] leading-tight font-medium line-clamp-2">{ingredients}</p>
        </div>

        <div className="flex flex-col gap-2 mt-auto">
          {/* Selector de Tamaño - Previsualización */}
          <div className="flex bg-slate-100 p-1 rounded-lg w-fit mt-1" onClick={(e) => e.stopPropagation()}>
            {availableSizes.map((s) => (
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

          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-slate-900 font-black text-lg">
                ${prices[size].toFixed(2)}
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
  const categories = ['Pizzas', 'Pasta', 'Mar', 'Aves', 'Especialidades', 'Bebidas'];

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
  if (!isOpen) return null;
  const categories = [
    { name: 'Pizzas', icon: Pizza },
    { name: 'Pasta', icon: Utensils },
    { name: 'Mar', icon: Fish },
    { name: 'Aves', icon: Drumstick },
    { name: 'Especialidades', icon: Sparkles },
    { name: 'Bebidas', icon: CupSoda },
  ];

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
  if (!item) return null;
  const availableSizes = ['P', 'M', 'G'].filter(s => item.prices[s] !== undefined);
  const [size, setSize] = useState(item.defaultSize || availableSizes[0]);
  const [quantity, setQuantity] = useState(1);

  const price = item.prices[size] * quantity;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-200">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white w-full max-w-lg rounded-t-[2.5rem] sm:rounded-[3rem] shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg text-slate-900 hover:scale-110 active:scale-90 transition-all border border-slate-100"
        >
          <X size={20} strokeWidth={3} />
        </button>
        <div className="h-64 w-full bg-slate-100">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-black text-slate-900 mb-2">{item.name}</h2>
            <p className="text-slate-500 font-medium leading-relaxed text-sm">{item.ingredients}</p>
          </div>
          <div className="mb-8">
            <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-3 block">Seleccionar Tamaño</span>
            <div className="flex bg-slate-100 p-1.5 rounded-2xl w-fit">
              {availableSizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`px-6 py-2.5 text-sm rounded-xl transition-all duration-300 ${size === s
                      ? 'bg-[#C4121A] shadow-lg text-white font-black scale-[1.02]'
                      : 'text-slate-500 font-bold hover:text-slate-700'
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-slate-100 rounded-2xl p-1 gap-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 flex items-center justify-center text-slate-900 font-bold hover:bg-white rounded-xl transition-all"
              >
                <Minus size={18} strokeWidth={3} />
              </button>
              <span className="w-10 text-center font-black text-slate-900">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 flex items-center justify-center text-slate-900 font-bold hover:bg-white rounded-xl transition-all"
              >
                <Plus size={18} strokeWidth={3} />
              </button>
            </div>
            <button
              onClick={() => onAddToCart({ ...item, size, quantity, unitPrice: item.prices[size] })}
              className="flex-1 bg-[#C4121A] h-14 rounded-2xl flex items-center justify-center gap-3 text-white font-black shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Agregar</span>
              <span className="bg-white/20 px-3 py-1 rounded-lg text-sm">${price.toFixed(2)}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckoutModal = ({ isOpen, onClose, cart, updateQuantity, deliveryMode, setDeliveryMode, note, setNote, onConfirm }) => {
  if (!isOpen) return null;

  const BOX_PRICES = { 'P': 0.25, 'M': 0.80, 'G': 1.00 };
  const subtotalPizzas = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
  const totalCajas = cart.reduce((sum, item) => sum + (BOX_PRICES[item.size] || 0) * item.quantity, 0);
  const totalFinal = subtotalPizzas + totalCajas;

  return (
    <div className="fixed inset-0 z-[150] bg-white flex flex-col animate-in fade-in duration-200">
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
        <div className="space-y-6 mb-10">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-900">Mis Productos</h3>
          {cart.map((item, index) => (
            <div key={`${item.name}-${item.size}`} className="flex gap-4 items-center animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-slate-900 truncate pr-2">{item.name} ({item.size})</h4>
                  <span className="font-black text-slate-900 text-sm whitespace-nowrap">${(item.unitPrice * item.quantity).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-bold">${item.unitPrice.toFixed(2)} c/u</span>
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
          ))}
        </div>

        {/* Delivery Mode */}
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

        {/* Note */}
        <div className="mb-10">
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-900 mb-4">Nota para el comercio</h3>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Introduce tu nota aquí (opcional)..."
            className="w-full bg-red-50/30 border border-red-100 rounded-[1.5rem] p-5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-[#C4121A] transition-all min-h-[120px] resize-none"
          />
        </div>

        {/* Summary & Confirm Button (Integrated) */}
        <div className="pt-6 border-t border-slate-100 mb-10">
          <div className="space-y-1.5 mb-6 px-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 font-bold">Subtotal en Pizzas</span>
              <span className="text-slate-600 font-bold">${subtotalPizzas.toFixed(2)}</span>
            </div>
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
        item => item.name === product.name && item.size === product.size
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
    const totalCajas = cart.reduce((sum, item) => sum + (BOX_PRICES[item.size] || 0) * item.quantity, 0);
    const totalFinal = subtotalPizzas + totalCajas;

    let message = "🍕 *Nuevo Pedido - Pizzeria El Paseo* 🍕\n\n";
    message += `📍 *Modo:* ${deliveryMode}\n`;
    
    message += `\n*Productos:*\n`;
    cart.forEach((item) => {
      const itemBoxCost = (BOX_PRICES[item.size] || 0) * item.quantity;
      message += `• ${item.quantity}x ${item.name} (${item.size}) - $${(item.unitPrice * item.quantity).toFixed(2)}\n`;
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
    window.open(`https://wa.me/584248812988?text=${encodedMessage}`, '_blank');
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
            onCategoryChange={setActiveCategory}
            onOpenMenu={() => setIsCategoryMenuOpen(true)}
          />

          {/* Section 5: Menu Category - Pizzas */}
          <div className="px-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Pizzas</h2>
              <Pizza size={20} className="text-slate-900" />
            </div>

            {PIZZAS.map((pizza) => (
              <PizzaCard key={pizza.name} {...pizza} onSelect={setSelectedItem} />
            ))}
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

            {/* Torre de Calamares Card (New) */}
            <PizzaCard
              name="Torre de Calamares"
              ingredients="Crujientes aros de calamar servidos con salsa tártara y limón."
              image="https://i.imgur.com/R4E8LUL.jpeg"
              prices={{ P: 20.00 }}
              onSelect={setSelectedItem}
            />
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

      <ProductModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCart}
      />
      <CartSummary
        cart={cart}
        onCheckout={() => setIsCheckoutOpen(true)}
      />
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
        onSelect={setActiveCategory}
        activeCategory={activeCategory}
      />

    </div>
  );
};

export default App;