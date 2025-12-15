import { useState, useRef, useEffect } from "react";
import './sliders.scss';

import CardEmp1 from '../../assets/image/card-empty/cardEmp1.jpg';
import CardFull1 from '../../assets/image/card-empty/cardFull1.jpg';
import CardEmp2 from '../../assets/image/card-empty/cardEmp2.jpg';
import CardFull2 from '../../assets/image/card-empty/cardFull2.jpg';
import CardEmp3 from '../../assets/image/card-empty/cardEmp3.jpg';
import CardFull3 from '../../assets/image/card-empty/cardFull3.jpg';
import CardEmp4 from '../../assets/image/card-empty/cardEmp4.jpg';
import CardFull4 from '../../assets/image/card-empty/cardFull4.jpg';
import CardEmp5 from '../../assets/image/card-empty/cardEmp5.jpg';
import CardFull5 from '../../assets/image/card-empty/cardFull5.jpg';
import CardEmp6 from '../../assets/image/card-empty/cardEmp6.jpg';
import CardFull6 from '../../assets/image/card-empty/cardFull6.jpg';
import CardEmp7 from '../../assets/image/card-empty/cardEmp7.jpg';
import CardFull7 from '../../assets/image/card-empty/cardFull7.jpg';

const cardPar = [
        {emptyCard: CardEmp1, fullCard: CardFull1},
        {emptyCard: CardEmp2, fullCard: CardFull2},
        {emptyCard: CardEmp3, fullCard: CardFull3},
        {emptyCard: CardEmp4, fullCard: CardFull4},
        {emptyCard: CardEmp5, fullCard: CardFull5},
        {emptyCard: CardEmp6, fullCard: CardFull6},
        {emptyCard: CardEmp7, fullCard: CardFull7},
    ];

const Sliders = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const total = cardPar.length;

    const startX = useRef(0);
    const isDragging = useRef(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleStart = (clientX) => {
        isDragging.current = true;
        startX.current = clientX;
    };

    const handleEnd = (clientX) => {
        if (!isDragging.current) return;
        const diff = clientX - startX.current;

        if (diff > 50) setActiveIdx((prev) => (prev - 1 + total) % total);
        else if (diff < -50) setActiveIdx((prev) => (prev + 1) % total);

        isDragging.current = false;
    };

    return (
        <section className='sliders'>
            <div
                className="carousel"
                onMouseDown={(e) => handleStart(e.clientX)}
                onMouseUp={(e) => handleEnd(e.clientX)}
                onMouseLeave={(e) => handleEnd(e.clientX)}
                onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
            >
                <div className="carousel__scene">
                    {cardPar.map((slider, i) => {
                        let offset = i - activeIdx;
                        if (offset < -Math.floor(total / 2)) offset += total;
                        if (offset > Math.floor(total / 2)) offset -= total;

                        return (
                            <CardItem
                                key={i}
                                idx={i}
                                emptyCard={slider.emptyCard}
                                fullCard={slider.fullCard}
                                flipped={activeIdx === i}
                                offset={offset}
                                windowWidth={windowWidth}
                                onClick={() => setActiveIdx(i)}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const CardItem = ({ emptyCard, fullCard, flipped, onClick, offset, windowWidth }) => {
    const isCenter = offset === 0;

    const widthBase = windowWidth > 1024 ? 275 :
                      windowWidth > 768 ? 220 :
                      windowWidth > 480 ? 180 : 150;

    const heightBase = windowWidth > 1024 ? 660 :
                       windowWidth > 768 ? 550 :
                       windowWidth > 480 ? 450 : 380;

    const translateX = offset * (widthBase * 0.95);
    const translateY = Math.abs(offset) * (heightBase * 0.03);
    const scale = isCenter ? 1 : 0.8;

    return (
        <div
            className={`slider ${isCenter ? "active" : ""}`}
            onClick={onClick}
            style={{
                width: widthBase,
                height: heightBase,
                transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
                opacity: isCenter ? 1 : 0.4,
                zIndex: 100 - Math.abs(offset),
                pointerEvents: "auto",
            }}
        >
            <div className={`card__inner ${flipped ? "is-flipped" : ""}`}>
                <img src={emptyCard} className="card__face card__face--front" />
                <img src={fullCard} className="card__face card__face--back" />
            </div>
        </div>
    );
};

export default Sliders;