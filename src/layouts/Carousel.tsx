import React from "react";

const Carousel = () => {
    return (
        <div
            id="carouselExampleInterval"
            className="carousel slide mb-5"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1000">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                        className="d-block w-100"
                        alt="Wild Landscape"
                    />
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                        className="d-block w-100"
                        alt="Camera"
                    />
                </div>
                <div className="carousel-item" data-bs-interval="5000">
                    <img
                        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                        className="d-block w-100"
                        alt="Exotic Fruits"
                    />
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
