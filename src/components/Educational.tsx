import "../index.css";

export const Educational = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "2rem",
      }}
    >
      <div className="timeline-educational">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="font-subtitle">Mahatma Gandhí</h3>
            <span className="font-text-mid">
              Oct 2024 - Ago 2025 <br />
            </span>
            <span className="font-text" style={{ color: "#f8d794" }}>
              Secundary
            </span>
          </div>
        </div>
      </div>

      <div className="timeline-educational">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="font-subtitle">CBTIS 145</h3>
            <span className="font-text-mid">
              Oct 2024 - Ago 2025 <br />
            </span>
            <span className="font-text" style={{ color: "#f8d794" }}>
              Bachillerato
            </span>
          </div>
        </div>
      </div>

      <div className="timeline-educational">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h3 className="font-subtitle">ITSJR</h3>
            <span className="font-text-mid">
              Jan 2020 - Ago 2025 <br />
            </span>
            <span className="font-text" style={{ color: "#f8d794" }}>
              University
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
