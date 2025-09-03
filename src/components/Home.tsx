import "../index.css";
import { SocialBtn } from "./SocialBtn";
import profile from "../assets/photos/profile.png";
import profile_cv from "../assets/photos/profile-cv.jpg";

export const Home = () => {
  return (
    <section
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          flex: " 1 1 300px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          paddingTop: "3rem",
        }}
      >
        <p className="font-title">
          <b>Hey!</b> I'm César
          <br />
          Full-Stack Web Developer building impactful experiences.
        </p>
        <div>
          <SocialBtn />
        </div>
      </div>
      <div
        style={{
          flex: "1 1 300px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${profile})`,
            aspectRatio: "4/3",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "1rem",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            flexDirection: "row", // apila dot y texto verticalmente
            alignItems: "center", // centra horizontalmente
            justifyContent: "center",
            gap: "0.5rem", // separación pequeña entre dot y texto
          }}
        >
          <span
            style={{
              width: "0.8rem",
              height: "0.8rem",
              borderRadius: "50%",
              backgroundColor: "#BB6830",
            }}
          ></span>
          <div className="font-subtitle" style={{ fontSize: "1.3rem" }}>
            Available for work
          </div>
        </div>
      </div>
    </section>
  );
};
