import React, { useState } from 'react'
import './App.css'
import Carousel from './components/Carousel'


const images = [

  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1WspfBUI7WDyUZpbzFLT04QJ-lEUKgayxCQ&usqp=CAU',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Eo_circle_red_number-1.svg/2048px-Eo_circle_red_number-1.svg.png',
  'https://pngimg.com/uploads/number2/Number%202%20PNG%20images%20free%20download_PNG14925.png',
  'https://lh3.googleusercontent.com/proxy/ETXOAldg7OsdNYHsY_-onTOZW-G4EhA19slST96apejm3sak85ep4jSARX17-jB9FBmZfLb63wdenEVDyHXT-AjPBOQYx1cSNb7ZIV4x',
  'https://static.vecteezy.com/system/resources/previews/024/683/991/original/pink-3d-number-4-free-png.png',
  'https://cdn-icons-png.flaticon.com/512/3840/3840754.png',
  'https://www.thefactsite.com/wp-content/uploads/2021/06/number-6-facts-740x370.webp',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOzThXXbcFHGyKFSE_moY2DHhEVLugcFyRBQ&usqp=CAU',
  'https://clipart-library.com/data_images/234031.png',
  'https://img.freepik.com/premium-photo/fire-alphabet-number-9-nine-isolated-on-black-background_564276-8926.jpg',
  'https://bank.gov.ua/admin_uploads/coin/d719773fbc33bd6c60891b8972e61f59.png',
];

const App = () => {

  const [visible, setVisible] = useState(1);
  const [swipes, setSwipes] = useState(1);

  const handleVisible = (event) => {
    setVisible(event.target.value); 
  };
  const handleSwipes = (event) => {
    setSwipes(parseInt(event.target.value,10)); 
  };

  return (
    <div className="app">
      <Carousel images={images} visible={visible} swipes={swipes} />

      <select value={visible} onChange={handleVisible}>
        <option value="1">v 1</option>
        <option value="2">v 2</option>
        <option value="3">v 3</option>
      </select>

      <select value={swipes} onChange={handleSwipes}>
        <option value="1">s 1</option>
        <option value="2">s 2</option>
        <option value="3">s 3</option>
      </select>


    </div>
  );
};
export default App
