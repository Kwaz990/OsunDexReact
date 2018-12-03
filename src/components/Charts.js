import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import TradingViewWidget from 'react-tradingview-widget';


class Charts extends Component {
    render(){
        return(
            <div>
                <TradingViewWidget symbol="NASDAQ:AAPL" />
            </div>
        );
    };
}
export default Charts;