// Import: Packages
import React from "react";

// Import: Assets
import backgroundImage from "../../assets/images/background-15.jpg";

// Import: Elements
import { Container, Heading, Image, Section } from "./Home.elements";

// Page: Home
export default function Home() {
  return (
    <Container>
      <Image src={backgroundImage} alt="Super pretty background" />

      <Section>
        <Heading>Hello there. I'm Riz.</Heading>
      </Section>
    </Container>
  );
}
