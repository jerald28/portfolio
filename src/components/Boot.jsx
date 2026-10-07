import { useEffect, useRef } from "react";
import gsap from "gsap";

const LINES = [
  "JERALD-OS v4.0 (c) 2022-2026",
  "Memory check ........ OK",
  "Loading figma.dll ..... OK",
  "Loading vue.sys, react.sys, nuxt.sys ..... OK",
  "Mounting portfolio ..... READY",
  "> Welcome. Scroll down to open files.",
];

export default function Boot() {
  const ref = useRef(null);

  useEffect(() => {
    const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const el = ref.current;
    const all = LINES.join("\n");

    if (still) {
      el.textContent = all;
      return;
    }

    const ctx = gsap.context(() => {
      // 1) Boot typing — starts now
      const obj = { n: 0 };
      gsap.to(obj, {
        n: all.length,
        duration: 2.4,
        ease: "none",
        onUpdate() {
          el.textContent = all.slice(0, Math.floor(obj.n)) + "█";
        },
        onComplete() {
          el.textContent = all;
        },
      });

      // 2) Hero fade-in — runs in parallel, just a tiny delay after mount
      gsap.from(".hero", {
        scale: 0.92,
        opacity: 0,
        duration: 0.5,
        ease: "steps(5)",
        delay: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="win" aria-label="Startup" style={{ marginTop: 20 }}>
      <div className="tb">
        <span>{"C:\\BOOT.SYS"}</span>
        <i>_ □ x</i>
      </div>
      <pre id="boot" ref={ref} aria-live="polite" />
    </section>
  );
}
