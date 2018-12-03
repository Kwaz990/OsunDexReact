import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import OsunTokenSale from './OsunTokenSale';
import Markets from './Markets';
import DashboardContainer from './DashboardContainer';
import OrderHistoryPage from './OrderHistoryPage';



class NavigationBar extends Component {
    render(){
        return(
      <Router>    
      <div>
        Osun DEX: 
        <ul>
        <Link to = "/">Home</Link>
        <Route path="/Markets" component={Markets}/>
        <Link to = "/Markets">Markets</Link>
        <Route path="/Dash" component={DashboardContainer}/>
        <Link to = "/Dash">Dashboard</Link>
        <Route path="/OrderHistory" component={OrderHistoryPage}/>
        <Link to = "/OrderHistory">Order History</Link>
        <Route path="/OsunTokenSale" component={OsunTokenSale}/>
        <Link to = "/OsunTokenSale">Osun Token Sale</Link>
        </ul>
    </div>
    </Router>
        );
    };
}
export default NavigationBar;
