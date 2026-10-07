import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "./data/projects";

import Nav from "./components/Nav";
import Boot from "./components/Boot";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Highlights from "./components/Highlights";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (still) return;

    const ctx = gsap.context(() => {
      gsap.to("#tk", {
        xPercent: -33.33,
        duration: 22,
        ease: "none",
        repeat: -1,
      });

      gsap.utils.toArray(".win:not(.hero):not(:first-of-type)").forEach((w) => {
        gsap.from(w, {
          y: 40,
          opacity: 0,
          duration: 0.5,
          ease: "steps(6)",
          scrollTrigger: { trigger: w, start: "top 88%" },
        });
      });

      gsap.from(".row", {
        x: -30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.4,
        ease: "steps(4)",
        scrollTrigger: { trigger: "#projects", start: "top 70%" },
      });

      gsap.from(".fold", {
        y: 20,
        opacity: 0,
        stagger: 0.12,
        duration: 0.4,
        ease: "steps(4)",
        scrollTrigger: { trigger: "#tools", start: "top 75%" },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const still = matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (still) return;
    const btns = document.querySelectorAll(".btn");
    const handlers = [];
    btns.forEach((b) => {
      const h = () =>
        gsap.fromTo(
          b,
          { x: -2 },
          { x: 2, duration: 0.05, repeat: 3, yoyo: true, clearProps: "x" },
        );
      b.addEventListener("mouseenter", h);
      handlers.push([b, h]);
    });
    return () =>
      handlers.forEach(([b, h]) => b.removeEventListener("mouseenter", h));
  }, []);

  return (
    <>
      <CustomCursor />
      <ProjectModal
        project={activeProject != null ? projects[activeProject] : null}
        onClose={() => setActiveProject(null)}
      />
      <Nav />
      <main className="wrap" id="top">
        <Boot />
        <Hero />
        <Ticker />
        <Tools />
        <Experience />
        <Highlights />
        <Projects onOpen={setActiveProject} />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
