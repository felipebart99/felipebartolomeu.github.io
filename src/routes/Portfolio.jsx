import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="wrapper">
      <h1 className="tituloP">Principais Projetos</h1>
      <div className="estilo1">
        <p>Website for a fictional hotel, built with Bootstrap.</p>
        <a href="https://bart-hotel.vercel.app">
          <img src="\img\BartHotelimg.png" alt="imagem 2" className="imgP" />
        </a>
      </div>
      <div className="estilo1">
        <a href="https://todo-list-sooty-sigma-85.vercel.app">
          <img src="/img/imgTodoList.png" alt="imagem 1" className="imgP" />
        </a>
        <p>
          To do List made with React. It has search, filter, sorting, task
          creation, deletion and categorization functionalities
        </p>
      </div>
      <div className="estilo1">
        <p>
          Landing Page project made with HTML, CSS and JavaScript for GTA V.
        </p>
        <a href="https://gta-v-mu.vercel.app">
          <img src="/img/imgGta.png" alt="imagem 2" className="imgP" />
        </a>
      </div>
      <div className="estilo1">
        <a href="https://calculadora-react-eta-sable.vercel.app">
          <img src="/img/imgCalculator.png" alt="imagem 3" className="imgP" />
        </a>
        <p>
          {" "}
          Calculator made with React.JS where for the first time I used Material
          UI Containers to create the calculator structure pattern. This project
          helped me consolidate the logic necessary to deal with mathematical
          operations through the UseState Hook.
        </p>
      </div>
      <div className="estilo1">
        <p>
          Weather application with OpenWeather API. In addition to temperature,
          it shows data on humidity, wind speed and current state of the sky.
          Project made with HTML, CSS and JS.
        </p>
        <a href="https://api-clima-snowy.vercel.app">
          <img src="/img/imgApiClima.png" alt="imagem 4" className="imgP" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
