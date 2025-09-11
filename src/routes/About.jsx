import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="wrapper">
      <div className="texto">
        <div>
          <p>
            Bachelor's degree in Computer Science (UNIFBV) and certified
            Front-End Engineer from EBAC - British School of Creative Arts and
            Technology. I have experience in developing Landing Pages and
            full-stack projects. I am a collaborative, creative, analytical, and
            proactive professional. I have developed responsive, SEO-optimized
            websites for various clients, focusing on improving online
            visibility and facilitating communication between professionals and
            their clients. Additionally, I have built applications that collect
            data from DHT sensors and display it on a mobile app, notifying
            users when values exceed the desired limits.
            <br /> ● Development of websites using React.js and Bootstrap
            <br /> ● Knowledge of Agile methodologies such as Scrum
            <br /> ● Basic understanding of UI design with Figma
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
            SASS, Gulp, LESS, Webpack Basic, Node, UX, Git, Github, DataBases.
          </p>
          <p>Advanced English</p>
        </div>
        <div>
          <Link to="/portfolio" className="btn btn-success mt-4">
            Projects
          </Link>
        </div>
      </div>
      <div
        className="insta"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", // 🔹 centraliza no eixo horizontal
          marginTop: "0px",
          flexDirection: "column",
        }}
      >
        <h2 style={{ marginTop: "40px" }}>Instagram</h2>
        <h3 style={{ marginBottom: "40px" }}>
          <a
            href="https://www.instagram.com/felipebart.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            @felipebart.dev
          </a>
        </h3>
        <iframe
          src="//lightwidget.com/widgets/6fa3eceebeab5119bbbae363b5c7b23a.html"
          className="lightwidget-widget"
          style={{
            width: "900px",
            maxWidth: "900px", // 🔹 limita largura em telas grandes
            height: "1000px",
            border: 0,
            overflow: "hidden",
          }}
          title="Instagram Feed"
        ></iframe>
      </div>
    </div>
  );
};

export default About;
