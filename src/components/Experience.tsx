import "../index.css";

export const Experience = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "3rem",
      }}
    >
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="font-subtitle">Imbera México</h3>
            <span className="font-text-mid">Oct 2024 - Aug 2025</span>
            <p className="font-text" style={{ color: "#f8d794" }}>
              Developed internal web tools for cooler monitoring, KPI analysis,
              and API creation using Django.
            </p>
          </div>
        </div>

        <div className="timeline-item" style={{ marginTop: "2.5rem" }}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="font-subtitle">Wep Developer Freelance</h3>
            <span className="font-text-mid">Ene 2024 - Aug 2024</span>
            <p className="font-text" style={{ color: "#f8d794" }}>
              Developer of customized websites for businesses, focused on
              creating functional solutions to each client's needs
            </p>
          </div>
        </div>

        <div className="timeline-item" style={{ marginTop: "2.5rem" }}>
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="font-subtitle">BR Tech </h3>
            <span className="font-text-mid">Jan 2023 - Dec 2023</span>
            <p className="font-text" style={{ color: "#f8d794" }}>
              Founder of a small business providing IT services, Ethernet
              network installation, security camera implementation and
              customized technological solutions for local clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
