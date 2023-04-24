import { Link } from "react-router-dom";
import "./notfound.css"

const NotFound = () => {
    return ( 
        <div className="notfound">
            <h4>Sorry!</h4>
            <p>This page cannot be found</p>
            <Link to="/">Back to home page</Link>
        </div>
    );
}
 
export default NotFound;
