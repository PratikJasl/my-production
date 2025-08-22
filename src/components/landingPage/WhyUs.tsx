import whyUs1 from "../../assets/whyus1.png";
import whyUs2 from "../../assets/whyus2.png";
import whyUs3 from "../../assets/whyus3.png";
import whyUs4 from "../../assets/whyus4.png";
import whyUs5 from "../../assets/whyus5.png";
import whyUs6 from "../../assets/whyus6.png";
// import { useIsVisible } from "../../services/useIsVisible";
import { useEffect, useRef, useState } from "react";

function WhyUS(){
    const Ref1 = useRef<HTMLDivElement | null>(null);
    // const isVisible1 = useIsVisible(Ref1);
    const Ref2 = useRef<HTMLDivElement | null>(null);
    // const isVisible2 = useIsVisible(Ref2);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const whyUs_data = [
        {
            img: whyUs1,
            title: "One on One Mentorship",
            description: "Personalized coaching tailored to individual player needs."
        },
        {
            img: whyUs2,
            title: "Experienced Coaches",
            description: "Certified coaches with National and International experience."
        },
        {
            img: whyUs3,
            title: "Flexible Scheduling",
            description: "Training sessions that fit your busy lifestyle."
        },
        {
            img: whyUs4,
            title: "Group Training Sessions",
            description: "Collaborative training that enhances teamwork and skills."
        },
        {
            img: whyUs5,
            title: "State-of-the-Art Facilities",
            description: "Access to top-notch training equipment and facilities."
        },
        {
            img: whyUs6,
            title: "Proven Track Record",
            description: "Success stories from our trained athletes."
        }
    ]

    useEffect(() => {
        if(!Ref2.current) return; //If the Ref2 section is not available, return early.
        
        const observerOptions = {
            root: Ref2.current, 
            rootMargin: '0px',
            threshold: 0.7 
        };

        //@dev: Set up the intersection Observer, and turn activeIndex true, when div is in view.
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    const index = itemRefs.current.findIndex(item => item === entry.target);
                    if (index !== -1) {
                        setActiveIndex(index);
                    }
                }
            });
        }, observerOptions);

        //@dev: Start observing each item
        itemRefs.current.forEach(item => {
            if(item) observer.observe(item);
        });

        //@dev: Clean up the observer on unmount
        return () => {
            itemRefs.current.forEach(item => {
                if(item) observer.unobserve(item);
            });
            observer.disconnect();
        };
        
    }, [Ref2.current]);

    const scrollToItem = (index: number) => {
        if (itemRefs.current[index]) {
            itemRefs.current[index].scrollIntoView({
                behavior: 'smooth', 
                inline: 'center' 
            });
        }
    };

    return(
        <section id="WhyUs" className="w-full 2xl:mt-30 md:mt-20 mt-15">
            <div className="flex flex-col items-center justify-center 2xl:gap-15 gap-5">
                <div ref={Ref1} className='flex flex-col items-center justify-center 2xl:gap-15 md:gap-8 md:w-full w-86 gap-5'>
                    <h1 className="2xl:text-9xl md:text-8xl text-6xl font-bold">Why <span className="text-green-400">Us</span> ?</h1>
                    <p className="2xl:text-3xl md:text-2xl text-xl text-center">
                        What makes us unique is our unwavering commitment to <span className="text-green-400">excellence. </span>
                        <span className="hidden lg:block">We are not just a training academy, we are a community that fosters growth, and sportsmanship. </span>
                    </p>
                </div>

                <div ref={Ref2} className='flex flex-row items-center justify-start gap-10 p-5 overflow-x-auto scrollbar-hide w-[20rem] md:w-[61rem] 2xl:w-[82rem]'>
                    {whyUs_data.map((item, index) => {
                        return(
                            <div 
                                key={index} 
                                className="flex flex-col 2xl:gap-5 gap-2 items-center text-center shrink-0 p-5 2xl:h-90 md:h-80 h-65 lg:w-72 w-70 bg-white text-black rounded-2xl hover:scale-110 active:scale-110 transition-transform duration-800 ease-in-out"
                                ref={htmlRef => { itemRefs.current[index] = htmlRef;}}
                            >
                                <img src={item.img} alt="coach-student" className="md:h-45 md:w-35 h-35"/>
                                <h1 className="lg:text-xl text-lg font-bold">{item.title}</h1>
                                <p className="text-md">{item.description}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="flex flex-row items-center justify-center gap-4">
                    {whyUs_data.map((_, index)=> {
                        return(
                            <button 
                                key={index} 
                                onClick={() => scrollToItem(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 hover:cursor-pointer ${
                                    activeIndex === index ? 'bg-green-500 scale-125' : 'bg-gray-400'
                                }`}
                            >
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WhyUS;