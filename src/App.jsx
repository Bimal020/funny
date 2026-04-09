import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Assets
import serviceWeb from './assets/gallery_7.jpeg';
import serviceApp from './assets/gallery_8.jpeg';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy Loaded Pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const About = lazy(() => import('./pages/About'));

// High-Energy Loading Component
const Loading = () => (
  <div className="loading-container">
    <div className="spinner"></div>
    <div className="loading-text">PREPARING THE FUN...</div>
  </div>
);

import video1 from './assets/video1.mp4';

function App() {
  const [showLivePopup, setShowLivePopup] = React.useState(false);

  React.useEffect(() => {
    const handleGoLive = () => {
      setShowLivePopup(true);
    };
    window.addEventListener('go-live-party', handleGoLive);
    return () => window.removeEventListener('go-live-party', handleGoLive);
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />

        <main style={{ minHeight: '80vh' }}>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />

        {/* Global Live Video Popup */}
        {showLivePopup && (
          <div
            className="lightbox-overlay"
            onClick={() => setShowLivePopup(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.95)',
              zIndex: 3000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              backdropFilter: 'blur(20px)',
              cursor: 'pointer' // Shows user they can click to close
            }}
          >
            <div className="fun-bounce" onClick={(e) => e.stopPropagation()} style={{
              position: 'relative',
              maxWidth: 'min(1000px, 90vw)',
              maxHeight: '90vh',
              width: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              cursor: 'default'
            }}>
              <button
                onClick={() => setShowLivePopup(false)}
                style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '0',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-fun)'
                }}
              >
                CLOSE [X]
              </button>
              <div style={{
                borderRadius: '30px',
                overflow: 'hidden',
                border: '8px solid var(--primary)',
                boxShadow: '0 0 50px var(--primary)',
                backgroundColor: 'black'
              }}>
                <video
                  autoPlay
                  controls
                  style={{ width: '100%', height: 'auto', maxHeight: '70vh', display: 'block', objectFit: 'contain' }}
                >
                  <source src={video1} type="video/mp4" />
                </video>
              </div>
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <h2 className="gradient-text" style={{ fontSize: '2.5rem' }}>THE PARTY IS LIVE!</h2>
                <p style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'var(--font-fun)' }}>
                  Enjoy the broadcast, L2C2 Legends!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
