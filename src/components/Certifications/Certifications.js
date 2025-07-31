import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import CertificationCard from "./CertificationCard";
import "../../style/Certifications.css";

// Certifications data with verified image names
const allCertifications = [
  {
    id: 1,
    title: "NPTL Internet Of Things",
    issuer: "NPTEL",
    date: "2024",
    credentialId: "IOT12345",
    credentialUrl: "#",
    imageName: "NPTL  Internet Of Things.jpg"
  },
  {
    id: 2,
    title: "Networking Devices and Initial Configuration",
    issuer: "Cisco",
    date: "2024",
    credentialId: "NET45678",
    credentialUrl: "#",
    imageName: "Networking Devices and Initial Configuration.jpg"
  },
  {
    id: 3,
    title: "Python for Data Science",
    issuer: "IBM",
    date: "2024",
    credentialId: "PDS90123",
    credentialUrl: "#",
    imageName: "Python for Data Science.jpg"
  },
  {
    id: 4,
    title: "Switching, Routing and Wireless Essentials",
    issuer: "Cisco",
    date: "2024",
    credentialId: "SRWE34567",
    credentialUrl: "#",
    imageName: "Switching,Routing and Wireless Essential.jpg"
  },
  {
    id: 5,
    title: "VLSI Design and Verification",
    issuer: "NPTEL",
    date: "2024",
    credentialId: "VLSI78901",
    credentialUrl: "#",
    imageName: "VLSI-Design and Verification.jpg"
  }
];

class Certifications extends Component {
  render() {
    const visibleCertifications = allCertifications;

    return (
      <Container fluid className="certifications-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My <strong className="purple">Certifications</strong>
          </h1>
          <p style={{ color: "white", textAlign: "center" }}>
            Professional certifications and courses I've completed
          </p>



          <Row style={{ justifyContent: "center", padding: "10px" }}>
            {visibleCertifications.map((cert) => (
              <Col md={4} className="certification-card-col" key={cert.id}>
                <CertificationCard
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  credentialId={cert.credentialId}
                  credentialUrl={cert.credentialUrl}
                  imageName={cert.imageName}
                />
              </Col>
            ))}
          </Row>


        </Container>
      </Container>
    );
  }
}

export default Certifications;
