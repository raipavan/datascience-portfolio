import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = ({ id }) => {
    return (
        <section id={id} className="section-padding">
            <div className="container text-center">

                <div style={{ marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Let's <span className="text-gradient">Connect</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
                        I'm currently looking for entry-level data science roles or internships.
                        Whether you have an opportunity or just want to chat about AI and Data, my inbox is always open!
                    </p>
                </div>



                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '4rem' }}>
                    <a href="#" className="glass-panel hover-text-accent" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                        <Github size={28} />
                    </a>
                    <a href="#" className="glass-panel hover-text-accent" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                        <Linkedin size={28} />
                    </a>
                    <a href="#" className="glass-panel hover-text-accent" style={{ padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-primary)' }}>
                        <Twitter size={28} />
                    </a>
                </div>

                <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '2rem', color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
                    <p>© {new Date().getFullYear()} Pavankumar Rai | Designed & Built for the Future</p>
                </div>

            </div>
        </section>
    );
};

export default Contact;
