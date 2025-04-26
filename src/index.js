import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Hero from "./Hero"
import Navb from "./Navb"
import LightHeroA from './LightHeroA';
import LightStepC from "./LightStepC";
import LightGalleryA from "./LightGalleryA";
import LightFooterD from "./LightFooterD"
import LightBlogA from "./LightBlogA"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navb/>
   <Hero />
   
   <LightHeroA/>
   
   <LightBlogA/>
   <LightStepC/>
   <LightGalleryA/>
   <LightFooterD/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
