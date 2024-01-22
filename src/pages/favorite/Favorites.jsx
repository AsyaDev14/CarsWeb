import React from "react";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import CarItem from "../../components/CarItems/CarItem";
import { nanoid } from "nanoid";
import { Layout } from "../../components/Layout/Layout";

export const Favorites = () => {
  const carList = useSelector(selectCars);
  console.log(carList);

  const selectedCar = carList.filter((car) =>
    currentSelectedCars.includes(car.id)
  );
  return (
    <>
      <Layout />
      {selectedCar.map((car) => (
        <CarItem
          key={nanoid()}
          // car={car}
          // isFavorite={currentSelectedCars.includes(car.id)}
          // onClick={handleClick}
          // onLearnMore={handleLearnMore}
        />
      ))}
    </>
  );
};
