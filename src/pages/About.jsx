import React from 'react';

const About = () => {
    return (
        <section id="about" className="section" style={{ background: '#080b18', padding: '120px 0' }}>
            <div className="container">
                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '5rem', alignItems: 'center' }}>
                    <div className="reveal">
                        <h2 className="gradient-text" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>THE CREW</h2>
                        <div className="fun-bounce" style={{
                            background: 'rgba(255, 0, 122, 0.1)',
                            border: '2px solid var(--primary)',
                            padding: '2rem',
                            borderRadius: '32px',
                            marginBottom: '2rem'
                        }}>
                            <p style={{ fontSize: '1.4rem', fontWeight: '600', lineHeight: '1.6', color: 'white' }}>
                                We're a squad of creative rebels on a mission to make the internet
                                <span style={{ color: 'var(--secondary)' }}> 100% more awesome</span>.
                            </p>
                        </div>

                        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
                            JUST FUN is where boring code goes to die. Born in the vibrant classrooms of L2C2, we believe that serious work doesn't have to be boring. We build digital playgrounds that pop, zing, and wow.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div className="fun-bounce" style={{ background: 'var(--glass)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border)' }}>
                                <div style={{ fontSize: '2.5rem', color: 'var(--accent)', fontWeight: '900', fontFamily: 'var(--font-fun)' }}>99%</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>PIXEL PERFECT JOY</div>
                            </div>
                            <div className="fun-bounce" style={{ background: 'var(--glass)', padding: '1.5rem', borderRadius: '20px', border: '1px solid var(--border)', animationDelay: '0.1s' }}>
                                <div style={{ fontSize: '2.5rem', color: 'var(--secondary)', fontWeight: '900', fontFamily: 'var(--font-fun)' }}>24/7</div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>HIGH-ENERGY VIBES</div>
                            </div>
                        </div>
                    </div>

                    <div className="reveal">
                        <div className="fun-float" style={{ position: 'relative' }}>
                            <div
                                className="main-card fun-bounce"
                                style={{
                                    height: '500px',
                                    borderRadius: '50px',
                                    background: 'linear-gradient(135deg, var(--primary), var(--secondary), var(--accent))',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '4rem',
                                    boxShadow: '0 40px 100px rgba(255, 0, 122, 0.4)',
                                    position: 'relative',
                                    zIndex: 1
                                }}
                            >
                                <span style={{ fontFamily: 'var(--font-fun)', fontSize: '6rem', color: 'white', textShadow: '4px 4px 0px rgba(0,0,0,0.2)' }}>JUST</span>
                                <span style={{ fontFamily: 'var(--font-fun)', fontSize: '3rem', color: 'white', opacity: 0.9 }}>FUN</span>
                            </div>
                            {/* Decorative Elements */}
                            <div style={{ position: 'absolute', top: '-40px', left: '-40px', width: '200px', height: '200px', background: 'var(--accent)', filter: 'blur(80px)', opacity: 0.3 }}></div>
                            <div style={{ position: 'absolute', bottom: '-40px', right: '-40px', width: '200px', height: '200px', background: 'var(--secondary)', filter: 'blur(80px)', opacity: 0.3 }}></div>
                        </div>
                    </div>
                </div>

                <div className="reveal" style={{ marginTop: '8rem', textAlign: 'center' }}>
                    <div style={{
                        background: 'linear-gradient(90deg, transparent, var(--border), transparent)',
                        height: '2px',
                        width: '100%',
                        marginBottom: '4rem'
                    }}></div>
                    <h3 style={{ fontFamily: 'var(--font-fun)', fontSize: '2.5rem', marginBottom: '2rem' }}>CREATED BY <span className="gradient-text">L2C2 LEGENDS</span></h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                        {['MAD SCIENTISTS', 'PIXEL REBELS', 'CODE WIZARDS', 'CREATIVE GURUS', 'FUN WITH FRIENDS'].map((tag, i) => (
                            <span key={i} className="fun-bounce" style={{
                                padding: '0.8rem 2rem',
                                border: '1px solid var(--border)',
                                borderRadius: '50px',
                                background: 'var(--glass)',
                                fontWeight: '700',
                                color: 'var(--text-muted)',
                                letterSpacing: '1px'
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
