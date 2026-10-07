import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const trailRefs = useRef([]);

  useEffect(() => {
    const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
    const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;

    // 👇 Only check for the OS/browser conditions — GSAP is imported, always available
    if (!fine || still) return;

    const c = cursorRef.current;
    if (!c) return;

    document.body.classList.add("rc");
    c.innerHTML =
      '<path d="M1 1h2v2H1zM1 3h2v2H1zM3 3h2v2H3zM1 5h2v2H1zM3 5h2v2H3zM5 5h2v2H5zM1 7h2v2H1zM3 7h2v2H3zM5 7h2v2H5zM7 7h2v2H7zM1 9h2v2H1zM3 9h2v2H3zM5 9h2v2H5zM1 11h2v2H1zM3 11h2v2H3zM7 9h2v2H7z" fill="#fff" stroke="#101030" stroke-width="1"/>';
    c.setAttribute("viewBox", "0 0 14 14");

    const tr = trailRefs.current.filter(Boolean);
    const xs = gsap.quickTo(c, "x", { duration: 0.04 });
    const ys = gsap.quickTo(c, "y", { duration: 0.04 });
    const q = tr.map((t, i) => [
      gsap.quickTo(t, "x", { duration: 0.15 + i * 0.12 }),
      gsap.quickTo(t, "y", { duration: 0.15 + i * 0.12 }),
    ]);
    tr.forEach((t, i) =>
      gsap.set(t, { opacity: 0.6 - i * 0.18, scale: 1 - i * 0.2 }),
    );

    const onMove = (e) => {
      xs(e.clientX);
      ys(e.clientY);
      q.forEach((p) => {
        p[0](e.clientX + 4);
        p[1](e.clientY + 4);
      });
    };
    const onOver = (e) => {
      const on = e.target.closest("a,.btn,.row,.card,.actor");
      gsap.to(c, { scale: on ? 1.4 : 1, duration: 0.1, ease: "steps(2)" });
      c.style.filter = on
        ? "drop-shadow(0 0 0 #ff4fa3) hue-rotate(300deg)"
        : "none";
    };
    const onDown = (e) => {
      for (let i = 0; i < 8; i++) {
        const d = document.createElement("div");
        d.className = "pf";
        document.body.appendChild(d);
        const a = (i / 8) * 6.283;
        gsap.fromTo(
          d,
          { x: e.clientX, y: e.clientY, opacity: 1 },
          {
            x: e.clientX + Math.cos(a) * 34,
            y: e.clientY + Math.sin(a) * 34,
            opacity: 0,
            duration: 0.45,
            ease: "steps(5)",
            onComplete: () => d.remove(),
          },
        );
      }
    };

    addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    addEventListener("mousedown", onDown);

    return () => {
      document.body.classList.remove("rc");
      removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      removeEventListener("mousedown", onDown);
    };
  }, []);

  return (
    <>
      <svg
        id="c"
        ref={cursorRef}
        viewBox="0 0 14 14"
        shapeRendering="crispEdges"
        aria-hidden="true"
      />
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="trail"
          aria-hidden="true"
          ref={(el) => (trailRefs.current[i] = el)}
        />
      ))}
    </>
  );
}
