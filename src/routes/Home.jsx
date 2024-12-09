import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5 pt-5">
      <div className="row align-items-center ms-5">
        <div className="d-flex flex-column gap-5 col-md-7 text-center text-md-start ">
          <h2 className="fw-bold" style={{ fontSize: "60px" }}>
            Hello, world!!
          </h2>
          <p className="fw-bold" style={{ fontSize: "30px" }}>
            I am a <br />
            Web Developer.
            <br />
            Welcome to my portfolio WebSite
          </p>
          <div className="d-flex flex-column" style={{ gap: "30px" }}>
            <div>
              <Link to="/about" className="btn btn-success">
                More about me
              </Link>
            </div>
            <div style={{ gap: "30px" }}>
              <a
                href="https://github.com/felipebart99"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-bartolomeu-8215b425a"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5581998602739"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5 text-center">
          <img
            src="\img\minhafoto.jpeg"
            alt="foto de perfil"
            className="rounded-circle img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
