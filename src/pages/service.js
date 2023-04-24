import './service.css'
import CardService from './cardservice';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Service = () => {
    return (  
        <div className="service">
            <div className="services">
            <div className="service-text">
                <h2>
                    Reliable & Express Logistic Solutions Saves Your Time!
                </h2>
                <p className="service-p">
                    Competitive advantages to some of the largest companies allover the world.
                </p>
                <div className="btnn">
                    <Link to="/contact">
                    <button>Contact us</button>
                    </Link>
                </div>
                
            </div>
            </div>
            <div className="p-p">
                <div className="left">
                    <p>Real Solutions, Real Fast!</p>
                    <h3>Delivering The Best Global Logistics Solutions.</h3>
                </div>
                <div className="right">
                    <p> 
                        Our global logistics expertise, advanced supply chain technology & customized logistics solutions will help you analyze, develop and implement successful supply chain management strategies.
                    </p>
                </div>
                </div>
                <div className="cards">
                    {CardService.map((item) => {
                        return (
                            <div className='service-card'
                                key={item.id}
                            >
                            <h4>{item.name}</h4>
                            <p>{item.content}</p>
                            <Link to="/freight">{item.link}<FaArrowRight/></Link>
                            </div>
                        )
                    })}
                </div>
        </div>
    );

}
 
export default Service;