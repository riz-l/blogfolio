// Import: Packages
import styled from "styled-components/macro";

// Variable: Media
const media = {
  xs: (styles) => `
    @media only screen and (max-width: 480px) {
        ${styles}
    }
  `,

  s: (styles) => `
    @media only screen and (max-width: 576px) {
        ${styles}
    }
  `,

  m: (styles) => `
    @media only screen and (max-width: 768px) {
        ${styles}
    }
  `,

  l: (styles) => `
    @media only screen and (max-width: 992px) {
        ${styles}
    }
  `,

  xl: (styles) => `
    @media only screen and (max-width: 1200px) {
        ${styles}
    }
  `,

  xxl: (styles) => `
    @media only screen and (max-width: 1400px) {
        ${styles}
    }
  `,
};

// Element: Container
export const Container = styled.div`
  flex: ${({ size }) => size};
  ${({ collapse }) =>
    collapse &&
    media[collapse](`
    display: none;
    visibility: hidden;
  `)}
`;
