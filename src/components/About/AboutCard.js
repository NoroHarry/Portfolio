import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple"> Mouad Harimech </span>
               from <span className="purple">Berrechid, Morocco.</span>
              <br />
              I am a web development student at ISTICG Berrechid, passionate about creating
              modern and efficient web solutions.
              <br />
              I have experience in both <span className="purple">front-end and back-end development</span>,
              using technologies such as <span className="purple">React.js, Next.js, PHP, SQL, and TypeScript</span>.
              <br />
              <br />
              Apart from coding, here are some activities I enjoy:
            </p>
            <ul>
              <li className="about-activity">
                <ImPointRight /> Learning new web technologies
              </li>
              <li className="about-activity">
                <ImPointRight /> Working on personal projects
              </li>
              <li className="about-activity">
                <ImPointRight /> Exploring UI/UX design trends
              </li>
            </ul>

            <p style={{ color: "rgb(155 126 172)" }}>
              "Passion and persistence create innovation!"{" "}
            </p>
            <footer className="blockquote-footer">Mouad Harimech</footer>
          </blockquote>
        </Card.Body>
      </Card>
  );
}

export default AboutCard;
