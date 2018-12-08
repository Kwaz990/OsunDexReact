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
import { OrderWatcher } from '@0x/order-watcher';



class OrderBook extends Component {
   // constructor() {
     //   super()
      //  this.state = {
     //     provider: Provider,
       //   networkId: 0,
         // contractAddreses: ''
         // partialCondig: Partial<OrderWatcherConfig> = DEFAULT_ORDER_WATCHER_CONFIG,): OrderWatcher
        //};



    render(){
        return(
      <div>
        <Charts />
        <BuyBox />
        <SellBox />
        <BuyOrders />
        <SellOrders />
        <OrderHistory />
    </div>
        );
    };
};

export default OrderBook;
