import React from 'react';
import { Sparkles, Moon, BookOpen } from 'lucide-react';

const ContentPreview: React.FC = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">
            ¿Qué vas a encontrar en este libro?
          </h2>
          <p className="text-lg text-slate-300 font-light leading-relaxed">
            Este no es un horóscopo rápido de revista. Es una inmersión profunda en las energías que moldearán tu 2026, diseñado para ser tu brújula durante todo el año.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Card 1: Astrology */}
          <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:bg-white/5 transition-colors duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Moon size={120} />
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-violet-500/20 rounded-lg text-violet-300">
                <Moon size={24} />
              </div>
              <h3 className="font-serif text-2xl text-amber-200">Los 12 Signos</h3>
            </div>
            
            <ul className="space-y-4 text-slate-300">
              {[
                "Panorama general detallado para cada signo.",
                "Predicciones específicas en amor y vínculos.",
                "Proyecciones de dinero, carrera y proyectos.",
                "Tránsitos astrológicos importantes explicados de forma sencilla.",
                "Un personaje histórico arquetípico por cada signo."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 min-w-[6px] min-h-[6px] rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Metaphysics */}
          <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden group hover:bg-white/5 transition-colors duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Sparkles size={120} />
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-500/20 rounded-lg text-amber-300">
                <BookOpen size={24} />
              </div>
              <h3 className="font-serif text-2xl text-amber-200">Metafísica y Trabajo Interior</h3>
            </div>
            
            <ul className="space-y-4 text-slate-300">
              {[
                "Leyes espirituales para aplicar en tu día a día.",
                "Introducción a la Kabbalah y el árbol de la vida.",
                "Explicación del mapa de consciencia (Dr. Hawkins).",
                "Ejercicios prácticos de “dejar ir” y liberación emocional.",
                "Rituales simples para potenciar tu energía.",
                "Espacios de journaling para diseñar tu propio renacimiento."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1.5 min-w-[6px] min-h-[6px] rounded-full bg-amber-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContentPreview;