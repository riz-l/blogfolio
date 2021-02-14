// Import: Packages
import React from "react";

// Import: Elements
import { Container } from "./Grid.elements";

// Component: Grid
export default function Grid({ children }) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
