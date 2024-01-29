import React, { useState } from 'react'
import './App.css'
import Carousel from './Carousel';

const images = [
  'https://placekitten.com/800/400',
  'https://placekitten.com/800/400',
  'https://placekitten.com/800/401',
  'https://placekitten.com/800/401',
  'https://placekitten.com/800/406',
  'https://placekitten.com/800/406',
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      prevIndex++;
      if (prevIndex >= images.length) {
        prevIndex = 0;
      }

      return prevIndex;
    })
  };

  const prevSlide = () => {

  };

  return (
    <div className="app">

      <div className="carousel">
        <button className='next-button' onClick={nextSlide}> next </button>

        <Carousel images={images} curr={currentIndex}  />

      </div>

    </div>
  );
};
export default App
