// Import: Packages
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
const activeClassName = "nav-item-active"; // NavLink: activeClassName

// Element: Container
export const Container = styled.header`
  background-color: #2a2a2e;
  height: 60px;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

// Element: Nav
export const Nav = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
`;

export const NavItem = styled(NavLink).attrs({ activeClassName })`
  align-items: center;
  color: #d4d4d8;
  display: flex;
  justify-content: center;
  font-size: 1.2rem;
  font-weight: 300;
  height: 100%;
  padding: 0 2rem;
  transition: all 100ms linear;

  &:hover {
    background-color: #1d1d20;
    color: #ffffff;
    transition: all 100ms linear;
  }

  &.${activeClassName} {
    background-color: #131315;
    color: #f56960;
    transition: all 100ms linear;
  }
`;
