import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          My academic journey and achievements
        </p>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={6} className="education-card">
            <EducationCard
              title="Bachelor's Degree in Electronics and Communication"
              institution="M.Kumarasamy College of Engineering, Karur"
              duration="2022 - 2026 (Expected)"
              description="Pursuing my undergraduate degree with a focus on Electronics and Communication Engineering."
            />
          </Col>

          <Col md={6} className="education-card">
            <EducationCard
              title="Higher Secondary School Certificate"
              institution="Saraswathi Matric Higher Secondary School, Ayilpatty"
              duration="2020 - 2022"
              description="• Percentage: 88.8%
• Best Outgoing Student Award (2021-2022)"
            />
          </Col>

          <Col md={6} className="education-card">
            <EducationCard
              title="Secondary School Leaving Certificate"
              institution="Saraswathi Matric Higher Secondary School, Ayilpatty"
              duration="2019 - 2020"
              description="• Percentage: 98%
• Academic Excellence Award (2019-2020)"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
