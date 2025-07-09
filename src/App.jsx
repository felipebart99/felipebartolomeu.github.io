import "./App.css";
import { Outlet } from "react-router-dom";
import NavBar from "./componentes/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Lista de todas as imagens de fundo usadas nas rotas
    const backgroundImages = [`/img/spaceStars2.jpg`, `/img/spaceStars.webp`];

    // Pré-carrega cada imagem
    backgroundImages.forEach((imageUrl) => {
      const img = new Image(); // Cria um novo elemento <img>
      img.src = imageUrl; // Define o src para forçar o carregamento
    });
  }, []); // Executa apenas uma vez no carregamento inicial
  return (
    <div className="app">
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
