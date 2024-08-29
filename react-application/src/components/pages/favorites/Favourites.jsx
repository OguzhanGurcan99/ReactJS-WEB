import './Favourites.css';
import Car from '../../Car';

import React, { useContext } from "react";
import { FavorListContext } from "../../FavorListContext";

const Favorites = () => {

    const { favorList } = useContext(FavorListContext);
    
    if (favorList.length ===0){
        return (
            <h1>NO FAVORITE CAR ADDED YET ! </h1>
        )
    }
    else{
        return (
            <>
              {favorList.map((car, index) => (
                <Car key={index} carObject={car} />
              ))}
            </>
          );
    }
};

export default Favorites;

