import React, { useEffect } from 'react';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
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

const Home = () => {
    const [isLive, setIsLive] = React.useState(false);
    const [partyMeme, setPartyMeme] = React.useState(null);
    const [currentBgIndex, setCurrentBgIndex] = React.useState(0);

    // Dynamic backgrounds
    const heroBackgrounds = [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18];

    // Dynamic Daily Vibe logic
    const dailyVibes = [
        { img: g4, text: "WHEN YOU HIT \"NPM RUN DEV\" AND THERE ARE 0 ERRORS" },
        { img: g1, text: "ME EXPLAINING CODE WRITTEN AT 3 AM" },
        { img: g2, text: "THE MOMENT THE COFFEE KICKS IN" },
        { img: g3, text: "DESIGNER: \"MAKE IT POP\" | ME: ..." },
        { img: g5, text: "WHEN THE CLIENT ASKS FOR A \"MINOR CHANGE\"" },
        { img: g6, text: "FINDING THAT ONE EXTRA SEMICOLON" },
        { img: g10, text: "JUNIOR DEV AFTER DELETING THE DATABASE" },
        { img: g11, text: "WHEN THE REGEX ACTUALLY WORKS FIRST TRY" },
        { img: g12, text: "THE INTERN ASKING \"IS THIS ON FIRE?\"" },
        { img: g14, text: "LOCAL ENVIRONMENT VS PRODUCTION" },
        { img: g17, text: "ME WATCHING A TUTORIAL AT 2X SPEED" },
    ];

    const today = new Date();
    // Unique day count to pick a different meme each day
    const dayIndex = (Math.floor(today.getTime() / (1000 * 60 * 60 * 24))) % dailyVibes.length;
    const currentVibe = dailyVibes[dayIndex];

    const currentBg = heroBackgrounds[currentBgIndex];

    const joinParty = () => {
        const imagesOnly = scrollItems.filter(item => item.type === 'image');
        const randomItem = imagesOnly[Math.floor(Math.random() * imagesOnly.length)];
        setPartyMeme(randomItem);
    };

    useEffect(() => {
        const handleGoLive = () => {
            setIsLive(true);
            const videos = document.querySelectorAll('video');
            videos.forEach(video => {
                video.muted = false;
                video.play().catch(err => console.log("Video play failed:", err));
            });
        };

        window.addEventListener('go-live-party', handleGoLive);

        // Slideshow logic: Change background every 15 seconds
        const bgInterval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
        }, 15000);

        return () => {
            window.removeEventListener('go-live-party', handleGoLive);
            clearInterval(bgInterval);
        };
    }, [heroBackgrounds.length]);

    const scrollItems = [
        { type: 'video', src: video1 },
        { type: 'image', src: g1, title: 'Me explaining code written at 3 AM', joke: 'It makes sense in my dreams!' },
        { type: 'video', src: video2 },
        { type: 'image', src: g2, title: 'The moment the coffee kicks in', joke: 'I CAN SEE THE CODE IN 4D!' },
        { type: 'image', src: g3, title: 'Designer: "Make it pop" | Me:', joke: 'Is it popping enough yet?' },
        { type: 'image', src: g4, title: 'My tabs after 10 mins of research', joke: 'I will definitely read these... never.' },
        { type: 'image', src: g5, title: 'When the client asks for a "minor change"', joke: 'See you in 3 years!' },
        { type: 'image', src: g6, title: 'Finding that one extra semicolon', joke: 'Found it! It was my sanity.' },
        { type: 'image', src: g7, title: 'POV: You pushed to production on a Friday', joke: 'God speed, brave soldier.' },
        { type: 'image', src: g8, title: "It works on my machine. ¯\\_(ツ)_/¯", joke: 'Ship my machine to the client!' },
        { type: 'image', src: g9, title: "CSS centering vs My mental health", joke: 'CSS is winning.' },
        { type: 'image', src: g10, title: 'Junior dev after deleting the database', joke: 'So... who has the backup?' },
        { type: 'image', src: g11, title: 'When the regex actually works first try', joke: 'I am the chosen one!' },
        { type: 'image', src: g12, title: 'The intern asking "Is this on fire?"', joke: "Yes. It's a feature." },
        { type: 'image', src: g13, title: '"I\'ll fix the technical debt later"', joke: 'He never did.' },
        { type: 'image', src: g14, title: 'Local environment vs Production', joke: "It's the same picture." },
        { type: 'image', src: g15, title: 'Finding the solution on page 2 of Google', joke: 'The forbidden knowledge!' },
        { type: 'image', src: g16, title: 'UI done but backend is 20% ready', joke: 'Trust the process!' },
        { type: 'image', src: g17, title: 'Me watching a tutorial at 2x speed', joke: 'I am speed. I am confused.' },
        { type: 'image', src: g18, title: 'Merging your branch like a boss', joke: 'Conflict? Never heard of her.' },
    ];

    return (
        <div className="home-container">
            <section id="home" className="section hero" style={{
                background: `linear-gradient(rgba(8, 11, 24, ${isLive ? '0.8' : '0.6'}), rgba(8, 11, 24, ${isLive ? '0.8' : '0.6'})), url(${currentBg}) center/cover no-repeat`,
                backgroundAttachment: 'fixed',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {isLive && (
                    <video
                        autoPlay
                        loop
                        muted={false}
                        playsInline
                        style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            minWidth: '100%',
                            minHeight: '100%',
                            width: 'auto',
                            height: 'auto',
                            zIndex: '-1',
                            transform: 'translateX(-50%) translateY(-50%)',
                            filter: 'brightness(0.4)'
                        }}
                    >
                        <source src={video1} type="video/mp4" />
                    </video>
                )}

                <div className="container hero-content reveal">
                    {isLive && (
                        <div className="fun-bounce" style={{
                            background: 'red',
                            color: 'white',
                            padding: '5px 15px',
                            borderRadius: '10px',
                            display: 'inline-block',
                            fontWeight: 'bold',
                            marginBottom: '1rem',
                            animation: 'wiggle 0.5s infinite',
                            fontFamily: 'var(--font-fun)'
                        }}>
                            LIVE NOW
                        </div>
                    )}
                    <div className="fun-float" style={{ fontSize: '4rem', marginBottom: '1rem' }}></div>
                    <h1>
                        {isLive ? "The Show is" : "Ready for some"} <br />
                        <span className="gradient-text">{isLive ? "LIVE NOW!" : "Serious Fun?"}</span>
                    </h1>
                    <p style={{ margin: '0 auto 2rem', fontSize: '1.25rem', fontWeight: '500', color: 'var(--text-muted)' }}>
                        We don't just build websites; we create digital playgrounds that pop,
                        zing, and wow! Let's turn your ideas into a vibrant reality.
                    </p>
                    <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <button className="btn btn-primary fun-bounce" onClick={joinParty}>Join the Party</button>
                        <button className="btn fun-wiggle" onClick={() => window.dispatchEvent(new CustomEvent('go-live-party'))} style={{ border: '2px solid var(--secondary)', background: 'transparent', color: 'var(--secondary)' }}>
                            See the Magic
                        </button>
                    </div>
                </div>
            </section>

            {/* Dynamic Scrolling Section */}
            <section className="scroll-showcase" style={{ padding: '6rem 0', overflow: 'hidden', background: 'rgba(255, 0, 122, 0.05)' }}>
                <h2 className="reveal" style={{ textAlign: 'center', marginBottom: '3rem' }}>The <span className="gradient-text">Hype</span> Strip</h2>

                <div className="scroll-track">
                    <div className="scroll-content">
                        {/* First Set */}
                        {scrollItems.map((item, i) => (
                            <div key={`s1-${i}`} className="scroll-item">
                                {item.type === 'video' ? (
                                    <video autoPlay loop muted playsInline>
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img src={item.src} alt="Showcase" />
                                )}
                            </div>
                        ))}
                        {/* Duplicate for infinite effect */}
                        {scrollItems.map((item, i) => (
                            <div key={`s2-${i}`} className="scroll-item">
                                {item.type === 'video' ? (
                                    <video autoPlay loop muted playsInline>
                                        <source src={item.src} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img src={item.src} alt="Showcase" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meme of the Moment */}
            <section className="section" style={{ background: '#04060d' }}>
                <div className="container">
                    <h2 className="reveal">Daily <span className="gradient-text">Vibe Check</span></h2>
                    <div className="reveal fun-bounce" style={{
                        marginTop: '3rem',
                        borderRadius: '40px',
                        overflow: 'hidden',
                        border: '4px solid var(--primary)',
                        maxWidth: '800px',
                        margin: '3rem auto 0',
                        position: 'relative'
                    }}>
                        <img src={currentVibe.img} alt="Meme" style={{ width: '100%', display: 'block' }} />
                        <div style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            right: '0',
                            padding: '2rem',
                            background: 'rgba(255, 0, 122, 0.8)',
                            color: 'white',
                            fontSize: '2rem',
                            fontWeight: '900',
                            fontFamily: 'var(--font-fun)'
                        }}>
                            {currentVibe.text}
                        </div>
                    </div>
                </div>
            </section>

            {/* Random Party Meme Popup */}
            {partyMeme && (
                <div
                    className="lightbox-overlay"
                    onClick={() => setPartyMeme(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(255, 239, 0, 0.4)', // Fun yellow tint
                        zIndex: 4000,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px',
                        backdropFilter: 'blur(30px) block',
                        cursor: 'pointer'
                    }}
                >
                    <div className="fun-bounce" style={{ position: 'relative', textAlign: 'center' }}>
                        <h2 className="gradient-text" style={{ marginBottom: '1rem', fontSize: '2rem' }}>PARTY GUEST!</h2>
                        <h3 style={{ color: 'black', marginBottom: '1.5rem', fontFamily: 'var(--font-fun)' }}>{partyMeme.title}</h3>
                        <img
                            src={partyMeme.src}
                            alt="Party Meme"
                            style={{
                                maxWidth: '90vw',
                                maxHeight: '60vh',
                                borderRadius: '40px',
                                border: '10px solid var(--accent)',
                                boxShadow: '0 0 50px var(--accent)'
                            }}
                        />
                        <div style={{ marginTop: '1.5rem', color: 'black', fontWeight: '800', fontSize: '1.8rem' }}>
                            {partyMeme.joke}
                        </div>
                        <div style={{ marginTop: '2rem', color: 'rgba(0,0,0,0.5)', fontWeight: '900', fontSize: '1rem', fontFamily: 'var(--font-fun)' }}>
                            CLICK AGAIN TO SWITCH!
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
