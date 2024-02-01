import React, { useState, useRef, useEffect } from 'react'
import '/src/styles/Carousel.css'

const Carousel = ({ images, visible, swipes }) => {

    const [curr, setCurr] = useState(0);
    const [startX, setStartX] = useState(null);
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const [isAnimated, setIsAnimated] = useState(false);


    // useEffect(() => {
    //     const animate = () => {
          
    //       setIsAnimated(true);
    
    //       // Задержка для імітації тривалості анімації (може змінюватися відповідно до вашого коду)
    //       setTimeout(() => {
    //         // Ваш код, який виконується після завершення анімації
    //         console.log('Анімація завершена');
    //       }, 1000); // Припустимо, що анімація триває 1000 мс (1 секунда)
    //     };
    
    //     animate();
    //   }, []);


    const filteredImages = [];
    let shift = visible == 2?-200:0;
    



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
          carouselRef.current.style.transition = 'left 0.5s ease';
    
          if (deltaX > 50) {
            prevSlide();
          } else if (deltaX < -50) {
            nextSlide();
          } else {
            carouselRef.current.style.left = `${shift}px`;
          }
        }
    
        setStartX(null);
      };









    // const handleTouchStart = (e) => {
    //     setStartX(e.touches[0].clientX);

    // };

    // const handleTouchMove = (e) => {

    //     if (startX !== null) {
    //         const deltaX = e.touches[0].clientX - startX + shift;

    //         carouselRef.current.style.left = `${deltaX}px`;
    //       }
    // };

    // const handleTouchEnd = () => {

    //     if(parseInt(carouselRef.current.style.left) > 50){

    //         prevSlide()   ;
    //     }
    //     if(parseInt(carouselRef.current.style.left) < -50){
    //         nextSlide();
    //     }
    //     setStartX(null);
    //     carouselRef.current.style.left = `${shift}px`;
    // };


    const nextSlide = () => {
        setCurr((prevIndex) => {
            prevIndex = prevIndex + swipes;
            if (prevIndex >= images.length) {
                prevIndex = prevIndex - images.length;
            }

            customfilter(prevIndex);
            return prevIndex;
        })

    };


    const prevSlide = () => {
        setCurr((prevIndex) => {
            prevIndex = prevIndex - swipes;
            if (prevIndex < 0) {
                prevIndex = images.length - swipes;
            }

            customfilter(prevIndex);
            return prevIndex;
        })


    };


    //main
    customfilter(curr);

    return (
        <div>

            <button className='next-button' onClick={prevSlide}> prev </button>
            <button className='next-button' onClick={nextSlide}> next </button>
            <div className="carousel">
                <div
                    className='images'
                    style={{ position: 'relative', left: `${shift}px` }}
                    ref={carouselRef}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}>
                    {filteredImages.map((image, index) => (
                        <div>
                            <img className={'image'} width={`${780 / visible}px`} key={index} src={image} alt={`Image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Carousel;