import React, { useState } from 'react';
import { Mail, Github, Linkedin, MessageSquare, Send, Download, Sparkles, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await emailjs.send(
                'service_vxf6t5h', // <-- CAMBIAR AQUÍ: Service ID
                'template_c929qep', // <-- CAMBIAR AQUÍ: Template ID
                {
                    nombre: formData.nombre,
                    email: formData.email,
                    mensaje: formData.mensaje,
                },
                '1Qj2PaoMM5pvxP_Ht' // <-- CAMBIAR AQUÍ: Public Key (Se encuentra en 'Account' -> 'API Keys')
            );

            setStatus('sent');
            setFormData({ nombre: '', email: '', mensaje: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error:', error);
            setStatus('idle');
            alert("Error al enviar. Verifica tu Template ID.");
        }
    };

    return (
        <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/5 rounded-full blur-[150px] -z-10"></div>

            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto glass p-10 md:p-16 lg:p-20 rounded-[4rem] shadow-2xl relative overflow-hidden border border-white/5">

                    <div className="grid lg:grid-cols-5 gap-20 relative z-10">
                        <div className="lg:col-span-2 space-y-12">
                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 text-pink-400 font-black uppercase tracking-[0.2em] text-xs">
                                    <Sparkles size={14} /> Trabajemos juntos
                                </div>
                                <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] text-balance">
                                    Hablemos de tu <span className="text-pink-400">Proyecto</span>
                                </h2>
                                <p className="text-xl text-slate-400 font-light leading-relaxed">
                                    Si tienes una idea en mente o quieres colaborar en algo increíble, no dudes en escribirme.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <a href="mailto:danteyupanqui.yr@gmail.com" className="flex items-center gap-6 p-8 rounded-[2.5rem] bg-white/5 hover:bg-pink-500 hover:text-white transition-all duration-500 group border border-white/5 shadow-xl hover:-translate-y-1">
                                    <div className="w-16 h-16 bg-pink-500/10 rounded-2xl flex items-center justify-center text-pink-400 group-hover:bg-white/20 group-hover:text-white transition-all">
                                        <Mail size={28} />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <div className="text-[10px] font-black text-pink-400 group-hover:text-white/80 uppercase tracking-[0.3em] mb-1">Escríbeme</div>
                                        <div className="text-xl font-black truncate tracking-tight">danteyupanqui.yr@gmail.com</div>
                                    </div>
                                </a>

                                <div className="flex flex-wrap gap-4 pt-4">
                                    {[
                                        { icon: <Linkedin size={24} />, label: 'LinkedIn', href: '#' },
                                        { icon: <Github size={24} />, label: 'GitHub', href: '#' },
                                        { icon: <MessageSquare size={24} />, label: 'Twitter', href: '#' }
                                    ].map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/5 hover:border-pink-500/30 hover:text-pink-400 transition-all shadow-xl hover:-translate-y-2"
                                            title={social.label}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-3">
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white/[0.02] p-10 md:p-12 rounded-[3.5rem] border border-white/5 shadow-inner space-y-10"
                            >
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Nombre</label>
                                        <input
                                            required
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 rounded-full px-8 py-6 outline-none focus:ring-2 focus:ring-pink-500/30 focus:bg-white/10 transition-all border border-white/5 font-medium text-white placeholder-slate-600 shadow-inner"
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Email</label>
                                        <input
                                            required
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 rounded-full px-8 py-6 outline-none focus:ring-2 focus:ring-pink-500/30 focus:bg-white/10 transition-all border border-white/5 font-medium text-white placeholder-slate-600 shadow-inner"
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-xs font-black uppercase tracking-[0.3em] text-slate-500 ml-4">Mensaje</label>
                                    <textarea
                                        required
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 rounded-[2.5rem] px-8 py-6 outline-none focus:ring-2 focus:ring-pink-500/30 focus:bg-white/10 transition-all border border-white/5 font-medium text-white placeholder-slate-600 min-h-[200px] shadow-inner"
                                        placeholder="Cuéntame sobre tu proyecto..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    className={`w-full py-7 rounded-full font-black text-xl flex items-center justify-center gap-4 transform transition-all shadow-2xl ${status === 'sent'
                                        ? 'bg-emerald-500 text-white cursor-default'
                                        : 'bg-pink-500 hover:bg-pink-600 text-white hover:-translate-y-1 active:scale-[0.98] shadow-pink-500/40'
                                        } ${status === 'sending' ? 'opacity-80 cursor-wait' : ''}`}
                                >
                                    {status === 'idle' && (
                                        <>Enviar Mensaje <Send size={26} /></>
                                    )}
                                    {status === 'sending' && (
                                        <>Enviando... <Loader2 size={26} className="animate-spin" /></>
                                    )}
                                    {status === 'sent' && (
                                        <>¡Mensaje Enviado! <CheckCircle size={26} /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
