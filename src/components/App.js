import React from 'react';
import logo from '../Star_Wars_Logo_Official.png';
import './App.scss';
import { Container, Row, Col, CardColumns, Card, Button } from 'react-bootstrap';

const App = () => {

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <header className="text-center mt-5 mb-5">
              <a href="/">
                <img src={logo} className="img-fluid" alt="logo" />
              </a>
            </header>          
          </Col>
        </Row>
        <Row>
          <Col>

            <CardColumns>

              <Card bg="dark" border="secondary" className="text-center">
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                  <Card.Title>Special title treatment</Card.Title>
                  <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                  <Card.Text>
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
              
            </CardColumns>



          </Col>
        </Row>
      </Container>      

    </div>
  );

}

export default App;
