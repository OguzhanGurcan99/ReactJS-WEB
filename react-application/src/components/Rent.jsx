import React, { useState, useEffect } from 'react';
import './Rent.css';
import myData from '../data/car.json';
import Car from './Car';
const Rent = () => {
  const [carsForRent, setCarsForRent] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  const readData = () => {
    // Filter cars where isForSale is true
    const filteredCars = myData.filter(car => car.isForRent);
    setCarsForRent(filteredCars);
  };

  return (
    <div className='fullPageRent'>
      <div className='cardContainerRent'>
      {carsForRent.map((car, index) => (
        <Car carObject={car}></Car>
      ))}
    </div>
    </div>
  );
};

export default Rent;
