import "../index.css";

export const Educational = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        width: "90%",
        marginTop: "1rem",
        marginBottom: "2rem",
      }}
    >
      <div className="card-educational">
        <div className="font-subtitle-educational">Mahatma Gandhí</div>
        <div className="font-text-mid">Jan 2013 - Dec 2016</div>
        <div className="font-text" style={{ color: "#f8d794" }}>
          Secondary
        </div>
      </div>

      <div className="card-educational">
        <div className="font-subtitle-educational">CBTIS No.145</div>
        <div className="font-text-mid">Jan 2017 - Jan 2020</div>
        <div className="font-text" style={{ color: "#f8d794" }}>
          HighSchool
        </div>
      </div>
      <div className="card-educational">
        <div className="font-subtitle-educational">
          Instituto Tecnológico de San Juan del Río
        </div>
        <div className="font-text-mid">Jan 2020 - Ago 2025</div>
        <div className="font-text" style={{ color: "#f8d794" }}>
          University
        </div>
      </div>
    </div>
  );
};
