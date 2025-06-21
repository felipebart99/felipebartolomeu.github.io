import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="wrapper">
      <h1 className="tituloP">Main Projects</h1>
      <div className="estilo1">
        <a
          href="https://fruetengenharia.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="\img\image.png" alt="imagem 1" className="imgP" />
        </a>
        <p>
          Freelance project completed for engineer André Fruet. This landing
          page was developed using Hostinger's website builder, providing a fast
          and budget-friendly solution. By leveraging the platform’s tools, we
          ensured an efficient delivery while maintaining a professional and
          visually appealing design.
        </p>
      </div>
      <div className="estilo1 destaque">
        <p>
          Freelance work I did to promote a fair in Caruaru that showcases
          various brands of bags, accessories, and shoes.
        </p>
        <a
          href="https://feiramodanordeste.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="\img\fotoFeiraPorti.png" alt="imagem 2" className="imgP" />
        </a>
      </div>
      <div className="estilo1">
        <a
          href="https://alisonbritoeng.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="\img\alisonBritoimg.png" alt="imagem 1" className="imgP" />
        </a>
        <p>
          Freelance work completed for engineer Alison Brito. The website is a
          landing page created using Hostinger's website builder. Choosing the
          website builder allowed us to deliver a quick and cost-effective
          solution, ensuring a functional and visually appealing website within
          the defined timeframe and budget
        </p>
      </div>

      <div className="estilo1 destaque">
        <p>
          Disney+ clone website with mobile adaptation, hosted on Vercel, using
          Gulp and SASS.
        </p>
        <a
          href="https://clone-disneyplus-wtgy.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="\img\disneyPlusimg.png" alt="imagem 2" className="imgP" />
        </a>
      </div>
      <div className="estilo1">
        <a
          href="https://www.linkedin.com/posts/felipe-bartolomeu_foi-de-grande-import%C3%A2ncia-participar-do-activity-7266584960759726080-MD5O?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="\img\imgDHTAPP.jpeg" alt="imagem 1" className="imgP" />
        </a>
        <p>
          I developed a React Native application to monitor soil humidity. The
          MVP was delivered by collecting data through a serial port and making
          it available on a server. I built the server using NodeJS and Express.
        </p>
      </div>
      <div className="estilo1 destaque">
        <p>
          Mario game made with HTML, CSS, and JavaScript. The goal of the game
          is to jump over the objects that appear in front without touching
          them..
        </p>
        <a
          href="https://jogo-mario-coral.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="\img\imgJogoMario.jpeg" alt="imagem 2" className="imgP" />
        </a>
      </div>
      <div className="estilo1">
        <a
          href="https://nilotattoo.site"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="\img\niloTattooimg.png" alt="imagem 1" className="imgP" />
        </a>
        <p>
          Landing page created to promote the work of tattoo artist Danilo,
          built using the website builder tools provided by Hostinger's
          platform.
        </p>
      </div>
      <div className="estilo1 destaque">
        <p>
          Developed a responsive and SEO-optimized website for a psychologist,
          focused on improving online visibility and facilitating appointment
          scheduling. The project included creating an intuitive interface,
          integrating communication tools (such as WhatsApp), and implementing
          design best practices to ensure a smooth and accessible user
          experience across devices.
        </p>
        <a
          href="https://mvanuzapsicologa.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="\img\vanuzaSiteimg.png" alt="imagem 2" className="imgP" />
        </a>
      </div>
      <div className="estilo1">
        <a
          href="https://bart-english.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="\img\EnglishCourseimg.png"
            alt="imagem 1"
            className="imgP"
          />
        </a>
        <p>
          Fictional website created to sell an English course, built with
          Bootstrap.
        </p>
      </div>
      <div className="estilo1 destaque">
        <p>Website for a fictional hotel, built with Bootstrap.</p>
        <a
          href="https://bart-hotel.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="\img\BartHotelimg.png" alt="imagem 2" className="imgP" />
        </a>
      </div>
      <div className="estilo1">
        <a
          href="https://todo-list-sooty-sigma-85.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/imgTodoList.png" alt="imagem 1" className="imgP" />
        </a>
        <p>
          To do List made with React. It has search, filter, sorting, task
          creation, deletion and categorization functionalities
        </p>
      </div>
      <div className="estilo1 destaque">
        <p>
          Landing Page project made with HTML, CSS and JavaScript for GTA V.
        </p>
        <a
          href="https://gta-v-mu.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/imgGta.png" alt="imagem 2" className="imgP" />
        </a>
      </div>
      <div className="estilo1">
        <a
          href="https://calculadora-react-eta-sable.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
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
      <div className="estilo1 destaque">
        <p>
          Weather application with OpenWeather API. In addition to temperature,
          it shows data on humidity, wind speed and current state of the sky.
          Project made with HTML, CSS and JS.
        </p>
        <a
          href="https://api-clima-snowy.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/img/imgApiClima.png" alt="imagem 4" className="imgP" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
