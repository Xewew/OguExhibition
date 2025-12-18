import { useEffect, useRef, useState } from "react";
import "./plus.scss";

const Plus = ({ updateTheme }) => {
  const ID = "plus";
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
            updateTheme("plus", "light", 4, entry.isIntersecting);
            },
            { rootMargin: "-70px 0px 0px 0px" }
        );

        observer.observe(el);
        return () => observer.disconnect();
        }, [updateTheme]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            if (entry.isIntersecting) {
                setStart(true);
                observer.disconnect();
            }
        },
        { threshold: 0.4 }
    );
        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => observer.disconnect();
    }, []);

    const [step, setStep] = useState(0);

 useEffect(() => {
  if (!start) return;

  let timers = [];

  const runAnimation = () => {
    setStep(0);

    timers.push(setTimeout(() => setStep(1), 300));
    timers.push(setTimeout(() => setStep(2), 900));
    timers.push(setTimeout(() => setStep(3), 1500));
    timers.push(setTimeout(() => setStep(4), 2100));
    timers.push(setTimeout(() => setStep(5), 2700));
    timers.push(setTimeout(() => setStep(6), 3500));
    timers.push(setTimeout(() => setStep(7), 4200));
    timers.push(setTimeout(() => setStep(8), 4800));

    timers.push(
      setTimeout(runAnimation, 6300)
    );
  };

  runAnimation();

  return () => {
    timers.forEach(clearTimeout);
  };
}, [start]);
    

  return (
    <section className="plus" ref={sectionRef}>
      <div className={`plus__count ${step >= 6 ? "hidden" : ""}`}>
        <p className={`plus__numbers ${step >= 1 ? "show" : ""}`}>10</p>
        <p className={`plus__plus ${step >= 2 ? "show" : ""}`}>+</p>
        <p className={`plus__numbers ${step >= 3 ? "show" : ""}`}>10</p>
        <p className={`plus__plus ${step >= 4 ? "show" : ""}`}>+</p>
        <p className={`plus__numbers ${step >= 5 ? "show" : ""}`}>10</p>
      </div>

      <div className="plus__result">
        <p className={`plus__result-number ${step >= 7 ? "showFinal" : ""}`}>
          30
        </p>
        <p className={`plus__result-text ${step >= 8 ? "showFinal" : ""}`}>
          лет
        </p>
      </div>
    </section>
  );
};

export default Plus;