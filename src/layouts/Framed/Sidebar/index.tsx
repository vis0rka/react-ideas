import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const Sidebar = ({ className }: Styled) => (
  <div className={className + " sidebar"}>
    <div className="header">LOGO</div>
    <Navigation />
    <div className="footer"></div>
  </div>
);

const StyledSidebar = styled(Sidebar)`
  grid-area: sidebar;
  background-color: white;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: darkgray;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6);
  z-index: 1;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
  }

  .footer {
    display: flex;
    justify-content: center;
    color: grey;
  }
`;

export default StyledSidebar;
