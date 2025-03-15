import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiPostman,
    SiMacos,
    SiWindows,
    SiPhpstorm,
    SiGithub,
    SiGitlab,
    SiVercel,
    SiDocker,
    SiJetbrains,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiMacos />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJetbrains />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGitlab />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVercel />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker />
            </Col>
        </Row>
    );
}

export default Toolstack;
