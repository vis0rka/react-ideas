import React from "react";
import styled from "styled-components";

type OwnProps = {
  searchfield: string;
  searchChange: (value: string) => void;
};

const SearchBox = ({ searchfield, searchChange }: OwnProps) => {
  return (
    <Container>
      <input
        type="search"
        placeholder="search robots..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          searchChange(e.target.value)
        }
        value={searchfield}
      />
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

export default SearchBox;
