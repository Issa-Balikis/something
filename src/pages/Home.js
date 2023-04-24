import { Link } from "react-router-dom";
import "./home.css"

const Home = () => {
    return ( 
        <div className="home">
            <div className="home-title"> 
                <h2 className="animate bounce">Fast, Certified and Flexible Solutions</h2>
            </div>
            <div className="p-text">
                <p>We Bring it All Together</p>
            </div>
            <div className="btnn">
                <Link to="/about">
                <button>About us</button>
                </Link>
                <Link to="/services">
                <button>Services</button>
                </Link>
            </div>
        </div>
     );
}
 
export default Home;