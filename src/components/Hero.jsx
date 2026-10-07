import portrait from "../assets/jerald.webp";

export default function Hero() {
  return (
    <section className="win hero" id="about">
      <div className="tb">
        <span>about_me.txt</span>
        <i>_ □ x</i>
      </div>
      <div className="body">
        <figure className="me" id="me">
          <div className="mt">
            <span>me.jpg</span>
            <span>x</span>
          </div>
          <div className="ph">
            <img
              alt="Portrait of Jerald Esguerra"
              width="300"
              height="400"
              src={portrait}
            />
          </div>
          <figcaption>Jerald Esguerra</figcaption>
        </figure>
        <div style={{ flex: 1, minWidth: 240 }}>
          <h1>Jerald Esguerra</h1>
          <p>
            <b>UI/UX Developer.</b> I design interfaces in Figma, then build
            them in Vue, React and Nuxt. Four years of turning wireframes into
            fast, friendly websites people actually enjoy using.
            <span className="cur" aria-hidden="true" />
          </p>
          <p>
            <a className="btn" href="#projects">
              Open projects
            </a>{" "}
            <a className="btn" href="#contact">
              Say hello
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
