import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Mouad_Harimech_without_bg.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./homeStyle.css";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row style={{ display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE MYSELF </span>
              </h1>
              <p className="home-about-body">
                I am <b className="purple">Mouad Harimech</b>, a web development student at ISTICG Berrechid.
                Passionate about creating innovative web solutions, I am skilled in various modern technologies and tools.
                <br />
                <br />I am comfortable with:
                <i>
                  <b className="purple">
                    {" "}
                    HTML, CSS, SASS, JavaScript, TypeScript, PHP, SQL, Python
                  </b>
                </i>
                <br />
                <br />
                My expertise includes
                <i>
                  <b className="purple"> Front-end and Back-end development </b>
                </i>
                , as well as working with modern frameworks and libraries such as:
                <i>
                  <b className="purple"> React.js, React Native, Next.js, Express.js, Laravel, Bootstrap, jQuery ...</b>.
                </i>
                <br />
                <br />
                I am particularly interested in
                <b className="purple"> full-stack web development </b>
                and database management with
                <i>
                  <b className="purple"> MySQL </b>.
                </i>
                I also enjoy working on projects involving
                <b className="purple"> continuous integration and deployment</b>.
              </p>
            </Col>
            <Col md={4} className="myAvtar" style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: "400px", flexWrap: "wrap" }}>
              <Tilt>
                <div className="img-back">
                  <img src={myImg} className="profile-img" alt="avatar" />
                </div>
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple"> connect with me </span> on:
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
                📩 Email: <b className="purple">mouadharimech1@gmail.com</b>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Home2;
