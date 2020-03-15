import React, { useState, useEffect } from "react";
import logo from '../Star_Wars_Logo_Official.png';
import './App.scss';
import axios from "axios";
import Navbar from "./Navbar";
import Films from "./pages/Films";
import People from "./pages/People";
import Planets from "./pages/Planets";
import Species from "./pages/Species";
import Starships from "./pages/Starships";
import Vehicles from "./pages/Vehicles";
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const App = () => {

  const [isLoading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  // TODO: Fetch available resource names dynamically from the API Root resource.
  const navItems = [
    { id: 1, name: 'Films'},
    { id: 2, name: 'People'},
    { id: 3, name: 'Planets'},
    { id: 4, name: 'Species'},
    { id: 5, name: 'Starships'},
    { id: 6, name: 'Vehicles'}
  ];

  const fetchItems = async (resource = 'films') => {
    setLoading(true);
    const response = await axios.get(`https://swapi.co/api/${resource}`);
    // console.log("response", response);
    // console.log("response.data.results", response.data.results);
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
            <Router>
              <Navbar navItems={navItems} fetchItems={fetchItems} />
              <div className="mt-4">
                <Switch>
                  <Route exact path="/">
                    <Redirect to="/films" />
                  </Route>
                  <Route path="/films" render={() => <Films items={items} isLoading={isLoading} />} />
                  <Route path="/people" render={() => <People items={items} isLoading={isLoading} />} />
                  <Route path="/planets" render={() => <Planets items={items} isLoading={isLoading} />} />
                  <Route path="/species" render={() => <Species items={items} isLoading={isLoading} />} />
                  <Route path="/starships" render={() => <Starships items={items} isLoading={isLoading} />} />
                  <Route path="/vehicles" render={() => <Vehicles items={items} isLoading={isLoading} />} />
                </Switch>
              </div>
            </Router>
          </Col>
        </Row>
        <Row>
          <Col>
            <footer className="text-center mt-5 mb-5">
              This is a simple React app consuming the <a href="https://swapi.co" target="_blank" rel="noopener noreferrer">Star Wars API</a> and displaying data. The Star Wars logo is from the official website <a href="https://www.starwars.com" target="_blank" rel="noopener noreferrer">www.starwars.com</a>.
            </footer>          
          </Col>
        </Row>
      </Container>      
    </div>
  );

}

export default App;
