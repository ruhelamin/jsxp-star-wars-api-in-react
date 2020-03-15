import React from "react";
import { ButtonGroup, Button } from 'react-bootstrap';

const Navbar = ({ navitems }) => {

  return (
    <ButtonGroup aria-label="Navigation menu">
      {navitems.map(navitem => (
        <Button variant="secondary" key={navitem.id}>{navitem.name}</Button>
      ))}
    </ButtonGroup>
  );

};

export default Navbar;
