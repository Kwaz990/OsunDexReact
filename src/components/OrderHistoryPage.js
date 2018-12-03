import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';




class OrderHistoryPage extends Component {
    render(){
        return(
    <div>

    <stencil-route ssrc="0.3." ssrv="8" class="hydrated">
    <bamboo-orders class="hydrated">
        <div>
            <div class="page-tabs">
                <stencil-route-link class="page-tab-stencil hydrated"><a class="link-active" href="/orders">Orders</a></stencil-route-link>
                <stencil-route-link class="page-tab-stencil hydrated"><a class="" href="/orders/funding">Funding</a></stencil-route-link>
                <stencil-route-link class="page-tab-stencil hydrated"><a class="" href="/orders/transactions">Transactions</a></stencil-route-link>
            </div>
            <div>
                <h3>Open Orders</h3>
                <div class="order-table no-minimum history">
                    <table>
                        <thead>
                            <tr class="no-select last-row">
                                <th class="time down">TIME</th>
                                <th class="token">TOKEN</th>
                                <th class="type">TYPE</th>
                                <th class="hide-xs price">Price (WETH)</th>
                                <th class="amount text-right">AMOUNT</th>
                                <th class="total text-right">WETH</th>
                                <th class="total text-right">STATUS</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
                <h3>Order History</h3>
                <div class="order-table no-minimum my-orders">
                    <table>
                        <thead>
                            <tr class="no-select last-row">
                                <th class="time down">TIME</th>
                                <th class="token">TOKEN</th>
                                <th class="type">TYPE</th>
                                <th class="hide-xs type">SIDE</th>
                                <th class="hide-xs price">Price (WETH)</th>
                                <th class="amount text-right">AMOUNT</th>
                                <th class="total text-right">WETH</th>
                                <th class="total text-right">STATUS</th>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </bamboo-orders>
</stencil-route>




    </div>
        );
    };
}
export default OrderHistoryPage;
