import menuItem from "./menuitem";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./dropdown.css"

const DropDown = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    return ( 
        <div className="dropdown">
           <ul onClick={handleClick}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
            {menuItem.map((item) => {
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
 
export default DropDown;