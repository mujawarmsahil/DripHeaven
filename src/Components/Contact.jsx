import { useEffect, useState } from "react"
import ContactBackground from "../assets/images/background/contactus.jpg"
export default function Contact(){
    const[isAdded,setIsAdded] = useState(false);

    const[contactDetails,setContactDetails] = useState({
        name : "",
        contact : "",
        email : "",
    });

    function setter(e) {
        setContactDetails((prev) => {
            return {...prev, [e.target.name]: e.target.value}
        })

        console.log(contactDetails);
        
    }

    function addContactDetails(e){
        e.preventDefault();

        return true;
    }

    useEffect(()=>{

        function showMessage(){
            if(isAdded)
                setIsAdded((prev)=>!prev)
        }
        if(isAdded)
        setTimeout(showMessage,1000)


    },[isAdded])

    return(<>
        <section 
            id="contact">
            <div 
                className={` bg-[url(${ContactBackground})] contact w-full min-h-screen flex justify-center items-center `}
                style={{ backgroundImage: `url(${ContactBackground})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className={`absolute ${isAdded ? "top-[5%]" : "-top-[100%]"} rounded successMessage w-[300px] h-[100px] bg-black border-2 border-green-200 `}>
                    <h4 className=" text-white text-center text-[12px]/[100px] font-rock" >Will Connect With You Sooon...........!</h4>
                </div>
                <div 
                    className="mainContainer w-[75%] flex flex-wrap gap-4 ">
                        <div 
                            className="heading w-full font-custom my-4 ">
                            <h1 className="text-center text-5xl text-white">
                                Contact Us
                            </h1>
                        </div>
                <div 
                    className="formContainer w-[45%] p-2  ">
                    <form 
                        action="GET" 
                        className="form flex h-full flex-wrap flex-col gap-4 justify-around">
                        <div 
                            className="inputContainer  relative group my-2">
                            <label 
                                htmlFor="name" className={`${!contactDetails.name ? "top-2/4 -translate-y-1/2 bg-transparent" : "-top-[60%] text-violet-600 font-bold  "} absolute left-4 group-focus-within:-top-[50%] text-white  group-focus-within:text-stone-300  transition-all`}>
                                    Name 
                            </label>
                            <input 
                                className={`w-full p-2  border-[1px] focus:border-slate-600 rounded border-[rgba(0,0,0,0.5)] outline-none bg-[rgba(0,0,0,0.65)] shadow-[inset_0px_0px_5px_1px_black] text-white `}
                                onChange={setter}
                                value={contactDetails.name}
                                type="text" 
                                name="name" 
                                id="name" />
                        </div>
                        <div 
                            className="inputContainer  relative group my-2">
                            <label 
                                htmlFor="contact" className={`${!contactDetails.contact ? "top-2/4 -translate-y-1/2 bg-transparent" : "-top-[60%] text-violet-600 font-bold "} absolute left-4 group-focus-within:-top-[50%] text-white  group-focus-within:text-stone-300  transition-all`}>
                                    Contact  
                            </label>
                            <input 
                                className={`w-full p-2  border-[1px] focus:border-slate-600 rounded border-[rgba(0,0,0,0.5)] outline-none bg-[rgba(0,0,0,0.65)] shadow-[inset_0px_0px_5px_1px_black] text-white `}
                                onChange={setter}
                                value={contactDetails.contact}
                                type="tel" 
                                name="contact" 
                                id="contact" />
                        </div>
                        <div 
                            className="inputContainer  relative group my-2">
                            <label 
                                htmlFor="email" className={`${!contactDetails.email ? "top-2/4 -translate-y-1/2 bg-transparent" : "-top-[60%] text-violet-600 font-bold "} absolute left-4 group-focus-within:-top-[50%] text-white  group-focus-within:text-stone-300  transition-all`}>
                                    Email  
                            </label>
                            <input 
                                className={`w-full p-2  border-[1px] focus:border-slate-600 rounded border-[rgba(0,0,0,0.5)] outline-none bg-[rgba(0,0,0,0.65)] shadow-[inset_0px_0px_5px_1px_black] text-white `}
                                value={contactDetails.email}
                                onChange={setter}
                                type="email" 
                                name="email" 
                                id="email" />
                        </div>
                        <div 
                            className="buttonContainer w-full">
                            <button 
                                type="submit"
                                onClick={(e)=>{
                                    let response = addContactDetails(e)
                                    setIsAdded(response);
                                }}
                                className="bg-black text-white p-2 mx-auto hover:bg-[rgba(0,0,0,0.85)] hover:shadow-[inset_0px_0px_5px_1px_rgba(255,255,255)]  duration-[2s] rounded transition-all font-semibold">
                                    Connect with us
                            </button>
                        </div>
                    </form>
                </div>
                <div 
                    className="iframeContainer w-[45%] rounded overflow-hidden shadow-[0px_0px_15px_2px_black]">
                        <iframe     
                            className="w-full h-[300px]"
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3771.14155120972!2d72.83595907395049!3d19.05751305255516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDAzJzI3LjAiTiA3MsKwNTAnMTguNyJF!5e0!3m2!1sen!2sin!4v1741755425058!5m2!1sen!2sin"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                </div>
                </div>
            </div>
        </section>
    </>)
}