import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="texto">
      <div>
        <p>
          Front-end engineer in training at EBAC – British School of Creative
          Arts and Technology, currently pursuing a degree in Computer Science
          (UNIFBV). <br /> A professional with a collaborative, creative,
          analytical, and proactive profile. <br /> I have experience in
          developing Landing Pages and full-stack projects. <br /> I developed a
          responsive and SEO-optimized website for a psychologist, aimed at
          improving online visibility and facilitating appointment scheduling.
          Additionally, I developed an application that collects data from DHT
          sensors and displays it on an app screen, notifying the user when
          values exceed the desired limits.
          <br /> ● Skills in responsive web development; <br /> ● Knowledge of
          Agile Methodologies;
          <br /> ● Basic Design understanding.
          <br />I am recognized for my sociability and tranquility, as well as
          my ability to assimilate new content with ease. I can say with
          conviction that my top 3 Soft Skills are teamwork, punctuality and
          ethical principles.
        </p>
      </div>
      <div className="txt2">
        <h2>Skills:</h2>
        <p>
          HTML5, CSS3, Javascript, ReactJs, React Native, JQuery, Bootstrap,
          SASS, Gulp, LESS, Webpack Básico, Node, UX, Git, Github, Banco de
          Dados.
        </p>
        <p>Intermediate English</p>
      </div>
      <div>
        <Link to="/portfolio" className="btn btn-success mt-4">
          Projects
        </Link>
      </div>
    </div>
  );
};

export default About;
