import { useState, useEffect } from "react";
import "./contact.css"
import Validation from "../components/validation";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        details: ""
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
        <div className="contact">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="100%" height="900" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" ></iframe>
                </div>
                
                <div className="contact-form">
                    <div className="contact-head">
                    <h6>Our Location</h6>
                    <h5>Contact Us</h5>
                    <p>We understand the importance of approaching each work integrally and believe in the power of simple and easy communication.</p>
                    </div>
                    <div className="contact-input">
                        <form onSubmit={handleSubmit}>
                        <div className="input1">
                        <input type="text"
                               placeholder="Name"
                               name="name"
                               value={formData.name} 
                               onChange={handleChange}
                        />
                         {errors.name && <p className="errorss">{errors.name}</p> }

                        <input type="email"
                               placeholder="Email" 
                                name="email"
                               value={formData.email} 
                               onChange={handleChange}
                        />
                         {errors.email && <p className="errorss">{errors.email}</p> }

                        </div>
                        <div className="input2">
                        <input type="tel"
                               placeholder="Phone" 
                               name="phone"
                               value={formData.phone} 
                               onChange={handleChange}
                        />
                         {errors.phone && <p className="errorss">{errors.phone}</p> }
                        
                        <input type="company" 
                               placeholder="Company" 
                                name="company"
                               value={formData.company} 
                               onChange={handleChange}
                        />
                         {errors.company && <p className="errorss">{errors.company}</p> }
                        </div>
                        <textarea type="text"
                                  placeholder="Request Details"
                                  name="details"
                                  value={formData.details}
                                  onChange={handleChange}
                        />
                         {errors.details && <p className="errorss">{errors.details}</p> }
                        <div className="contact-btn">
                        <button>Submit Request</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;