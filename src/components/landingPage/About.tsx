import profileimage from "../../assets/profile1.png";
import { PhoneIcon } from "@heroicons/react/24/outline";
import { useIsVisible } from "../../services/useIsVisible";
import { useRef } from "react";

function About(){
    const Ref1 = useRef<HTMLElement | null>(null);
    const isVisible = useIsVisible(Ref1);
    return(
        <section 
            id="About" 
            ref={Ref1}
            className={`flex md:mt-20 mt-10 w-screen 2xl:p-20 md:p-15 p-10
            transition-opacity ease-in duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
            <div className="flex w-full md:flex-row flex-col items-center justify-between gap-5">
                <div className="flex flex-col order-2 md:order-none gap-5">
                    <div className={`flex flex-col md:gap-8 gap-5 sm:items-center md:items-start md:text-left text-center ${isVisible ? "animate-fadeInLeft" : ""}`}>
                        <div className="flex flex-col md:items-start items-center md:gap-5 gap-1">
                            <p className="2xl:text-6xl md:text-4xl text-xl">Meet</p>
                            <div className="flex flex-col 2xl:gap-2 md:gap-1">
                                <p className="2xl:text-8xl md:text-7xl text-4xl font-bold">Ranjit </p>
                                <p className="2xl:text-8xl md:text-7xl text-4xl font-bold">Subramaniyam</p>
                            </div>
                        </div>

                        <p className="2xl:text-2xl md:text-xl text-lg">National Level Player and International Certified Badminton Coach</p>

                        <div className="md:mt-5 flex md:flex-row flex-col 2xl:gap-8 gap-5 w-full items-center">
                            <div>
                                 <button 
                                    className="w-fit font-semibold bg-green-600 text-white 2xl:text-2xl md:text-xl text-md p-2 px-4 lg:px-5  rounded-3xl hover:scale-120 active:scale-120 transition transform duration-500 ease-in-out">
                                    <a 
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSe4K0iCM1DYTy0Ss412hIsnsHUG6lpaC9IK8VsIGl3TbBYJUA/viewform" 
                                        target="blank">
                                        Book a Demo
                                    </a>
                                </button>
                            </div>
                           
                           <div className="flex flex-row md:gap-5 gap-3 md:justify-start justify-center items-center ">
                                <a href="" target="blank">
                                    <i className="fab fa-instagram 2xl:text-4xl md:text-3xl text-xl text-red-500 hover:scale-150 active:scale-150 transition transform duration-500 ease-in-out"></i>
                                </a>
                                <a href="" target="blank">
                                    <i className="fab fa-linkedin 2xl:text-4xl md:text-3xl text-xl text-blue-500 hover:scale-150 active:scale-150 transition transform duration-500 ease-in-out"></i>
                                </a>
                                <a href="" target="blank">
                                    <i className="fab fa-youtube 2xl:text-4xl md:text-3xl text-xl text-red-500 hover:scale-150 active:scale-150 transition transform duration-500 ease-in-out"></i>
                                </a>
                                <div className="flex items-center gap-2 hover:scale-120 active:scale-120 transition transform duration-500 ease-in-out">
                                    <PhoneIcon className="2xl:h-8 2xl:w-8 md:h-6 md:w-6 h-3 w-3 text-blue-600" />
                                    <h3 className="2xl:text-2xl md:text-lg text-md">8870018565</h3>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>

                <div className={`order-1 md:order-none ${isVisible ? "animate-fadeInRight" : ""}`}>
                    <img 
                        src={profileimage}
                        alt="profile-pic" 
                        className="2xl:h-130 md:h-110 h-60 object-cover" 
                    />
                </div>
            </div>
        </section>
    )
}

export default About