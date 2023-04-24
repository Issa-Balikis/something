import { useEffect, useState } from "react";
import "./request.css"
import Validation from "../components/validation";

const Request = () => {
    const [formData, setFormData] = useState({
        company:"",
        name: "",
        email: "",
        phone: "",
        street: "",
        country: "",
        city: "",
        zip:"",
        street1: "",
        country1: "",
        city1: "",
        zip1:"",
        pickUp: "",
        delivery: "",
        stacks: "",
        packaging: "",
        weight: "",
        qty: "",
        height: "",
        length: "",
        width: ""
    })

    const [errors, setErrors]= useState({})
    const [isSubmit, setIsSubmit]= useState(false)

    const handleChange = (event) => {
        const { name, value, type, defaultChecked } = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? defaultChecked :  value
            }
        })
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setErrors(Validation(formData))
        setIsSubmit(true)
    }



    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmit) {
            alert("Quote has been sent")
        }
    }, [errors])

    return ( 
        <div className="request">
            <div className="h3">
                <h3>Request A Quote</h3>
            </div>
            <div className="forms">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">Personal data</label>
                    <br />
                    <input type="text"
                           placeholder="Company"
                           name="company"
                           value={formData.company}
                           onChange={handleChange}
                    />
                    {errors.company && <p className="errors">{errors.company}</p> }
                    <div className="one-line">
                    <input type="text"
                           placeholder="Name" 
                           name="name"
                           value={formData.name}
                           onChange={handleChange}
                    />
                    {errors.name && <p className="errors">{errors.name}</p> }

                    <input type="email"
                           placeholder="Email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                    />
                    {errors.email && <p className="errors">{errors.email}</p> }

                    <input type="tel"
                           placeholder="Phone" 
                           name="phone"
                           value={formData.phone}
                           onChange={handleChange}
                    />
                    {errors.phone && <p className="errors">{errors.phone}</p> }

                    </div>
                    <br />
                    <label htmlFor="pickUp">Pickup Address</label>
                    <br />
                    <input type="text"
                           placeholder="Street" 
                           name="street"
                           value={formData.street}
                           onChange={handleChange}
                    />
                    {errors.street && <p className="errors">{errors.street}</p> }

                    <div className="one-line">
                    <input type="text"
                           placeholder="Country"
                           name="country"
                           value={formData.country}
                           onChange={handleChange}
                    />
                    {errors.country && <p className="errors">{errors.country}</p> }

                    <input type="text"
                           placeholder="City" 
                           name="city"
                           value={formData.city}
                           onChange={handleChange}
                    />
                    {errors.city && <p className="errors">{errors.city}</p> }

                    <input type="text"
                           placeholder="Zip"
                           name="zip"
                           value={formData.zip}
                           onChange={handleChange}
                    />
                    {errors.zip && <p className="errors">{errors.zip}</p> }

                    </div>
                    <div className="radio">
                    <input type="radio" 
                           id="lift"
                           name="pickUp"
                           value="lift"
                           defaultChecked={formData.pickUp === "lift"}
                           onChange={handleChange}
                    />
                    
                    <label htmlFor="lift">Lift Gate At Pickup Point</label>
                    <input type="radio" 
                           id="limited"
                           name="pickUp"
                           value="limited"
                           defaultChecked={formData.pickUp === "limited"}
                           onChange={handleChange}
                    />
                    <label htmlFor="limited">Limited Access Pick Up</label>
                    </div>
                    <br />
                    <label htmlFor="">Drop Off Address</label>
                    <br />
                    <input type="text"
                           placeholder="Street"
                           name="street1"
                           value={formData.street1}
                           onChange={handleChange}
                    />
                    {errors.street1 && <p className="errors">{errors.street1}</p> }
                    <div className="one-line">
                    <input type="text"
                           placeholder="Country" 
                           name="country1"
                           value={formData.country1}
                           onChange={handleChange}
                    />
                    {errors.country1 && <p className="errors">{errors.country1}</p> }

                    <input type="text"
                           placeholder="City" 
                           name="city1"
                           value={formData.city1}
                           onChange={handleChange}
                    />
                    {errors.city1 && <p className="errors">{errors.city1}</p> }

                    <input type="text" 
                           placeholder="Zip" 
                           name="zip1"
                           value={formData.zip1}
                           onChange={handleChange}
                    />
                    {errors.zip && <p className="errors">{errors.zip}</p> }

                    </div>
                    <div className="radio">
                    <input type="radio"
                           id="call"
                           name="delivery"
                           value="call"
                           defaultChecked={formData.delivery === "call"}
                     />
                    <label htmlFor="call">Call Before Delivery</label>
                    <input type="radio" 
                           id="lift"
                           name="delivery"
                           value="lift"
                          defaultChecked={formData.delivery === "lift"}
                    />
                    <label htmlFor="lift">Lift Gate At Pickup Point</label>
                    <input type="radio"
                           id="limited"
                           name="delivery"
                           value="limited"
                           defaultChecked={formData.delivery === "limited"}
                    />
                    <label htmlFor="limited">Limited Access Pick Up</label>
                    <input type="radio" 
                           id="hazmat"
                           name="delivery"
                           value="hazmat"
                           defaultChecked={formData.delivery === "hazmat"}
                    />
                    <label htmlFor="Hazmat">Hazmat</label>
                    </div>
                    <br />
                    <label htmlFor="">Item To Be Shipped</label>
                    <br />
                    <div className="one-line">
                    <select 
                            id="packaging"
                            value={formData.packaging}
                            onChange={handleChange}
                            name= "packaging"
                            className="select"
                    >
                        <option value="packaging 1">Packaging 1</option>
                        <option value="packaging 2">Packaging 2</option>
                        <option value="packaging 3">Packaging 3</option>
                    </select>
                    <input type="text" 
                           placeholder="Total Weight,Ibs"
                           name="weight"
                           value={formData.weight}
                           onChange={handleChange}
                    />
                    {errors.weight && <p className="errors">{errors.weight}</p> }

                    <input type="text"
                           placeholder="QTY" 
                           name="qty"
                           value={formData.qty}
                           onChange={handleChange}
                    />
                    {errors.qty && <p className="errors">{errors.qty}</p> }

                    </div>
                    <div className="one-line">
                    <input type="text"
                           placeholder="Length"
                           name="length"
                           value={formData.length}
                           onChange={handleChange}
                    />
                    {errors.length && <p className="errors">{errors.length}</p> }

                    <input type="text" 
                           placeholder="Width"
                           name="width"
                           value={formData.width}
                           onChange={handleChange}
                    />
                    {errors.width && <p className="errors">{errors.width}</p> }

                    <input type="text" 
                           placeholder="Height"
                           name="height"
                           value={formData.height}
                           onChange={handleChange}
                    />
                    {errors.height && <p className="errors">{errors.height}</p> }

                    </div>
                    <div className="radio">
                    <input type="radio"
                           id="stack"
                           name="stacks"
                           value="stack"
                           defaultChecked={formData.pickUp === "stack"}
                           onChange={handleChange}
                     />
                    <label htmlFor="stack">Stackable</label>
                    <input type="radio" 
                           id="nstack"
                           name="stacks"
                           value="nstack"
                           defaultChecked={formData.pickUp === "nstack"}
                           onChange={handleChange}
                     />
                    <label htmlFor="non">Non-Stacable</label>
                    </div>
                    <div className="request_btn">
                    <button>
                        Request A Code
                    </button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Request;