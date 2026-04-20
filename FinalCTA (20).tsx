import React, { useState } from 'react';
import { Send, MapPin } from 'lucide-react';

const PaperbackForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Solicitud Libro Papel - ${formData.name}`);
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    );
    window.location.href = `mailto:sofiapinoff@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-12 shadow-2xl border border-amber-500/10">
        
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4 text-amber-400">
            <MapPin size={20} />
            <span className="uppercase tracking-widest text-sm font-bold">Solo disponible en España</span>
          </div>
          <h2 className="font-serif text-3xl text-white mb-4">
            ¿Lo querés en formato papel?
          </h2>
          <p className="text-slate-400">
            Si vivís en España y preferís la experiencia de tener el libro en tus manos (tapa blanda con solapas), puedes solicitarlo directamente a través del siguiente formulario.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre completo</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email de contacto</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
              placeholder="Estoy en España y quiero solicitar mi libro en formato papel."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg"
          >
            <Send size={18} />
            Solicitar información por Email
          </button>
        </form>
        
        <p className="text-xs text-center text-slate-500 mt-4">
          Al hacer clic, se abrirá tu gestor de correo predeterminado para enviar la solicitud a sofiapinoff@gmail.com
        </p>
      </div>
    </section>
  );
};

export default PaperbackForm;