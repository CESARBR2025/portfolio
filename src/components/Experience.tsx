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
            <h3 className="font-subtitle">
              FullStack Data Developer | Imbera{" "}
            </h3>
            <span className="font-text-mid">
              San Juan del Río, Qro | October 2024- July 2025
            </span>

            <ul className="font-text" style={{ color: "#f8d794" }}>
              <li>
                Eliminated Tableau dependency by developing custom dashboards,
                reducing operational costs.
              </li>
              <li>
                Modeled PostgreSQL and BigQuery databases, optimizing data
                structure and performance.
              </li>
              <li>
                Developing efficient APIs REST with Django and FastAPI, enabling
                internal fronteds to consume real-time data.
              </li>
              <li>
                Documented data pipelines and queries, facilitating maintenance
                and data reuse.
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-item" style={{ marginTop: "2.5rem" }}>
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <h3 className="font-subtitle">IT Technician | BR TECH</h3>
            <span className="font-text-mid">
              San Juan del Río Qro. | January 2021 - August 2024
            </span>
            <ul className="font-text" style={{ color: "#f8d794" }}>
              <li>
                Managed and implemented corporate networks, ensuring stable and
                secure internal connectivity.
              </li>
              <li>
                Provided advanced support to operating systems, resolving
                critical issues.
              </li>
              <li>
                Provided especialized support to hardware, incluiding PCs,
                laptops and printers.
              </li>
              <li>
                Instaled and configured security cameras for continuous
                monitoring and incident prevention.
              </li>
              <li>
                Configured and managed servers, ensuring availability and
                protection of critical data.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
