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
    const timer1 = setTimeout(() => setStep(1), 300);   
    const timer2 = setTimeout(() => setStep(2), 900);  
    const timer3 = setTimeout(() => setStep(3), 1500); 
    const timer4 = setTimeout(() => setStep(4), 2100); 
    const timer5 = setTimeout(() => setStep(5), 2700);

    const timer6 = setTimeout(() => setStep(6), 3500);

    const timer7 = setTimeout(() => setStep(7), 4200);

    const timer8 = setTimeout(() => setStep(8), 4800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
      clearTimeout(timer8);
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