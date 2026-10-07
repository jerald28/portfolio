import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  const open = project != null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // Lock body scroll while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <div
      id="md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mt"
      aria-hidden={!open}
      className={open ? "open" : ""}
      onClick={(e) => {
        if (e.target.id === "md") onClose();
      }}
    >
      <div className="mw">
        <div className="tb">
          <span id="mt">project.exe</span>
          <button
            type="button"
            aria-label="Close project details"
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="mb2" id="mbd">
          {project && (
            <>
              {project.hero && (
                <figure className="mhero">
                  <img src={project.hero} alt={project.heroAlt} />
                </figure>
              )}

              <h2>{project.name}</h2>

              {project.desc.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              <div className="meta">
                <div>
                  <b>ROLE</b>
                  {project.role}
                </div>
                <div>
                  <b>STACK</b>
                  {project.stack}
                </div>
              </div>

              <h3>{"Key Features"}</h3>
              <ul className="feats">
                {project.feats.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              {project.shots && project.shots.length > 0 && (
                <>
                  <h3>{"Screenshots"}</h3>
                  <div className="shots">
                    {project.shots.map((src, i) => (
                      <figure key={i}>
                        <figcaption>
                          <i />
                          <i />
                          {project.caps[i] || `screen_${i + 1}.png`}
                        </figcaption>
                        <img src={src} alt="" loading="lazy" />
                      </figure>
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
