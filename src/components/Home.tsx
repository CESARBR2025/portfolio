import "../index.css";
import { SocialBtn } from "./SocialBtn";
import profile from "../assets/photos/profile.png";

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
          flex: " 1 1 300px",
          backgroundImage: `url(${profile})`,
          aspectRatio: "4/3",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "1rem",
        }}
      ></div>
    </section>
  );
};
