import React, { useState, useEffect } from 'react';
import './Rent.css';
import myData from '../data/car.json';
import Car from './Car';
import Filter from './Filter';
import Details from './Details';


const Sale = () => {
  const [carsForRent, setCarsForRent] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  const readData = () => {
    // Filter cars where isForRent is true
    const filteredCars = myData.filter(car => car.isForRent);
    setCarsForRent(filteredCars);
  };


  const [showDetailBar, setShowDetailBar] = useState(false);
  const [selectedCar, setSelectedCar] = useState();

  const displayDetailsBar = (car) => {
    setShowDetailBar(true);
    setSelectedCar(car);
  }


    return (
      <div className='fullPageRent'>
        <Filter></Filter>
        <div className='cardContainerRent'>
          {carsForRent.map((car, index) => (
            <Car carObject={car} showDetails={displayDetailsBar} ></Car>
          ))}
        </div>

        <Details isclicked={showDetailBar} currentCar={selectedCar}></Details>

      </div>
    );
  };


  export default Sale;
