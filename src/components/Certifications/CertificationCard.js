import React, { useState } from "react";
import { Card, Button, Image, Modal } from "react-bootstrap";

function CertificationCard({ title, issuer, date, credentialUrl, credentialId, imageName }) {
  const [showFullCertificate, setShowFullCertificate] = useState(false);
  
  // Function to load image from src/Assets/Certifications
  const getImage = (imageName) => {
    if (!imageName) return null;
    try {
      return require(`../../../src/Assets/Certifications/${imageName}`);
    } catch (err) {
      console.error(`Error loading image: ${imageName}`, err);
      return null;
    }
  };
  
  const imageSrc = getImage(imageName);

  return (
    <>
      <Card className="certification-card-view">
        <div className="certification-header">
          {imageSrc && (
            <div className="certification-img-container">
              <Image 
                src={imageSrc} 
                alt={title} 
                className="certification-img"
                thumbnail
                fluid
                onClick={() => setShowFullCertificate(true)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          )}
          <div className="certification-title">
            <Card.Title style={{ color: "#c770f0", fontSize: '1.2rem' }}>
              {title}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {issuer}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Issued: {date}
            </Card.Subtitle>
            {credentialId && credentialId !== 'N/A' && (
              <Card.Text className="text-muted" style={{ fontSize: '0.8rem' }}>
                Credential ID: {credentialId}
              </Card.Text>
            )}
          </div>
        </div>
        <Button
          variant="primary"
          onClick={() => setShowFullCertificate(true)}
          className="mt-2 view-credential-btn"
        >
          View Certificate
        </Button>
      </Card>

      {/* Full Screen Certificate Modal */}
      <Modal 
        show={showFullCertificate} 
        onHide={() => setShowFullCertificate(false)}
        size="xl"
        centered
        className="certificate-modal"
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-0">
          {imageSrc && (
            <Image 
              src={imageSrc} 
              alt={`${title} Certificate`}
              className="certificate-full-img"
              fluid
            />
          )}
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button 
            variant="secondary" 
            onClick={() => setShowFullCertificate(false)}
          >
            Close
          </Button>
          {credentialUrl && credentialUrl !== '#' && (
            <Button 
              variant="primary" 
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Credential Online
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CertificationCard;
