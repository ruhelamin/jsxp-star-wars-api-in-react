import React from "react";
import { Spinner, Card, Button } from 'react-bootstrap';

const Films = ({ items, isLoading }) => {

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
      <h2>Films</h2>
      {items.map(item => (
        <Card bg="dark" border="secondary" className="mt-3 mb-3" key={item.created}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>Directed by: {item.director}</Card.Text>
            <Button variant="light">View details</Button>
          </Card.Body>
        </Card>
      ))}

      {/* TODO: Card columns is better but has a rendering issue that needs fixing. */}
      {/*
      <CardColumns>
        {items.map(item => (
          <Card bg="dark" border="secondary" className="text-center" key={item.created}>
            <Card.Header>{item.title}</Card.Header>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {item.title}
              </Card.Text>
              <Button variant="primary">View detail</Button>
            </Card.Body>
            <Card.Footer className="text-muted">{item.title}</Card.Footer>
          </Card>
        ))}
      </CardColumns>
      */}
    </>
  );

};

export default Films;
