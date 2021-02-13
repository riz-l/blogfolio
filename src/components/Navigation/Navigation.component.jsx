// Import: Packages
import React from "react";

// Import: Elements
import { Container, Nav, NavItem, Wrapper } from "./Navigation.elements";

// Component: Navigation
export default function Navigation() {
  return (
    <Container>
      <Wrapper>
        <Nav>
          <NavItem to="/" exact>
            Home
          </NavItem>
          <NavItem to="/post">Blog</NavItem>
          <NavItem to="/project">Projects</NavItem>
          <NavItem to="/about">About Me</NavItem>
        </Nav>
      </Wrapper>
    </Container>
  );
}
