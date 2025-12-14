import { useState } from 'react';
import './curtain.scss';

const Curtain = ({ theme, open, setOpen }) => {
    
    return (
        <>
        <div className={`overlay ${open ? "active" : ""}`} 
        onClick={() => setOpen(false)}
        />
        
              <div className={`slide-menu ${open ? "active" : ""}`}>
                 <div
                    className={`menu__extra-line`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpen(false);
                    }}
                />
                <h3 className="slide-menu__title">МЕНЮ</h3>
                <ul>
                  <li><a href="#">РАЗДЕЛЫ ВЫСТАВКИ</a></li>
                  <li><a href="#">КУПИТЬ МЕРЧ</a></li>
                  <li><a href="#">СТАТЬ УЧАСТНИКОМ</a></li>
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