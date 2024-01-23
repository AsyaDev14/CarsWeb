import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { ModalWindow } from "../../components/Modal/Modal";
import { CarDetails } from "../../components/CarDetails/CarDetails";
import {
  StyledList,
  MainWrapper,
  StyledButtonLoad,
} from "../Catalog/Catalog.styled";
import { Filter } from "../../components/Filter/Filter";
import { Layout } from "../../components/Layout/Layout";
import CarItem from "../../components/CarItems/CarItem";

export const Favorites = () => {
  const carList = useSelector(selectCars);
  const currentFavorites = JSON.parse(localStorage.getItem("favoritesCars"));
  const [currentSelectedCars, setCurrentSelectedCars] = useState(
    currentFavorites || []
  );

  const [modalState, setModalState] = useState({
    isOpen: false,
    carInfo: null,
  });

  useEffect(() => {
    localStorage.setItem("favoritesCars", JSON.stringify(currentSelectedCars));
  }, [currentSelectedCars]);

  const handleClose = () => {
    setModalState({
      isOpen: false,
      carInfo: null,
    });
  };

  const handleClick = (carId) => {
    if (!currentSelectedCars.length) {
      setCurrentSelectedCars([carId]);
    } else {
      const isCarSelected = currentSelectedCars.includes(carId);
      if (isCarSelected) {
        const filteredCars = currentSelectedCars.filter((id) => id !== carId);
        setCurrentSelectedCars(filteredCars);
      } else {
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

  const filteredCars = carList.filter((car) =>
    currentFavorites.includes(car?.id)
  );

  return (
    <>
      <Layout />
      <Filter />
      <MainWrapper>
        <StyledList>
          {filteredCars.map((car) => (
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
