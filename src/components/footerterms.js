import { Link } from "react-router-dom";

const FooterTerms = () => {
    return (  
        <div className="terms">
            <p>&copy;2023 Legendary inc</p>
            <div className="terms-links">
            <Link>Terms & Conditions-</Link>
            <Link>Privacy Policy-</Link>
            <Link>Sitemap</Link>
            </div>
        </div>
    );
}
 
export default FooterTerms;