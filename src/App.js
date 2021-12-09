import { useState } from 'react';
import reactDom from 'react-dom';
import './App.css';
import Customer from './components/Customer';
import Header from './components/Header';
import ShopContainer from './components/ShopContainer';
import SmartBank from './components/SmartBank';
import Social from './components/Social';

function App(props) {
  
  
  return (
    <div className="App">
      <Header />
      <SmartBank />
      <ShopContainer />
      <Social />
      <Customer />
    </div>
  );
}

export default App;
