import { Link } from 'react-router-dom'; // Ensure you import Link
import Logo from '../assets/images/logo/Logo.png'; // Ensure you import Logo
import BackgroundVideo from '../assets/images/background.mp4'; // Ensure you import BackgroundVideo
import Login from "../assets/images/auth/login.png"
import SignUp from "../assets/images/auth/signup.png"
export default function Home() {
    return (
        <>
            <section id="homeContainer" >
                <div className="homeContainer w-full min-h-screen" >
                    <div className="w-[300px] mx-auto p-0 m-0 text-center  h-[200px]">
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
                        <div className="content">
                            <p className='font-semibold text-gray-300 text-[24px] '>
                            Discover the freshest streetwear, trendiest fits, and timeless essentials—all in one place. Whether you're chasing the latest drops or curating a unique look, DripHeaven has got you covered.
                            </p>
                        </div>
                    </div>
                </div>
                <video className="w-full h-[100vh] absolute top-0 left-0 -z-10 object-cover" src={BackgroundVideo} autoPlay={true} loop={true} muted/>
            </section>
        </>
    );
}