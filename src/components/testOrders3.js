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
        fetch('https://api.radarrelay.com/v2/markets').then(results => {
            return results.json();
    }).then(data => {
        this.setState({
            isLoaded: true,
            items: data})
    });
}

    render(){
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>;
        }
        else{ 
            return(
        <div>
            <ul>
            {items.map(item => (
                <li key={item.id}>
                {item.displayName}
                </li>
            ))};
            </ul>
            {this.state.id}
        </div>
        );
            }
    };
}
export default TestOrders;
