import { Brain, Database, LineChart, ChevronDown } from 'lucide-react';

const Hero = ({ id }) => {
    return (
        <section id={id} className="section-padding flex items-center justify-center" style={{ minHeight: '100vh', position: 'relative' }}>
            <div className="container text-center animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px' }}>

                <div style={{ marginBottom: '2rem' }}>
                    <span className="glass-panel text-gradient" style={{ padding: '0.5rem 1rem', borderRadius: 'full', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        Aspiring Data Scientist
                    </span>
                </div>

                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                    Hi, I'm <span className="text-gradient">Pavankumar Rai</span>
                </h1>
                <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    Turning Data into Actionable Insights
                </h2>

                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '600px' }}>
                    Passionate about machine learning, statistical analysis, and building predictive models to solve real-world problems. Recent graduate ready to make an impact.
                </p>

                <div className="flex justify-center" style={{ marginBottom: '4rem' }}>
                    <a href="#projects" className="btn btn-primary">
                        View My Projects
                    </a>
                </div>

                {/* Feature Pills */}
                <div className="flex gap-6 justify-center" style={{ flexWrap: 'wrap' }}>
                    <div className="glass-panel delay-100" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
                        <Database className="text-accent" size={24} color="var(--primary)" />
                        <span style={{ fontWeight: 500 }}>Data Engineering</span>
                    </div>
                    <div className="glass-panel delay-200" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
                        <Brain className="text-accent" size={24} color="var(--secondary)" />
                        <span style={{ fontWeight: 500 }}>Machine Learning</span>
                    </div>
                    <div className="glass-panel delay-300" style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-primary)' }}>
                        <LineChart className="text-accent" size={24} color="var(--accent)" />
                        <span style={{ fontWeight: 500 }}>Data Visualization</span>
                    </div>
                </div>

            </div>

            <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', animation: 'bounce 2s infinite' }}>
                <a href="#about" style={{ color: 'var(--text-secondary)' }}>
                    <ChevronDown size={32} />
                </a>
            </div>

            <style>
                {`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40% { transform: translateY(-10px) translateX(-50%); }
          60% { transform: translateY(-5px) translateX(-50%); }
        }
        `}
            </style>
        </section>
    );
};

export default Hero;
