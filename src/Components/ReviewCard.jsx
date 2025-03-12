import Proptypes from "prop-types"
import InstagramColored from "../assets/images/logo/instagram-colored.png"
import InstagramGrayscale from "../assets/images/logo/instagram-grayscale.png"
import { useState } from "react"

export default function ReviewCard({review,swap}){

    const[isHovered,setIsHovered] = useState(false);

    return(
        <div className="w-[80%] mx-auto min-h-[150px] flex my-3">
            <div className={`${swap ? 'order-1' : 'order-2'} w-[25%] p-2`}>
                <img 
                    src={review.source} 
                    className="hover:scale-105 hover:opacity-100 opacity-85 transition-all hover:shadow-lg"
                    alt="" />
            </div>
            <div className={`${swap ? 'order-2 border-r  border-r-gray-400 ' : 'order-1 border-l  border-l-gray-400'} w-[75%] text-black text-[20px] p-5 border-b border-b-gray-400`}>
                <h3 
                    className="text-[24px] font-bold">
                    - {review.title}
                </h3>
                <p
                    className="text-[16px] text-gray-400 text-justify" >
                    {review.description}
                </p>
                <button 
                    type="button"
                    className={`mt-5 border-[1px]  p-2 rounded ${isHovered ? "" : ""} transition-all duration-75 bg-[rgba(0,0,0,0.8)]`}>
                    <a  
                        href={`https://${review.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex gap-2 items-center"
                        onMouseOver={()=>setIsHovered(true)}
                        onMouseLeave={()=>setIsHovered(false)}>
                        <img 
                            src={!isHovered ? InstagramGrayscale : InstagramColored}
                            className="w-[20px] h-[20px]" 
                            alt="" />
                        <p
                            className={`font-bold text-white text-[14px] text-center`}>
                                {review.name}
                        </p>
                    </a>
                </button>
            </div>
        </div>
    )
}

ReviewCard.propTypes = {
    review: Proptypes.shape({
        title : Proptypes.string.isRequired,
        name: Proptypes.string.isRequired,
        description: Proptypes.string.isRequired,
        source: Proptypes.string.isRequired,
        link: Proptypes.string.isRequired
    }).isRequired,
    swap: Proptypes.bool.isRequired
}
