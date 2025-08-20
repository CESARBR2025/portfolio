import { Portafolio } from "./pages/portafolio/Portafolio";
import "./index.css";

function App() {
  return (
    <div
      className="body-base"
      style={{
        minHeight: "200vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Portafolio />
    </div>
  );
}

export default App;
