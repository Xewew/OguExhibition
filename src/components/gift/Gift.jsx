import { useRef, useEffect } from "react";
import './gift.scss';
import GiftOne from '../../assets/image/gift-1.jpg';
import GiftTwo from '../../assets/image/gift-2.jpg';
import GiftThree from '../../assets/image/gift-3.jpg';

const Gift = ({ updateTheme }) => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        updateTheme("gift", "light", 5, entry.isIntersecting);
      },
      { rootMargin: "-70px 0px 0px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [updateTheme]);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let pos = 0;
    const speed = 0.5;

    const loop = () => {
      pos += speed;
      if (pos >= slider.scrollWidth / 2) pos = 0;
      slider.style.transform = `translateX(-${pos}px)`;
      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  const images = [GiftOne, GiftTwo, GiftThree];
  const sliderImages = [...images, ...images];

  return (
    <section className='gift' ref={sectionRef}>
      <div className="gift__inner">
        <h4 className="inf__title">
          РАЗЫГРЫВАЕМ МЕРЧ, ВЕСЕЛЬЕ — ПОД ВОПРОСОМ РАЗЫГРЫВАЕМ МЕРЧ, ВЕСЕЛЬЕ — ПОД ВОПРОСОМ
        </h4>
        <div className="gift__slider" ref={sliderRef}>
          {sliderImages.map((img, idx) => (
            <img key={idx} src={img} alt="" className="gift__img" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gift;
