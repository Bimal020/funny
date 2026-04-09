import React from 'react';
import marathonImg from '../assets/gallery_10.jpeg';
import bugHuntImg from '../assets/gallery_11.jpeg';
import deployPartyImg from '../assets/gallery_12.jpeg';

const Services = () => {
    return (
        <section id="services" className="section">
            <div className="container">
                <h2 className="reveal">Infinite <span className="gradient-text">Giggles</span></h2>
                <p style={{ margin: '0 auto 4rem', fontSize: '1.2rem' }}>
                    Warning: These events may cause you to forget how to be a serious adult!
                </p>

                <div className="services-grid">
                    <div className="service-card reveal fun-bounce" style={{ animationDelay: '0.1s' }}>
                        <div style={{
                            width: '100%',
                            height: '240px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            marginBottom: '1.5rem',
                            border: '4px solid var(--primary)',
                            boxShadow: '0 0 20px rgba(255, 0, 122, 0.3)'
                        }}>
                            <img src={marathonImg} alt="Meme Marathon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h3>Dank Meme Gala</h3>
                        <p>
                            A high-stakes endurance test where the goal is to not choke on your coffee while scrolling
                            through cursed AI images. Entry fee: One original meme or your soul!
                        </p>
                    </div>

                    <div className="service-card reveal fun-bounce" style={{ animationDelay: '0.2s' }}>
                        <div style={{
                            width: '100%',
                            height: '240px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            marginBottom: '1.5rem',
                            border: '4px solid var(--secondary)',
                            boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)'
                        }}>
                            <img src={bugHuntImg} alt="The Great Bug Hunt" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h3>The Bug Circus</h3>
                        <p>
                            We don't fix bugs here; we adopt them and give them little hats. Come hunt for the
                            elusive 'Logic Ghost' that only appears when you're showing your screen to a girl!
                        </p>
                    </div>

                    <div className="service-card reveal fun-bounce" style={{ animationDelay: '0.3s' }}>
                        <div style={{
                            width: '100%',
                            height: '240px',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            marginBottom: '1.5rem',
                            border: '4px solid var(--accent)',
                            boxShadow: '0 0 20px rgba(255, 239, 0, 0.3)'
                        }}>
                            <img src={deployPartyImg} alt="Friday Deploy Party" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                        <h3>Push-to-Prod Panic</h3>
                        <p>
                            Who needs yoga when you can merge a mystery branch on a Friday at 4:59 PM?
                            It's like Russian Roulette, but the only thing that dies is your weekend!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
