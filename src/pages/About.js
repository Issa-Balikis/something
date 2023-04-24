const About = () => {
    return ( 
        <div className="about">
            <div className="left">
                <div className="p">We Bring it All Together</div>
                <div className="l-text">
                    Competitive Advantages For Largest Companies!
                </div>
                <p>Providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience.</p>
                <ul>
                   <li>Transparent Pricing, Environmental Sensitivity</li>
                  <li>24/7 Hours Support, Professional and Qualified</li>
                  <li>Real Time Tracking, Fast & Efficient Delivery</li> 
                  <li>Warehouse Storage, Personalised solutions</li>
                </ul>
                 <div className="btn">
                <button>More About Us</button>
                <button className="unbtn">Find Your Solution</button>
            </div>
            </div>
            <div className="right">
                <img src="./images/truck3.jpg" alt="" />
            </div>
           
        </div>
     );
}
 
export default About;