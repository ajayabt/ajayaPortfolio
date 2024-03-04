import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';




const Home = () => {
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
         <Container className="text-center">
        <Row className="mb-5">
          <Col>
            <h1>Welcome to My Portfolio</h1>
            <p>This is my professional space to showcase my skills and projects.</p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={12}>
            <img src="path-to-your-headshot.jpg" alt="Headshot" className="img-thumbnail mb-3" />
            <h2>Ajaya</h2>
            <p>This is my brand statement</p>
          </Col>
        </Row>
      </Container>
      </Container>
    );
  };

  export default Home;