import React , {useEffect , useState}from 'react'
import './Home.css';
import {Link, Navigate } from "react-router-dom";
import dino from '../assets/dino.png';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import userSlice from '../components/redux/userSlice';
import { setGlobalState } from './address';
const Home = () => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
      setGlobalState("address",account);

    } else {
      console.log("No authorized account found");
    }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
      
      setGlobalState("address",accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])
  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );
  return (
    <>
    <div className='main'>
      <h1>THE RUN</h1>
      <img className="dino" src={dino} alt="" />
     
      {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <Link to="/dashboard">
            <button className="cta-button connect-wallet-button">
              Play
            </button>
            </Link>   
          )}
      </div>
      </>
  )
}

export default Home