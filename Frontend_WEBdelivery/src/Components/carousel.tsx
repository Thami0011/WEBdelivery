import { useState, useEffect } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const slides = [
    "src/assets/images/burger_classique.png",
    "src/assets/images/salade_pates.png",
    "src/assets/images/spaghetti_carbonara.png",
    "src/assets/images/tiramisu.png",
    "src/assets/images/soupe.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 2000); // Change 2000 to adjust the interval in milliseconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div
      id="default-carousel"
      className="relative w-full max-w-5xl mx-auto mt-10"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out ${currentSlide === index ? "" : "hidden"}`}
            data-carousel-item
          >
            <img
              src={slide}
              className="absolute block w-full h-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-blue-500" : "bg-gray-300"}`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
            data-carousel-slide-to={index}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={goToPrevSlide}
      >
        {/* Previous button icon */}
      </button>

      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={goToNextSlide}
      >
        {/* Next button icon */}
      </button>
    </div>
  );
};

export default Carousel;
