import React from "react";
import {
  Button,
  ConditionsItem,
  ConditionsList,
  ConditionsSpan,
  StyledDecription,
  StyledImg,
  StyledInformation,
  StyledItem,
  StyledList,
  StyledSpan,
  StyledTitle,
  Wrap,
} from "./CarDetails.styled";

export const CarDetails = ({ carData }) => {
  return (
    <div>
      <StyledImg src={carData?.img} alt="car" />

      <Wrap>
        <StyledTitle>
          {carData?.make} <StyledSpan>{carData?.model}, </StyledSpan>
          {carData?.year}
        </StyledTitle>
        <StyledList>
          <StyledItem>{carData?.address.split(",")[1]}</StyledItem>
          <StyledItem>{carData?.address.split(",")[2]}</StyledItem>
          <StyledItem>id:{carData?.id}</StyledItem>
          <StyledItem>year:{carData?.year}</StyledItem>
          <StyledItem>type:{carData?.type}</StyledItem>
        </StyledList>
        <StyledList>
          <StyledItem>Fuel Consumption: {carData?.fuelConsumption}</StyledItem>
          <StyledItem>Engine Size: {carData?.engineSize}</StyledItem>
        </StyledList>
        <StyledDecription>{carData?.description}</StyledDecription>

        <StyledInformation>Accessories and functionalities:</StyledInformation>
        <StyledList>
          {carData?.accessories.map((item) => (
            <StyledItem key={item}>{item}</StyledItem>
          ))}
        </StyledList>
        <StyledList>
          {carData?.functionalities.map((item) => (
            <StyledItem key={item}>{item}</StyledItem>
          ))}
        </StyledList>

        <div>
          <StyledInformation>Rental Conditions: </StyledInformation>
          <ConditionsList>
            <ConditionsItem>
              {carData?.rentalConditions.split("\n")[0]}
            </ConditionsItem>
            <ConditionsItem>
              {carData?.rentalConditions.split("\n")[1]}
            </ConditionsItem>
          </ConditionsList>
          <ConditionsList>
            <ConditionsItem>
              {carData?.rentalConditions.split("\n")[2]}
            </ConditionsItem>
            <ConditionsItem>
              Mileage:
              <ConditionsSpan>
                {carData?.mileage.toLocaleString("en-US")}{" "}
              </ConditionsSpan>
            </ConditionsItem>
            <ConditionsItem>
              Price:
              <ConditionsSpan>{carData?.rentalPrice}</ConditionsSpan>
            </ConditionsItem>
          </ConditionsList>
        </div>
      </Wrap>
      <Button
        text="Rental car"
        width="168px"
        onClick={() => {
          window.location.href = "tel:+380730000000";
        }}
      >
        Rental car
      </Button>
    </div>
  );
};
