import './Details.css';


const Details = (props) => {

    if (props.isclicked) {
        return <div className='detailsBar'>

            <div>SEE MORE HERE</div>

            <table className='carDetailsTable'>
                <tr>
                    <th>ID</th>
                    <td>{props.currentCar.id}</td>
                </tr>
                <tr>
                    <th>Brand</th>
                    <td>{props.currentCar.brand}</td>
                </tr>
                <tr>
                    <th>Model</th>
                    <td>{props.currentCar.model}</td>
                </tr>
                <tr>
                    <th>Color</th>
                    <td>{props.currentCar.color}</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>{props.currentCar.type}</td>
                </tr>
                <tr>
                    <th>Year</th>
                    <td>{props.currentCar.year}</td>
                </tr>
                <tr>
                    <th>HP</th>
                    <td>{props.currentCar.HP}</td>
                </tr>
                <tr>
                    <th>Engine</th>
                    <td>{props.currentCar.engine}</td>
                </tr>
                <tr>
                    <th>Transmission</th>
                    <td>{props.currentCar.transmission}</td>
                </tr>
                <tr>
                    <th>Kilometer</th>
                    <td>{props.currentCar.kilometer}</td>
                </tr>
                <tr>
                    <th>For Sale</th>
                    <td>{props.currentCar.isForSale ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                    <th>For Rent</th>
                    <td>{props.currentCar.isForRent ? 'Yes' : 'No'}</td>
                </tr>
                <tr>
                    <th>Price for Sale</th>
                    <td>{props.currentCar.priceForSale}</td>
                </tr>
                <tr>
                    <th>Price for Rent</th>
                    <td>{props.currentCar.priceForRent}</td>
                </tr>
            </table>

        </div>
    }


    else {
        return <div className='emptyDetailsBar'></div>
    }




}

export default Details;