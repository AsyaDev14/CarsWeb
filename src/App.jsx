// import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Catalog } from "./pages/Catalog/Catalog";
import { Favorites } from "./pages/favorite/Favorites";
// import { Layout } from "./components/Layout";

export const App = () => {
  return (
    <>
      {/* <Layout /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};
