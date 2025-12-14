import { useState } from "react";
import "./cards.scss";

import CardEmptyOne from '../../assets/image/card-empty/card-empty-1.jpg';
import CardFullOne from '../../assets/image/card-full/card-full-1.jpg';
import CardEmptyTwo from '../../assets/image/card-empty/card-empty-2.jpg';
import CardFullTwo from '../../assets/image/card-full/card-full-2.jpg';
import CardEmptyThree from '../../assets/image/card-empty/card-empty-3.jpg';
import CardFullThree from '../../assets/image/card-full/card-full-3.jpg';
import CardEmptyFour from '../../assets/image/card-empty/card-empty-4.jpg';
import CardFullFour from '../../assets/image/card-full/card-full-4.jpg';
import CardEmptyFive from '../../assets/image/card-empty/card-empty-5.jpg';
import CardFullFive from '../../assets/image/card-full/card-full-5.jpg';
import CardEmptySix from '../../assets/image/card-empty/card-empty-6.jpg';
import CardFullSix from '../../assets/image/card-full/card-full-6.jpg';
import CardEmptySeven from '../../assets/image/card-empty/card-empty-7.jpg';
import CardFullSeven from '../../assets/image/card-full/card-full-7.jpg';
import CardEmptyEight from '../../assets/image/card-empty/card-empty-8.jpg';
import CardFullEight from '../../assets/image/card-full/card-full-8.jpg';
import CardEmptyNine from '../../assets/image/card-empty/card-empty-9.jpg';
import CardFullNine from '../../assets/image/card-full/card-full-9.jpg';
import CardEmptyTen from '../../assets/image/card-empty/card-empty-10.jpg';
import CardFullTen from '../../assets/image/card-full/card-full-10.jpg';

const cardPairs = [
  { empty: CardEmptyOne, full: CardFullOne },
  { empty: CardEmptyTwo, full: CardFullTwo },
  { empty: CardEmptyThree, full: CardFullThree },
  { empty: CardEmptyFour, full: CardFullFour },
  { empty: CardEmptyFive, full: CardFullFive },
  { empty: CardEmptySix, full: CardFullSix },
  { empty: CardEmptySeven, full: CardFullSeven },
  { empty: CardEmptyEight, full: CardFullEight },
  { empty: CardEmptyNine, full: CardFullNine },
  { empty: CardEmptyTen, full: CardFullTen },
];

const Cards = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleCardClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="cards">
      <div className="cards__inner">
        {cardPairs.map((card, i) => (
          <CardItem
            key={i}
            index={i}
            empty={card.empty}
            full={card.full}
            flipped={activeIndex === i}
            onClick={() => handleCardClick(i)}
          />
        ))}
      </div>
    </section>
  );
};

const CardItem = ({ empty, full, flipped, onClick, index }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    card.style.setProperty("--rotate-x", `${-y / 20}deg`);
    card.style.setProperty("--rotate-y", `${x / 20}deg`);
  };

  const resetTilt = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--rotate-x", `0deg`);
    card.style.setProperty("--rotate-y", `0deg`);
  };

  return (
    <div
      className="card"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      onClick={onClick}
      style={{ animationDelay: `${index * 0.12}s` }}
    >
      <div className={`card__inner ${flipped ? "is-flipped" : ""}`}>
        <img src={empty} alt="" className="card__face card__face--front" />
        <img src={full} alt="" className="card__face card__face--back" />
      </div>
    </div>
  );
};

export default Cards;