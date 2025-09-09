import "../../../index.css";

type Response = {
  region: string;
  zone: string;
  porc_cobertura: number;
  porc_frecuencia: number;
  porc_coincidencia: number;
};

type Props = {
  data: Response[];
};

export const Tarjetas = ({ data }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        maxHeight: "270px",
        overflowY: "auto",
      }}
    >
      {data?.map((item) => {
        //Logic for change color into dot
        let color: string = "#fff";
        if (item.porc_cobertura >= 98) {
          color = "#00FF00";
        } else if (item.porc_cobertura >= 50 && item.porc_cobertura < 98) {
          color = "#FFA500";
        } else {
          if (item.porc_cobertura <= 50) {
            color = "#FF000";
          }
        }
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "1rem",
                background: "#F9FAFB",
                gap: "0.1rem",
                padding: "1rem",
              }}
            >
              <div
                className="font-text-mid"
                style={{ color: "black", fontWeight: "500" }}
              >
                {item.region} - {item.zone}
              </div>

              <div
                className="font-text-min"
                style={{ color: "gray", fontWeight: "400" }}
              >
                C: {item.porc_cobertura}% | F: {item.porc_frecuencia}% | Co:{" "}
                {item.porc_coincidencia}%
              </div>
            </div>

            <div
              style={{
                borderRadius: "50%",
                background: color,
                width: "16px",
                height: "16px",
                marginRight: "5%",
              }}
            ></div>
          </div>
        );
      })}
    </div>
  );
};
