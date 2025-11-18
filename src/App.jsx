import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import WhatsAppButton from "./componentes/WhatsAppButton";
import Footer from "./componentes/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  useEffect(() => {
    const backgroundImages = [`/img/spaceStars2.jpg`, `/img/spaceStars.webp`];

    // Pré-carrega cada imagem
    backgroundImages.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);
  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
        <WhatsAppButton />
        <Footer />
      </main>
    </div>
  );
}

export default App;
