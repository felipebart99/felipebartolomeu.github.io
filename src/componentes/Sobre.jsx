import eu from "/img/fotoFelipeDev.png";
import Typewriter from "../componentes/Typewriter";
import "./Sobre.css";

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
          {" "}
          Sou bacharel em Ciência da Computação (UNIFBV) e possuo certificação
          em Engenharia Front-End pela EBAC – British School of Creative Arts
          and Technology. Tenho experiência no desenvolvimento de Landing Pages
          e projetos full-stack. Sou um profissional colaborativo, criativo,
          analítico e proativo. Desenvolvi sites responsivos e otimizados para
          SEO para diversos clientes, com foco em melhorar a visibilidade online
          e facilitar a comunicação entre profissionais e seus clientes. Além
          disso, criei aplicações que coletam dados de sensores DHT e exibem
          essas informações em um aplicativo móvel, notificando os usuários
          quando os valores ultrapassam os limites desejados.
          <br />
          <br /> ● Desenvolvimento de sites utilizando React.js e Bootstrap
          <br /> ● Conhecimento em metodologias ágeis como Scrum
          <br /> ● Noções básicas de design de interface com Figma
          <br />
          <br /> Sou reconhecido pela minha sociabilidade e tranquilidade, bem
          como pela facilidade em assimilar novos conteúdos. Posso afirmar com
          convicção que minhas 3 principais soft skills são trabalho em equipe,
          pontualidade e princípios éticos.
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
