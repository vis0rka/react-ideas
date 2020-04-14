import React from "react";
import styled from "styled-components";
type Ownprops = {
  name: string;
  email: string;
  id: string;
};

const Card = ({ name, email, id }: Ownprops) => {
  return (
    <Container>
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background-color: lightblue;
  padding: 1rem;
  margin: 2rem;
`;

export default Card;
