import { useState } from 'react';
import {
  Activity,
  CheckCircle2,
  Droplets,
  Feather,
  ShieldAlert,
  ShieldCheck,
  Star,
  Sun,
  Waves,
  Wind
} from 'lucide-react';

export default function App() {
  const [view, setView] = useState<'home' | 'cart' | 'checkout'>('home');
  const [selectedColor, setSelectedColor] = useState('Anthracite');
  const [selectedSize, setSelectedSize] = useState<number | null>(42);

  const colors = [
    { name: 'Noir', class: 'bg-black', image: 'Black' },
    { name: 'Blanc', class: 'bg-white border border-gray-200', image: 'White' },
    { name: 'Anthracite', class: 'bg-gray-800', image: 'Anthracite' },
    { name: 'Gris', class: 'bg-gray-400', image: 'Grey' },
    { name: 'Rouge', class: 'bg-red-600', image: 'Red' },
    { name: 'Jaune', class: 'bg-yellow-400', image: 'Yellow' },
  ];

  const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];

  if (view === 'cart') {
    return (
      <div className="font-sans text-gray-800 bg-gray-50 min-h-screen selection:bg-blue-100 selection:text-blue-900">
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <button onClick={() => setView('home')} className="text-gray-500 hover:text-gray-900 font-medium flex items-center gap-2">
              ← Retour
            </button>
            <div className="text-2xl font-extrabold tracking-tighter text-gray-900">
              AERIS
            </div>
            <div className="w-20" /> {/* Spacer for centering */}
          </div>
        </header>

        <main className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Votre Panier</h1>
          
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-8">
            <div className="flex flex-col sm:flex-row items-center gap-8 border-b border-gray-100 pb-8 mb-8">
              <div className="w-32 h-32 bg-gray-50 rounded-2xl p-4 flex-shrink-0">
                <img 
                  src={`/assets/AERIS-${colors.find(c => c.name === selectedColor)?.image}.png`} 
                  alt={`AERIS-01 ${selectedColor}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">AERIS-01</h2>
                <div className="text-gray-500 space-y-1">
                  <p>Couleur : <span className="font-medium text-gray-900">{selectedColor}</span></p>
                  <p>Taille : <span className="font-medium text-gray-900">{selectedSize || '42'}</span></p>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                99 €
              </div>
            </div>

            <div className="space-y-4 text-gray-600">
              <div className="flex justify-between">
                <span>Sous-total</span>
                <span className="font-medium text-gray-900">99 €</span>
              </div>
              <div className="flex justify-between">
                <span>Frais de livraison</span>
                <span className="font-medium text-green-600">Offerts</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 pt-4 border-t border-gray-100">
                <span>Total</span>
                <span>99 €</span>
              </div>
            </div>
          </div>

          <button onClick={() => setView('checkout')} className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xl py-5 rounded-full font-semibold transition-transform hover:scale-[1.02] shadow-xl shadow-blue-500/30">
            Passer la commande
          </button>
        </main>
      </div>
    );
  }

  if (view === 'checkout') {
    return (
      <div className="font-sans text-gray-800 bg-gray-50 min-h-screen selection:bg-blue-100 selection:text-blue-900">
        <header className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <button onClick={() => setView('cart')} className="text-gray-500 hover:text-gray-900 font-medium flex items-center gap-2">
              ← Retour au panier
            </button>
            <div className="text-2xl font-extrabold tracking-tighter text-gray-900">
              AERIS
            </div>
            <div className="w-32" /> {/* Spacer for centering */}
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Form */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Adresse de livraison</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prénom</label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Jean" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Dupont" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                  <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="123 rue de la République" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Code postal</label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="75001" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                    <input type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Paris" />
                  </div>
                </div>
              </form>
            </div>

            {/* Payment Options */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Paiement</h2>
              <div className="space-y-4">
                {/* Credit Card */}
                <div className="border-2 border-blue-500 bg-blue-50 rounded-xl p-4">
                  <label className="flex items-center justify-between cursor-pointer mb-4">
                    <div className="flex items-center gap-3">
                      <input type="radio" name="payment" className="w-5 h-5 text-blue-600" defaultChecked />
                      <span className="font-medium text-gray-900">Carte bancaire</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="w-8 h-5 bg-gray-200 rounded text-[10px] flex items-center justify-center font-bold">CB</div>
                      <div className="w-8 h-5 bg-gray-200 rounded text-[10px] flex items-center justify-center font-bold">VISA</div>
                    </div>
                  </label>
                  <div className="space-y-4 bg-white p-4 rounded-xl border border-gray-200">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Numéro de carte</label>
                      <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="0000 0000 0000 0000" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">Date d'expiration</label>
                        <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="MM/AA" />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">CVC</label>
                        <input type="text" className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" placeholder="123" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* PayPal */}
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-900">PayPal</span>
                  </div>
                  <div className="font-bold text-blue-800 italic">PayPal</div>
                </label>

                {/* Apple Pay */}
                <label className="flex items-center justify-between p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <input type="radio" name="payment" className="w-5 h-5 text-blue-600" />
                    <span className="font-medium text-gray-900">Apple Pay</span>
                  </div>
                  <div className="font-bold text-gray-900"> Pay</div>
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Résumé de la commande</h2>
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div className="w-20 h-20 bg-gray-50 rounded-xl p-2">
                  <img 
                    src={`/assets/AERIS-${colors.find(c => c.name === selectedColor)?.image}.png`} 
                    alt={`AERIS-01 ${selectedColor}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">AERIS-01</h3>
                  <p className="text-sm text-gray-500">{selectedColor} • Taille {selectedSize}</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>99,00 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span className="text-green-600 font-medium">Offerte</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t border-gray-100">
                  <span>Total</span>
                  <span>99,00 €</span>
                </div>
              </div>
              <button onClick={() => alert('Commande validée ! Merci pour votre achat.')} className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-semibold transition-transform hover:scale-[1.02] shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Payer 99,00 €
              </button>
              <p className="text-xs text-center text-gray-400 mt-4 flex items-center justify-center gap-1">
                <ShieldAlert className="w-3 h-3" /> Paiement 100% sécurisé
              </p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="font-sans text-gray-800 bg-white selection:bg-blue-100 selection:text-blue-900">
      {/* 1. HEADER / NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-extrabold tracking-tighter text-gray-900">
            AERIS
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-sm shadow-blue-500/20">
            Commander
          </button>
        </div>
      </header>

      <main className="pt-20">
        {/* 2. SECTION HERO */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              La première chaussure de sport qui se lave comme un t-shirt.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Fini les odeurs de vestiaire. AERIS est ultra-légère, respirante et conçue pour passer en machine après chaque séance.
            </p>
            <div className="flex flex-col items-center md:items-start gap-3 pt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-4 rounded-full font-semibold transition-transform hover:scale-105 shadow-lg shadow-blue-500/30 w-full sm:w-auto">
                Commander ma paire : 99 €
              </button>
              <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
                Livraison offerte • 30 jours pour essayer
              </p>
            </div>
          </div>
          <div className="flex-1 w-full">
            <img
              src="/assets/AERIS-Hero.png"
              alt="Chaussure de sport AERIS"
              className="w-full h-auto object-cover rounded-3xl shadow-2xl shadow-gray-200/50"
            />
          </div>
        </section>

        {/* 3. SECTION PROBLÈME */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Vos chaussures actuelles sont des nids à bactéries.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Vous lavez vos chaussettes, votre short et votre t-shirt après chaque entraînement. Pourquoi remettez-vous des chaussures imprégnées de la sueur de la semaine dernière ?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Wind,
                  title: "Odeurs tenaces",
                  desc: "Les bactéries prolifèrent dans l'humidité, créant des odeurs impossibles à faire partir."
                },
                {
                  icon: ShieldAlert,
                  title: "Dégradation des matériaux",
                  desc: "La sueur acide ronge les mousses et les colles de vos chaussures classiques."
                },
                {
                  icon: Droplets,
                  title: "Sensation d'humidité",
                  desc: "Remettre une chaussure encore moite de la veille est la pire sensation avant l'effort."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 mx-auto bg-gray-50 rounded-2xl flex items-center justify-center mb-6 text-gray-900">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. SECTION SOLUTION (TECHNIQUE) */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Portez. Transpirez. Lavez. Recommencez.
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Waves,
                  title: "Tech Washable™",
                  desc: "Résiste aux cycles 30°C."
                },
                {
                  icon: Sun,
                  title: "Séchage Express",
                  desc: "Sèche en < 4h à l'air libre."
                },
                {
                  icon: ShieldCheck,
                  title: "Zéro déformation",
                  desc: "Structure à mémoire de forme."
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-2">
                    <item.icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. SECTION BÉNÉFICES USAGE */}
        <section className="bg-gray-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 space-y-10">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Conçue pour la salle,<br />pas pour l'étagère.
              </h2>
              <ul className="space-y-8">
                {[
                  { icon: Feather, title: "Poids plume", desc: "Plus légère qu'un smartphone." },
                  { icon: Activity, title: "Grip Indoor", desc: "Semelle non-marquante." },
                  { icon: Wind, title: "Respirabilité 360°", desc: "Maille aérée ultra-ventilée." }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center shrink-0 text-blue-400">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              <img
                src="/assets/AERIS-User-1.png"
                alt="AERIS en action"
                className="w-full h-full min-h-[300px] object-cover rounded-3xl col-span-2 sm:col-span-1"
              />
              <div className="flex flex-col gap-4 col-span-2 sm:col-span-1">
                <img
                  src="/assets/AERIS-User-2.png"
                  alt="AERIS détail"
                  className="w-full h-48 sm:h-auto sm:flex-1 object-cover rounded-3xl"
                />
                <img
                  src="/assets/AERIS-User-3.png"
                  alt="AERIS performance"
                  className="w-full h-48 sm:h-auto sm:flex-1 object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. SECTION GALERIE PRODUIT */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Minimaliste par essence.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { src: "/assets/AERIS-Black.png", name: 'Édition Noir Absolu' },
                { src: "/assets/AERIS-White.png", name: 'Édition Blanc Pur' },
                { src: "/assets/AERIS-Anthracite.png", name: 'Édition Anthracite' },
                { src: "/assets/AERIS-Grey.png", name: 'Édition Gris Urbain' },
                { src: "/assets/AERIS-Red.png", name: 'Édition Rouge Intense' },
                { src: "/assets/AERIS-Yellow.png", name: 'Édition Jaune Énergie' },
              ].map((item, i) => (
                <div key={i} className="group overflow-hidden rounded-3xl bg-gray-50">
                  <img src={item.src} alt={item.name} className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="p-6 text-center font-medium text-gray-900">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. SECTION PREUVE SOCIALE */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Ils ne reviendront pas en arrière.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex gap-1 text-blue-500 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xl text-gray-800 font-medium leading-relaxed mb-8">
                  "Enfin une chaussure qui ne sent pas le fauve dans mon sac de bureau."
                </p>
                <div className="font-semibold text-gray-900">– Thomas</div>
              </div>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                <div className="flex gap-1 text-blue-500 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xl text-gray-800 font-medium leading-relaxed mb-8">
                  "Je les lave chaque vendredi, le lundi elles sont comme neuves."
                </p>
                <div className="font-semibold text-gray-900">– Sarah</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 8. SECTION SÉLECTION PRODUIT */}
      <section id="shop" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">
            {/* Image Gallery */}
            <div className="flex-1 w-full">
              <div className="bg-gray-50 rounded-3xl p-8 aspect-square flex items-center justify-center">
                <img 
                  src={`/assets/AERIS-${colors.find(c => c.name === selectedColor)?.image}.png`} 
                  alt={`AERIS-01 ${selectedColor}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            
            {/* Product Details */}
            <div className="flex-1 w-full space-y-10">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-2">AERIS-01</h2>
                <p className="text-2xl text-gray-600">99 €</p>
              </div>

              {/* Colors */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-gray-900">Couleur</h3>
                  <span className="text-sm text-gray-500">{selectedColor}</span>
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex flex-col items-center gap-2 p-2 rounded-xl border-2 transition-all ${selectedColor === color.name ? 'border-blue-500 bg-blue-50' : 'border-transparent hover:bg-gray-50'}`}
                    >
                      <div className={`w-8 h-8 rounded-full shadow-sm ${color.class}`} />
                      <span className="text-xs font-medium text-gray-700">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-gray-900">Taille</h3>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 rounded-xl border-2 font-medium transition-all ${selectedSize === size ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <div className="pt-6 space-y-4">
                <button 
                  onClick={() => {
                    if (selectedSize) setView('cart');
                    else alert('Veuillez sélectionner une taille');
                  }}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white text-xl py-5 rounded-full font-semibold transition-transform hover:scale-[1.02] shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3"
                >
                  Ajouter au panier
                </button>
                <p className="text-center text-sm text-gray-500 font-medium flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  Frais de livraison offerts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FOOTER */}
      <footer className="bg-gray-50 border-t border-gray-100 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            L'hygiène n'est pas une option.
          </h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-xl px-10 py-5 rounded-full font-semibold transition-transform hover:scale-105 shadow-xl shadow-blue-500/30 w-full sm:w-auto">
            Choisir ma paire AERIS - 99€
          </button>
          
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm font-medium text-gray-500 pt-8">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400" /> Paiement sécurisé</span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400" /> Expédition 48h</span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-gray-400" /> Retours gratuits</span>
          </div>
          
          <div className="pt-16 text-gray-400 text-sm">
            &copy; 2026 AERIS. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}
