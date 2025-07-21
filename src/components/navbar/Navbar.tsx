import logo from "../../assets/Logo2.png";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react";


function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    return(
        <>
            <div className="flex flex-row justify-between items-center fixed top-0 bg-black min-w-screen md:h-15 h-15 p-3 z-10">
                
                <div className="lg:text-2xl">
                   <Link to="/"> <img src={logo} alt="" className="md:h-12 md:w-50 md:mt-2 h-10 w-35" /> </Link>
                </div>

                <div>
                    <div>
                        <div className="md:flex flex-row items-center justify-center p-4 gap-5 hidden">
                            <a href="#Introduce" className="hover:text-green-500  lg:text-xl">Home</a>
                            <a href="#About" className="hover:text-green-500  lg:text-xl">About</a>
                            <a href="#WhyUs" className="hover:text-green-500  lg:text-xl">WhyUs</a>
                            <a href="#Gallery" className="hover:text-green-500  lg:text-xl">Gallery</a>
                            <a href="#Testimonials" className="hover:text-green-500  lg:text-xl">Testimonials</a>
                            <a href="#Contact" className="hover:text-green-500  lg:text-xl">Contact</a>
                        </div>
                    </div>
                    
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu} className="p-2">
                            {menuOpen ? (
                                <XMarkIcon className="h-6 w-6 text-white" />
                            ) : (
                                <Bars3Icon className="h-6 w-6 text-white" />
                            )}
                        </button>
                    </div>
                        
                    <div 
                        className={`fixed right-0 top-12 z-10 p-5 h-screen md:w-72 w-64 bg-black text-white
                        transform transition-all duration-500 ease-in-out
                        ${menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"}`}
                    >
                        <div className="flex flex-col items-center justify-center p-4 gap-5">
                            <a href="#Introduce" className="hover:text-green-500  lg:text-xl">Home</a>
                            <a href="#About" className="hover:text-green-500  lg:text-xl">About</a>
                            <a href="#WhyUs" className="hover:text-green-500  lg:text-xl">WhyUs</a>
                            <a href="#Gallery" className="hover:text-green-500  lg:text-xl">Gallery</a>
                            <a href="#Testimonials" className="hover:text-green-500  lg:text-xl">Testimonials</a>
                            <a href="#Contact" className="hover:text-green-500  lg:text-xl">Contact</a>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Navbar