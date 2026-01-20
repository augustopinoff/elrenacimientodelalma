import React from 'react';
import { Heart, Compass, Lightbulb } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const cards = [
    {
      icon: <Compass className="w-8 h-8 text-violet-300" />,
      text: "Para quienes aman la astrología y quieren algo más profundo, estructurado y útil que un horóscopo rápido de redes sociales."
    },
    {
      icon: <Heart className="w-8 h-8 text-rose-300" />,
      text: "Para quienes están en un proceso de cambio personal, sienten incertidumbre y buscan una guía clara para transitar el año."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-amber-300" />,
      text: "Para quienes se interesan por la metafísica, las leyes espirituales y quieren herramientas prácticas para el trabajo interior."
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            ¿Para quién es este libro?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Este libro es para las personas que sienten que el 2026 no puede ser simplemente “un año más”, sino una oportunidad para vivir con mayor propósito.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-slate-800/40 border border-slate-700/50 p-8 rounded-xl hover:border-amber-500/30 transition-colors duration-300 flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-slate-950 rounded-full border border-slate-800 shadow-lg">
                {card.icon}
              </div>
              <p className="text-slate-200 leading-relaxed font-light">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;