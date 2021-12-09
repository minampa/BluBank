import { useState } from 'react';
import './App.css';
import Customer from './components/Customer';
import Header from './components/Header';
import ShopContainer from './components/ShopContainer';
import SmartBank from './components/SmartBank';
import Social from './components/Social';

function App(props) {
  const [shopHeaders] = useState([
    {
        h4: "1.5% cashback"
    },
    {
        h4: "30-day terms"
    },
    {
        h4: "Save Money"
    }
])
  
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
