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
import OrderBook from './OrderBook';
import TestOrders from './testOrders';

class Markets extends Component {
    render(){
        return(
      <div>
        <Charts />
        <BuyBox />
        <Buy />
        <SellBox />
        <TestOrders />
        <OrderBook />
    </div>
        );
    };
}
export default Markets;
