import Navbar from "./components/Navbar";
import Home from "./components/pages/home/Home";
import Sale from "./components/pages/sale/Sale";
import Rent from "./components/pages/rent/Rent";
import Favourites from "./components/pages/favorites/Favourites";

import React from "react";
import {  Routes, Route } from "react-router-dom";

import { FavorListProvider } from "./components/FavorListContext";

const App = () => {

  return (
    <>
      <FavorListProvider>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="sale" exact element={<Sale />} />
        <Route path="rent" exact element={<Rent />} />
        <Route path="favorites" exact element={<Favourites />} />
      </Routes>
      </FavorListProvider>
    </>
  );
}

export default App;
