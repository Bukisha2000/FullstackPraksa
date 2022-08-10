import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css'
import Header from "./Header"
import Footer from "./Footer"
import Categories from "./Categories"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <>
    <Header/>
    <Categories/>
    <Footer/>
 
 </>
);