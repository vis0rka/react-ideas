import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Sidebar from "./Sidebar";

type OwnProps = {
  title: string;
  children: import("react").ReactNode;
  className?: string;
};

const Framed = ({ title, children, className }: OwnProps) => {
  return (
    <Container>
      <Sidebar />
      <Header title={title} />
      <ChildrenWrapper className={className}>{children}</ChildrenWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 12rem auto;
  grid-template-rows: 4rem auto;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const ChildrenWrapper = styled.div`
  grid-area: main;
  padding: 2rem;
  max-height: 100vh;
  overflow-y: auto;
  background-color: lightgray};
`;

export default Framed;
