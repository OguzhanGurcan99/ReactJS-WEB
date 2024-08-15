import React, { useState, useEffect } from 'react';
import './Sale.css';
import myData from '../data/car.json';
import Car from './Car';
import Filter from './Filter';
import Details from './Details';


const Sale = () => {
  const [carsForSale, setCarsForSale] = useState([]);

  useEffect(() => {
    readData();
  }, []);

  const readData = () => {
    // Filter cars where isForSale is true
    const filteredCars = myData.filter(car => car.isForSale);
    setCarsForSale(filteredCars);
  };

  return (
    <div className='fullPageSale'>
      <Filter></Filter>
      <div className='cardContainer'>
        {carsForSale.map((car, index) => (
          <Car carObject={car}></Car>
        ))}
      </div>

      <Details></Details>

    </div>
  );
};

export default Sale;
