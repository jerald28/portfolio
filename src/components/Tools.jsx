const FOLDS = [
  {
    title: "./design_ux",
    items: [
      "UI/UX Design",
      "Wireframing & Flows",
      "Figma",
      "Canva",
      "Prototyping",
    ],
  },
  {
    title: "./front-end",
    items: [
      "Vue.js",
      "React.js",
      "Nuxt.js",
      "Tailwind CSS",
      "Shadcn UI",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
  },
  { title: "./back-end_db", items: ["Laravel", "Supabase"] },
  {
    title: "./tools_workflow",
    items: ["Git & SourceTree", "Trello", "Agile / Scrum"],
  },
  {
    title: "./cms_ecommerce",
    items: ["WordPress", "Elementor", "WooCommerce"],
  },
];

export default function Tools() {
  return (
    <section className="win" id="tools">
      <div className="tb">
        <span>{"My Computer \\ tools"}</span>
        <i>_ □ x</i>
      </div>
      <div className="body grid">
        {FOLDS.map((f) => (
          <div className="fold" key={f.title}>
            <h3>{f.title}</h3>
            <ul>
              {f.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
