import { NavLink } from "react-router-dom";
import HomeBlack from "../assets/images/icons/home-black.png";
import HomeWhite from "../assets/images/icons/home-white.png";
import InfoBlack from "../assets/images/icons/info-black.png";
import InfoWhite from "../assets/images/icons/info-white.png";
import PhoneBlack from "../assets/images/icons/phone-black.png";
import PhoneWhite from "../assets/images/icons/phone-white.png";
import ProductBlack from "../assets/images/icons/product-black.png";
import ProductWhite from "../assets/images/icons/product-white.png";
export default function Navbar() {
    const navDetails = [
        {
            blackSource : HomeBlack,
            whiteSource : HomeWhite,
            source : ""
        },
        {
            blackSource : ProductBlack,
            whiteSource : ProductWhite,
            source : "product"
        },
        {
            blackSource : InfoBlack,
            whiteSource : InfoWhite,
            source : "about"
        },
        {
            blackSource : PhoneBlack,
            whiteSource : PhoneWhite,
            source : "contact"
        },
    ]
    return (
        <nav className="fixed top-[10%] h-[80vh] w-[60px] shadow-[0px_0px_10px_3px_rgba(0,0,0,0.2)] left-[5%] rounded-[15px] p-2 z-10 bg-[rgba(255,255,255,0.7)]">
            <ul className="flex flex-col justify-evenly h-full items-center w-full gap-4">
                {
                    navDetails.map((navDetail, index) => (
                        <NavLink key={index} to={`/${navDetail.source}`} className={({isActive})=>`${isActive ? "bg-[rgba(0,0,0,0.9)]" : "bg-transparent"} p-2 rounded-[50%] transition-all duration-75`}>
                            {({ isActive }) => (
                                <li >
                                    <img src={isActive ? navDetail.whiteSource : navDetail.blackSource} alt="icon" />
                                </li>
                            )}
                        </NavLink>
                    ))
                    
                }
            </ul>
        </nav>
    );
}