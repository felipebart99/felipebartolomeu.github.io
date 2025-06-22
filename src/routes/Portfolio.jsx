import "./Portfolio.css";
import ProjectCard from "../componentes/ProjectCard";

const Portfolio = () => {
  return (
    <div className="wrapper">
      <h1 className="tituloP">Main Projects</h1>
      <ProjectCard
        description="This project is a fictional restaurant e-commerce website. Here you can: Select from various restaurant options, view restaurant information, browse menus with detailed dish information, add items to shopping cart, remove items, complete purchase by filling out delivery forms. I used React, Redux, Styled-components and API integration."
        imageSrc="/img/Efood.png"
        altText="imagem 2"
        link="https://efood-teal-eight.vercel.app/"
      />
      <ProjectCard
        description="  Freelance project completed for engineer André Fruet. This landing
          page was developed using Hostinger's website builder, providing a fast
          and budget-friendly solution. By leveraging the platform’s tools, we
          ensured an efficient delivery while maintaining a professional and
          visually appealing design."
        imageSrc="\img\image.png"
        altText="imagem 2"
        link="https://fruetengenharia.com.br"
        className="destaque"
      />
      <ProjectCard
        description="Freelance work I did to promote a fair in Caruaru that showcases
          various brands of bags, accessories, and shoes."
        imageSrc="\img\fotoFeiraPorti.png"
        altText="imagem 2"
        link="https://feiramodanordeste.com.br"
      />
      <ProjectCard
        description=" Freelance work completed for engineer Alison Brito. The website is a
          landing page created using Hostinger's website builder. Choosing the
          website builder allowed us to deliver a quick and cost-effective
          solution, ensuring a functional and visually appealing website within
          the defined timeframe and budget."
        imageSrc="\img\alisonBritoimg.png"
        altText="imagem 2"
        link="https://alisonbritoeng.com.br"
        className="destaque"
      />
      <ProjectCard
        description="Disney+ clone website with mobile adaptation, hosted on Vercel, using
          Gulp and SASS."
        imageSrc="\img\disneyPlusimg.png"
        altText="imagem 2"
        link="https://clone-disneyplus-wtgy.vercel.app"
      />
      <ProjectCard
        description="I created a contact list with functions to add, remove, edit and
          delete entries. Additionally, the list features type filtering and a
          search bar. I used React Redux in this project."
        imageSrc="\img\listaContatos.png"
        altText="imagem 2"
        link="https://contatos-react-redux.vercel.app/"
        className="destaque"
      />
      <ProjectCard
        description="I developed a website to promote the Cobra Kai series. I used HTML,
          CSS and Gulp to optimize the images."
        imageSrc="\img\Cobrakai.png"
        altText="imagem 2"
        link="https://cobrakai.vercel.app/"
      />
      <ProjectCard
        description="I developed a React Native application to monitor soil humidity. The
          MVP was delivered by collecting data through a serial port and making
          it available on a server. I built the server using NodeJS and Express."
        imageSrc="\img\imgDHTAPP.jpeg"
        altText="imagem 2"
        link="https://www.linkedin.com/posts/felipe-bartolomeu_foi-de-grande-import%C3%A2ncia-participar-do-activity-7266584960759726080-MD5O?utm_source=share&utm_medium=member_desktop"
        className="destaque"
      />
      <ProjectCard
        description="Mario game made with HTML, CSS, and JavaScript. The goal of the game
          is to jump over the objects that appear in front without touching
          them."
        imageSrc="\img\imgJogoMario.jpeg"
        altText="imagem 2"
        link="https://jogo-mario-coral.vercel.app"
      />
      <ProjectCard
        description="Landing page created to promote the work of tattoo artist Danilo,
          built using the website builder tools provided by Hostinger's
          platform."
        imageSrc="\img\niloTattooimg.png"
        altText="imagem 2"
        link="https://nilotattoo.site"
        className="destaque"
      />
      <ProjectCard
        description=" Developed a responsive and SEO-optimized website for a psychologist,
          focused on improving online visibility and facilitating appointment
          scheduling. The project included creating an intuitive interface,
          integrating communication tools (such as WhatsApp), and implementing
          design best practices to ensure a smooth and accessible user
          experience across devices."
        imageSrc="\img\vanuzaSiteimg.png"
        altText="imagem 2"
        link="https://mvanuzapsicologa.com"
      />
      <ProjectCard
        description="Fictional website created to sell an English course, built with
          Bootstrap."
        imageSrc="\img\EnglishCourseimg.png"
        altText="imagem 2"
        link="https://bart-english.vercel.app"
        className="destaque"
      />
      <ProjectCard
        description="Website for a fictional hotel, built with Bootstrap."
        imageSrc="\img\BartHotelimg.png"
        altText="imagem 2"
        link="https://bart-hotel.vercel.app"
      />
      <ProjectCard
        description=" To do List made with React. It has search, filter, sorting, task
          creation, deletion and categorization functionalities."
        imageSrc="/img/imgTodoList.png"
        altText="imagem 2"
        link="https://todo-list-sooty-sigma-85.vercel.app"
        className="destaque"
      />
      <ProjectCard
        description="Landing Page project made with HTML, CSS and JavaScript for GTA V."
        imageSrc="/img/imgGta.png"
        altText="imagem 2"
        link="https://gta-v-mu.vercel.app"
      />
      <ProjectCard
        description="Calculator made with React.JS where for the first time I used Material
          UI Containers to create the calculator structure pattern. This project
          helped me consolidate the logic necessary to deal with mathematical
          operations through the UseState Hook."
        imageSrc="/img/imgCalculator.png"
        altText="imagem 2"
        link="https://calculadora-react-eta-sable.vercel.app"
        className="destaque"
      />
      <ProjectCard
        description="Weather application with OpenWeather API. In addition to temperature,
          it shows data on humidity, wind speed and current state of the sky.
          Project made with HTML, CSS and JS."
        imageSrc="/img/imgApiClima.png"
        altText="imagem 2"
        link="https://api-clima-snowy.vercel.app"
      />
    </div>
  );
};

export default Portfolio;
