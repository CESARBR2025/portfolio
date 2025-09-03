import "../index.css";
import {
  IconBrandInstagram,
  IconFileCv,
  IconMailForward,
  IconBrandLinkedin,
} from "@tabler/icons-react";

import cv from "../assets/documents/cv.pdf";

export const SocialBtn = () => {
  //Funcion para descargar cv
  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "CesarIvanCV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      <div
        className="btn-contact-social"
        style={{ display: "flex", gap: "0.5rem" }}
      >
        <IconMailForward />
        <a
          href="mailto:barcenasrosalescesarivan@gmail.com?subject=Contacto%20desde%20mi%20portafolio&body=Hola,%20quiero%20saber%20más%20sobre%20tu%20trabajo."
          style={{ color: "#F8D794" }}
        >
          Contact
        </a>
      </div>

      {/*Botones sociales*/}
      <div onClick={handleDownloadCv} className="btn-contact-social">
        <IconFileCv />
      </div>
      <div
        onClick={() =>
          window.open(
            "https://www.linkedin.com/in/cesar-ivan-barcenas-rosales-a74a83378",
            "_blank"
          )
        }
        className="btn-contact-social"
      >
        <IconBrandLinkedin stroke={2} style={{ height: "1.5rem" }} />
      </div>
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
      </div>
    </div>
  );
};
