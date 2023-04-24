import "./blog.css"
import BlogList from "../bloglist";
import { FaArrowRight } from "react-icons/fa";
import {  useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
      
    const [tag, setTag] = useState(BlogList)
  
    const filterItem = (catItem) => {
        const result= BlogList.filter((curData) => {
            return curData.tag===catItem;
        });
        setTag(result)
    }

    return ( 
        <div className="blog">
            <h3>News and Media</h3>
           <div className="blogs" >
            <ul>
                <button onClick={() => setTag(BlogList)}>All Works</button>
                <button onClick={() => filterItem('Distribution')}>Distribution</button>
                <button onClick={() => filterItem('Warehousing')}>Warehousing</button>
                <button onClick={() => filterItem('Optimization')}>Optimization</button>
                <button onClick={() => filterItem('Logistics')}>Logistics</button>
                <button onClick={() => filterItem('Analytics')}>Analytics</button>
            </ul>
           </div>
           <div className="bloglist">
            { tag.map(item => {
                return (
                    <div className="blogitem" key={item.id}>
                        <img src={item.image} alt="" width={300}/>
                        <h5>{item.title}</h5>
                        <p>{item.desc}</p>
                    <div className="button">
                    <Link to={`/blogdetails/${item.id}`}>
                       <button >{item.btn} <FaArrowRight/></button>
                    </Link>
                    </div>
                    </div>
                )
            }) }
           </div>
        </div>
    );
}
 
export default Blog;