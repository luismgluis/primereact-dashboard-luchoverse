import "./App.scss";

import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import Home1 from "./pages/home1/Home1";

function App() {
  return (
    <PrimeReactProvider>
      <Home1 />
    </PrimeReactProvider>
  );
}

export default App;
