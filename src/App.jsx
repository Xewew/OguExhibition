import { useState, useRef } from 'react';
import Curtain from './components/curtain/Curtain.jsx';
import Hero from './components/hero/Hero.jsx';
import Quote from './components/quote/Quote.jsx';
import Hide from './components/hide/Hide.jsx';
import Cards from './components/cards/Cards.jsx';
import Plus from './components/plus/Plus.jsx';
import Sliders from './components/sliders/Sliders.jsx';
import Gift from './components/gift/Gift.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  const [theme, setTheme] = useState('dark');
  const [open, setOpen] = useState(false);
  const [activeThemes, setActiveThemes] = useState([]);

  const updateTheme = (id, theme, priority = 0, isActive = false) => {
    if (!id || !theme) return

  setActiveThemes((prev) => {
    const filtered = prev.filter((s) => s.id !== id);

    if (!isActive) return filtered;

    return [...filtered, { id, theme, priority }];
  });
};

const currentTheme = activeThemes.length
  ? [...activeThemes]
      .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0))[0]?.theme
  : "dark";

  const cardsRef = useRef(null);
  const giftRef = useRef(null);
  const footerRef = useRef(null);


  return (
    <>
     <Curtain theme={currentTheme} open={open} setOpen={setOpen}
      sections={
        {cards: cardsRef, 
         gift: giftRef,
         footer: footerRef,}
        } />
     <Hero />
     <Quote updateTheme={updateTheme} />
     <Hide updateTheme={updateTheme} />
     <Cards ref={cardsRef} />
     <Plus updateTheme={updateTheme} />
     <Sliders />
     <Gift updateTheme={updateTheme} ref={giftRef} />
     <Footer ref={footerRef}/>
    </>
  )
}

export default App
