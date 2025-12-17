import { useState } from 'react';
import './curtain.scss';

const Curtain = ({ theme, open, setOpen, sections }) => {
    
    const handleScroll = (sectionRef) => {
      setOpen(false);
      sectionRef.current?.scrollIntoView({ behavior: "smooth"});
    }

    return (
        <>
        <div className={`overlay ${open ? "active" : ""}`} 
        onClick={() => setOpen(false)}
        />
        
              <div className={`slide-menu ${open ? "active" : ""}`}>
                 <div
                    className={`menu__extra-line ${open ? "active" : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen(false);
                    }}
                />
                <h3 className="slide-menu__title">МЕНЮ</h3>
                <ul>
                  <li>
                    <button onClick={() => handleScroll(sections.cards)}>РАЗДЕЛЫ ВЫСТАВКИ</button>
                  </li>
                  <li>
                    <button onClick={() => handleScroll(sections.gift)}>РОЗЫГРЫШ МЕРЧА</button>
                  </li>
                  <li>
                    <button onClick={() => handleScroll(sections.footer)}>УЧАСТНИКИ</button>
                  </li>
                  <li>
                    <button onClick={() => handleScroll(sections.footer)}>СТАТЬ УЧАСТНИКОМ</button>
                  </li>
                </ul>
              </div>
               <div className={`menu ${theme}`} onClick={() => setOpen(!open)}>
                        <div className={`menu__line ${open ? "active" : ""}`}></div>
                        <div className={`menu__line ${open ? "active" : ""}`}></div>
                      </div>
        </>
    )
};

export default Curtain;