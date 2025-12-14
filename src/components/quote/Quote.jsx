import { useRef, useEffect } from 'react';
import './quote.scss';

const Quote = ({ updateTheme }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        updateTheme("quote", "dark", 10, entry.isIntersecting);
      },
      { rootMargin: "-70px 0px 0px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [updateTheme]);

    return (
        <section className='quote' ref={ref}>
            <div className="quote__container">
                <h3 className="quote__text-right">
                    Вход свободный ( как и мысль )
                </h3>
            </div>
            <div className="quote__text-low">
                <p className="quote__title">
                    Мы — сбой в вашем представлении об искусстве. 
                    30 лет кафедра дизайна создавала систему. Мы — то, что из неё вырвалось. Мы не продолжение. Мы — перезагрузка. Наше поколение не ищет ответа — мы создаём новые ошибки.
                    Являемся к сведению. Не пытайтесь исправить. 
                    Принять, осмыслить. Перезагрузиться.
                </p>
            </div>
        </section>
    )
}

export default Quote