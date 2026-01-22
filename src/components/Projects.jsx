import React from 'react';
import { NavLink } from 'react-router-dom';
import { ExternalLink, ArrowRight, Heart } from 'lucide-react';
import { projects } from '../data/projects';

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-fuchsia-500/5 rounded-full blur-[150px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="space-y-4 text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white inline-block relative">
                        Proyectos
                        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-fuchsia-400/40 rounded-full"></div>
                    </h2>
                    <p className="text-slate-400 max-w-xl mx-auto text-xl font-light text-balance pt-4">
                        Trabajos en los que participé y que realicé.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative">
                            <div className="absolute -inset-4 bg-pink-500/5 rounded-[4rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>

                            <div className="relative glass rounded-[3.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-4 border border-white/5 hover:border-pink-500/10">
                                <div className="aspect-[16/10] overflow-hidden">
                                    <img
                                        src={project.images[0]}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
                                    />
                                </div>

                                <div className="p-12 space-y-8">
                                    <div className="flex flex-wrap gap-3">
                                        {project.tech.stack.slice(0, 3).map((t) => (
                                            <span key={t} className="px-5 py-2 bg-pink-500/5 text-pink-400 text-[10px] font-black uppercase tracking-[0.2em] rounded-full border border-pink-500/10">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-4xl font-black text-white tracking-tight">{project.title}</h3>
                                        <p className="text-lg text-slate-400 font-medium italic leading-relaxed">
                                            {project.shortDescription}
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-8 pt-4">
                                        <NavLink
                                            to={`/projects/${project.id}`}
                                            className="px-8 py-4 bg-pink-500/10 text-pink-400 font-black rounded-2xl hover:bg-pink-500 hover:text-white transition-all group/link flex items-center gap-3"
                                        >
                                            Ver Detalles <ArrowRight size={20} className="group-hover/link:translate-x-1 transition-transform" />
                                        </NavLink>
                                        <a href="#" className="p-4 glass rounded-[1.5rem] hover:text-pink-400 hover:border-pink-500/20 transition-all">
                                            <ExternalLink size={24} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
