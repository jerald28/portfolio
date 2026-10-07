import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`bar ${open ? "open" : ""}`} id="bar" aria-label="Main">
      <a className="btn start" href="#top">
        JERALD.EXE
      </a>

      <button
        className="btn menu-btn"
        id="mb"
        type="button"
        aria-expanded={open}
        aria-controls="lk"
        onClick={() => setOpen((v) => !v)}
      >
        ☰ MENU
      </button>

      <div className="links" id="lk">
        <a className="btn" href="#about">
          About
        </a>
        <a className="btn" href="#tools">
          Tools
        </a>
        <a className="btn" href="#work">
          Work
        </a>
        <a className="btn" href="#projects">
          Projects
        </a>
        <a className="btn" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}
