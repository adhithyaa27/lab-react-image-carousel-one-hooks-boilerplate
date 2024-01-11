import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel(){
    let [currentIndex, setCurrentIndex] = useState(0)

    const previousSlide = () => {
        if (currentIndex == 0){
            setCurrentIndex(images.length-1)
        }
        else{
            setCurrentIndex(currentIndex - 1)
        }
    }

    const nextSlide = () => {
        if (currentIndex == images.length - 1){
            setCurrentIndex(0)
        }
        else{
            setCurrentIndex(currentIndex + 1)
        }
    }

    return(
        <>
            <div className="imageCarousel">
                <div id="arrow"><ArrowBackIosIcon onClick={previousSlide} /></div>

                <div id="imgs">
                    <h1 className="title">{images[currentIndex].title}</h1>
                    <img src={images[currentIndex].img} alt={`Slide ${currentIndex}`} />
                <h3 className="subtitle">{images[currentIndex].subtitle}</h3>
            </div>

            <div id="arrow"><ArrowForwardIosIcon onClick={nextSlide} /></div>
        </div>
        </>
    )
}

export default Carousel;
