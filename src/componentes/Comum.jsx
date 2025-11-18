import { useEffect } from "react";
import responsivo from "/img/site_responsivo.png";
import "./Comum.css";

const Comum = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".animar");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section id="comum">
      <div className="principal">
        <ul>
          <li className="animar">Visibilidade 24h</li>
          <li className="animar">Credibilidade</li>
          <li className="animar">Atraia Novos Clientes</li>
          <li className="animar">Contato Direto</li>
          <li className="animar">SEO Básico Incluso</li>
          <li className="animar">Entrega Rápida</li>
        </ul>
      </div>
      <img src={responsivo} />
    </section>
  );
};

export default Comum;
