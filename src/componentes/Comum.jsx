import responsivo from "/img/site_responsivo.png";
import "./Comum.css";

const Sobre = () => {
  return (
    <section id="sobre">
      <div className="principal">
        <p>
          <ul>
            <li>Visibilidade 24h</li>
            <li>Credibilidade</li>
            <li>Atraia Novos Clientes</li>
            <li>Contato Direto</li>
            <li>SEO Básico Incluso</li>
            <li>Entrega Rápida</li>
          </ul>
        </p>
      </div>
      <img src={responsivo} />
    </section>
  );
};
export default Sobre;
