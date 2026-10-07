const CARDS = [
  {
    shot: "4 YRS",
    bg: "var(--navy)",
    title: "Design to code",
    body: "One person covers the full path: research, wireframes, prototype and a working front end.",
  },
  {
    shot: "UI",
    bg: "var(--pink)",
    title: "Design systems",
    body: "Reusable components in Figma that match Tailwind and shadcn/ui tokens in code.",
  },
  {
    shot: "RWD",
    bg: "#e08a00",
    title: "Responsive by default",
    body: "Layouts checked from phone width up to wide desktop before hand-off.",
  },
];

export default function Highlights() {
  return (
    <section className="win" id="highlights">
      <div className="tb">
        <span>highlights.exe</span>
        <i>_ □ x</i>
      </div>
      <div className="body hl">
        {CARDS.map((c) => (
          <article className="card" key={c.title}>
            <div className="shot" style={{ background: c.bg }}>
              {c.shot}
            </div>
            <div className="in">
              <h3>{c.title}</h3>
              {c.body}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
