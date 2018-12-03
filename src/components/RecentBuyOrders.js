import React, { Component } from 'react';
import RecebtBuyData from '../test_data/RecentBuyData.json'


class RecentBuyOrders extends Component {
  render() {
    return (
      <div>
        <h1>Recent Buy Orders</h1>
        {RecebtBuyData.map((buyData, index) =>{
            return <div>
                <h1>{buyData.id}</h1>
                <p>{buyData.Time}</p>
                <p>{buyData.Amount}</p>
                <p>{buyData.Price}</p>
                </div>
        })}
      </div>
    );
  }
}

export default RecentBuyOrders;
