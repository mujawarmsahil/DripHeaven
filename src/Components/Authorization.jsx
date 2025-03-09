import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import SignUpImage from "../assets/images/background/DRIP.gif"
import LoginImage from "../assets/images/background/DRIP-HEAVEN.png"
import Hide from "../assets/images/auth/hide.png"
import Show from "../assets/images/auth/show.png"


export default function Authorization(){
    const { val } = useParams();
    const [isWantToLogin, setIsWantToLogin] = useState(val === "true");

    useEffect(() => {
        setIsWantToLogin(val === "true");
    }, [val]);

    function setLogin(e){
        if((e.target.innerHTML === "Login" && !isWantToLogin) || (e.target.innerHTML === "Sign Up" && isWantToLogin)){
            setIsWantToLogin((prev) => !prev);
        }
    }
    useEffect(() => {
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                if (input.value.trim() !== '') {
                    input.classList.add('not-empty');
                } else {
                    input.classList.remove('not-empty');
                }
            });
        });

        return () => {
            inputs.forEach(input => {
                input.removeEventListener('input', () => {});
            });
        };
    }, []);
    function hideUnhidePassword(e){
        if(e.target.parentElement.children[1].type === 'password'){
            e.target.parentElement.children[1].type = "text"
            e.target.src = Hide
        } else {
            e.target.parentElement.children[1].type = "password"
            e.target.src = Show
        }
        
    }

    return(
        <>
            <section id="authorization">
                <div className="authorization w-full h-screen flex justify-center items-center">
                    <div className="authContainer flex flex-wrap rounded overflow-hidden shadow-xl p-4">
                        <div 
                            className="w-full order-3 flex justify-center p-2 ">
                            <div className="buttonContainer rounded overflow-hidden shadow-[inset_0px_0px_12px_2px_#000] bg-gray-800">
                                <button 
                                    type="button" 
                                    onClick={setLogin}
                                    className={`${isWantToLogin ? "bg-blue-500 rounded-t" : ""} text-white p-2 rounded-l`}>
                                        Login
                                </button>
                                <button 
                                    type="button" 
                                    onClick={setLogin}
                                    className={`${!isWantToLogin ? "bg-blue-500 rounded-s" : ""} text-white p-2 rounded-r`}>
                                        Sign Up
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-[50%] min-h-[350px] order-1 p-2 " id="signupContainer">
                        {
                            isWantToLogin ? 
                            <div className="w-full h-full bg-cover bg-center flex flex-col justify-center items-center text-center p-4" style={{ backgroundImage: `url(${LoginImage})`, backgroundSize: 'cover' }}>
                                <h2 className="text-white text-2xl mb-4">Create An Account</h2>
                                <ul className="text-white space-y-2">
                                    <li>
                                        <p>Gets Latest Update</p>
                                    </li>
                                    <li>
                                        <p>Exclusive Offers on Every Orders</p>
                                    </li>
                                    <li>
                                        <p>Be a bold with us</p>
                                    </li>
                                    <li>
                                        <p>Drop every 10 Rupee to charity of purchase above 1000 Rs</p>
                                    </li>
                                </ul>
                            </div>
                            :
                            <form action="">
                                <div className="mb-4 relative group">
                                    <label htmlFor="name" className="block text-gray-700 absolute top-[50%] -translate-y-2/4 left-2 group-focus-within:top-0 group-focus-within:-translate-y-2/4 group-focus-within:bg-white transition-all">Name</label>
                                    <input type="text" name="name" id="name" className="w-full p-2 border rounded group-focus-within:border-gray-400 outline-none"/>
                                </div>
                                <div className="mb-4 relative group">
                                    <label htmlFor="email" className="block text-gray-700 absolute top-[50%] -translate-y-2/4 left-2 group-focus-within:top-0 group-focus-within:-translate-y-2/4 group-focus-within:bg-white transition-all">Email</label>
                                    <input type="email" name="email" id="email" className="w-full p-2 border rounded group-focus-within:border-gray-400 outline-none"/>
                                </div>
                                <div className="mb-4 relative group">
                                    <label htmlFor="contact" className="block text-gray-700 absolute top-[50%] -translate-y-2/4 left-2 group-focus-within:top-0 group-focus-within:-translate-y-2/4 group-focus-within:bg-white transition-all">Contact</label>
                                    <input type="number" name="contact" id="contact" className="w-full p-2 border rounded group-focus-within:border-gray-400 outline-none"/>
                                </div>
                                <div className="mb-4 relative group">
                                    <label htmlFor="username" className="block text-gray-700 absolute top-[50%] -translate-y-2/4 left-2 group-focus-within:top-0 group-focus-within:-translate-y-2/4 group-focus-within:bg-white transition-all">Username</label>
                                    <input type="text" name="username" id="username" className="w-full p-2 border rounded group-focus-within:border-gray-400 outline-none"/>
                                </div>
                                <div className="mb-4 relative group">
                                    <label htmlFor="password" className="block text-gray-700 absolute top-[50%] -translate-y-2/4 left-2 group-focus-within:top-0 group-focus-within:-translate-y-2/4 group-focus-within:bg-white transition-all">Password</label>
                                    <input type="password" name="password" id="password" className="w-full p-2 border rounded group-focus-within:border-gray-400 outline-none"/>
                                    <img src={Show} alt="" onClick={hideUnhidePassword} className="cursor-pointer absolute right-[2%] top-[50%] -translate-y-2/4 w-[20px] h-[20px]" />
                                </div>
                                <div className="mb-4 relative group">
                                    <label htmlFor="confirmPassword" className="block text-gray-700 absolute top-[50%] -translate-y-2/4 left-2 group-focus-within:top-0 group-focus-within:-translate-y-2/4 group-focus-within:bg-white transition-all">Confirm Password</label>
                                    <input type="password" name="confirmPassword" id="confirmPassword" className="w-full p-2 border rounded group-focus-within:border-gray-400 outline-none"/>
                                    <img src={Show} alt="" onClick={hideUnhidePassword} className="cursor-pointer absolute right-[2%] top-[50%] -translate-y-2/4 w-[20px] h-[20px]" />
                                </div>
                                <div className="mb-4 relative group border-2 border-red-50 flex justify-center">
                                    <button type="button" className="bg-black text-white py-2 rounded px-3 ">Register</button>
                                </div>
                            </form>
                        }
                        </div>
                        <div className="w-full md:w-[50%] min-h-[350px] order-2 flex items-center justify-center p-2 " id="loginContainer">
                        {
                            isWantToLogin ? 
                            <form action="">
                                <div className="mb-4 relative group">
                                    <label htmlFor="username" className="block text-gray-700 absolute top-[50%] -translate-y-2/4 left-2 group-focus-within:top-0 group-focus-within:-translate-y-2/4 group-focus-within:bg-white transition-all">Username</label>
                                    <input type="text" name="username" id="username" className="w-full p-2 border rounded group-focus-within:border-gray-400 outline-none"/>
                                </div>
                                <div className="mb-4 relative group">
                                    <label htmlFor="password" className="block text-gray-700 absolute top-[50%] -translate-y-2/4 left-2 group-focus-within:top-0 group-focus-within:-translate-y-2/4 group-focus-within:bg-white transition-all">Password</label>
                                    <input type="password" name="password" id="password" className="w-full p-2 border rounded group-focus-within:border-gray-400 outline-none"/>
                                    <img src={Show} alt="" onClick={hideUnhidePassword} className="cursor-pointer absolute right-[2%] top-[50%] -translate-y-2/4 w-[20px] h-[20px]" />
                                </div>
                                <div className="mb-4 relative group border-2 border-red-50 flex justify-center">
                                    <button type="button" className="bg-black text-white py-2 rounded px-3 ">Register</button>
                                </div>
                            </form> : 
                            <div className="w-full h-full bg-cover bg-top flex flex-col justify-center items-center text-center p-4 " style={{ backgroundImage: `url(${SignUpImage})` }}>
                                <h2 className="text-white text-2xl mb-4">Create An Account</h2>
                                <ul className="text-white space-y-2">
                                    <li>
                                        <p>Gets Latest Update</p>
                                    </li>
                                    <li>
                                        <p>Exclusive Offers on Every Orders</p>
                                    </li>
                                    <li>
                                        <p>Be a bold with us</p>
                                    </li>
                                    <li>
                                        <p>Drop every 10 Rupee to charity of purchase above 1000 Rs</p>
                                    </li>
                                </ul>
                            </div>
                        }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}