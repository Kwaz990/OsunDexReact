import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';



class Buy extends Component {
    constructor(props) {
      super(props);
      this.state = {
        color: 'blue',
        bool: 'False',
        Amount: 0.00,
        Price: 0.00
      };
      this.handleAmountChange = this.handleAmountChange.bind(this);
      this.handlePriceChange = this.handlePriceChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.onButtonClick = this.onButtonClick.bind(this);
    }
    handleAmountChange(event) {
      const val = event.target.value;
      this.setState(() => ({
        Amount: val
      }));
    }
    handlePriceChange(event) {
      const val = event.target.value;
      this.setState(() => ({
        Price: val
      }));
    }
  
    onButtonClick() {
      this.setState(() => ({
        color:'green',
        bool: 'True',
       // shell.exec('yarn scenario:fill_order_erc20'),
       //console.log(command succesfully executed!)
      }))
    }
  
    handleSubmit(event) {
      event.preventDefault();
      /*this.props.onButtonClick({
        Amount: this.state.Amount,
        Price: this.state.Price
      });*/
      this.setState(() => ({
        Amount: '',
        Price: ''
      }));
    }
    render() {
      return (
        <div>
        <form onSubmit ={this.handleSubmit} className ="Buy">
          <input 
            value={this.state.Amount}
            onChange={this.handleAmountChange}
            placeholder="Amount of Crypto to Buy"
            type="number"
            />
          <input 
            value={this.state.Price}
            onChange={this.handlePriceChange}
            placeholder="Buy Price"
            typer="number"
            />
          <button onClick={this.onButtonClick} type="submit">Buy</button>
        </form>
        </div>
      );
    }; 
  }
  export default Buy