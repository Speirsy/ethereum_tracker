import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {


  const [ethereumPrice, setEthereumPrice] = useState(0);

  useEffect(() => {
    const fetchEthereumPrice = async () => {

      try {

        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd'

          // Update the API endpoint to match your server setup
        // const response = await axios.get('http://localhost:4000/ethereum-price'

        );
   


        // Assuming the API response has a structure like { ethereum: { usd: 123.45 } }
        setEthereumPrice(response.data.ethereum.usd);
      } catch (error) {
        console.error('Error fetching Ethereum price:', error);
      }
    };

    // Fetch Ethereum price on component mount
    fetchEthereumPrice();

    // Set up a timer to fetch the price at regular intervals (e.g., every minute)
    const intervalId = setInterval(fetchEthereumPrice, 30000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>     
        <div>
      <h1>Ethereum Price: ${ethereumPrice}</h1>
       </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
 
    </div>
  );
}

export default App;
