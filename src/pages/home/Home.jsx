import { NavLink } from "react-router-dom";
import { Titlle, Wrapper } from "./Home.styled";

export const Home = () => {
  const CatalogStyle = {
    fontSize: "35px",
    fontWeight: 600,
  };
  return (
    <>
      <Wrapper>
        <Titlle>Open the doors to your dream car with us.</Titlle>
        <NavLink to={"/catalog"} style={CatalogStyle}>
          Go to catalog
        </NavLink>
      </Wrapper>
    </>
  );
};
