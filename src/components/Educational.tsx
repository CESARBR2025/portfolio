import "../index.css";

export const Educational = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        width: "90%",
        marginTop: "1rem",
        marginBottom: "2rem",
      }}
    >
      <div className="card-educational">
        <div className="font-subtitle-educational">
          Enginering Computacional Systems
        </div>
        <div className="font-text-mid">
          Instituto Tecnológico de San Juan del Río
        </div>
        <div
          className="font-text"
          style={{ color: "#f8d794", marginTop: "0.5rem" }}
        >
          Courses:
        </div>
        <ul className="font-text-mid">
          <li>Database | PostgreSQL, Bigquery</li>
          <li>Fronted | Laravel, React</li>
          <li>Backend | Java, Python</li>
          <li>APIs REST | Django, FastAPI</li>
          <li>DevOps | Github, Docker, FIrebase</li>
        </ul>
      </div>

      <div className="card-educational">
        <div className="font-subtitle-educational">IT Technician Systems</div>
        <div className="font-text-mid">
          Centro de bachillerato tecnológico industrial y de servicios No. 145
        </div>
        <div
          className="font-text"
          style={{ color: "#f8d794", marginTop: "0.5rem" }}
        >
          Courses:
        </div>

        <ul className="font-text-mid">
          <li>Maintance | Hardware and Sofware Systems</li>
          <li>Fronted | Css3, HTML5</li>
        </ul>
      </div>
    </div>
  );
};
