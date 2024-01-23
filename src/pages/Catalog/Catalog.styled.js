import styled from "styled-components";

export const ImgBox = styled.div`
  position: relative;
`;

export const StyledImg = styled.img`
  border-radius: 14px;
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  text-align: center;
  justify-content: space-between;
`;

export const MainWrapper = styled.div`
  margin-top: 10px;
`;

export const StyledTextBox = styled.div`
  width: 274px;
  margin-top: 14px;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

export const StyledText = styled.p`
  color: #121417;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin: 0;
`;

export const StyledSpan = styled.span`
  color: #3470ff;
  padding: 0 7px;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const StyledLists = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: fit-content;
  row-gap: 4px;
  margin-bottom: 28px;
  height: 40px;
  overflow: hidden;
`;

export const StyledItem = styled.li`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  border-right: 1px solid rgba(18, 20, 23, 0.5);
  padding: 0 6px;
  &:last-child {
    border-right: none;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  background: #3470ff;
  color: white;
`;
export const StyledButtonLoad = styled.button`
  display: flex;
  margin: 0 auto;
  margin-top: 60px;
  color: #3470ff;
  background: transparent;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  text-decoration-line: underline;
`;

export const OnClickHeart = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;
