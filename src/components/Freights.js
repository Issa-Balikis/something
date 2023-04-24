import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Freight from "../freight";

const Freights = () => {
    const { id } = useParams();
    const [road, setRoad] = useState(null)

    useEffect(() => {
        let road = Freight.find((road) => road.id === parseInt(id)) 
        if(road) {
            setRoad(road)
        }
    }, [])

    return ( 
        <div className="freights">
            {road && (
                <article>
                    <h3>{road.title}</h3>
                    <p>{road.desc}</p>
                </article>
            )

            }
        </div>
     );
}
 
export default Freights;