import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';

import {
    assetDataUtils,
    BigNumber,
    ContractWrappers,
    generatePseudoRandomSalt,
    Order,
    orderHashUtils,
    signatureUtils,
} from '0x.js';
import { Web3Wrapper } from '@0x/web3-wrapper';

import { NETWORK_CONFIGS, TX_DEFAULTS } from '../configs';
import { DECIMALS, NULL_ADDRESS, ZERO } from '../constants';
import { getContractAddressesForNetwork, getContractWrappersConfig } from '../contracts';
import { PrintUtils } from '../print_utils';
import { providerEngine } from '../provider_engine';
import { getRandomFutureDateInSeconds } from '../utils';
import { scenarioAsync as fillOrderERC20 } from '../scenarios/fill_order_erc20';



class BuyBox extends Component {
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
        void (async () => {
          try {
            await fillOrderERC20();
          } catch (e) {
            console.log(e);
            providerEngine.stop();
          //  process.exit(1);
          }
        })();
        
       // shell.exec('yarn scenario:fill_order_erc20'),
        this.setState(() => ({
          color:'green',
          bool: 'True',
        }));
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

    render(){
        return(
            <div>
            <div class="trade-box">
                    <div class="input-cont"><label for="buyPrice"><span class="label">Price:</span></label>
                        <div class="field no-select"><input type="text" name="buyPrice" id="buyPrice" class="token-input"
                            autocomplete="off" />
                            <div class="input-tip">$0.4143</div>
                            <div class="field-token"><span class="ilb">WETH</span></div>
            </div>
                        </div>
                        <div class="input-cont"><label for="buyAmount"><span class="label">Amount:</span></label></div>
                            <div class="field no-select"><input type="text" name="buyAmount" id="buyAmount" class="token-input"
                                autocomplete="off" />
                                <div class="field-tip right">
                                    <div class="ilb">Max Amount<br/>0</div>
                                    </div>
                                    <div class="field-token"><span class="ilb">ZRX</span></div>
                                </div>
        </div>
                                <div class="amount-wrap"> 
                                    <div class="spacer"></div>
                                    <div class="amount-buttons"><button class="amount-button">25%</button><button class="amount-button">50%</button><button
                                        class="amount-button">75%</button><button class="amount-button last">100%</button></div>
                                </div>
                                <div><span class="label">Total:</span>
                                    <div class="wrap"><span class="txt">0.00000000<span> WETH</span> <span class="total-calc">($0.0000)</span><span></span></span></div>
                                </div>
                                <div><span class="label">Trading Fee:</span>
                                    <div class="wrap"><span class="txt">0.00000000 ZRX <span class="total-calc">(0.00%)</span></span></div>
                                </div>
                                <div class="no-select advanced" title="Advanced Order Options">+ Advanced</div>
                                <div class="advanced-options">
                                    <div class="input-cont"><label for="buyGas"><span class="label">Gas Price:</span></label>
                                        <div class="field no-select"><input type="text" name="buyGas" id="buyGas" class="token-input"
                                            autocomplete="off" />
                                            <div class="field-token"><span class="ilb">GWEI</span></div>
                </div>
                                        </div>
                                        <div class="input-cont"><label for="buyExpiry"><span class="label">Order Expiry:</span></label>
                                            <div class="field no-select"><input type="text" name="buyExpiry" id="buyExpiry" class="token-input"
                                                autocomplete="off" />
                                                <div class="field-tip right">
                                                    <div class="ilb">5 HOURS</div>
                                                </div>
                                                <div class="field-token"><span class="ilb">MIN</span></div>
                </div>
                                            </div>
                                            <div></div>
                                        </div>  
                                        <button onClick={this.onButtonClick} type="button" class="trade-button disabled">Place Buy Order</button>
                                        </div>
        );
    };
}

export default BuyBox;
