import { Link } from "react-router-dom";

const FooterLinks = () => {
    return (  
        <div className="footerlinks">
            <div className="logo">
                <h1>LI</h1>
                <p>Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you develop and implement successful supply.</p>
                <div className="label">
                <label htmlFor="email">Email:issabalikis@gmail.com</label>
                <label htmlFor="phone">Phone:0000000000000</label>
                </div>
            </div>
            <div className="whoweare">
                <h4>Who We Are</h4>
                <ul>
                    <li>
                    <Link to="/about">About us</Link>
                    </li>
                    <li>
                    <Link to="/blog">News & Media</Link>
                    </li>
                    <li>
                    <Link t0="/">Case Studies</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="whatwedo">
                <h4>What We Do</h4>
                <ul>
                    <li>
                    <Link to="/air">Air Freight</Link>
                    </li>
                    <li>
                    <Link to="/ocean">Ocean Freight</Link>
                    </li>
                    <li>
                    <Link to="/road">Road Freight</Link>
                    </li>
                    <li>
                    <Link to="/">Warehousing</Link>
                    </li>
                </ul>
            </div>
            <div className="whoweserve">
                <h4>Who We Serve</h4>
                <ul>
                    <li>
                    <Link to="/">Retail & Consumer</Link>
                    </li>
                    <li>
                    <Link to="/">Sciences & Healthcare</Link>
                    </li>
                    <li>
                    <Link to="/">Industrial & Chemical</Link>
                    </li>
                    <li>
                    <Link to="/">Food & Beverages</Link>
                    </li>
                    <li>
                    <Link to="/">Oil & Gas</Link>
                    </li>

                </ul>
            </div>
            <div className="quicklinks">
                <h4>Quick Links</h4>
                <ul>
                    <li>
                    <Link to="/request">Request A Quote</Link>
                    </li>
                    <li>
                    <Link to="/contact">Find A Location</Link>
                    </li>
                    <li>
                    <Link to="/">Help & FAQ</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default FooterLinks;