import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';




class SellOrders extends Component {
    render(){
        return(
      <div>
          <div class="half order-input last">
    <h3>Sell Orders</h3>
    <div class="order-table">
        <table>
            <thead>
                <tr class="no-select">
                    <th class="up price"><span class="hide-xs">Price (WETH)</span><span class="show-xs">PRICE</span></th>
                    <th class="amount text-right">ZRX</th>
                    <th class="total text-right">WETH</th>
                </tr>
            </thead>
            <tbody>
                <tr data-type="s" data-order="177281" class="">
                    <td class="price"><span></span><span></span>0.00354229</td>
                    <td class="amount text-right">1411.51447266</td>
                    <td class="total">5.00000000</td>
                </tr>
                <tr data-type="s" data-order="177282" class="">
                    <td class="price"><span></span><span></span>0.00356422</td>
                    <td class="amount text-right">2805.65815146</td>
                    <td class="total">10.00000000</td>
                </tr>
                <tr data-type="s" data-order="177285" class="">
                    <td class="price"><span></span><span></span>0.00357180</td>
                    <td class="amount text-right">2799.70716843</td>
                    <td class="total">10.00000000</td>
                </tr>
                <tr data-type="s" data-order="177277" class="">
                    <td class="price"><span></span><span></span>0.00357998</td>
                    <td class="amount text-right">1955.31415153</td>
                    <td class="total">6.99999999</td>
                </tr>
                <tr data-type="s" data-order="177274" class="">
                    <td class="price"><span></span><span></span>0.00358910</td>
                    <td class="amount text-right">3343.45008424</td>
                    <td class="total">12.00000000</td>
                </tr>
                <tr data-type="s" data-order="177279" class="">
                    <td class="price"><span></span><span></span>0.00359307</td>
                    <td class="amount text-right">6008.88212631</td>
                    <td class="total">21.59038088</td>
                </tr>
                <tr data-type="s" data-order="166155" class="">
                    <td class="price"><span></span><span></span>0.00365740</td>
                    <td class="amount text-right">72.72858872</td>
                    <td class="total">0.26599754</td>
                </tr>
                <tr data-type="s" data-order="177272" class="">
                    <td class="price"><span></span><span></span>0.00367130</td>
                    <td class="amount text-right">27.23827827</td>
                    <td class="total">0.10000000</td>
                </tr>
                <tr data-type="s" data-order="154335" class="">
                    <td class="price"><span></span><span></span>0.42339999</td>
                    <td class="amount text-right">1533.40128487</td>
                    <td class="total">649.24210401</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>



    </div>
        );
    };
}
export default SellOrders;
