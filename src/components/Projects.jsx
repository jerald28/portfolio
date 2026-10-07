import { projects, mockColors } from "../data/projects";

function MockPreview({ a, b, variant }) {
  // Phone mock (variant 4)
  if (variant === 4) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 120"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        <rect width="200" height="120" fill={b} />
        {[20, 75, 130].map((x, k) => (
          <g key={x}>
            <rect x={x} y="8" width="52" height="104" fill="#101030" />
            <rect
              x={x + 3}
              y="14"
              width="46"
              height="92"
              fill={k === 1 ? a : "#fdfdf5"}
            />
            <rect
              x={x + 8}
              y="24"
              width="36"
              height="10"
              fill={k === 1 ? b : a}
            />
            <rect x={x + 8} y="40" width="36" height="6" fill="#c6c6c6" />
            <rect x={x + 8} y="52" width="26" height="6" fill="#c6c6c6" />
          </g>
        ))}
      </svg>
    );
  }

  // Sidebar layout (variant 1) or hero layout (default)
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 120"
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      <rect width="200" height="120" fill="#fdfdf5" />
      <rect width="200" height="12" fill="#1a1a8c" />
      <rect x="4" y="4" width="4" height="4" fill="#fff" />
      <rect x="11" y="4" width="4" height="4" fill="#ffd23f" />

      {variant === 1 ? (
        <>
          <rect y="22" width="40" height="98" fill={a} />
          <rect x="48" y="30" width="70" height="40" fill={b} />
          <rect x="124" y="30" width="70" height="40" fill="#c6c6c6" />
          <rect x="48" y="78" width="146" height="8" fill={a} />
          <rect x="48" y="92" width="100" height="8" fill="#c6c6c6" />
        </>
      ) : (
        <>
          <rect y="22" width="200" height="46" fill={a} />
          <rect x="14" y="32" width="90" height="8" fill={b} />
          <rect x="14" y="46" width="60" height="6" fill="#fff" />
          <rect x="14" y="58" width="24" height="6" fill={b} />
          <rect x="14" y="76" width="50" height="38" fill="#c6c6c6" />
          <rect x="74" y="76" width="50" height="38" fill={b} />
          <rect x="134" y="76" width="50" height="38" fill="#c6c6c6" />
        </>
      )}
    </svg>
  );
}

export default function Projects({ onOpen }) {
  return (
    <section className="win" id="projects">
      <div className="tb">
        <span>{"projects\\ (5 objects)"}</span>
        <i>_ □ x</i>
      </div>
      <div className="body scroll">
        <p className="hintp">&gt; Click a project to open its details.</p>

        <div className="hl" id="feat">
          {projects.map((p, i) => (
            <article
              className="card"
              tabIndex={0}
              role="button"
              aria-label={`Open ${p.name} details`}
              key={p.name}
              onClick={() => onOpen(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onOpen(i);
                }
              }}
            >
              <div className="shot">
                {p.hero ? (
                  <div className="frame">
                    <div className="ch">
                      <i />
                      <i className="y" />
                    </div>
                    <img className="pimg" alt={p.heroAlt} src={p.hero} />
                  </div>
                ) : (
                  <MockPreview {...mockColors[i]} variant={i} />
                )}
              </div>
              <div className="in">
                <h3>{p.name}</h3>
                <div className="tags">
                  {p.tags.map((t) => (
                    <span className="tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Stack</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr className="row" key={p.name}>
                <td>{p.name}</td>
                <td>
                  <span className="role">{p.role}</span>
                </td>
                <td>{p.stack}</td>
              </tr>
            ))}
            {/* <tr className="row">
              <td>Mobile app prototype</td>
              <td>
                <span className="role">DESIGN</span>
              </td>
              <td>Figma, Prototyping</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </section>
  );
}
