import './Filter.css';
import SelectCheckmark from '../filter_components/SelectCheckmark';
import NumberSelector from '../filter_components/NumberSelector';
import SelectBasic from '../filter_components/SelectBasic';

import Button from '@mui/material/Button';


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
    "pink",
    "magenta"
]

const typeList = [
    "Sedan",
    "Hatchback",
    "Station Wagon"
]




const Filter = () => {
    return <div className='filter'>

        <div className='cityFilter'>
            <SelectBasic tag="City"></SelectBasic>
        </div>

        <div className='townFilter'>
            <SelectBasic tag="Town"></SelectBasic>
        </div>

        <div className='brandFilter'>
            <SelectCheckmark itemList={brandList} tag="Brand" ></SelectCheckmark>
        </div>
        <div className='colorFilter'>
            <SelectCheckmark itemList={colorList} tag="Color" ></SelectCheckmark>
        </div>
        <div className='typeFilter'>
            <SelectCheckmark itemList={typeList} tag="Type"></SelectCheckmark>
        </div>

        <div className='yearFilter'>
            <NumberSelector placeholderText="year min"></NumberSelector>
            <NumberSelector placeholderText="year max"></NumberSelector>

        </div>


        <div className='kmFilter'>

            <NumberSelector placeholderText="km min"></NumberSelector>
            <NumberSelector placeholderText="km max"></NumberSelector>
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

        <Button variant="contained">Apply</Button>
        <Button variant="outlined">Clear</Button>
        </div>








    </div>

}

export default Filter;