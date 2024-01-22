import styled from "styled-components";
import bgkImg from "../../images/mainbgk.jpg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: url(${bgkImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
export const Titlle = styled.h1`
  color: transparent;
  margin-top: 130px;
  background: linear-gradient(to right, #a06636, #052340);
  -webkit-background-clip: text;
  background-clip: text;
  display: inline;
`;
export const Catalog = styled.a`
  font-size: 35px;
  font-weight: 600;
`;
