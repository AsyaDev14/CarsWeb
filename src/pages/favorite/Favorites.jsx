import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { ModalWindow } from "../../components/Modal/Modal";
import { CarDetails } from "../../components/CarDetails/CarDetails";
import { StyledList, MainWrapper } from "../Catalog/Catalog.styled";
import { Filter } from "../../components/Filter/Filter";
import { Layout } from "../../components/Layout/Layout";
import CarItem from "../../components/CarItems/CarItem";

// export const Favorites = () => {
//   const carList = useSelector(selectCars);
//   const currentFavorites = JSON.parse(localStorage.getItem("favoritesCars"));
//   const [currentSelectedCars, setCurrentSelectedCars] = useState(
//     currentFavorites || []
//   );

//   const [modalState, setModalState] = useState({
//     isOpen: false,
//     carInfo: null,
//   });

//   useEffect(() => {
//     localStorage.setItem("favoritesCars", JSON.stringify(currentSelectedCars));
//   }, [currentSelectedCars]);

//   const handleClose = () => {
//     setModalState({
//       isOpen: false,
//       carInfo: null,
//     });
//   };

//   const handleClick = (carId) => {
//     const isCarSelected = currentSelectedCars.includes(carId);

//     if (isCarSelected) {
//       // Remove the car from favorites
//       const updatedFavorites = currentFavorites.filter((id) => id !== carId);
//       localStorage.setItem("favoritesCars", JSON.stringify(updatedFavorites));
//       setCurrentSelectedCars(updatedFavorites);
//     }
//   };

//   const handleLearnMore = (car) => {
//     setModalState({
//       isOpen: true,
//       carInfo: car,
//     });
//   };

//   const filteredCars = carList.filter((car) =>
//     currentFavorites.includes(car?.id)
//   );

//   return (
//     <>
//       <Layout />
//       <Filter />
//       <MainWrapper>
//         <StyledList>
//           {filteredCars.map((car) => (
//             <CarItem
//               key={nanoid()}
//               car={car}
//               isFavorite={currentSelectedCars.includes(car.id)}
//               onClick={handleClick}
//               onLearnMore={handleLearnMore}
//             />
//           ))}
//         </StyledList>
//       </MainWrapper>
//       <ModalWindow
//         isOpen={modalState.isOpen}
//         onClose={handleClose}
//         content={<CarDetails carData={modalState.carInfo} />}
//       />
//     </>
//   );
// };

export const Favorites = () => {
  const carList = useSelector(selectCars);
  const currentFavorites = JSON.parse(localStorage.getItem("favoritesCars"));
  const [currentSelectedCars, setCurrentSelectedCars] = useState(
    currentFavorites || []
  );
  const [filter, setFilter] = useState(""); // New state for filtering

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
    const isCarSelected = currentSelectedCars.includes(carId);

    if (isCarSelected) {
      // Remove the car from favorites
      const updatedFavorites = currentFavorites.filter((id) => id !== carId);
      localStorage.setItem("favoritesCars", JSON.stringify(updatedFavorites));
      setCurrentSelectedCars(updatedFavorites);
    }
  };

  const handleLearnMore = (car) => {
    setModalState({
      isOpen: true,
      carInfo: car,
    });
  };

  const filteredCars = carList.filter(
    (car) =>
      currentFavorites.includes(car?.id) &&
      car.make.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Layout />
      <Filter filter={filter} setFilter={setFilter} />{" "}
      {/* Pass filter state and setter */}
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
      </MainWrapper>
      <ModalWindow
        isOpen={modalState.isOpen}
        onClose={handleClose}
        content={<CarDetails carData={modalState.carInfo} />}
      />
    </>
  );
};
