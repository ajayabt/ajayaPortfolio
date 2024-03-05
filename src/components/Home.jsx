import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../StyleFile/fonts.css'



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
              <Row className="justify-content-center">
                <div>
                <Col md={12}>
                <h1>Ajaya Bhogal-Todd</h1>
                <p>Front end Development and Instructional Design</p>
                <p>Building Better Web Experiences through Code and Creativity. Transforming Ideas into Engaging Digital Solutions</p>
              </Col>  
                <Col>
                  <img src="/headshotErnest.png" alt="Headshot" className="img-thumbnail mb-3" style={{ maxWidth: '300px', height: 'auto' }}/>  
                </Col>
              </div>
        </Row>
              
        </Row>

      </Container>
      </Container>
    );
  };

  export default Home;