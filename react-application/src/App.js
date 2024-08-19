import Home from "./components/Home";
import Sale from "./components/Sale";
import Rent from "./components/Rent";
import Favourites from "./components/Favourites";



import Navbar from "./components/Navbar";
import {  Routes, Route } from "react-router-dom";

const App = () => {
  return (

    <>

      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="sale" exact element={<Sale />} />
        <Route path="rent" exact element={<Rent />} />
        <Route path="favorites" exact element={<Favourites />} />
      </Routes>

    </>



  );
}







export default App;
