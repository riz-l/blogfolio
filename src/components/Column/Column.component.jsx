// Import: Packages
import React from "react";

// Import: Elements
import { Container } from "./Column.elements";

// Component: Column
export default function Column({ children, collapse, size }) {
  return (
    <>
      <Container collapse={collapse} size={size}>
        {children}
      </Container>
    </>
  );
}
