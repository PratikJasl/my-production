import { useRef, useState, useEffect } from 'react';
import testimonial1 from "../../assets/profile3.png";
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

function Testimonials() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const Ref1 = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const testimonialsData = [
        {
            image: testimonial1,
            name: "Mr. Rohan Sahi",
            title: "Manager @British Telecom",
            batch: "Adults Batch",
            quote: "This academy is a game-changer! From day one, I felt the passion and professionalism. My footwork and shot placement have improved immensely."
        },
        {
            image: testimonial1,
            name: "Ms. Priya Sharma",
            title: "Software Engineer @Google",
            batch: "Advanced Batch",
            quote: "The personalized coaching here is unmatched. I've significantly improved my strategy and control. Highly recommend for serious players!"
        },
        {
            image: testimonial1,
            name: "Master Aryan Singh",
            title: "Student @DPS",
            batch: "Juniors Batch",
            quote: "I love coming here! The coaches are fun and teach us so many new techniques. My smashes are much stronger now!"
        },
        {
            image: testimonial1,
            name: "Dr. Anjali Verma",
            title: "Physician @Apollo Hospitals",
            batch: "Morning Batch",
            quote: "A fantastic way to stay active and learn. The flexible timings and friendly environment make it perfect for busy professionals."
        },
        {
            image: testimonial1,
            name: "Coach David Lee",
            title: "Ex-Pro Player",
            batch: "Pro Training",
            quote: "As a former pro, I'm impressed by the structured training and dedication. They develop true champions."
        },
    ];
    useEffect(() => {
        if(!Ref1.current) return; //If the Ref1 section is not available, return early.

        const observerOptions = {
            root: Ref1.current, 
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
        
    }, [Ref1.current]);

    const scrollToItem = (index: number) => {
        if (itemRefs.current[index]) {
            itemRefs.current[index].scrollIntoView({
                behavior: 'smooth', 
                inline: 'center' 
            });
        }
    };

    return (
        <section id="Testimonials" className="w-full 2xl:mt-30 mt-20 mb-20 flex flex-col items-center md:gap-15 gap-10 p-10 relative">

            <div className="flex flex-col items-center gap-5">
                <h1 className="2xl:text-9xl md:text-8xl text-5xl font-bold"><span className="bg-gradient-to-t from-white to-green-500 text-transparent bg-clip-text">Testimonials</span> </h1>
                <h2 className="md:text-4xl text-3xl"> what our <span className="text-green-500 lg:text-4xl text-3xl italic">players say</span></h2>
            </div>

            <div ref={Ref1} className="relative lg:w-full w-70 flex items-center justify-center ">
                <div
                    ref={scrollContainerRef}
                    className="flex flex-row items-center justify-start gap-5 p-1 overflow-x-auto scrollbar-custom md:w-[61rem] 2xl:w-[82rem]"
                >
                    {testimonialsData.map((testimonial, index) => (
                        <div
                            key={index}
                            ref={htmlRef => { itemRefs.current[index] = htmlRef;}}
                            className="flex md:flex-row flex-col gap-5 lg:justify-start justify-center items-center min-w-[256px] lg:flex-shrink-0 2xl:h-70 md:w-[520px] md:h-60 h-90 relative p-5 bg-white rounded-xl text-center"
                        >
                            <div>
                                <img src={testimonial.image} alt="person" className="md:h-45 h-30 md:w-60 w-15"/>
                            </div>

                            <div className="flex flex-col items-center lg:gap-5 gap-2">
                                <div className="text-black">
                                    <h1 className="lg:text-xl text-md font-bold text-black italic">{testimonial.name}</h1>
                                    <p className="lg:text-md text-sm">{testimonial.title}</p>
                                    <p className="lg:text-md text-sm">{testimonial.batch}</p>
                                </div>
                                <p className="text-gray-600 lg:text-md text-sm">
                                    {testimonial.quote}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-row items-center justify-center gap-4">
                    {testimonialsData.map((_, index)=> {
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
        
        </section>
    );
}

export default Testimonials;