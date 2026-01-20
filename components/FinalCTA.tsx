import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
        {/* Decorative background element for CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block p-3 bg-amber-400/10 rounded-full mb-6 animate-bounce-slow">
                <Sparkles className="w-8 h-8 text-amber-400" />
            </div>
            
            <h2 className="font-serif text-4xl md:text-6xl text-white mb-6">
                Empieza tu renacimiento en 2026
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 font-light mb-8 max-w-2xl mx-auto">
                No dejes que el año te suceda. Usa esta hoja de ruta de astrología y consciencia para co-crear tu realidad.
            </p>

            <div className="flex flex-col items-center gap-8">
                <div className="bg-slate-900/50 backdrop-blur-md px-6 py-3 rounded-full border border-amber-500/20">
                    <p className="text-slate-200 font-medium">
                        E-book (PDF) – Descarga inmediata: <span className="text-amber-400 text-lg font-bold">11,90 €</span>
                    </p>
                </div>

                <a 
                    href="https://payhip.com/b/4tYhN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-10 py-5 bg-amber-400 text-slate-950 font-bold text-xl rounded-full shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all hover:scale-105 hover:bg-amber-300 hover:shadow-[0_0_50px_rgba(251,191,36,0.6)] flex items-center gap-3 overflow-hidden"
                >
                    <span className="relative z-10">Quiero mi e-book ahora</span>
                    <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
                    
                    {/* Shine effect */}
                    <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[25deg] group-hover:animate-shine" />
                </a>
            </div>
        </div>
    </section>
  );
};

export default FinalCTA;