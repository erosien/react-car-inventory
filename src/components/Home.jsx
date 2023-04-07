import carImage from "../images/car.avif"
import "../main.css"

export default function Home( props ) {
    const name = props.name;

    return (
        <div>
            <div className="container">
                <h2>Welcome, {name}!</h2>
            </div>
            <div className="image">
                <img src={carImage} alt="Car driving away" />
            </div>
        </div>
    )
}

    Home.defaultProps = {
        name: "Car Enthusiast"
    }