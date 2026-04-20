import React from 'react';
import { Star, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 lg:py-0">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Text Column */}
        <div className="order-2 lg:order-1 flex flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 justify-center lg:justify-start">
            <span className="px-3 py-1 text-xs font-bold tracking-widest text-amber-300 border border-amber-300/30 rounded-full uppercase bg-amber-900/10">
              Nuevo Libro 2026
            </span>
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight text-white drop-shadow-lg">
            El Renacimiento <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 italic">
              del Alma 2026
            </span>
          </h1>
          
          <p className="font-serif text-xl md:text-2xl text-slate-300 italic">
            Guía astrológica y metafísica para vivir el 2026 con más consciencia.
          </p>
          
          <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
            <p>
              Este no es solo un libro de predicciones. Es una herramienta poderosa que combina la sabiduría de los astros con ejercicios de metafísica práctica, leyes espirituales y un mapa de consciencia para navegar el nuevo año.
            </p>
          </div>

          <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm inline-block">
            <p className="text-lg font-semibold text-white flex items-center justify-center lg:justify-start gap-2">
              <Download className="w-5 h-5 text-amber-400" />
              E-book – Descarga inmediata: <span className="text-amber-400 text-xl">11,90 €</span>
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-2">
            <a 
              href="https://payhip.com/b/4tYhN"
              className="payhip-buy-button w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-slate-900 font-bold text-lg rounded-full shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] text-center flex items-center justify-center gap-2"
              data-product="4tYhN"
              data-theme="none"
              data-method="overlay"
            >
              Comprar e-book y descargar ahora
            </a>
            <p className="text-xs text-slate-400 text-center lg:text-left">
              Pagas una sola vez y recibís el archivo en tu correo para leerlo en móvil, tablet u ordenador.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="order-1 lg:order-2 flex justify-center perspective-1000">
          <div className="relative group">
            {/* Glow effect behind book */}
            <div className="absolute inset-0 bg-amber-500/20 blur-[60px] rounded-full group-hover:bg-amber-500/30 transition-all duration-700"></div>
            
            <img 
              src="/portada.jpg" 
              alt="Portada del libro El Renacimiento del Alma 2026" 
              className="relative w-full max-w-[320px] md:max-w-[400px] lg:max-w-[450px] shadow-2xl rounded-sm border border-white/10"
            />
            
            {/* Decorative Stars */}
            <Star className="absolute -top-8 -left-8 text-amber-200 w-8 h-8 opacity-70 animate-pulse" fill="currentColor" />
            <Star className="absolute -bottom-12 right-0 text-violet-400 w-6 h-6 opacity-60 animate-bounce delay-700" fill="currentColor" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;