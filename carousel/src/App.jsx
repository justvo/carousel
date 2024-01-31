import React, { useState } from 'react'
import './App.css'
import Carousel from './components/Carousel'

const images = [
  'https://placekitten.com/800/400',
  'https://placekitten.com/800/400',
  'https://placekitten.com/800/401',
  'https://placekitten.com/800/401',
  'https://placekitten.com/800/406',
  'https://placekitten.com/800/406',
];

const App = () => {
 
  return (
    <div className="app">
        <Carousel images={images}  />


    </div>
  );
};
export default App
