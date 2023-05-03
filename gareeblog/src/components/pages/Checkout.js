

import React, { useState } from 'react';
import { ethers } from 'ethers';
import '../../App.css';
import StripeCheckout from "react-stripe-checkout";
import './checkout.css';
import Background from '../../images2/background.jpg'

const checkoutpage = {
  backgroundImage: `url(${Background})`,
  
  // backgroundPosition: 'center',
  backgroundSize: '100%',
  // backgroundRepeat: 'no-repeat',
  width: '100%',
  height: '100%',
  position: 'absolute',
  display: 'inline-block'
  
  

}

function Checkout() {

  var [number, setNumber] = useState('')

  const reginput = {

    // border: "2px solid purple",
    borderRadius: "2px",
    textAlign: "center",
    display: "block",
    
    fontFamily: "inherit",
    fontSize: "20px",
    padding: "10px 0px 2px 0",
    width: "10%",
    height: "30px",
    marginLeft: "48%",
    marginTop: "12px",
    
    
    

  }
  const numberHandle = (event) => {
    setNumber(event.target.value);
  };
  const makePayment = token => {
    const body = {
      token,
      number
    };
    const headers = {
      "Content-Type": "application/json"
    };

    return fetch(`http://localhost:8282/checkout`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
      })
      .catch(error => console.log(error));
  };
  // Properties

  const [walletAddress, setWalletAddress] = useState("");

  // Helper Functions

  // Requests access to the user's META MASK WALLET
  // https://metamask.io
  async function requestAccount() {
    console.log('Requesting account...');

    // ❌ Check if Meta Mask Extension exists 
    if (window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error connecting...');
      }

    } else {
      alert('Meta Mask not detected');
    }
  }

  // Create a provider to interact with a smart contract
  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
    }
  }
  console.log(typeof(walletAddress))
  return (

    <>
      <div style={checkoutpage}>
        <label className='label1'>Enter Amount To Donate</label>
        <input onChange={numberHandle} style={reginput} type="number" placeholder="Enter Amount" value={number} />
        <StripeCheckout
          stripeKey={process.env.REACT_APP_KEY}
          token={makePayment}
          name="Donate"
          amount={number * 100}>

          <button className='btn-large '>
            Donate {number} $
          </button>

        </StripeCheckout>
        <button className='mmb'

          onClick={requestAccount}

        >Request Account For Metamask</button>
        <h1 className='mmid'>Your id is:{walletAddress}</h1>

      </div>
    </>
  );
};

export default Checkout;
