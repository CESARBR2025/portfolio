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
            <h3 className="font-subtitle">Imbera México</h3>
            <span className="font-text-mid">Oct 2024 - Ago 2025</span>
            <p className="font-text" style={{ color: "#f8d794" }}>
              Developed internal web tools for cooler monitoring, KPI analysis,
              and API creation using Django.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
