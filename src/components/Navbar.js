import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineClose } from 'react-icons/ai';
import { FaBars /* , FaSearch  */} from 'react-icons/fa';
import { useState } from "react";
import DropDown from "./dropdown";
import DropService from "./dropservice";

const Navbar = () => {

    const [sideBar, setSideBar] = useState(false)

    const toggleNavBar = () => {
        setSideBar(prevState => !prevState)
    }

    const [ dropDown, setDropDown ] = useState(false)
    const [ dropDown1, setDropDown1 ] = useState(false)


    const onMouseEnter = () => {
        setDropDown(true)
    }

    const onMouseLeave = () => {
        setDropDown(false)
    }
    const onMouseEnter1 = () => {
        setDropDown1(true)
    }

    const onMouseLeave1 = () => {
        setDropDown1(false)
    }

    return (
        <div className="navbar">
            <h1 className="title">Legendary <br /> <span className="small">International LLC</span></h1>
            <div className="links">
                <ul className={sideBar ? "navlinks-sidebar" : "navlinks" } onClick={toggleNavBar}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li
                        onMouseEnter={onMouseEnter1}
                        onMouseLeave={onMouseLeave1}
                    > 
                        <Link to="/services">Services</Link>
                       {dropDown1 && <DropService />}

                    </li>
                    <li onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to="/company">Company</Link>
                        {dropDown && <DropDown />}
                    </li>
                    
                    <li>
                        <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                   
                    <li className="btn">
                        <Link to="/request">
                    <button>Request A Quote
                        <AiOutlineArrowRight />
                    </button>
                       </Link>
                </li>
               
                </ul>
            </div>
             <div className="side-btn">
                    <div onClick={toggleNavBar}>
                        {sideBar ? <AiOutlineClose/> : <FaBars /> }
                    </div>
                </div>
        </div>
     );
}
 
export default Navbar;