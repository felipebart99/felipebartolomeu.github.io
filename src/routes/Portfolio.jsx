import React from 'react'
import './Portfolio.css'

const Portfolio = () => {





  return (
    <div className="wrapper">
  
    <h1 className='tituloP'>Principais Projetos</h1>
      <div className='estilo1'>
        <img src="https://servidor-estaticos-tau-sooty.vercel.app/imgTodoList.png" alt="imagem 1" className='imgP'/>
        <p>To do List made with React. It has search, filter, sorting, task creation, deletion and categorization functionalities</p>
      </div>
      <div className='estilo1'>
        <p>Landing Page project made with HTML, CSS and JavaScript for GTA V.</p>
        <img src="https://servidor-estaticos-tau-sooty.vercel.app/imgGta.png" alt="imagem 2" className='imgP'/>
      </div>
      <div className='estilo1'>
        <img src="https://servidor-estaticos-tau-sooty.vercel.app/imgCalculator.png" alt="imagem 3" className='imgP' />
        <p> Calculator made with React.JS where for the first time I used Material UI Containers to create the calculator structure pattern. This project helped me consolidate the logic necessary to deal with mathematical operations through the UseState Hook.</p>
      </div>
      <div className='estilo1'>
        <p>Weather application with OpenWeather API. In addition to temperature, it shows data on humidity, wind speed and current state of the sky.
Project made with HTML, CSS and JS.</p>
        <img src="https://servidor-estaticos-tau-sooty.vercel.app/imgApiClima.png" alt="imagem 4" className='imgP'/>
      </div>

    
    </div>
  )
}

export default Portfolio
