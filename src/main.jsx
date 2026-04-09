import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const Root = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.observed)').forEach(el => {
        observer.observe(el);
        el.classList.add('observed');
      });
    };

    // Initial observation
    observeElements();

    // Use MutationObserver to watch for new elements added via lazy loading
    const mutationObserver = new MutationObserver((mutations) => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById('root')).render(<Root />)
