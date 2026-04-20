import React from 'react';
import Hero from './components/Hero';
import ContentPreview from './components/ContentPreview';
import TargetAudience from './components/TargetAudience';
import AboutAuthor from './components/AboutAuthor';
import PaperbackForm from './components/PaperbackForm';
import FinalCTA from './components/FinalCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-slate-200 bg-slate-950 overflow-x-hidden selection:bg-amber-400 selection:text-slate-900">
      {/* Background Gradient Wrapper */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 opacity-100" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-violet-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <ContentPreview />
        <TargetAudience />
        <AboutAuthor />
        <PaperbackForm />
        <FinalCTA />
        
        <footer className="py-8 text-center text-slate-500 text-sm border-t border-white/5">
          <p>© {new Date().getFullYear()} Augusto Pinoff. Todos los derechos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;