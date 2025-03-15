import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LAISSEZ-MOI <span className="purple"> ME PRÉSENTER </span>
              </h1>
              <p className="home-about-body">
                Je suis <b className="purple">Mouad Harimech</b>, étudiant en développement web à ISTICG Berrechid.
                Passionné par la création de solutions web innovantes, je maîtrise plusieurs technologies et outils modernes.
                <br />
                <br />Je suis à l'aise avec :
                <i>
                  <b className="purple">
                    {" "}
                    HTML, CSS, SASS, JavaScript, TypeScript, PHP, SQL, Python
                  </b>
                </i>
                <br />
                <br />
                Mon expertise couvre le développement
                <i>
                  <b className="purple"> Front-end et Back-end </b>
                </i>
                , ainsi que l'utilisation de frameworks et bibliothèques modernes comme :
                <i>
                  <b className="purple"> React.js, React Native,Next.js, Express.js, Laravel, Bootstrap, jQuery ...</b>.
                </i>
                <br />
                <br />
                Je suis particulièrement intéressé par le
                <b className="purple"> développement web full-stack </b>
                et la gestion des bases de données avec
                <i>
                  <b className="purple"> MySQL </b>.
                </i>
                J'aime aussi travailler sur des projets impliquant
                <b className="purple"> l'intégration et le déploiement continu</b>.
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>RETROUVEZ-MOI</h1>
              <p>
                N'hésitez pas à <span className="purple"> me contacter </span> sur :
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/NoroHarry"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://twitter.com/mouadharimech"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/mouad-harimech-8114692aa/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.instagram.com/its_noro_harry_01/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
              <p>
                📩 Email : <b className="purple">mouadharimech1@gmail.com</b>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home2;
