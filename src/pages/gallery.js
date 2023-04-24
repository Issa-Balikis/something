import "./gallery.css"
import dataimg from "../dataimg";
import { useState } from "react";
import {FaTimes} from "react-icons/fa"

const Gallery = () => {
    const [clickedImg, setClickedImg] = useState('')
    const [modal, setModal] = useState(false)

   const handleClick = (img) => {
    setClickedImg(img)
    setModal(!modal)
   }
 
    return (  
        <>
       
        <div className="gallery">
            {modal && <div className="backdrop" onClick={handleClick}>
             {clickedImg && <div className="img">{clickedImg.img}</div>
                }
            </div>}
            <div className="grid">
                <div className="h3_title">
                <h3>Our Gallery</h3> 
                </div>
                <div className="body-grid">
                <div className="gridd">
                {dataimg.map((item) => {
                    return (
                        <img src={item.img} alt="" 
                             key={item.id}
                             onClick={ () => handleClick(item.img)}
                        />
                    )
                })}
                </div>
            </div>
            </div>
             <div className={modal ? "modal open" : "modal"}>
            <img src={clickedImg} alt="" />
          <div className="times">
            <FaTimes
             onClick={() => setModal(false)}/>
            </div>
        </div> 
        </div>
        
        </>
    );
}
 
export default Gallery;