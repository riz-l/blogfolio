// Import: Packages
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.main`
  height: calc(100vh-60px);
  width: 100%;
`;

// Element: Image
export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  position: absolute;
  width: 100%;
`;

// Element: Section
export const Section = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100%;
  min-height: 100vh;
  padding: 0 6rem;
  position: relative;
  width: 100%;
`;

// Element: Heading
export const Heading = styled.h1`
  color: #eaeaec;
  font-size: 8rem;
  font-weight: 700;
`;
