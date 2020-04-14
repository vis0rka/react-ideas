import React from "react";
import styled from "styled-components";
import navButtons from "./config";
import NavLink from "./Link";

const Navigation = () => {
  return (
    <Container className="sidebar-navigation">
      {navButtons.map((nav, index) => {
        return <NavLink {...nav} key={index} />;
      })}
    </Container>
  );
};

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export default Navigation;
