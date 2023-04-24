import { Link } from "react-router-dom";
import "./roadfreight.css"

const RoadFreight = () => {
    return ( 
        <div className="roadfreight">
            <h4>
                Services
            </h4>
            <div className="road">
            <div className="sidebar">
                <h6>Transport Services</h6>
                <div className="service_links">
                    <ul>
                    <li>
                    <Link to="/road">Road Freight</Link>
                    </li>
                    <li>
                    <Link to="/ocean">Ocean Freight</Link>
                    </li>
                    <li>
                    <Link to="/air">Air Freight</Link>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="rightbar">
                <h4>Overview</h4>
                <p>
                    Our airfreight staff attaches great importance to customizing the booking process for our customers. That's why we strive to find the air freight solution that best suits your needs. We'll ask you when the freight is available, what the required delivery date is, and if there's potential to save on time or cost. Your answers to these and other questions help us decide if you should book the air freight as direct. We'll also see if our sea-air service is a better solution for
                    We have more than twenty years of experience. During that time, we've become expert in freight transportation by air and all its related services. We work closely with all major airlines around the world. Ongoing negotiations ensure that we always have the cargo space we need and the ability to offer you competitive rates - even during the high season.Where possible, we'll erect and dismantle Unit Load Devices (ULDs), reducing significantly the risk of damage to your shipment and saving you time and expense. We can do this because many of our freight stations have their own ground transportation at or around the airport.
                </p>
            </div>
        </div>
        </div>
     );
}
 
export default RoadFreight;