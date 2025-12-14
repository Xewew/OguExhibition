import { useRef, useEffect } from "react";
import "./hide.scss";

const Hide = ({ updateTheme }) => {
  const ID = "hide";
  const rootRef = useRef(null);
 
  useEffect(() => {
  const el = rootRef.current;
  if (!el) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      updateTheme("hide", "light", 1, entry.isIntersecting);
    },
    { rootMargin: "-70px 0px 0px 0px" }
  );

  observer.observe(el);
  return () => observer.disconnect();
}, []);


  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    el.style.setProperty("--pointer-x", `${centerX}px`);
    el.style.setProperty("--pointer-y", `${centerY}px`);
  }, []);

  const handleMove = (e) => {
    const el = rootRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    el.style.setProperty("--pointer-x", `${x}px`);
    el.style.setProperty("--pointer-y", `${y}px`);
  };

  const handleLeave = () => {
    const el = rootRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    el.style.setProperty("--pointer-x", `${centerX}px`);
    el.style.setProperty("--pointer-y", `${centerY}px`);
  };

  return (
    <section
      className="hide"
      ref={rootRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="hide__content">
        <h3 className="hide__title">3 сентября</h3>
      </div>

      <div className="hide__mask" />
    </section>
  );
};

export default Hide;
