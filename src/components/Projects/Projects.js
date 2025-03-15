import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Exciting projects are on the way! Stay tuned for amazing updates.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={8} className="text-center">
              <h2 className="purple">🚀 Coming Soon! 🚀</h2>
              <p style={{ fontSize: "1.2em", color: "#ffffff" }}>
                I'm working on some innovative projects that will be showcased here soon.
                Stay curious and keep building! 💡✨
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
