import { useState } from 'react';
import reactDom from 'react-dom';
import './App.css';
import Custom from './components/Custom';
import Customer from './components/Customer';
import DarkBlue from './components/DarkBlue';
import Footer from './components/Footer';
import Handoff from './components/Handoff';
import Header from './components/Header';
import MainHeader from './components/MainHeader';
import ShopContainer from './components/ShopContainer';
import SmartBank from './components/SmartBank';
import Social from './components/Social';


function App(props) {
  
  
  return (
    <div className="App">
      <MainHeader />
      <SmartBank />
      <ShopContainer />
      <Social />
      <Customer />
      <Custom />
      <Handoff />
      <DarkBlue />
      <Footer />
    </div>
  );
}

export default App;
