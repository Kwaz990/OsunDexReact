import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Sell from './Sell';
import Buy from './Buy';
import Charts from './Charts';




class TestOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('https://api.radarrelay.com/v2/markets/ZRX-WETH/book').then(results => {
            return results.json();
        }).then(data => {
            this.setState({
                isLoaded: true,
                items: data
            })
        });
    }

    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div class="OrderBook">
                    <table>
                        <thead>
                            <tr class="no-select">
                                <th class="time">DATE</th>
                                <th class="type">TYPE</th>
                                <th class="price"><span class="hide-xs">Price (WETH)</span><span class="show-xs">PRICE</span></th>
                                <th class="amount text-right">ZRX</th>
                                <th class="total text-right">WETH</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr data-type="h">
                            {items.bids.map(item => (
                                <li key={item.orderHash}>
                                <td class="time">{item.createdDate} </td>
                                <td class="type">{item.type}</td>
                                <td class="price">{item.price} </td>
                                <td class="amount text-right">{item.remainingBaseTokenAmount} </td>
                                <td class="total text-right">{item.remainingQuoteTokenAmount} </td>                                
                                </li>
                            ))};
                            </tr>
                        </tbody>
                    </table>
                    {this.state.baseTokenAddress}
                </div>
            );
        }
    };
}
export default TestOrders;
