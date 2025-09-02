import "../index.css";

export const Experience = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="font-subtitle">IMBERA</h3>
            <span className="font-text-mid">Oct 2024 - Ago 2025</span>
            <p className="font-text" style={{ color: "#f8d794" }}>
              Desarrollo de herramientas web internas para monitoreo de
              enfriadores, análisis de KPIs y creacion de API's con Django.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
