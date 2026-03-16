import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = ({ id }) => {
    const educationTimeline = [
        {
            degree: 'Master of Science in Data Science',
            institution: 'Tech University',
            year: '2023 - 2025',
            details: 'Specialized in Predictive Analytics and Natural Language Processing. Thesis: "Transformer-based Models for Time-Series Forecasting." GPA: 3.9/4.0',
            icon: <GraduationCap size={24} color="var(--primary)" />
        },
        {
            degree: 'Bachelor of Science in Computer Science',
            institution: 'State College',
            year: '2019 - 2023',
            details: 'Minored in Mathematics. Relevant coursework: Data Structures, Machine Learning, Statistical Methods, Calculus.',
            icon: <BookOpen size={24} color="var(--secondary)" />
        },
        {
            degree: 'Google Data Analytics Professional Certificate',
            institution: 'Coursera',
            year: '2022',
            details: 'Comprehensive training in data cleaning, analysis, and visualization using spreadsheets, SQL, R, and Tableau.',
            icon: <Award size={24} color="var(--accent)" />
        }
    ];

    return (
        <section id={id} className="section-padding">
            <div className="container">

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                        Education & <span className="text-gradient">Certifications</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>
                        My academic foundation and continuous learning path in data science.
                    </p>
                </div>

                <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    {educationTimeline.map((item, index) => (
                        <div key={index} className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', position: 'relative' }}>

                            <div style={{ flexShrink: 0, marginTop: '0.25rem' }}>
                                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '1rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    {item.icon}
                                </div>
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>
                                        {item.degree}
                                    </h3>
                                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontSize: '0.875rem', fontWeight: 500 }}>
                                        {item.year}
                                    </span>
                                </div>

                                <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 500, opacity: 0.8 }}>
                                    {item.institution}
                                </h4>

                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                                    {item.details}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;
