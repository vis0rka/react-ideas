import Card from "../Card";
import React from "react";
import styled from "styled-components";

type OwnProps = {
  robots: Robot[];
};

const CardList = ({ robots }: OwnProps) => {
  return (
    <Container>
      {robots.map((robot, i) => {
        return (
          <Card
            key={robot.id + i}
            id={robot.id.toString()}
            name={robot.name}
            email={robot.email}
          />
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default CardList;
