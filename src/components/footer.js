import { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";
import FooterLinks from "./footerlinks";
import FooterTerms from "./footerterms.js";
import Validation from "./validation";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: ""
    })

    const [errors, setErrors] = useState({})
    const [ isSubmit, setIsSubmit ] = useState(false)

    const handleChange = (event) => {
        const {name, value}=event.target
        setFormData(prevState => {
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =(event) => {
        event.preventDefault()
        setErrors(Validation(formData))
        setIsSubmit(true)
    }

    useEffect(() => {
       if(Object.keys(errors).length === 0 && isSubmit) {
        alert("Details has been sent")
       }
    }, [errors])
  
    console.log(formData)


    return ( 
        <div className="footer">
            <div className="newsletter">
                <div className="newsletter-title">
                    <h6>Our Newsletter</h6>
                    <p>Sign up for industry news & insights.</p>
                </div>
                <div className="newsletter-form">
                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                               placeholder="Your Name"
                               name="name"
                               value={formData.name}
                               onChange={handleChange}
                         />
                           {errors.name && <p className="errorss">{errors.name}</p> }
                        <input type="email" 
                               placeholder="Your email"
                               name="email"
                               value={formData.email}
                               onChange={handleChange}
                         />
                           {errors.email && <p className="errorss">{errors.email}</p> }
                        <div className="newsletter-btn">
                        <button>Submit Now!</button>
                        </div>
                    </form>
                </div>
                <div className="socials">
                    <div className="facebook">
                    <Link to="https://www.facebook.com">
                    <FaFacebook />
                    </Link>
                    </div>
                    <div className="twitter">
                    <Link to="https://www.twitter.com">
                    <FaTwitter />
                    </Link>
                    </div>
                    <div className="instagram">
                    <Link to="https://www.instagram.com"> 
                    <FaInstagram />
                    </Link>
                    </div>
                </div>
            </div>
            <FooterLinks/>
            <FooterTerms />
        </div>
     );
}
 
export default Footer;