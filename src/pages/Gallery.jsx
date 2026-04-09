import React, { useState } from 'react';

// Manual imports for all images
import g1 from '../assets/gallery_1.jpeg';
import g2 from '../assets/gallery_2.jpeg';
import g3 from '../assets/gallery_3.jpeg';
import g4 from '../assets/gallery_4.jpeg';
import g5 from '../assets/gallery_5.jpeg';
import g6 from '../assets/gallery_6.jpeg';
import g7 from '../assets/gallery_7.jpeg';
import g8 from '../assets/gallery_8.jpeg';
import g9 from '../assets/gallery_9.jpeg';
import g10 from '../assets/gallery_10.jpeg';
import g11 from '../assets/gallery_11.jpeg';
import g12 from '../assets/gallery_12.jpeg';
import g13 from '../assets/gallery_13.jpeg';
import g14 from '../assets/gallery_14.jpeg';
import g15 from '../assets/gallery_15.jpeg';
import g16 from '../assets/gallery_16.jpeg';
import g17 from '../assets/gallery_17.jpeg';
import g18 from '../assets/gallery_18.jpeg';
import heroBg from '../assets/hero_bg.jpeg';

const Gallery = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const galleryItems = [
        { src: heroBg, title: 'POV: You pushed to production on a Friday', category: 'DANGER', joke: 'God speed, brave soldier.' },
        { src: g1, title: 'Me explaining code written at 3 AM', category: 'MEME', joke: 'It makes sense in my dreams!' },
        { src: g2, title: 'The moment the coffee kicks in', category: 'ENERGY', joke: 'I CAN SEE THE CODE IN 4D!' },
        { src: g3, title: 'Designer: "Make it pop" | Me:', category: 'CLASH', joke: 'Is it popping enough yet?' },
        { src: g4, title: 'My tabs after 10 mins of research', category: 'CHAOS', joke: 'I will definitely read these... never.' },
        { src: g5, title: 'When the client asks for a "minor change"', category: 'PAIN', joke: 'See you in 3 years!' },
        { src: g6, title: 'Finding that one extra semicolon', category: 'STRUGGLE', joke: 'Found it! It was my sanity.' },
        { src: g7, title: 'Stack Overflow: "Question closed"', category: 'BETRAYAL', joke: 'Why must you hurt me this way?' },
        { src: g8, title: "It works on my machine. ¯\\_(ツ)_/¯", category: 'LEGEND', joke: 'Ship my machine to the client!' },
        { src: g9, title: "CSS centering vs My mental health", category: 'WAR', joke: 'CSS is winning.' },
        { src: g10, title: 'Junior dev after deleting the database', category: 'OOPS', joke: 'So... who has the backup?' },
        { src: g11, title: 'When the regex actually works first try', category: 'MAGIC', joke: 'I am the chosen one!' },
        { src: g12, title: 'The intern asking "Is this on fire?"', category: 'MEME', joke: "Yes. It's a feature." },
        { src: g13, title: '"I\'ll fix the technical debt later"', category: 'LIES', joke: 'Narrator: He never did.' },
        { src: g14, title: 'Local environment vs Production', category: 'VIBES', joke: "It's the same picture." },
        { src: g15, title: 'Finding the solution on page 2 of Google', category: 'MIRACLE', joke: 'The forbidden knowledge!' },
        { src: g16, title: 'UI done but backend is 20% ready', category: 'ART', joke: 'Trust the process!' },
        { src: g17, title: 'Me watching a tutorial at 2x speed', category: 'SPEED', joke: 'I am speed. I am confused.' },
        { src: g18, title: 'Merging your branch like a boss', category: 'DONE', joke: 'Conflict? Never heard of her.' },
    ];

    const handleOpen = (item) => {
        setSelectedImg(item);
        const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-10.mp3');
        audio.play().catch(e => console.log("Sound blocked by browser policy"));
    };

    return (
        <section id="gallery" className="section">
            <div className="container">
                <h2 className="reveal">The <span className="gradient-text">Meme Playground</span></h2>
                <p style={{ margin: '0 auto 4rem', fontSize: '1.2rem' }}>
                    Click an image for some comedy and a surprise!
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                    gap: '2.5rem',
                    width: '100%'
                }}>
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className="reveal fun-bounce"
                            onClick={() => handleOpen(item)}
                            style={{
                                position: 'relative',
                                borderRadius: '32px',
                                overflow: 'hidden',
                                aspectRatio: '16/9',
                                cursor: 'zoom-in',
                                border: '3px solid var(--border)',
                                animationDelay: `${index * 0.05}s`
                            }}
                        >
                            <img src={item.src} alt={item.title} style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1) rotate(2deg)'}
                                onMouseOut={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                padding: '2rem',
                                background: 'linear-gradient(transparent, rgba(8, 11, 24, 0.95))',
                                color: 'white',
                                textAlign: 'left'
                            }}>
                                <span style={{
                                    fontSize: '0.85rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.15em',
                                    color: 'var(--secondary)',
                                    fontWeight: '900',
                                    background: 'rgba(0, 242, 255, 0.1)',
                                    padding: '4px 10px',
                                    borderRadius: '8px'
                                }}>{item.category}</span>
                                <h3 style={{ margin: '0.75rem 0 0', fontSize: '1.3rem', fontFamily: 'var(--font-fun)' }}>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {selectedImg && (
                <div
                    className="lightbox-overlay"
                    onClick={() => setSelectedImg(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(4, 6, 13, 0.98)',
                        zIndex: 2000,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        backdropFilter: 'blur(15px)',
                        cursor: 'zoom-out'
                    }}
                >
                    <div className="lightbox-content fun-bounce" style={{
                        position: 'relative',
                        maxWidth: '95vw',
                        maxHeight: '95vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <img
                            src={selectedImg.src}
                            alt={selectedImg.title}
                            style={{
                                height: 'auto',
                                width: 'auto',
                                maxWidth: '100%',
                                maxHeight: '70vh',
                                borderRadius: '40px',
                                border: '6px solid var(--primary)',
                                boxShadow: '0 0 60px rgba(255, 0, 122, 0.6)',
                                objectFit: 'contain'
                            }}
                        />
                        <div style={{
                            marginTop: '2rem',
                            textAlign: 'center',
                            fontFamily: 'var(--font-fun)',
                            color: 'white',
                            maxWidth: '800px'
                        }}>
                            <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 3rem)', color: 'var(--accent)' }}>
                                {selectedImg.title}
                            </h3>
                            <p style={{
                                color: 'var(--secondary)',
                                fontSize: 'clamp(1rem, 3vw, 1.8rem)',
                                marginTop: '1rem',
                                fontWeight: '800'
                            }}>
                                {selectedImg.joke}
                            </p>
                            <div style={{ marginTop: '1.5rem', animation: 'wiggle 1s infinite', fontSize: '1rem', opacity: '0.7' }}>
                                Click anywhere to close!
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
