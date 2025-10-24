import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Portafolio } from "./pages/portafolio/Portafolio";
import { Coverage } from "./components/dashboards/kpis/coverage";
import "./index.css";

function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <Routes>
        <Route path="/" element={<Portafolio />} />
        <Route path="/coverage" element={<Coverage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
