import { useState, useEffect } from "react";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import slide1 from "../../assets/carasol-2.png";
import slide2 from "../../assets/carasol-1.png";
import slide3 from "../../assets/carasol-3.jpg";

function Carousel() {
  const [imageLinks, setImageLinks] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFading, setIsFading] = useState<boolean>(false);

  // Only set the imageLinks array once on component mount.
  useEffect(() => {
    setImageLinks([slide1, slide2, slide3]);
  }, []);

  // Change the image every 1 second using setInterval.
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageLinks.length);
        setIsFading(false); 
      }, 500); 
    }, 3000);
    return () => clearInterval(interval);
    }, [imageLinks]);

    //Introduce a delay of 500ms before changing the image
    const nextImage = () => {
      setIsFading(true); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageLinks.length);
        setIsFading(false); 
      }, 500);
    };

    //Introduce a delay of 500ms before changing the image
    const previousImage = () => {
      setIsFading(true); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imageLinks.length) % imageLinks.length);
        setIsFading(false);
      }, 500);
    };

  //@dev: Previous and next image indices
  const prevIndex = (currentIndex - 1 + imageLinks.length) % imageLinks.length;
  const nextIndex = (currentIndex + 1) % imageLinks.length;
  
  return (
    <section id="Gallery" className="flex w-screen flex-col gap-10 items-center justify-center 2xl:mt-30 md:mt-30 mt-20">
      <div className="flex flex-col items-center justify-center 2xl:gap-8 md:gap-5 w-full md:max-w-5xl max-w-xl mx-auto gap-5 px-4">
        <h1 className="2xl:text-9xl md:text-8xl text-6xl font-bold text-center bg-gradient-to-t from-white to-green-500 text-transparent bg-clip-text">Meet our champions</h1>
        <h2 className="2xl:text-3xl md:text-2xl text-xl">encounter our talents</h2>
      </div>

      <div className="flex flex-row justify-center items-center relative w-full overflow-x-hidden">
        {imageLinks.length > 0 && (
          <div className="flex justify-center relative">
            {/* Previous Image */}
            <img
              src={imageLinks[prevIndex]}
              alt="previous carousel slide"
              className="w-48 h-64 md:w-64 md:h-80 2xl:w-100 2xl:h-110 object-cover rounded-2xl shadow-lg cursor-pointer
                         transform scale-90 opacity-70 transition-all duration-500 ease-in-out
                         hover:scale-95 hover:opacity-85 z-10"
              onClick={previousImage}
            />
            {/* Current Image */}
            <img
              src={imageLinks[currentIndex]}
              alt="current carousel slide"
              className={`w-64 h-80 md:w-80 md:h-90 2xl:w-150 2xl:h-120 object-cover transition-opacity duration-1000 ease-in-out rounded-4xl ${
                isFading ? "opacity-0" : "opacity-100"
              }`}
              key={currentIndex}
            />

            {/* Next Image */}
            <img
              src={imageLinks[nextIndex]}
              alt="next carousel slide"
              className="w-48 h-64 md:w-64 md:h-80 2xl:w-100 2xl:h-110 object-cover rounded-2xl shadow-lg cursor-pointer
                         transform scale-90 opacity-70 transition-all duration-500 ease-in-out
                         hover:scale-95 hover:opacity-85"
              onClick={nextImage}
            />
          </div>
        )}
        <button
            onClick={previousImage}
            className="absolute -z-10 md:left-50 md:block hidden hover:cursor-pointer bg-gray-100 p-2 rounded-full hover:bg-gray-300"
        >
            <ChevronLeftIcon className="h-6 w-6 text-gray-500" />
        </button>

        <button
            onClick={nextImage}
            className="absolute -z-10 md:right-50 md:block hidden hover:cursor-pointer bg-gray-100 p-2 rounded-full hover:bg-gray-300"
        >
            <ChevronRightIcon className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </section>
  );
}

export default Carousel;
