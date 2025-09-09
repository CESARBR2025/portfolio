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
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

//Tarjetas de zona
import { Tarjetas } from "./Tarjetas";
import { useMemo, useState } from "react";

export const Coverage = () => {
  //Estados
  const [selected, setSelected] = useState<string>("DIRECTO CAPITAL");

  //Consumir api
  const { data, loading, error } = useInsighits();

  //Pasar string a numericos
  const charData = data?.kpis.kpis.map((d) => ({
    ...d,
    porc_cobertura: Number(d.porc_cobertura),
    porc_frecuencia: Number(d.porc_frecuencia),
    porc_coincidencia: Number(d.porc_coincidencia),
    region_zone: `${d.region} ${d.zone}`,
  }));

  //Filtrar segun la seleccion
  const filteredData = useMemo(() => {
    if (!selected) return charData;
    return charData?.filter(
      (item) => `${item.region} ${item.zone}` === selected
    );
  }, [selected, charData]);

  console.log(filteredData);

  if (loading) return <p>Cargando data...</p>;
  if (error) return <p>Error</p>;

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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
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

                <select
                  value={selected}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setSelected(e.target.value)
                  }
                  className="font-text-mid"
                  style={{
                    background: "#F9FAFB",
                    color: "black",
                    borderRadius: "0.2rem",
                    border: "1px solid #dadcdfff",
                  }}
                >
                  <option>Selecciona</option>
                  {charData?.map((item) => (
                    <option
                      key={`${item.region}-${item.zone}`}
                      value={`${item.region} ${item.zone}`}
                    >
                      {item.region} {item.zone}
                    </option>
                  ))}
                </select>
              </div>

              <div className="font-text-mid" style={{ color: "gray" }}>
                Evolucion de KPIs desde {data?.kpis.grafica[0]?.Fecha} hasta{" "}
                {data?.kpis.grafica[data?.kpis.grafica.length - 1]?.Fecha}
              </div>
            </div>

            <div style={{ height: "250px", marginTop: "2rem" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={250}
                  data={filteredData}
                  margin={{
                    top: 20,
                    right: 0,
                    left: 0,
                    bottom: 5,
                  }}
                  style={{ filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.1))" }}
                  barGap={15}
                >
                  <XAxis dataKey="region_zone" />
                  <YAxis tickFormatter={(value) => `${value}%`} />
                  <Tooltip />
                  <Bar
                    dataKey="porc_coincidencia"
                    fill="#FEF3C6"
                    stroke="#BB4D00"
                    barSize={80}
                    radius={[10, 10, 0, 0]}
                    label={{
                      position: "top",
                      fontSize: 13,
                    }}
                  ></Bar>

                  <Bar
                    dataKey="porc_frecuencia"
                    fill="#DBEAFE"
                    stroke="#1447E6"
                    barSize={80}
                    radius={[10, 10, 0, 0]}
                    label={{ position: "top", fontSize: 13 }}
                  />
                  <Bar
                    dataKey="porc_cobertura"
                    fill="#D0FAE5"
                    stroke="#007A55"
                    barSize={80}
                    radius={[10, 10, 0, 0]}
                    label={{ position: "top", fontSize: 13 }}
                  />
                </BarChart>
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

          <div style={{ marginTop: "1rem" }}>
            <Tarjetas data={data?.kpis.kpis} />
          </div>
        </article>
      </section>
    </article>
  );
};
