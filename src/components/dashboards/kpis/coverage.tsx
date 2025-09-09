import { useInsighits } from "../../../hooks/useInsighits";
import "../../../index.css";
import {
  IconArrowUp,
  IconChecklist,
  IconFridge,
  IconGraph,
  IconDeviceIpadPin,
  IconClock,
} from "@tabler/icons-react";

//recharts
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export const Coverage = () => {
  const { data, loading, error } = useInsighits();
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

  console.log(data);
  console.log(loading);
  console.log(1);
  console.log(data?.frecuencia.p_consola_frecuencia);

  return (
    <article style={{ background: "#ECFAF3" }}>
      <section
        style={{
          flex: "1",
          display: "flex",
          gap: "1rem",
          background: "#00977B",
        }}
      >
        <div
          style={{
            padding: "1rem",
            width: "100%",
            display: "flex",
            gap: "0.5rem",
          }}
        >
          <div style={{ justifyContent: "center", display: "flex" }}>
            {" "}
            <IconChecklist stroke={1.75} size={40} color="#fff" />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            <div className="font-subtitle" style={{ color: "#fff" }}>
              Resumen de indicadores
            </div>
            <div className="font-text" style={{ color: "#D0FAE5" }}>
              Monitorea eficientemente el estado de tus indicadores
            </div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "1rem",
            justifyContent: "flex-end",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "auto",
              height: "auto",
              justifyContent: "center",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              border: "1px solid gray",
              background: "#33AB97",
              color: "#fff",
              padding: "0.2rem",
            }}
          >
            Live Data
          </div>
        </div>
      </section>
      <section style={{ flex: "1" }}>
        {/*Cards */}
        <article
          style={{
            flexWrap: "wrap",
            display: "flex",
            gap: "1rem",
            padding: "1rem",
          }}
        >
          <div
            style={{
              flex: " 1 1 300px",
              borderRadius: "1rem",
              padding: "1rem",
              background: "#F0FAF5",
              boxShadow: "0 4px 6px #dee0dfff",
              display: "flex",
              flexDirection: "column",
              gap: "1em",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="font-text"
                style={{
                  color: "#007A55",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                COBERTURA
              </div>
              <div
                style={{
                  background: "#D0FAE5",
                  borderRadius: "0.5rem",
                }}
              >
                <IconFridge
                  stroke={2}
                  size={25}
                  color="#004F3B"
                  style={{ margin: "0.5rem" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", alignItems: "end" }}>
              <div className="font-subtitle" style={{ color: "#004F3B" }}>
                {data?.cobertura.p_consola_cobertura}%
              </div>
              <div
                style={{
                  height: "60%",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  background: "#D0FAE5",
                  borderRadius: "0.4rem",
                  padding: "0.2rem 0.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconArrowUp stroke={1.75} size={17} color="#007A55" />
                </div>
                <div className="font-text-min" style={{ color: "#007A55" }}>
                  + {data?.cobertura.porcentaje_diferencia_cobertura_msj}%
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                background: "#D0FAE5",
                borderRadius: "1rem",
                height: "10px",
              }}
            >
              <div
                style={{
                  width: `${data?.cobertura.p_consola_cobertura}`,
                  background: "#3A3A3A",
                  height: "10px",
                  borderRadius: "1rem",
                }}
              ></div>
            </div>
            <div className="font-text-min" style={{ color: "#007A55" }}>
              Aumento de{" "}
              <strong>{data?.cobertura.diferencia_cobertura_msj} </strong>{" "}
              enfriadores esta semana
            </div>
          </div>

          <div
            style={{
              flex: " 1 1 300px",
              borderRadius: "1rem",
              padding: "1rem",
              background: "#FDFEFF",
              boxShadow: "0 4px 6px #dee0dfff",
              display: "flex",
              flexDirection: "column",
              gap: "1em",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="font-text"
                style={{
                  color: "#1447E6",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                FRECUENCIA
              </div>
              <div
                style={{
                  background: "#DBEAFE",
                  borderRadius: "0.5rem",
                }}
              >
                <IconGraph
                  stroke={2}
                  size={25}
                  color="#1447E6"
                  style={{ margin: "0.5rem" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", alignItems: "end" }}>
              <div className="font-subtitle" style={{ color: "#004F3B" }}>
                {data?.frecuencia.p_consola_frecuencia}%
              </div>
              <div
                style={{
                  height: "60%",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  background: "#DBEAFE",
                  borderRadius: "0.4rem",
                  padding: "0.2rem 0.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconArrowUp stroke={1.75} size={17} color="#1447E6" />
                </div>
                <div className="font-text-min" style={{ color: "#1447E6" }}>
                  + {data?.frecuencia.porcentaje_diferencia_frecuencia_msj}%
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                background: "#DBEAFE",
                borderRadius: "1rem",
                height: "10px",
              }}
            >
              <div
                style={{
                  width: `${data?.frecuencia.p_consola_frecuencia}%`,
                  background: "#3A3A3A",
                  height: "10px",
                  borderRadius: "1rem",
                }}
              ></div>
            </div>
            <div className="font-text-min" style={{ color: "#1447E6" }}>
              Aumento de{" "}
              <strong>{data?.frecuencia.diferencia_frecuencia_msj} </strong>{" "}
              enfriadores esta semana
            </div>
          </div>

          <div
            style={{
              flex: " 1 1 300px",
              borderRadius: "1rem",
              padding: "1rem",
              background: "#FFFCF1",
              boxShadow: "0 4px 6px #dee0dfff",
              display: "flex",
              flexDirection: "column",
              gap: "1em",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                className="font-text"
                style={{
                  color: "#BB4D00",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                COINCIDENCIA
              </div>
              <div
                style={{
                  background: "#FEF3C6",
                  borderRadius: "0.5rem",
                }}
              >
                <IconDeviceIpadPin
                  stroke={2}
                  size={25}
                  color="#E78A27"
                  style={{ margin: "0.5rem" }}
                />
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.5rem", alignItems: "end" }}>
              <div className="font-subtitle" style={{ color: "#BB4D00" }}>
                {data?.coincidencia.p_consola_coincidencia}%
              </div>
              <div
                style={{
                  height: "60%",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                  background: "#FEF3C6",
                  borderRadius: "0.4rem",
                  padding: "0.2rem 0.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconArrowUp stroke={1.75} size={17} color="#BB4D00" />
                </div>
                <div className="font-text-min" style={{ color: "#BB4D00" }}>
                  + {data?.coincidencia.porcentaje_diferencia_coincidencia_msj}%
                </div>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                background: "#FEF3C6",
                borderRadius: "1rem",
                height: "10px",
              }}
            >
              <div
                style={{
                  width: `${data?.coincidencia.p_consola_coincidencia}%`,
                  background: "#3A3A3A",
                  height: "10px",
                  borderRadius: "1rem",
                }}
              ></div>
            </div>
            <div className="font-text-min" style={{ color: "#E78A27" }}>
              Aumento de{" "}
              <strong>{data?.coincidencia.diferencia_coincidencia_msj} </strong>{" "}
              enfriadores esta semana
            </div>
          </div>
        </article>
      </section>

      <section
        style={{
          flex: "1",
          padding: "1rem",
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        <article
          style={{
            flex: "1 1 600px",
            background: "white",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            borderRadius: "1rem",
            boxShadow: "0 10px 15px #dee0dfff",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexDirection: "column",
              padding: "1rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <div>
                  <IconClock stroke={1.75} color="#007A55" />
                </div>
                <div
                  className="font-text"
                  style={{
                    fontWeight: "600",
                  }}
                >
                  Analisis Temporal Historico
                </div>
              </div>
              <div className="font-text-mid" style={{ color: "gray" }}>
                Evolucion de KPIs desde {data?.kpis.grafica[0]?.Fecha} hasta{" "}
                {data?.kpis.grafica[data?.kpis.grafica.length - 1]?.Fecha}
              </div>
            </div>

            <div style={{ height: "300px", marginTop: "1rem" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  width={500}
                  height={300}
                  data={data?.kpis.grafica}
                  margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <XAxis dataKey="Fecha" />
                  <YAxis
                    tickFormatter={(value) => {
                      if (value >= 100) {
                        return `${(value / 1000).toFixed(0)}K`;
                      }
                      return value;
                    }}
                  />
                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="Parque"
                    stroke="#8884d8"
                    fill="#8884d8"
                  />

                  <Area
                    type="monotone"
                    dataKey="Cobertura"
                    stroke="#007A55"
                    fill="#D0FAE5"
                  />

                  <Area
                    type="monotone"
                    dataKey="Coincidencia"
                    stroke="#BB4D00"
                    fill="#FEF3C6"
                  />

                  <Area
                    type="monotone"
                    dataKey="Frecuencia"
                    stroke="#1447E6"
                    fill="#DBEAFE"
                    fillOpacity={1}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </article>
        <article
          style={{
            flex: "1 1 400px",
            background: "white",
            borderRadius: "1rem",
            boxShadow: "0 10px 15px #dee0dfff",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div
            style={{ gap: "0.5rem", display: "flex", flexDirection: "column" }}
          >
            <div className="font-text" style={{ fontWeight: "600" }}>
              Resumen por Zonas
            </div>
            <div className="font-text-mid" style={{ color: "gray" }}>
              Metricas actuales por region y zona
            </div>
          </div>

          <div style={{ background: "red", marginTop: "1rem" }}>
            in progress
          </div>
        </article>
      </section>
    </article>
  );
};
