import React from "react";
import { Card } from "react-bootstrap";

function EducationCard(props) {
  return (
    <Card className="education-card-view">
      <Card.Body>
        <Card.Title style={{ color: "#c770f0", fontSize: '1.2rem' }}>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.institution}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          {props.duration}
        </Card.Subtitle>
        <Card.Text style={{ textAlign: "left", whiteSpace: 'pre-line' }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default EducationCard;
