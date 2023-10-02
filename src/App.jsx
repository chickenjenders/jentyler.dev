import "./styles.css";
import pic from "./jenprofile.jpeg"

function App() {

  window.onscroll = () => {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navbar").style.background = "#501e27";
    } else {
      document.getElementById("navbar").style.background = "none";
    }
  }

  return (
    <main>
      <nav id="navbar" className="nav">
        <a href="#welcome-section" className="name-tag">
          Jen T
        </a>
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects-header">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <script></script>
      <section id="welcome-section" className="welcome-section">
        <img
          src={pic}
          style={{ width: "535px", height: "700px" }}
        />
        <h1>Hey, I am Jen!</h1>
        <p>~a web developer~</p>
      </section>
      <section id=" about">
        <h2>About Me</h2>
        <p>I am hoping this works and I can type something meaningful later</p>
      </section>
      <h2 className="projects-header">Projects</h2>
      <section className="projects-container">
        <a href="./pumpkin.html">
          <img
            className="project-image"
            src="https://happycoding.io/tutorials/p5js/animation/images/flickering-jack-o-lantern-2.gif"
          />
          <p className="project-title">Flashing Pumpkin</p>
        </a>
        <a
          href="https://editor.p5js.org/chickenjenders/sketches/S5TILHUKe"
          target="_blank"
          className="project-tile"
        >
          <img
            className="project-image"
            src="https://www.imaginarycloud.com/blog/content/images/2019/02/Pong.jpg"
          />
          <p className="project-title">Pong Clone</p>
        </a>
        <a
          href="https://editor.p5js.org/chickenjenders/sketches/K_ANNes_d"
          target="_blank"
          className="project-title"
        >
          <img
            className="project-image"
            src="https://happycoding.io/tutorials/p5js/creating-classNamees/images/bonsai-tree-3.png"
          />
          <p className="project-title">Trees</p>
        </a>
      </section>
      <section id="contact" className="contact">
        <div className="contact-section-header">
          <h2 id="contact-header">Let's work together...</h2>
          <p>Pretty Please :)</p>
        </div>
        <div className="contact-links">
          <a
            className="linked"
            href="https://www.linkedin.com/in/jennifer-tyler-7197501b7/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="github"
            href="https://github.com/chickenjenders"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}

export default App;
