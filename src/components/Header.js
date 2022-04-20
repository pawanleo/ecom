import React from "react";

import Cart from "./Cart";

import { useNavigate } from "react-router-dom";
import { Container, Navbar, Button } from "react-bootstrap";
function Header() {
  const navigate = useNavigate();

  const moveToCartPage = () => {
    navigate("/cartProducts");
  };
  return (
    <Navbar style={{"background-color":"orange"}}>
      <Container>
        <Navbar.Brand href="/" style={{"font-size":"25px"}}>HELLOBAR</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button variant="white" onClick={moveToCartPage}>
              {" "}
              <Cart />
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
