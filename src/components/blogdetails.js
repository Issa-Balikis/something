import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './blogdetails.css'
import BlogListDetail from '../bloglistdetail';
import { FaFacebook, FaInstagram, FaTimes, FaTwitter, FaWhatsapp } from "react-icons/fa";


const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null)
    const [modal, setModal] = useState(false)
    const [clickedImg, setClickedImg] = useState('')


    useEffect(() => {
        let blog = BlogListDetail.find((blog) => blog.id === parseInt(id)) 
        if(blog) {
            setBlog(blog)
        }
    }, [])



    const toggleOpen = (image) => {
    setClickedImg(image)
    setModal(!modal)
    }

    return (
        <div className="blogdetails">
           {blog && (
            <div className="blog">
            <article>
                <img src={blog.image} alt=""  onClick={ () => toggleOpen(blog.image)} />
                <h2>{blog.title}</h2>
                <p>{blog.desc}</p>
            </article>

             {modal &&
              <div className="backdrop" onClick={toggleOpen}>
             {clickedImg &&
              <div className="img">{clickedImg.img}</div>
                }</div>}

            <div className={modal ? "modal open" : "modal"}>
            <img src={clickedImg} alt="" />
          <div className="times">
            <FaTimes
             onClick={() => setModal(false)}/>
            </div>
            </div>
             
            <div className="share">
                    Share: 
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
                    <div className="whatsapp">
                    <Link to="https://www.whatsapp.com"> 
                    <FaWhatsapp />
                    </Link>
                    </div>
                </div>
                </div>
                </div>

            
           )}
        </div>
    );
}
 
export default BlogDetails;