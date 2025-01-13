import React, { useState, useEffect } from "react";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "https://th.bing.com/th/id/R.6af6fd9c37f0de4abb34ea0fd20acce3?rik=55mqMmrTutVR0Q&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.PA_USRL68UjTfF0kRo5ImQHaEo?rs=1&pid=ImgDetMain",
        "https://th.bing.com/th/id/R.6af6fd9c37f0de4abb34ea0fd20acce3?rik=55mqMmrTutVR0Q&pid=ImgRaw&r=0",
        "https://th.bing.com/th/id/OIP.PA_USRL68UjTfF0kRo5ImQHaEo?rs=1&pid=ImgDetMain",

    ];

    // Tự động chuyển slide mỗi 3 giây
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval); // Dọn dẹp khi component unmount
    }, [images.length]);

    // Chuyển đến slide tiếp theo
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Quay lại slide trước
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>

            <div className="relative w-full mb-5">
                {/* Carousel wrapper */}
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* Slide */}
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-full transition-all duration-700 ease-in-out ${currentIndex === index ? "opacity-100" : "opacity-0"
                                }`}
                        >
                            <img
                                src={image}
                                alt={`carousel-slide-${index}`}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    ))}
                </div>

                {/* Slider controls */}
                <button
                    onClick={handlePrev}
                    className="absolute text-white top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>

                <button
                    onClick={handleNext}
                    className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>
            <div className="flex items-center justify-around ">
                <div className="container lg:max-w-screen-lg justify-between">
                    <div className="flex flex-col lg:flex-row items-center justify-center mx-3 lg:gap-8 gap-8 ">
                        <div className="flex justify-center items-center p-4 gap-8 border border-blue-500 w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 h-full">
                            <i className="fa-solid fa-truck-fast text-4xl text-primary"></i>
                            <div className="flex flex-col items-start max-w-xs">
                                <p className="font-bold text-xl">Free shipping</p>
                                <p>Orders over $200</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4 gap-8 border border-blue-500 w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 h-full">
                            <i className="fa-solid fa-coins text-4xl text-primary"></i>
                            <div className="flex flex-col items-start max-w-xs">
                                <p className="font-bold text-xl">Money Returns</p>
                                <p>30 Days money return</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4 gap-8 border border-blue-500 w-full sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 h-full">
                            <i className="fa-regular fa-clock text-4xl text-primary"></i>
                            <div className="flex flex-col items-start max-w-xs">
                                <p className="font-bold text-xl">24/7 Support</p>
                                <p>Customer support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Carousel;
