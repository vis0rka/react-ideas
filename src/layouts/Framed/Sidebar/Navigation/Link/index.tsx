import React, { useCallback } from "react";
import { NavLink as ReactNavLink } from "react-router-dom";
import styled from "styled-components";

type NavLinkProps = {
  path: string;
  label: string;
  isActive: string[];
};

const Link = ({ path, label, isActive, className }: NavLinkProps & Styled) => {
  const getActiveLinks = useCallback(
    (_, location): boolean =>
      isActive.some(
        (elem) => elem === location?.pathname.substring(0, elem.length)
      ),
    [isActive]
  );

  return (
    <ReactNavLink
      activeClassName="active"
      to={path}
      isActive={getActiveLinks}
      className={className}
    >
      <Navicon></Navicon>
      <span>{label}</span>
    </ReactNavLink>
  );
};

const Navicon = styled.div`
  width: 20px;
  height: 20px;
  fill: #fff;
  margin: 0 0.5rem 0 0.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-align: center;
  padding: 1rem 0.5rem;
  font-size: 1.2em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  border-left: 5px solid transparent;

  &:hover,
  &:focus,
  &.active {
    color: white;
    background-color: darkslategray;
    border-left: solid 5px black;
  }

  span {
    font-size: 0.9rem;
    font-weight: 0;

    &:first-letter {
      text-transform: capitalize;
    }
  }
`;

export default StyledLink;
