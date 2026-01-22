import React from 'react';
import { techStack } from '../data/projects';

const TechStack = () => {
    return (
        <section id="tech" className="py-24 bg-transparent relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-[100px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="space-y-4 text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white px-4 inline-block relative">
                        Tecnologías
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-pink-400/40 rounded-full"></div>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-xl font-light text-balance pt-4">
                        Estas son las herramientas que he logrado aprender hasta ahora
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {techStack.map((tech) => (
                        <div
                            key={tech.name}
                            className="glass p-8 rounded-[3rem] flex flex-col items-center justify-center space-y-5 hover:shadow-2xl hover:shadow-pink-500/5 transition-all duration-500 group border border-white/5 hover:border-pink-500/20"
                        >
                            <div className="w-20 h-20 rounded-[2rem] bg-pink-500/5 flex items-center justify-center group-hover:bg-pink-500/10 transition-all duration-500 group-hover:scale-110">
                                <img
                                    src={tech.icon}
                                    alt={tech.name}
                                    className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" }}
                                />
                            </div>
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-pink-400 transition-colors">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
