import { whatsAppLink } from "../componentes/WhatsAppLink";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-dark py-4 mt-0">
      <div className="container text-center text-white">
        <h5 className="fw-bold mb-2">Felipe Bartolomeu</h5>
        <p className="mb-2">Desenvolvedor</p>

        <p className="mb-0">
          <a
            href="mailto:felipebart1999@gmail.com"
            className="text-white text-decoration-none"
          >
            felipebart1999@gmail.com
          </a>
          <br />
          <a
            href={whatsAppLink}
            target="_blank"
            className="text-white"
            rel="noreferrer"
          >
            +5581998602739
          </a>
        </p>

        <div className="social-icons mb-3 mt-3 text-white">
          <a
            href="https://www.instagram.com/felipebart_"
            target="_blank"
            className="text-white mx-2"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        <p className="small mb-0">&copy; 2025 Todos os direitos reservados.</p>
        <p className="small  mb-0">
          Desenvolvido por
          <a
            href="https://www.instagram.com/felipebart.dev"
            className=" text-decoration-none text-white"
          >
            @Felipebart.Dev
          </a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
