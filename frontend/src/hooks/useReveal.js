import { useEffect, useRef } from "react";

/**
 * Safe reveal animation: large sections (such as the 38-treatment catalogue)
 * must never remain invisible because an IntersectionObserver threshold cannot
 * be reached. The element is revealed as soon as any meaningful part enters
 * the viewport, and we also perform an initial viewport check.
 */
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add("in");
    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.15 && rect.bottom > -40) reveal();
    };

    check();
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        reveal();
        io.disconnect();
      }
    }, { threshold: 0.01, rootMargin: "120px 0px" });

    io.observe(el);
    window.addEventListener("resize", check, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("resize", check);
    };
  }, []);

  return ref;
}
