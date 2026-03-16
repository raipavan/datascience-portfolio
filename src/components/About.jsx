import { Terminal, Code, Cpu, LineChart } from 'lucide-react';

const About = ({ id }) => {
    const skills = [
        { name: 'Python', icon: <Terminal size={20} color="var(--primary)" /> },
        { name: 'SQL', icon: <DatabaseIcon /> },
        { name: 'Pandas', icon: <Code size={20} color="var(--primary)" /> },
        { name: 'NumPy', icon: <Code size={20} color="var(--primary)" /> },
        { name: 'Scikit-learn', icon: <Cpu size={20} color="var(--primary)" /> },
        { name: 'TensorFlow', icon: <Cpu size={20} color="var(--primary)" /> },
        { name: 'Tableau', icon: <LineChart size={20} color="var(--primary)" /> },
        { name: 'Git & GitHub', icon: <Terminal size={20} color="var(--primary)" /> }
    ];

    return (
        <section id={id} className="section-padding" style={{ position: 'relative' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

                {/* About Text Area */}
                <div className="animate-fade-in" style={{ opacity: 0, animationFillMode: 'forwards' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <span className="text-secondary" style={{ color: 'var(--secondary)' }}>01.</span> About Me
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                        Hi, I'm a freshly graduated Data Scientist with a strong foundation in statistics, programming, and predictive modeling. I love diving deep into messy datasets to uncover meaningful patterns that drive decision-making.
                    </p>
                    <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.8 }}>
                        Throughout my academic journey, I've tackled projects ranging from deep learning prototypes to comprehensive data pipelines. I'm actively seeking opportunities to apply my analytical skills in a dynamic, real-world setting.
                    </p>

                    <a href="src/assets/pavan_resume__.pdf" download="Pavankumar_Rai_Resume.pdf" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', borderColor: 'var(--primary)', color: 'var(--text-primary)' }}>
                        Download Resume
                    </a>
                </div>

                {/* Skills Grid */}
                <div className="glass-panel animate-fade-in delay-200" style={{ padding: '2rem', opacity: 0, animationFillMode: 'forwards' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-primary)', textAlign: 'center' }}>
                        Technical Arsenal
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                        {skills.map((skill, index) => (
                            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-secondary)' }}>
                                {skill.icon}
                                <span style={{ fontSize: '1.125rem', fontWeight: 500 }}>{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

const DatabaseIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
    </svg>
);

export default About;
