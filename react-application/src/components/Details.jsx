import './Details.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';


const Details = (props) => {

    if (props.isClicked) {
        return <div className='detailsBar'>
            <div>SEE MORE HERE</div>
            <TableContainer component={Paper} className="paperContainer">
                <Table className="carDetailsTable">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>{props.currentCar.id}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>City</TableCell>
                            <TableCell>{props.currentCar.city}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Town</TableCell>
                            <TableCell>{props.currentCar.town}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Brand</TableCell>
                            <TableCell>{props.currentCar.brand}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Model</TableCell>
                            <TableCell>{props.currentCar.model}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Color</TableCell>
                            <TableCell>{props.currentCar.color}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>{props.currentCar.type}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Year</TableCell>
                            <TableCell>{props.currentCar.year}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>HP</TableCell>
                            <TableCell>{props.currentCar.HP}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Engine</TableCell>
                            <TableCell>{props.currentCar.engine}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Transmission</TableCell>
                            <TableCell>{props.currentCar.transmission}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Kilometer</TableCell>
                            <TableCell>{props.currentCar.kilometer}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>For Sale</TableCell>
                            <TableCell>{props.currentCar.isForSale ? 'Yes' : 'No'}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>For Rent</TableCell>
                            <TableCell>{props.currentCar.isForRent ? 'Yes' : 'No'}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Price for Sale</TableCell>
                            <TableCell>{props.currentCar.priceForSale}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Price for Rent</TableCell>
                            <TableCell>{props.currentCar.priceForRent}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <button className='favoritesButton' onClick={() => props.addFavor(props.currentCar)}> Add to my favorites</button>

        </div>
    }

    else {
        return <div className='emptyDetailsBar'></div>
    }
}

export default Details;