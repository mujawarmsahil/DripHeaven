import FooterList from "./FooterList";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo/Logo.png"
export default function Footer() {
    const footers = [
        {
            title : "Information",
            links : [
                "Outlet",
                "Shop",
                "Product"
            ]
        },
        {
            title : "Shipping",
            links : [
                "Return",
                "Shop",
                "Legacy"
            ]
        },
        {
            title : "Contact Us",
            links : [
                "Email",
                "Score",
                "FAQ"
            ]
        }
    ]
    return (
        <footer>
            <div 
                className="w-full flex gap-3 p-3">
                <div 
                    className="w-[80%] mx-auto flex">
                    <div 
                        className="logo w-[15%]" >
                        <img 
                            src={Logo} 
                            alt="Logo" 
                            className="w-[200px]" />
                    </div>
                    <div 
                        className="w-[60%] flex flex-wrap mt-2 px-5">
                        {
                            footers.map((footer,index)=><FooterList footer={footer} key={index}/>)
                        }
                    </div>
                    <div
                        className="w-[25%] flex flex-col gap-3">
                        <h2
                            className="text-[20px] font-bold">
                            Become a Premium Member..!
                        </h2>
                        <p>
                            Join our premium membership to enjoy exclusive benefits and features. Get access to premium content, special discounts, and much more. Don't miss out on this opportunity to enhance your experience with us.
                        </p>
                        <Link to="contact">
                            <button className="hover:bg-opacity-80 text-white bg-black p-2 rounded" type="button">
                                Buy Me a Coffee
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}