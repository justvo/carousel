import React, { useState } from 'react'
import '/src/styles/Carousel.css'

const Carousel = ({ images, visible, swipes }) => {

    const [curr, setCurr] = useState(0);

    visible = 3;
    const filteredImages = [];

    const customfilter = (visible, curr) => {

        filteredImages.push(images[curr]);

        for (let i = 1; i <= 4; i++) {

            const leftIndex = (curr - i + images.length) % images.length;
            const rightIndex = (curr + i) % images.length;

            filteredImages.unshift(images[leftIndex]);
            filteredImages.push(images[rightIndex]);
        }
    };

    customfilter(visible, curr);
    console.log(filteredImages)



    const nextSlide = () => {
        setCurr((prevIndex) => {
            prevIndex++;
            if (prevIndex >= images.length) {
                prevIndex = 0;
            }

            return prevIndex;
        })
    };


    const prevSlide = () => {
        setCurr((prevIndex) => {
            prevIndex--;
            if (prevIndex <= 0) {
                prevIndex = images.length - 1;
            }

            return prevIndex;
        })

    };




    const prevIm = (curr - 1) < 0 ? images.length - 1 : curr - 1;
    const nextIm = (curr + 1) > images.length - 1 ? 0 : curr + 1;
    console.log((curr - 1) < 0);

    return (
        <div>

            <button className='next-button' onClick={prevSlide}> prev </button>
            <button className='next-button' onClick={nextSlide}> next </button>
            <div className="carousel">
                <div className='images'>
                    {filteredImages.map((image, index) => (
                        <div>
                        <img className={'image'} width={`${780 / visible }px`}  key={index} src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Carousel;