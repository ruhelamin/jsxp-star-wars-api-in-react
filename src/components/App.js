import React, { useState, useEffect } from "react";
import logo from '../Star_Wars_Logo_Official.png';
import './App.scss';
import axios from "axios";
import Items from "./Items";
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const fetchItems = async () => {
    setLoading(true);
    // const response = await axios.get(`https://swapi.co/api/${endpoint}`);
    const response = await axios.get(`https://swapi.co/api/films`);
    console.log("response", response);
    setItems(response.data.results);
    setLoading(false);
  }

  useEffect(() => {
    fetchItems();
  }, []);
  
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
          <Items items={items} isLoading={isLoading} />
        </Row>
      </Container>      
    </div>
  );

}

export default App;
