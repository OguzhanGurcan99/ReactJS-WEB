import React, { useState, useEffect } from 'react';
import './Rent.css';
import myData from '../../../data/car.json';
import Car from '../../Car';
import Filter from '../../Filter';
import Details from '../../Details';

const Rent = () => {

  const [allCars, setAllCars] = useState([]);
  const [outputCars, setOutputCars] = useState([]);

  const [showDetailBar, setShowDetailBar] = useState(false);
  const [selectedCar, setSelectedCar] = useState();

  const [onScreenList, setOnScreenList] = useState([]);

  useEffect(() => {
    readData();
  }, []); // Başlangıçta bir kez çalışır


  useEffect(() => {
    setOnScreenList(outputCars);
  }, [outputCars]);    // outputCars state değeri her değiştiğinde çalışır 


  const readData = () => {
    // TÜM SATILIK ARAÇLARI  TOPLA 
    const filteredCars = myData.filter(car => car.isForRent);
    setAllCars(filteredCars);
    setOutputCars(filteredCars);
    setOnScreenList(filteredCars);
  };

  const displayDetailsBar = (car) => {
    setShowDetailBar(true);
    setSelectedCar(car);
  }

  // KULLANICI FİLTRESİNDEN GEÇİR VE LİSTEYİ DEĞİŞKENE AKTAR 
  const filterUserRequest = (filterData) => {
    const userFilter = allCars.filter(json => {
      const matchesCity = filterData.city === "" || json.city.toLowerCase() === filterData.city.toLowerCase();
      const matchesTown = filterData.town === "" || json.town.toLowerCase() === filterData.town.toLowerCase();
      const matchesBrand = filterData.brand.length === 0 || filterData.brand.includes(json.brand);
      const matchesColor = filterData.color.length === 0 || filterData.color.includes(json.color);
      const matchesType = filterData.type.length === 0 || filterData.type.map(type => type.toLowerCase()).includes(json.type.toLowerCase());
      
      return matchesCity && matchesTown && matchesBrand && matchesColor && matchesType;
    });
  
    setOutputCars(userFilter);
  };
  
  

  return (
    <div className='fullPageRent'>
      <Filter onFilterApply={filterUserRequest}></Filter>
      <div className='cardContainer'>
        {onScreenList.map((car, index) => (
          <Car carObject={car} showDetails={displayDetailsBar} ></Car>
        ))}
      </div>
      <Details isClicked={showDetailBar} currentCar={selectedCar}></Details>
    </div>
  );
};


export default Rent;
