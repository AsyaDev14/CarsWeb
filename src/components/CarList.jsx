import React, { useEffect, useState } from "react";
import { Layout } from "./Layout/Layout";
import { Filter } from "./Filter/Filter";
import {
  MainWrapper,
  StyledButtonLoad,
  StyledList,
} from "../pages/Catalog/Catalog.styled";
import { ModalWindow } from "./Modal/Modal";
import { CarDetails } from "./CarDetails/CarDetails";
import CarItem from "./CarItems/CarItem";
import { nanoid } from "nanoid";

export const CarList = ({ data }) => {
  const currentFavorites = JSON.parse(localStorage.getItem("favoritesCars"));
  const [currentSelectedCars, setCurrentSelectedCars] = useState(
    currentFavorites || []
  );

  const [modalState, setModalState] = useState({
    isOpen: false,
    carInfo: null,
  });

  const handleClose = () => {
    setModalState({
      isOpen: false,
      carInfo: null,
    });
  };

  const handleClick = (carId) => {
    if (!currentSelectedCars.length) {
      setCurrentSelectedCars([carId]);
      localStorage.setItem("favoritesCars", JSON.stringify([carId]));
    } else {
      const isCarSelected = currentSelectedCars.includes(carId);
      if (isCarSelected) {
        const filteredCars = currentSelectedCars.filter((id) => id !== carId);
        localStorage.setItem("favoritesCars", JSON.stringify([filteredCars]));
        setCurrentSelectedCars(filteredCars);
      } else {
        localStorage.setItem(
          "favoritesCars",
          JSON.stringify([[...currentSelectedCars, carId]])
        );
        setCurrentSelectedCars([...currentSelectedCars, carId]);
      }
    }
  };

  const handleLearnMore = (car) => {
    setModalState({
      isOpen: true,
      carInfo: car,
    });
  };

  return (
    <>
      <Layout />
      <Filter />
      <MainWrapper>
        <StyledList>
          {data.map((car) => (
            <CarItem
              key={nanoid()}
              car={car}
              isFavorite={currentSelectedCars.includes(car.id)}
              onClick={handleClick}
              onLearnMore={handleLearnMore}
            />
          ))}
        </StyledList>
        <StyledButtonLoad>Load more</StyledButtonLoad>
      </MainWrapper>
      <ModalWindow
        isOpen={modalState.isOpen}
        onClose={handleClose}
        content={<CarDetails carData={modalState.carInfo} />}
      />
    </>
  );
};
