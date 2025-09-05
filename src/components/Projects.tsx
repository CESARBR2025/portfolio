import "../index.css";
import coolview from "../assets/photos/coolview.png";
import { IconBrandPython } from "@tabler/icons-react";
import { IconBrandDjango } from "@tabler/icons-react";

import { IconBrandReact } from "@tabler/icons-react";
import dashboards from "../assets/photos/dashboards.png";
export const Projects = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      <article
        style={{
          display: "flex",
          flex: "1 1 300px",
          flexDirection: "column",
          borderRadius: "1rem",
          background: "#809076",
          padding: "0.5rem",
          gap: "0.5rem",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "180px",
            borderRadius: "0rem 0rem 1rem 1rem",
          }}
        >
          <img
            src={coolview}
            alt="preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "1rem 1rem 0rem 0rem",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(40, 65, 57, 0.35)", // overlay suave Emerald
              borderRadius: "1rem 1rem 0rem 0rem",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "1rem",
          }}
        >
          <div className="font-subtitle">CoolView Plus</div>
          <div className="font-text-mid" style={{ marginTop: "0.5rem" }}>
            Tool
          </div>
          <p
            className="font-text"
            style={{ color: "#B8C5BF", marginTop: "1rem" }}
          >
            Application for tracking and analyzing the historical performance of
            coolers.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            
            <div
              style={{
                flex: " 1 1 150px",
                gap: "1rem",

                paddingTop: "1rem",
                display: "flex",
                justifyContent: "start",
              }}
            >
              <div>
                <IconBrandReact
                  stroke={1.75}
                  size={30}
                  color="#B8C5BF"
                  style={{ display: "flex" }}
                />
              </div>
              <div>
                <IconBrandDjango
                  stroke={1.75}
                  size={30}
                  color="#B8C5BF"
                  style={{ display: "flex" }}
                />
              </div>

              <div>
                <IconBrandPython
                  stroke={1.75}
                  size={30}
                  color="#B8C5BF"
                  style={{ display: "flex" }}
                />
              </div>
            </div>
          </div>
        </div>
      </article>

      <article
        style={{
          display: "flex",
          flex: "1 1 300px",
          flexDirection: "column",
          borderRadius: "1rem",
          background: "#809076",
          padding: "0.5rem",
          gap: "0.5rem",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "180px",
            borderRadius: "0rem 0rem 1rem 1rem",
          }}
        >
          <img
            src={dashboards}
            alt="preview"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "1rem 1rem 0rem 0rem",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(40, 65, 57, 0.35)", // overlay suave Emerald
              borderRadius: "1rem 1rem 0rem 0rem",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "100%",
            height: "100%",
            padding: "1rem",
          }}
        >
          <div className="font-subtitle">Dashboards</div>
          <div className="font-text-mid" style={{ marginTop: "0.5rem" }}>
            Tool
          </div>
          <p
            className="font-text"
            style={{ color: "#B8C5BF", marginTop: "1rem" }}
          >
            Interactive dashboards for clear visualization of the cooler fleet
            status.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
           

            <div
              style={{
                flex: " 1 1 150px",
                gap: "1rem",

                paddingTop: "1rem",
                display: "flex",
                justifyContent: "start",
              }}
            >
              <div>
                <IconBrandReact
                  stroke={1.75}
                  size={30}
                  color="#B8C5BF"
                  style={{ display: "flex" }}
                />
              </div>
              <div>
                <IconBrandDjango
                  stroke={1.75}
                  size={30}
                  color="#B8C5BF"
                  style={{ display: "flex" }}
                />
              </div>

              <div>
                <IconBrandPython
                  stroke={1.75}
                  size={30}
                  color="#B8C5BF"
                  style={{ display: "flex" }}
                />
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
