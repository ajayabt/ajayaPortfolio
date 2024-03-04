import React from 'react';
import Project from './Project';
import projects from '../data/projects.json';
import { Container, Row, Col } from 'react-bootstrap';

const ProjectGallery = () => {
    const [topPadding, setTopPadding] = React.useState('70px'); 
  
    React.useEffect(() => {
      const updatePadding = () => {
        const navbarHeight = document.querySelector('.navbar').offsetHeight; 
        setTopPadding(`${navbarHeight}px`);
      };
  
      updatePadding();
      window.addEventListener('resize', updatePadding);
  
      
      return () => window.removeEventListener('resize', updatePadding);
    }, []);
  
    return (
      <Container style={{ paddingTop: topPadding }}>
         <Row>       
            {projects.map(project => (
          <Col md={4} key={project.id} className="mb-4">
            <Project project={project} />
          </Col>
        ))}
        </Row>
      </Container>
    );
  };
  

export default ProjectGallery;