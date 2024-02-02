import React, { useState, useRef, useEffect } from 'react'
import '/src/styles/Carousel.css'

const Carousel = ({ images, visible, swipes }) => {

  const [curr, setCurr] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);



  const filteredImages = [];

  let shift = visible == 2 ? -200 : 0;





  const customfilter = (curr) => {

    filteredImages.push(images[curr]);

    for (let i = 1; i <= 4; i++) {

      const leftIndex = (curr - i + images.length) % images.length;
      const rightIndex = (curr + i) % images.length;

      filteredImages.unshift(images[leftIndex]);
      filteredImages.push(images[rightIndex]);
    }
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (isDragging && startX !== null) {
      const deltaX = e.touches[0].clientX - startX + shift;
      carouselRef.current.style.transition = 'none';
      carouselRef.current.style.left = `${deltaX}px`;


    }
  };

  const handleTouchEnd = (e) => {
    if (isDragging && startX !== null) {
      setIsDragging(false);
      const deltaX = e.changedTouches[0].clientX - startX;
      carouselRef.current.style.left = `${shift}px`;

      if (deltaX > 50) {
        animate(visible, swipes, 1)
      } else if (deltaX < -50) {
        animate(visible, swipes, -1)
      } else {
        carouselRef.current.style.transition = 'left 0.5s ease';
        carouselRef.current.style.left = `${shift}px`;
      }

    }

    setStartX(null);
  };





  const nextSlide = () => {
    setCurr((prevIndex) => {
      prevIndex = prevIndex + swipes;
      if (prevIndex >= images.length) {
        prevIndex = prevIndex - images.length;
      }

      customfilter(prevIndex);
      return prevIndex;
    })
    carouselRef.current.style.transition = 'none';
    carouselRef.current.style.left = `${shift}px`;
  };


  const prevSlide = () => {
    setCurr((prevIndex) => {
      prevIndex = prevIndex - swipes;
      if (prevIndex < 0) {
        prevIndex = images.length + prevIndex;
      }

      customfilter(prevIndex);
      return prevIndex;
    })
    carouselRef.current.style.transition = 'none';
    carouselRef.current.style.left = `${shift}px`;


  };

  const animate = (visible, swipes, side) => {

    const currentLeft = visible == 1 ? 790 : (visible == 2 ? 400 : 270);
    const newLeft = (side * currentLeft * parseInt(swipes, 10))  + parseFloat(carouselRef.current.style.left);

    if (carouselRef.current) {
      carouselRef.current.style.transition = 'left 0.5s ease';
      carouselRef.current.style.left = `${newLeft}px`;
    }

    setTimeout(() => {
      side == 1 ? prevSlide() : nextSlide();
    }, 550); 
  };

  //main
  customfilter(curr);

  return (
    <div>

      <button className='next-button' onClick={() => animate(visible, swipes, 1)}> prev </button>
      <button className='next-button' onClick={() => animate(visible, swipes, -1)}> next </button>
      <div className="carousel">
        <div
          className='images'
          style={{ position: 'relative', left: `${shift}px` }}
          ref={carouselRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}>
          {filteredImages.map((image, index) => (
            <div className='image-box' style={{ width: `${780 / visible}px` }}>
              <img className={'image'} key={index} src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Carousel;