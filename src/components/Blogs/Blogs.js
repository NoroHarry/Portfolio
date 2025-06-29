import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Blogs() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Blogs</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Exciting blogs are on the way! Stay tuned for amazing content.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col md={8} className="text-center">
                        <h2 className="purple">📝 Coming Soon! 📝</h2>
                        <p style={{ fontSize: "1.2em", color: "#ffffff" }}>
                            I'm working on some insightful blogs that will be published here soon.
                            Stay curious and keep reading! 📚✨
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Blogs;
