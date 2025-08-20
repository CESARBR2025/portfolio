import "../index.css";
import { IconBrandInstagram, IconBrandMeta } from "@tabler/icons-react";
export const SocialBtn = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "0.5rem 0.3rem",
      }}
    >
      {/*Boton de contact */}
      <div className="btn-contact">Contact</div>

      {/*Botones sociales*/}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          alignItems: "center",
        }}
      >
        <div
          className="btn-contact-social"
          onClick={() =>
            window.open("https://instagram.com/br_cesarx", "_blank")
          }
        >
          <IconBrandInstagram stroke={2} style={{ height: "1.5rem" }} />
        </div>
        <div
          onClick={() =>
            window.open("https://facebook.com/cesar.rosales.73550 ", "_blank")
          }
          className="btn-contact-social"
        >
          <IconBrandMeta stroke={2} style={{ height: "1.5rem" }} />
        </div>
      </div>
    </div>
  );
};
