import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiPhp,
    DiMysql,
} from "react-icons/di";
import {
    SiTypescript,
    SiNextdotjs,
    SiExpress,
    SiSass,
    SiJquery,
    SiLaravel,
} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiExpress />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPhp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLaravel />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSass />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJquery />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
        </Row>
    );
}

export default Techstack;
