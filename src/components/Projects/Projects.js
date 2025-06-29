import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Image imports (replace with your own local images)
import stockApp from "../../Assets/Projects/stockApp.png";
import landingPage from "../../Assets/Projects/landingPage.png";
import roomReservation from "../../Assets/Projects/roomReservation.png";
import travelApp from "../../Assets/Projects/travelApp.png";
import marketplace from "../../Assets/Projects/marketplace.png";
import libraryApp from "../../Assets/Projects/libraryApp.png";
import quizApp from "../../Assets/Projects/quizApp.png";
import realEstateAI from "../../Assets/Projects/realEstateAI.png";

function Projects() {
  return (
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works</strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={stockApp}
                  isBlog={false}
                  title="Stock Management System"
                  description="A local application to manage stock operations including lots, sub-lots, articles, and suppliers. Offers admin/user roles, detailed calculations, and advanced invoicing features. Optimized for offline use with an intuitive UI."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={landingPage}
                  isBlog={false}
                  title="Landing Page - Interior Installations"
                  description="A responsive landing page for a company offering installations of kitchens, dressing rooms, libraries, office furniture, and more. Built with clean UI/UX for effective promotion and client engagement."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={roomReservation}
                  isBlog={false}
                  title="Room Reservation System"
                  description="An advanced room booking system with authentication using QR codes and RFID. Includes user/admin dashboards, payment integration, and smart invoicing tailored to room usage and services."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={travelApp}
                  isBlog={false}
                  title="Travel Agency Booking App"
                  description="Complete travel booking platform for agencies, featuring package creation, tour planning, customer booking, and online payments. Includes itinerary management and trip customization for users."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={marketplace}
                  isBlog={false}
                  title="Multi-Vendor Marketplace"
                  description="A marketplace application supporting multiple vendors. Vendors can manage products, orders, and customers independently. Features include shopping cart, checkout, payment integration, and admin oversight."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={libraryApp}
                  isBlog={false}
                  title="Library Purchase Management"
                  description="An offline app for managing purchases in a library. Supports barcode scanning, price calculations, supplier management, and invoicing. Designed for efficiency and accuracy in procurement."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={quizApp}
                  isBlog={false}
                  title="Quiz Management System"
                  description="A quiz application where admins can manage questions, view user responses, and allow interactive Q&A experiences. Ideal for exams, surveys, or feedback systems."
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                  imgPath={realEstateAI}
                  isBlog={false}
                  title="Real Estate AI Platform"
                  description="A complete platform for renting and selling properties (houses, apartments, riads, lands, etc.) with 3 roles: user, promoter, and admin. Includes AI-based suggestions for better UX and features like messaging, complaint handling, and property management."
              />
            </Col>

          </Row>
        </Container>
      </Container>
  );
}

export default Projects;
