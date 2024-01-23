import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Favorites } from "./pages/favorite/Favorites";
import { useDispatch } from "react-redux";
import { NotFound } from "./pages/NotFound";
import {
  fetchAllCarsThunk,
  fetchCarsBrandThunk,
} from "./redux/cars/operations";

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCarsThunk());
    dispatch(fetchCarsBrandThunk());
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
