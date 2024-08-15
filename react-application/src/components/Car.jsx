import './Car.css';

const Car = (props) => {
    return <div className='card'>
        <img src={require(`../images/${props.carObject.id}.jpg`)} alt=""></img>

        <div className='textContainer'>
            <div>{props.carObject.brand + " " + props.carObject.model}</div>
            <div> {props.carObject.year}</div>

        </div>








    </div>
}
export default Car;