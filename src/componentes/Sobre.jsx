import eu from "/img/minhafotoNova.webp";
import Typewriter from "../componentes/Typewriter";
import "./Sobre.css";
//import { whatsAppLink } from "./WhatsApp/WhatsAppLink";

const Sobre = () => {
  return (
    <section id="sobre">
      <img src={eu} />
      <div className="principal">
        <h2>Sobre mim</h2>
        <h3>
          <Typewriter text="Felipe Bartolomeu" speed={200} startOnView={true} />
        </h3>

        <p>
          Bachelor's degree in Computer Science (UNIFBV) and certified Front-End
          Engineer from EBAC - British School of Creative Arts and Technology. I
          have experience in developing Landing Pages and full-stack projects. I
          am a collaborative, creative, analytical, and proactive professional.
          I have developed responsive, SEO-optimized websites for various
          clients, focusing on improving online visibility and facilitating
          communication between professionals and their clients. Additionally, I
          have built applications that collect data from DHT sensors and display
          it on a mobile app, notifying users when values exceed the desired
          limits.
          <br /> ● Development of websites using React.js and Bootstrap
          <br /> ● Knowledge of Agile methodologies such as Scrum
          <br /> ● Basic understanding of UI design with Figma
          <br />I am recognized for my sociability and tranquility, as well as
          my ability to assimilate new content with ease. I can say with
          conviction that my top 3 Soft Skills are teamwork, punctuality and
          ethical principles.
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=5581998602739"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Entrar em Contato
        </a>
      </div>
    </section>
  );
};
export default Sobre;
