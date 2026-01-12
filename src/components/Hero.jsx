import React from 'react';
import { ArrowRight, Download, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-32 pb-20 relative overflow-hidden">
      <div className="absolute top-20 right-[10%] w-96 h-96 bg-pink-500/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-[10%] w-96 h-96 bg-fuchsia-500/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 animate-in fade-in slide-in-from-left duration-1000">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-bold tracking-wide uppercase">
              <Sparkles size={16} /> Disponible para nuevos proyectos
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[1.1] tracking-tight text-white">
              Soy <span className="text-pink-400">Lorem</span> <span className="text-fuchsia-400">Ipsum</span>
            </h1>
            <p className="text-3xl text-slate-400 font-medium leading-tight text-balance">
              Desarrolladora Full Stack creando experiencias digitales <span className="text-white">elegantes</span> y funcionales.
            </p>
          </div>

          <p className="text-xl text-slate-400 max-w-xl leading-relaxed font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#projects"
              className="px-10 py-5 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-black text-lg transition-all transform hover:-translate-y-1 flex items-center gap-3 shadow-2xl shadow-pink-500/20"
            >
              Ver Proyectos <ArrowRight size={22} />
            </a>
            <a
              href="/cv-dummy.pdf"
              download
              className="px-10 py-5 bg-white text-slate-900 rounded-full font-black text-lg transition-all transform hover:-translate-y-1 flex items-center gap-3 shadow-2xl shadow-white/10"
            >
              <Download size={22} /> Mi CV
            </a>
          </div>
        </div>

        <div className="relative group animate-in fade-in slide-in-from-right duration-1000">
          <div className="absolute -inset-4 bg-pink-500/10 rounded-[4rem] blur-2xl group-hover:bg-pink-500/20 transition duration-1000"></div>
          <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl bg-slate-800/50 border border-white/5">
            <div className="w-full h-full flex items-center justify-center text-slate-700 text-9xl font-thin">
              ✧
            </div>
          </div>
          <div className="absolute -bottom-8 -right-8 p-8 glass rounded-[2.5rem] shadow-2xl flex items-center gap-5 border border-white/10">
            <div className="text-4xl font-black text-pink-400">5+</div>
            <div className="text-sm font-bold leading-snug text-white/90">Años de<br />Experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
