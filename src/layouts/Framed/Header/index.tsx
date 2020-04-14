import React from "react";
import styled from "styled-components";
import Logout from "./Logout";

type OwnProps = {
  title: string;
};

const Header = ({ title, className }: Styled & OwnProps) => {
  return (
    <div className={className + " header"}>
      <div className="leftside">
        <h3>{title}</h3>
      </div>
      <div className="rightside"></div>
      <Logout />
    </div>
  );
};

const StyledHeader = styled(Header)`
  grid-area: header;
  background-color: darkgray;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  position: relative;

  .leftside {
    flex-grow: 1;
    h3 {
      &:first-letter {
        text-transform: capitalize;
      }
    }
  }

  .rightside {
    padding-right: 1rem;
    display: flex;
    align-items: center;
  }

  h3 {
    font-size: 1.2rem;
    margin-left: 2rem;
  }
`;

export default StyledHeader;
