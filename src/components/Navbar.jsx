import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavHashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/#home' },
        { name: 'Tecnología', href: '/#tech' },
        { name: 'Proyectos', href: '/#projects' },
        { name: 'Contacto', href: '/#contact' },
    ];

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -80;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4 glass border-b border-white/5 mx-4 mt-4 rounded-full px-4' : 'py-8 bg-transparent'
            }`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link
                    smooth
                    to="/#home"
                    scroll={el => scrollWithOffset(el)}
                    className="text-2xl font-black tracking-tighter text-white hover:text-pink-400 transition-colors"
                >
                    LOREM<span className="text-pink-400">.</span>
                </Link>

                <div className="hidden md:flex items-center space-x-10 text-slate-300">
                    {navLinks.map((link) => (
                        <Link
                            smooth
                            key={link.name}
                            to={link.href}
                            scroll={el => scrollWithOffset(el)}
                            className="font-bold text-sm uppercase tracking-widest hover:text-pink-400 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Menú" className="text-white hover:text-pink-400 transition-colors">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass mt-4 mx-4 rounded-3xl shadow-2xl py-8 animate-in slide-in-from-top-4 duration-300 overflow-hidden">
                    <div className="flex flex-col items-center space-y-8">
                        {navLinks.map((link) => (
                            <Link
                                smooth
                                key={link.name}
                                to={link.href}
                                scroll={el => scrollWithOffset(el)}
                                className="text-xl font-black uppercase tracking-widest text-white hover:text-pink-400 transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
