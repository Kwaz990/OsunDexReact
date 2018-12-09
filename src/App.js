import React, { Component } from 'react';
import RecentBuyOrders from './components/RecentBuyOrders';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import logo from './logo.svg';
import './App.css';
import {Web3Provider} from 'react-web3';
import AvailableMarkets from './components/AvailableMarkets';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavigationBar />
        <div className="center">
        <Web3Provider>
          <header className="DashboardContainer-header">
            <h1>Welcome to Osun DEX</h1>
            <p>Trade ERC20 tokens directly from your wallet</p>
          </header>
          <p className="DashboardContainer-intro">
          </p>
          <AvailableMarkets />
        </Web3Provider>
        </div>
        </div>
        </Router>
      );
    }
    };
  
export default App;
