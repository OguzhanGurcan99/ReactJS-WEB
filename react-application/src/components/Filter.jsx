import './Filter.css';
import SelectCheckmark from '../filter_components/SelectCheckmark';
import NumberSelector from '../filter_components/NumberSelector';
import SelectBasic from '../filter_components/SelectBasic';

import Button from '@mui/material/Button';

import myCities from '../data/cities.json';
import { useState } from 'react';

const brandList = [
    "Hyundai",
    "Ford",
    "Toyota",
    "BMW",
    "Alfa Romeo",
    "Mercedes",
    "Volvo",
    "Fiat",
    "Audi",
    "Skoda",
    "Citroen",
    "Peugeot",
    "Dacia",
    "Volkswagen",
    "Seat",
    "Opel",
    "Renault",
    "Mazda",
    "Mitsubishi"
]

const colorList = [
    "red",
    "blue",
    "green",
    "white",
    "black",
    "grey",
    "yellow",
    "pink",
    "magenta"
]

const typeList = [
    "Sedan",
    "Hatchback",
    "Station Wagon"
]

const Filter = ({onFilterApply}) => {

    const [isUserFiltering, setisUserFiltering] = useState(false);

    const [cityList, setCityList] = useState(myCities.map(city => city.name));
    const [townList, setTownList] = useState([]);
    
    const [city, setCity] = useState('');
    const [town, setTown] = useState("");

    const [brand, setBrand] = useState('');
    const [color, setColor] = useState('');
    const [type, setType] = useState('');

    const [minYear, setMinYear] = useState(0);
    const [maxYear, setMaxYear] = useState(0);

    const [minKm, setMinKm] = useState(0);
    const [maxKm, setMaxKm] = useState(0);
    
    const handleChangeCity = (param) => {
        setCity(param);
        setTownList(myCities.filter(x => x.name === param)[0].counties);
    }

    const handleChangeTown = (param) => {
        setTown(param);
    }

    const handleChangeBrand = (param) => {
        setBrand(param);
    }
    
    const handleChangeColor = (param) => {
        setColor(param);
    }

    const handleChangeType = (param) => {
        setType(param);
    }

    const handleChangeMinYear = (param) => {
        setMinYear(param);
    }

    const handleChangeMaxYear = (param) => {
        setMaxYear(param);
    }

    const handleChangeMinKm = (param) => {
        setMinKm(param);
    }

    const handleChangeMaxKm = (param) => {
        setMaxKm(param);
    }

    const handleClick = () => {
        setisUserFiltering(true);
        
        const filterData = {"city" : city,
                            "town" : town,
                            "brand": brand,
                            "color" : color,
                            "type": type,
                            "minYear": minYear,
                            "maxYear": maxYear,
                            "minKm": minKm,
                            "maxKm": maxKm
                        };
        onFilterApply(filterData);
    }

    



    return <div className='filter'>

        <div className='cityFilter'>
            <SelectBasic tag="City" element={city} elementList={cityList} handleChanged={(param) => handleChangeCity(param)}></SelectBasic>
        </div>

        <div className='townFilter'>
            <SelectBasic tag="Town" element={town} elementList={townList} handleChanged={(param) => handleChangeTown(param)}></SelectBasic>
        </div>

        <div className='brandFilter'>
            <SelectCheckmark itemList={brandList} tag="Brand" handleChanged={(param) => handleChangeBrand(param)} ></SelectCheckmark>
        </div>
        <div className='colorFilter'>
            <SelectCheckmark itemList={colorList} tag="Color" handleChanged={(param) => handleChangeColor(param)}></SelectCheckmark>
        </div>
        <div className='typeFilter'>
            <SelectCheckmark itemList={typeList} tag="Type" handleChanged={(param) => handleChangeType(param)}></SelectCheckmark>
        </div>

        <div className='yearFilter'>
            <NumberSelector placeholderText="year min" handleChanged={(param) => handleChangeMinYear(param)} ></NumberSelector>
            <NumberSelector placeholderText="year max" handleChanged={(param) => handleChangeMaxYear(param)}></NumberSelector>
        </div>

        <div className='kmFilter'>
            <NumberSelector placeholderText="km min" handleChanged={(param) => handleChangeMinKm(param)}></NumberSelector>
            <NumberSelector placeholderText="km max" handleChanged={(param) => handleChangeMaxKm(param)}></NumberSelector>
        </div>

        <div className='priceSaleFilter'>

            <NumberSelector placeholderText="sale min"></NumberSelector>
            <NumberSelector placeholderText="sale max"></NumberSelector>


        </div>

        <div className='priceRentFilter'>

            <NumberSelector placeholderText="rent min"></NumberSelector>
            <NumberSelector placeholderText="rent max"></NumberSelector>
        </div>

        <div className='buttonPanel'>

            <Button variant="contained" onClick={handleClick}>Apply</Button>
            <Button variant="outlined">Clear</Button>
        </div>
    </div>

}

export default Filter;