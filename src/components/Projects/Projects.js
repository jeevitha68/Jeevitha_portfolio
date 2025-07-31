import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import accidentPrevention from "../../Assets/Projects/Accident prevention at hair pin bends.jpg";
import borewellRescue from "../../Assets/Projects/borewell project.jpg";
import signUp from "../../Assets/Projects/Sign-Up.png";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "30px" }}>
          Here are some of the projects I've worked on.
        </p>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* Project 1 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={borewellRescue}
              isBlog={false}
              title="Smart Borewell Rescue Device"
              description="Developed a remotely operated system with a robotic arm, camera, and sensors for safely rescuing individuals from borewells and confined spaces. The device features real-time video monitoring and precise control mechanisms."
              ghLink="#"
            />
          </Col>

          {/* Project 2 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={accidentPrevention}
              isBlog={false}
              title="Accident Prevention at Hairpin Bends"
              description="Developed an IoT-based Accident Prevention System using IR sensors and LED alerts to warn drivers at hairpin bends, operating without internet to enhance safety on hilly roads. The system significantly reduces accident risks in challenging terrains."
              ghLink="#"
            />
          </Col>

          {/* Project 3 */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={signUp}
              isBlog={false}
              title="User Authentication System"
              description="Created a secure sign-up and login system with form validation, password hashing, and session management. The system includes features like email verification and password recovery, built with modern web technologies for optimal security and user experience."
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
