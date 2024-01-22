import { styled } from "styled-components";

export const StyledImg = styled.img`
  width: 100%;
  height: 314px;
  display: block;
  object-fit: cover;
  border-radius: 14px;
`;

export const Wrap = styled.div`
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const StyledTitle = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #121417;
`;

export const StyledSpan = styled.span`
  color: #3470ff;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledItem = styled.li`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }
`;

export const StyledDecription = styled.p`
  line-height: 1.43;
  margin-top: 14px;
  width: 461px;
`;

export const StyledInformation = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const ConditionsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 12px;
  letter-spacing: -0.24px;
`;
export const ConditionsItem = styled.li`
  border-radius: 35px;
  color: #363535;
  background-color: #f9f9f9;
  padding: 7px 14px;
`;
export const ConditionsSpan = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const Button = styled.button`
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: white;
`;
