import { useRef, useEffect, useState } from 'react';
import './quote.scss';

const TEXT = `Мы — сбой в вашем представлении об искусстве.
30 лет кафедра дизайна создавала систему.
Мы — то, что из неё вырвалось.
Мы не продолжение. Мы — перезагрузка.
Наше поколение не ищет ответа — мы создаём новые ошибки.
Являемся к сведению. Не пытайтесь исправить.
Принять, осмыслить. Перезагрузиться.`;

const TEXT_LINES = [
  "Мы — сбой в вашем представлении об искусстве.",
  "30 лет кафедра дизайна создавала систему.",
  "Мы — то, что из неё вырвалось.",
  "Мы не продолжение. Мы — перезагрузка.",
  "Наше поколение не ищет ответа — мы создаём новые ошибки.",
  "Являемся к сведению. Не пытайтесь исправить.",
  "Принять, осмыслить. Перезагрузиться."
];

const Quote = ({ updateTheme }) => {
  const sectionRef = useRef(null)
  const titleRef = useRef(null)
  const [showRight, setShowRight] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        updateTheme("quote", "dark", 10, entry.isIntersecting)

        if (entry.isIntersecting && !started) {
          setStarted(true)
          startTyping()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [updateTheme, started])

  const startTyping = () => {
  const el = titleRef.current;
  if (!el) return;

  el.innerHTML = '';
  const totalDuration = 5000;
  const allChars = TEXT_LINES.join('').length;
  let charIndex = 0;

  TEXT_LINES.forEach((line, lineIndex) => {
    const delayPerChar = totalDuration / allChars;

    line.split('').forEach((char, i) => {
      setTimeout(() => {
        el.innerHTML += char;
      }, charIndex * delayPerChar);
      charIndex++;
    });

    // вставляем перенос строки после каждой строки (кроме последней)
    if (lineIndex < TEXT_LINES.length - 1) {
      setTimeout(() => {
        el.innerHTML += '<br/>';
      }, charIndex * delayPerChar);
    }
  });

  // Показать quote__text-right после окончания печати
  setTimeout(() => {
    setShowRight(true);
  }, totalDuration + 200);
}

    return (
      <section className="quote" ref={sectionRef}>
        <div className="quote__container">
          <h3 className={`quote__text-right ${showRight ? 'show' : ''}`}>
            Вход свободный ( как и мысль )
          </h3>
        </div>

        <div className="quote__text-low">
          <p className="quote__title" ref={titleRef}></p>
        </div>
      </section>
    )
}

export default Quote