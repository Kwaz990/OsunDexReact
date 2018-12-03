import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';



class BuyOrders extends Component {
    render(){
        return(
    <div>
<div class="half order-input first">
    <h3>Buy Orders</h3>
    <div class="order-table">
        <table>
            <thead>
                <tr class="no-select">
                    <th class="down price"><span class="hide-xs">Price (WETH)</span><span class="show-xs">PRICE</span></th>
                    <th class="amount text-right">ZRX</th>
                    <th class="total text-right">WETH</th>
                </tr>
            </thead>
            <tbody>
                <tr data-type="b" data-order="168030" class="">
                    <td class="price">
                        <div></div>0.00354200
                    </td>
                    <td class="amount text-right">2.50000000</td>
                    <td class="total">0.00885500</td>
                </tr>
                <tr data-type="b" data-order="177276" class="">
                    <td class="price">
                        <div></div>0.00348001
                    </td>
                    <td class="amount text-right">29.00000000</td>
                    <td class="total">0.10092029</td>
                </tr>
                <tr data-type="b" data-order="176191" class="">
                    <td class="price">
                        <div></div>0.00348000
                    </td>
                    <td class="amount text-right">300.00000000</td>
                    <td class="total">1.04400000</td>
                </tr>
                <tr data-type="b" data-order="177280" class="">
                    <td class="price">
                        <div></div>0.00347091
                    </td>
                    <td class="amount text-right">1440.54410785</td>
                    <td class="total">5.00000000</td>
                </tr>
                <tr data-type="b" data-order="177284" class="">
                    <td class="price">
                        <div></div>0.00345649
                    </td>
                    <td class="amount text-right">2893.10582121</td>
                    <td class="total">10.00000000</td>
                </tr>
                <tr data-type="b" data-order="177286" class="">
                    <td class="price">
                        <div></div>0.00345316
                    </td>
                    <td class="amount text-right">2027.12501773</td>
                    <td class="total">6.99999999</td>
                </tr>
                <tr data-type="b" data-order="177273" class="">
                    <td class="price">
                        <div></div>0.00345183
                    </td>
                    <td class="amount text-right">2027.90777080</td>
                    <td class="total">6.99999999</td>
                </tr>
                <tr data-type="b" data-order="177283" class="">
                    <td class="price">
                        <div></div>0.00343917
                    </td>
                    <td class="amount text-right">2907.67043295</td>
                    <td class="total">10.00000000</td>
                </tr>
                <tr data-type="b" data-order="177275" class="">
                    <td class="price">
                        <div></div>0.00343654
                    </td>
                    <td class="amount text-right">4734.10382470</td>
                    <td class="total">16.26894415</td>
                </tr>
                <tr data-type="b" data-order="177265" class="">
                    <td class="price">
                        <div></div>0.00332165
                    </td>
                    <td class="amount text-right">30.10546546</td>
                    <td class="total">0.10000000</td>
                </tr>
                <tr data-type="b" data-order="154736" class="">
                    <td class="price">
                        <div></div>0.00323430
                    </td>
                    <td class="amount text-right">67.26829844</td>
                    <td class="total">0.21756585</td>
                </tr>
                <tr data-type="b" data-order="137714" class="">
                    <td class="price">
                        <div></div>0.00000010
                    </td>
                    <td class="amount text-right">100000.00000000</td>
                    <td class="total">0.01000000</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
    </div>
        );
    };
}
export default BuyOrders;
