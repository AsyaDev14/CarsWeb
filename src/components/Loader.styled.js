import styled, { keyframes } from "styled-components";

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Load = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  border: 2px solid #ff3d00;
  box-sizing: border-box;
  animation: ${rotateAnimation} 1s linear infinite;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 4px;
    top: 4px;
    border: 2px solid #fff;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
`;
