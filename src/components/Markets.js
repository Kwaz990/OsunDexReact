import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Sell from './Sell';
import Buy from './Buy';
import Charts from './Charts';
import BuyBox from './BuyBox';
import SellBox from './SellBox';
import BuyOrders from './BuyOrders';
import SellOrders from './SellOrders';
import OrderHistory from './OrderHistory';



class Markets extends Component {
    render(){
        return(
      <div>
        <Charts />
        <BuyBox />
        <Buy />
        <SellBox />
        <BuyOrders />
        <SellOrders />
        <OrderHistory />
    </div>
        );
    };
}
export default Markets;
