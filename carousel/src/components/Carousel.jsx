import React, { useState } from 'react'
import "./styles/Carousel.css"

const Carousel = ({ images, curr }) => {

    
    const prevIm = (curr - 1) < 0 ? images.length - 1 : curr - 1;
    const nextIm = (curr + 1) > images.length - 1 ? 0 : curr + 1;
    console.log((curr - 1) < 0);

    return (
        <div className='images'>
            <img
                className={'prevIm'}
                src={images[prevIm]}
                alt={`Slide ${prevIm}`}
            />

            <img
                // className='currIm'
                src={images[curr]}
                alt={`Slide ${curr}`}
            />

            <img
                className='nextIm'
                src={images[nextIm]}
                alt={`Slide ${nextIm}`}
            />
        </div>
    )
}
export default Carousel;