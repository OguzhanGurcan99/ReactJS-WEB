import './Sale.css';
import Filter from '../../Filter';
import Car from '../../Car';
import Details from '../../Details';

import myData from '../../../data/car.json';

import React, { useState, useEffect, useContext } from 'react';
import { FavorListContext } from "../../FavorListContext";

const Sale = () => {

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
    const filteredCars = myData.filter(car => car.isForSale);
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
      const matchesMinYear = filterData.minYear === 0 || json.year >= filterData.minYear;
      const matchesMaxYear = filterData.maxYear === 0 || json.year <= filterData.maxYear;
      const matchesMinKm = filterData.minKm === 0 || json.kilometer >= filterData.minKm;
      const matchesMaxKm = filterData.maxKm === 0 || json.kilometer <= filterData.maxKm;

      
      return matchesCity && matchesTown && matchesBrand && matchesColor && matchesType &&
        matchesMinYear && matchesMaxYear && matchesMinKm && matchesMaxKm;

    });

    setOutputCars(userFilter);
  };


  const { favorList, setFavorList } = useContext(FavorListContext)

  const addToFavList = (favCar) => {
    setFavorList((prevFavorList) => {
      // Eğer favCar zaten listede varsa, aynı listeyi döndür
      if (prevFavorList.includes(favCar)) {
        return prevFavorList;
      }
      // Eğer yoksa, yeni favoriyi listeye ekleyip döndür
      return [...prevFavorList, favCar];
    });
  };

  return (
    <div className='fullPageSale'>
      <Filter onFilterApply={filterUserRequest}></Filter>
      <div className='cardContainer'>
        {onScreenList.map((car, index) => (
          <Car carObject={car} showDetails={displayDetailsBar} ></Car>
        ))}
      </div>
      <Details isClicked={showDetailBar} currentCar={selectedCar} addFavor={addToFavList}></Details>
    </div>
  );
}
  ;

export default Sale;
