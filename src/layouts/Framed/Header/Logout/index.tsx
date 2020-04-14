import React from "react";
import styled from "styled-components";

const Logout = () => {
  return (
    <Container id="logout" onClick={() => console.log("logout")}>
      <span>logout</span>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
  margin-right: 2rem;
`;

export default Logout;
