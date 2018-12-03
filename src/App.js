import React, { Component } from 'react';
import RecentBuyOrders from './components/RecentBuyOrders';
import NavigationBar from './components/NavigationBar';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavigationBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <RecentBuyOrders />
          </p>
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
      </Router>
    );
  }
}

export default App;
