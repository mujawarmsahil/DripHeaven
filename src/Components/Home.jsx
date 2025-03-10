import { Link } from 'react-router-dom';
import ReviewCard from "./ReviewCard"
import Logo from '../assets/images/logo/Logo.png';
import BackgroundVideo from '../assets/images/background.mp4'; 
import Login from "../assets/images/auth/login.png"
import SignUp from "../assets/images/auth/signup.png"
import Model_1 from "../assets/images/models/model-2.jpg"
import Model_2 from "../assets/images/models/model-3.jpg"
import Model_7 from "../assets/images/models/model-7.jpg"
import Model_9 from "../assets/images/models/model-9.jpg"
export default function Home() {
    const reviews = [
        {
            title : "Minimalist Streetwear Vibes",
            name : "Mike Radler",
            description : "This all-white ensemble brings an effortlessly cool and futuristic edge to streetwear. The oversized hoodie with 'quarantime' embossed text adds a subtle, stylish detail, while the monochromatic joggers complete the laid-back yet refined aesthetic. The metallic sunglasses make a bold statement, giving the outfit an ultra-modern twist. Perfect for those who want to stand out while keeping it minimal.", 
            source : Model_1 , 
            link : "www.instagram.com/_________sahilllll/"
        },
        {
            title : "Casual Denim with a Retro Touch",
            name : "Smathew Lorence",
            description : "The classic denim jacket never goes out of style, and this rugged yet relaxed outfit proves it. Layered over a simple white tee and paired with a black cap, this look balances vintage aesthetics with contemporary street fashion. The slightly distressed denim adds a touch of ruggedness, making it perfect for casual outings or a stylish day by the coast.", 
            source : Model_2 , 
            link : "www.instagram.com/_________sahilllll/"
        },
        {
            title : "Bold Graphic Statement",
            name : "Egris Specter",
            description : "If you love edgy fashion with an artistic touch, this black-on-black outfit is for you. The oversized tee features striking graphic designs, while the matching pants with Arabic calligraphy details add an expressive and cultural element to the look. Finished with a pair of chunky sneakers and dark shades, this outfit is ideal for making a confident streetwear statement.", 
            source : Model_7 , 
            link : "www.instagram.com/_________sahilllll/"
        },
        {
            title : "Soft & Subtle Neutrals",
            name : "Tony Ross",
            description:"Cozy and sophisticated, this muted green hoodie is a must-have for lovers of soft, earthy tones. The quilted detailing on the hood adds a luxurious texture, while the overall simplicity of the design keeps it timeless. Paired with effortless curls and a minimalist aesthetic, this piece is perfect for both lounging and stylish casual wear.",
            source : Model_9,
            link : "www.instagram.com/_________sahilllll/"
        }
    ]


    return (
        <>
            <section id="homeContainer" >
                <div className="homeContainer w-full min-h-screen" >
                    <div className="w-[300px] mx-auto p-0 m-0 text-center ">
                        <Link to="" className='w-full h-full'>
                            <img src={Logo} alt="Drip-Heaven" className="mx-auto object-contain p-0 w-full h-full" />
                        </Link>
                        <div className="authContainer absolute right-[2%] top-[5%] flex gap-6">
                            <div className="signup ">
                                <Link to={`signup/${false}` } >
                                    <img src={SignUp} alt="Sign Up" className='object-contain w-[50px] h-[30px] transition duration-300 hover:invert'/>
                                </Link>
                            </div>
                            <div className="login  ">
                                <Link to={`login/${true}`} >
                                    <img src={Login} alt="Login" className='object-contain w-[50px] h-[30px] transition duration-300 hover:invert'/>
                                </Link>
                            </div>
                        </div>
                        <div className="content h-[80vh]">
                            <p className='font-semibold text-gray-300 text-[24px] '>
                            Discover the freshest streetwear, trendiest fits, and timeless essentials—all in one place. Whether you're chasing the latest drops or curating a unique look, DripHeaven has got you covered.
                            </p>
                        </div>
                    </div>
                    <div className="reviews my-2 w-full">
                    {
                        reviews.map((review , index ) => {
                            return <ReviewCard review={review} swap={index%2==0}/>
                        })
                    }
                    </div>
                </div>
            </section>
                <video className="w-full h-[100vh] absolute top-0 left-0 -z-10 object-cover" src={BackgroundVideo} autoPlay={true} loop={true} muted/>
        </>
    );
}