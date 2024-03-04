import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Row, Col, Button } from 'react-bootstrap'; // Make sure to import these components

const Project = ({ project }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer' }}>
      <Card className="mb-3" style={{ maxWidth: '540px', height: '200px' }}>
        <Row className="g-0">
          <Col md={4}>
            <Card.Img variant="top" src={project.image} className="img-fluid rounded-start" alt={project.title} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                <Button variant="primary" href={project.deployedLink} className="me-2">Deployed Version</Button>
                <Button variant="secondary" href={project.githubLink}>GitHub Repo</Button>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Project;
