import "./why.css"
import WhyData from "../components/whychoose";

const Why = () => {
    return ( 
        <div className="why">
            <div className="whychooseus">
                <h2>
                    Competitive Advantages For The Largest Companies!
                </h2>
                <p>
                    Safe, Reliable & Express Logistic Solutions That Saves Your Time
                </p>
                <div className="btn">
                    <button>Request a quote</button>
                </div>
            </div>

                <div className="content">
                    <div className="start">
                       {/*  <img src="./images/truck9.jpg" alt="" width="400"/> */}
                       <video autoPlay muted loop src="./images/truck-video.mp4" width={500} height={500}>
                       </video>
                    </div>
                    <div className="end">
                        <h6>Affordable Price, Certified Forwarders</h6>
                        <h4>Safe, Reliable Logistic Solutions That Saves Your Time!</h4>
                        <p>We pride ourselves on providing the best transport and shipping services available allover the world. Our skilled personnel, utilising the latest communications, tracking and processing software, combined with decades of experience.</p>
                    <div className="btn">
                    <button>Schedule An Appointment</button>
                    </div>
                    </div> 
                </div>
              
              <div className="outline">
                    {WhyData.map(item => {
                        return(
                            <div className="answer"
                                key={item.id}
                            >
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
        </div>
     );
}
 
export default Why;