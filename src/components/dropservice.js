import ServiceItem from "./serviceitem";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./dropdown.css"

const DropService = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    return ( 
        <div className="dropdown">
           <ul onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
            {ServiceItem.map((item) => {
                return(
                    <li>
                    <Link className={item.name} to={item.path} onClick={() =>setClick(false)}>{item.title}</Link>
                    </li>
                )
            })}
            </ul>
        </div>
     );
}
 
export default DropService;