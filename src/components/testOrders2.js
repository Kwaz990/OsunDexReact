import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Sell from './Sell';
import Buy from './Buy';
import Charts from './Charts';




class TestOrders extends Component {
    constructor() {
        super();
        this.state = {
            pictures: []

        };
        
    }

    componentWillMount() {
        fetch('https://randomuser.me/api/?results=500').then(results => {
            return results.json();
    }).then(data => {
        let pictures = data.results.map((pic) =>{
            return(
                <div key={pic.results}>
                <p>I hope this works</p>
                <img src={pic.picture.medium} />
                </div>
            )
        })
        this.setState({pictures: pictures});
        console.log("state", this.state.pictures);
    })
}

    render(){
        return(
    <div>
        {this.state.pictures}
    </div>
        );
    };
}
export default TestOrders;
