import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="tituloLogo">Felipe Bartolomeu</h1>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
