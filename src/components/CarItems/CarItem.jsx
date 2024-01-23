import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heart } from "@fortawesome/free-solid-svg-icons";
import {
  StyledText,
  StyledSpan,
  StyledBox,
  StyledLists,
  StyledItem,
  StyledImg,
  StyledButton,
  StyledTextBox,
  OnClickHeart,
  ImgBox,
} from "../../pages/Catalog/Catalog.styled";

const CarItem = ({ car, isFavorite, onClick, onLearnMore }) => {
  return (
    <li>
      <ImgBox>
        <StyledImg src={car?.img} alt="car" height={"268px"} width={"276px"} />
        <OnClickHeart onClick={() => onClick(car.id)}>
          <FontAwesomeIcon icon={isFavorite ? heart : faHeart} />
        </OnClickHeart>
      </ImgBox>
      <StyledTextBox>
        <StyledBox>
          <StyledText>
            {car.make}
            <StyledSpan>{car.type},</StyledSpan>
            {car.year}
          </StyledText>
          <StyledText>{car.rentalPrice}</StyledText>
        </StyledBox>
        <StyledLists>
          <StyledItem>{car.address.split(",")[1]}</StyledItem>
          <StyledItem>{car.address.split(",")[2]}</StyledItem>
          <StyledItem>{car.rentalCompany}</StyledItem>
          <StyledItem>{car.type}</StyledItem>
          <StyledItem>{car.model}</StyledItem>
          <StyledItem>{car.mileage}</StyledItem>
          <StyledItem>{car.accessories[0]}</StyledItem>
        </StyledLists>
        <StyledButton type="button" onClick={() => onLearnMore(car)}>
          Learn more
        </StyledButton>
      </StyledTextBox>
    </li>
  );
};

export default CarItem;
//
