import "../../index.css";
import { Experience } from "../../components/Experience";
import { Home } from "../../components/Home";
import { Projects } from "../../components/Projects";

export const Portafolio = () => {
  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    /*Contendor central */
    <div
      style={{
        maxWidth: "1080px",
        minWidth: "320px",
        width: "100%",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <section style={{ display: "flex", flex: "1" }}>
          <div style={{ display: "flex", gap: "0.5rem", width: "100%" }}>
            <div style={{ flex: "5" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  height: "100%",
                  padding: "0rem 0.5rem",
                  marginBottom: "2rem",
                }}
              >
                <p className="font-text-mid">PORTFOLIO PROJECT</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flex: "5",
                gap: "0.5rem",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <div
                onClick={() => scrollToSection("home")}
                className="btn-header font-text-mid"
              >
                <p>Home</p>
              </div>

              <div
                onClick={() => scrollToSection("work")}
                className="btn-header font-text-mid"
              >
                <p>Work</p>
              </div>
            </div>
          </div>
        </section>

        <section id="home" style={{ display: "flex", flex: "3" }}>
          <Home />
        </section>

        <section
          style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1rem",
            marginTop: "2rem",
          }}
        >
          <div className="font-text-mid">Enterphrises</div>
          <div className="font-subtitle">Experience</div>
        </section>

        <section id="work" style={{ flex: "5" }}>
          <Experience />
        </section>
        <section
          style={{
            display: "flex",
            flex: "1",
            flexDirection: "column",
            gap: "0.5rem",
            padding: "1rem",
            marginTop: "2rem",
          }}
        >
          <div className="font-text-mid">Work</div>
          <div className="font-subtitle">Personal Projects</div>
        </section>

        <section id="work" style={{ flex: "5" }}>
          <Projects />
        </section>
      </div>
    </div>
  );
};
