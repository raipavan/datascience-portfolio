import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useState } from 'react';

const Navbar = ({ activeSection }) => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className="glass-panel" style={{ position: 'fixed', top: '1rem', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '1200px', zIndex: 50, padding: '0.5rem 1.5rem', borderRadius: '999px' }}>
                <div className="flex justify-between items-center h-12">
                    <a href="#home" onClick={closeMenu} className="text-gradient font-mono" style={{ fontSize: '1.25rem', fontWeight: 700, textDecoration: 'none' }}>
                        DataSci.Dev
                    </a>

                    {/* Desktop Nav */}
                    <div className="nav-links mobile-hidden" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{
                                    textDecoration: 'none',
                                    color: activeSection === link.href.substring(1) ? 'var(--text-accent)' : 'var(--text-primary)',
                                    fontWeight: activeSection === link.href.substring(1) ? 600 : 400,
                                    transition: 'color 0.3s'
                                }}
                                className="hover-text-accent"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4 mobile-hidden">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                            <Linkedin size={20} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="desktop-hidden"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ background: 'transparent', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.5rem', display: 'flex' }}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="desktop-hidden glass-panel" style={{
                    position: 'fixed', top: '5rem', left: '5%', width: '90%', zIndex: 49,
                    padding: '2rem', borderRadius: '1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem',
                    animation: 'fadeInData 0.3s ease-out'
                }}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu}
                            style={{
                                textDecoration: 'none',
                                color: activeSection === link.href.substring(1) ? 'var(--text-accent)' : 'var(--text-primary)',
                                fontWeight: activeSection === link.href.substring(1) ? 600 : 400,
                                fontSize: '1.25rem',
                                textAlign: 'center'
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border-glass)' }}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                            <Github size={24} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)' }}>
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
