import React, { useState, useEffect } from "react";
import logo from '../Star_Wars_Logo_Official.png';
import './App.scss';
import axios from "axios";
import Navbar from "./Navbar";
import Items from "./Items";
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {

  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const navitems = [
    { id: 1, name: 'Films'},
    { id: 2, name: 'People'},
    { id: 3, name: 'Planets'},
    { id: 4, name: 'Species'},
    { id: 5, name: 'Starships'},
    { id: 6, name: 'Vehicles'}
  ];
  // console.log("navitems", navitems);

  const fetchItems = async () => {
    setLoading(true);
    // const response = await axios.get(`https://swapi.co/api/${endpoint}`);
    const response = await axios.get(`https://swapi.co/api/films`);
    console.log("response", response);
    console.log("response.data.results", response.data.results);
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
          <Col className="text-center mb-5">
            <Navbar navitems={navitems} />
          </Col>
        </Row>
        <Row>
          <Items items={items} isLoading={isLoading} />
        </Row>
        <Row>
          <Col>
            <footer className="text-center mt-5 mb-5">
              This is a simple React app consuming the <a href="https://swapi.co" target="_blank">Star Wars API</a> and displaying data. Star Wars logo is from the official website <a href="https://www.starwars.com" target="_blank">www.starwars.com</a>.
            </footer>          
          </Col>
        </Row>
      </Container>      
    </div>
  );

}

export default App;
