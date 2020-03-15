import React from "react";
import { ButtonGroup, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navbar = ({ navItems, fetchItems }) => {

  return (
    <ButtonGroup aria-label="Navigation menu">
      {navItems.map((navItem) => {
        const navItemLowercase = navItem.name.toLowerCase();
        return (
          <Link to={`/${navItemLowercase}`} key={navItem.id}><Button variant="secondary" onClick={() => fetchItems(navItemLowercase)}>{navItem.name}</Button></Link>
        );
      })}
    </ButtonGroup>
  );

};

export default Navbar;
