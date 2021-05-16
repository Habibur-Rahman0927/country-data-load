import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './Component/Cart';
import Country from './Component/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
    .catch(error => console.log(error));
   
  }, [])
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h1>Country loaded : {countries.length}</h1>
      <Cart cart={cart}></Cart>
      </div>

      <div>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry}></Country>)
        }
      </div>

      
      
    </div>
  );
}

export default App;
