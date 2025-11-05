import "./Home.css";
import Typewriter from "../componentes/Typewriter";
import Portfolio from "./Portfolio";
import Sobre from "../componentes/Sobre";
import Comum from "../componentes/Comum";

const Home = () => {
  return (
    <div className="home-page">
      <div className="container-fluid mx-auto d-flex  align-items-md-center justify-content-center min-vh-100">
        <div className="d-flex align-items-center mt-3 mb-3">
          <div className="d-flex flex-column gap-icons  text-center">
            <h2 className="fw-bold responsive-heading pb-md-5">
              <Typewriter text="Criação de sites Profissionais" speed={130} />
            </h2>
            <p className="fw-bold" style={{ fontSize: "30px" }}>
              Seu negócio merece um site profissional!! <br />
              Já pensou em ter um site moderno, atraente e barato? <br />
              Entre em contato e faça seu orçamento gratuito.
            </p>
            <div
              className="d-flex flex-column align-items-center pt-md-5 "
              style={{ gap: "30px" }}
            >
              <a
                href="https://api.whatsapp.com/send?phone=5581998602739"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
      </div>
      <Comum />
      <Sobre />
      <Portfolio />
    </div>
  );
};

export default Home;
