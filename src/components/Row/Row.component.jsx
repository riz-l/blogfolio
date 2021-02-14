// Import: Packages
import React from "react";

// Import: Elements
import { Container } from "./Row.elements";

// Component: Row
export default function Row({ children }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
