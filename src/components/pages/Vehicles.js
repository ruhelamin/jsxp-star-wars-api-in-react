import React from "react";
import { Spinner, Card, Button } from 'react-bootstrap';

const Vehicles = ({ items, isLoading }) => {

  if (isLoading) {
    return (
      <>
        <br />
        <Spinner animation="border" role="status" variant="secondary">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </>
    );
  }

  return (
    <>
      <h2>Vehicles</h2>
      {items.map(item => (
        <Card bg="dark" border="secondary" className="mt-3 mb-3" key={item.created}>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Manufaturer: {item.manufacturer}</Card.Text>
            <Button variant="light">View details</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );

};

export default Vehicles;
