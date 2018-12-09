import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Sell from './Sell';
import Buy from './Buy';
import Charts from './Charts';




class AvailableMarkets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        };
    }

    componentDidMount() {
        fetch('https://api.radarrelay.com/v2/markets').then(results => {
            return results.json();
        }).then(data => {
            this.setState({
                isLoaded: true,
                items: data
            })
        });
        /*
        fetch('https://api.radarrelay.com/v2/markets').then(results => {
            return results.json();
        }).then(data => {
            this.setState({
                isLoaded: true,
                items: data
            })
        });

*/
    }

    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <div class="Available Markets">
                    <table>
                        <thead>
                            <tr class="no-select">
                                <th class="token">TOKEN</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr data-type="h">
                            {items.map(item => (
                                <li key={item.id}>
                                <td class="token">{item.displayName} </td>                              
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
export default AvailableMarkets;
