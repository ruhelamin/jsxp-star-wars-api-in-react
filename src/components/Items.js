import React from "react";
import { CardColumns, Card, Button } from 'react-bootstrap';

const Items = ({ items, isLoading }) => {

  if (isLoading) {
    return <p>Loading items...</p>;
  }

  return (
    <CardColumns>

      {items.map(item => (

      <Card bg="dark" border="secondary" className="text-center" key={item.episode_id}>
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
  );

};

export default Items;
