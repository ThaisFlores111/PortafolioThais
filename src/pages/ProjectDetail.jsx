import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Github, ExternalLink, ShieldCheck, Zap, Layers, Download } from 'lucide-react';
import { projects, techStack } from '../data/projects';
import Carousel from '../components/Carousel';

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold text-white">Proyecto no encontrado</h2>
                <Link to="/" className="text-pink-500 hover:underline">Volver al inicio</Link>
            </div>
        </div>
    );

    const projectTechs = project.tech.stack.map(techName =>
        techStack.find(t => t.name === techName) || { name: techName, icon: "" }
    );

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-6xl">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-pink-400 transition-colors mb-12 group"
                >
                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Volver al Inicio
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 mb-20">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">{project.title}</h1>
                            <div className="h-1.5 w-24 bg-pink-500 rounded-full"></div>
                        </div>

                        <p className="text-xl text-slate-300 leading-relaxed font-medium">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <a href="#" className="flex items-center gap-2 px-8 py-4 bg-pink-500 text-white rounded-2xl font-black hover:bg-pink-600 transition-all shadow-lg shadow-pink-500/20">
                                <ExternalLink size={18} /> Ver Proyecto
                            </a>
                            <a href="#" className="flex items-center gap-2 px-8 py-4 bg-slate-900 border border-slate-800 rounded-2xl font-black hover:bg-slate-800 transition-all">
                                <Github size={18} /> Código Fuente
                            </a>
                            <a
                                href="/cv-dummy.pdf"
                                download
                                className="flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-2xl font-black hover:bg-slate-100 transition-all"
                            >
                                <Download size={18} /> Mi CV
                            </a>
                        </div>
                    </div>

                    <Carousel images={project.images} />
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <div className="glass p-12 rounded-[3.5rem] space-y-6 border border-white/5">
                        <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-400">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-white tracking-tight">El Problema</h3>
                        <p className="text-lg text-slate-400 leading-relaxed font-light">
                            {project.problem}
                        </p>
                    </div>

                    <div className="glass p-12 rounded-[3.5rem] space-y-6 border border-white/5">
                        <div className="w-16 h-16 bg-fuchsia-500/10 rounded-2xl flex items-center justify-center text-fuchsia-400">
                            <Zap size={32} />
                        </div>
                        <h3 className="text-3xl font-black text-white tracking-tight">La Solución</h3>
                        <p className="text-lg text-slate-400 leading-relaxed font-light">
                            {project.solution}
                        </p>
                    </div>
                </div>

                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <div className="inline-block relative">
                            <h2 className="text-4xl font-black text-white tracking-tight">Detalles Técnicos</h2>
                            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-pink-500/40 rounded-full"></div>
                        </div>
                    </div>

                    <div className="grid gap-8">
                        <div className="glass p-10 rounded-[3rem] space-y-8 border border-white/5">
                            <div className="flex items-center gap-3 text-pink-400">
                                <Layers size={24} />
                                <h4 className="font-black uppercase tracking-[0.2em] text-xs">Características Clave</h4>
                            </div>
                            <ul className="grid md:grid-cols-2 gap-6">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex gap-4 text-slate-300 items-start">
                                        <div className="mt-1.5 w-1.5 h-1.5 bg-pink-500 rounded-full shrink-0"></div>
                                        <span className="text-lg font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass p-10 rounded-[3rem] space-y-10 border border-white/5">
                            <h4 className="font-black uppercase tracking-[0.2em] text-xs text-pink-400">Tecnologías Utilizadas</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {projectTechs.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-center p-6 bg-white/[0.02] border border-white/5 rounded-[2.5rem] hover:border-pink-500/30 transition-all group"
                                    >
                                        <div className="w-16 h-16 bg-pink-500/5 rounded-2xl flex items-center justify-center group-hover:bg-pink-500/10 transition-all mb-4">
                                            <img
                                                src={tech.icon}
                                                alt={tech.name}
                                                className="w-10 h-10 group-hover:scale-110 transition-transform grayscale group-hover:grayscale-0 duration-500"
                                                onError={(e) => { e.target.onerror = null; e.target.src = "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg" }}
                                            />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-pink-400 transition-colors text-center">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
