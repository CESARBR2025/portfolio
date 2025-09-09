import "../../index.css";
import { Experience } from "../../components/Experience";
import { Home } from "../../components/Home";
import { Projects } from "../../components/Projects";
import { Educational } from "../../components/Educational";
import { Coverage } from "../../components/dashboards/kpis/coverage";

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
                onClick={() => scrollToSection("experience")}
                className="btn-header font-text-mid"
              >
                <p>Experience</p>
              </div>
              <div
                onClick={() => scrollToSection("projects")}
                className="btn-header font-text-mid"
              >
                <p>Projects</p>
              </div>

              <div
                onClick={() => scrollToSection("formation")}
                className="btn-header font-text-mid"
              >
                <p>Formation</p>
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

        <section id="experience" style={{ flex: "5" }}>
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

        <section id="projects" style={{ flex: "5" }}>
          <Projects />
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
          <div className="font-text-mid">Formation</div>
          <div className="font-subtitle">Educational</div>
        </section>
        <section
          id="formation"
          style={{ flex: "2", display: "flex", justifyContent: "center" }}
        >
          <Educational />
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
          <div className="font-text-mid">Edit</div>
          <div className="font-subtitle">Develop in progress...</div>
        </section>
        <section>
          <Coverage />
        </section>
      </div>
    </div>
  );
};
