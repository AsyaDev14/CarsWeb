import { NavLink } from "react-router-dom";
import { StyledNavBox, StyledLink } from "./Layout.styled";

export const Layout = () => {
  return (
    <div>
      <StyledNavBox>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/catalog"}>Catalog</NavLink>
        <NavLink to={"/favorites"}>Favorites</NavLink>
      </StyledNavBox>
    </div>
  );
};
