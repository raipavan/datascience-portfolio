import { ExternalLink, Github } from 'lucide-react';

const Projects = ({ id }) => {
    const projects = [
        {
            title: 'Customer Churn Predictor',
            description: 'Built a Random Forest model to predict telecom customer churn with 89% accuracy. Conducted EDA and feature engineering on a dataset of 7,000+ records to identify key churn factors.',
            tags: ['Python', 'Scikit-Learn', 'Pandas', 'Seaborn'],
            github: '#',
            live: '#'
        },
        {
            title: 'E-Commerce Recommender',
            description: 'Developed a collaborative filtering recommendation engine for an e-commerce platform using matrix factorization. Implemented via Flask API with a lightweight React frontend.',
            tags: ['Python', 'Flask', 'React', 'SciPy'],
            github: '#',
            live: '#'
        },
        {
            title: 'Tweet Sentiment Analyzer',
            description: 'Fine-tuned a BERT model on HuggingFace to classify the sentiment of live tweets about tech products. Deployed the model using Streamlit to visualize real-time sentiment trends.',
            tags: ['PyTorch', 'Transformers', 'Streamlit', 'NLP'],
            github: '#',
            live: '#'
        }
    ];

    return (
        <section id={id} className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
                        A selection of my best data science work, demonstrating my ability to handle end-to-end machine learning pipelines.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s' }}>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                                <div style={{ background: 'rgba(14, 165, 233, 0.1)', padding: '0.75rem', borderRadius: '0.5rem' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                    </svg>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <a href={project.github} style={{ color: 'var(--text-secondary)' }} className="hover-text-accent">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.live} style={{ color: 'var(--text-secondary)' }} className="hover-text-accent">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                                {project.title}
                            </h3>

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: 1.6 }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} style={{ fontSize: '0.875rem', color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;
