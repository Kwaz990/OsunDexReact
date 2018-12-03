import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import { Web3Provider } from 'react-web3';



class DashboardContainer extends Component {
    constructor() {
      super()
      this.state = {
        listings: [],
        ticker: [],
        global: []
      }
    }
  
    // callAPIsContinously() {
    //   console.log("Hello!!!");
    //
    //   setInterval( () => {
    //     api.getTicker().then(response => this.setState({
    //       ticker: Object.values(response) //converting object into array
    //     }))}, 2000)
    //
    //   setInterval( () => {
    //     api.getGlobal().then(response => this.setState({
    //       global: Object.values(response) //converting object into array
    //     }))}, 2000)
    //
    //     setInterval(function(){ console.log("Hello again!!!"); }, 1000)
    //   }
  
  
    //componentDidMount() {
     // console.log('componentDidMount, making API calls...')
  
      // this.callAPIsContinously()
  /*
      api.getTicker()
      .then(response => this.setState({
        ticker: Object.values(response) //converting object into array
      }))
  */
  /*
      api.getGlobal()
      .then(response => this.setState({
        global: Object.values(response) //converting object into array
      }))
      console.log('step 2, setting state with responses from API call promises...')
    }
  */
   /* scrollToTop() {
      console.log('scrollToTop called...')
      window.scrollTo(0, 0)
      window.history.pushState("object or string", "Title", "/");
    }
    
   */
    render() {
      console.log('this.state is: ' , this.state)
      return (
        <div className="center">
        <Web3Provider>
          <header className="DashboardContainer-header">
            <h1>Welcome to Osun DEX</h1>
            <p>Trade ERC20 tokens directly from your wallet</p>
          </header>
          <p className="DashboardContainer-intro">
          </p>

<div class="markets">
    <div class="table">
        <div class="field"><input type="text" class="filter-tokens" placeholder="Search" name="tokenFilter"
                autocomplete="off" aria-label="Search" /><span></span></div>
        <div class="header no-select">
            <div class="coin">Coin</div>
            <div class="price">Price</div>
            <div class="down orders">Orders</div>
            <div class="change">Change</div>
            <div class="volume">Volume</div>
        </div>
        <div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/DAI-WETH"><span class="coin" title="Dai Stablecoin v1.0">
                            <div class="token-icon"><img src="/assets/tokens/img/dai.svg" title="DAI" class="token-field-img"
                                    decoding="async" /></div>DAI
                        </span><span class="price"><span>0.00869843</span></span><span class="orders" title="40">40</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="">
                <stencil-route-link class="hydrated"><a class="" href="/trade/BAT-WETH"><span class="coin" title="Basic Attention Token">
                            <div class="token-icon"><img src="/assets/tokens/img/bat.svg" title="BAT" class="token-field-img"
                                    decoding="async" /></div>BAT
                        </span><span class="price"><span>0.00157508</span></span><span class="orders" title="30">30</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/SPANK-WETH"><span class="coin" title="SpankChain">
                            <div class="token-icon"><img src="/assets/tokens/img/spank.webp" title="SPANK" class="token-field-img"
                                    decoding="async" /></div>SPANK
                        </span><span class="price"><span>0.00024114</span></span><span class="orders" title="26">26</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="">
                <stencil-route-link class="hydrated"><a class="" href="/trade/MKR-WETH"><span class="coin" title="Maker">
                            <div class="token-icon"><img src="/assets/tokens/img/mkr.svg" title="MKR" class="token-field-img"
                                    decoding="async" /></div>MKR
                        </span><span class="price"><span>3.29900000</span></span><span class="orders" title="18">18</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/OMG-WETH"><span class="coin" title="OmiseGO">
                            <div class="token-icon"><img src="/assets/tokens/img/omg.svg" title="OMG" class="token-field-img"
                                    decoding="async" /></div>OMG
                        </span><span class="price"><span>0.01464500</span></span><span class="orders" title="17">17</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="">
                <stencil-route-link class="hydrated"><a class="" href="/trade/ZRX-WETH"><span class="coin" title="0xProject">
                            <div class="token-icon"><img src="/assets/tokens/img/zrx.svg" title="ZRX" class="token-field-img"
                                    decoding="async" /></div>ZRX
                        </span><span class="price"><span>0.00346877</span></span><span class="orders" title="17">17</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/LPT-WETH"><span class="coin" title="Livepeer Token">
                            <div class="token-icon"><img src="/assets/tokens/img/lpt.webp" title="LPT" class="token-field-img"
                                    decoding="async" /></div>LPT
                        </span><span class="price"><span>0.02000110</span></span><span class="orders" title="15">15</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="">
                <stencil-route-link class="hydrated"><a class="" href="/trade/REQ-WETH"><span class="coin" title="Request Network">
                            <div class="token-icon"><img src="/assets/tokens/img/req.svg" title="REQ" class="token-field-img"
                                    decoding="async" /></div>REQ
                        </span><span class="price"><span>0.00022877</span></span><span class="orders" title="13">13</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/STM-WETH"><span class="coin" title="Storm">
                            <div class="token-icon"><img src="/assets/tokens/img/stm.svg" title="STM" class="token-field-img"
                                    decoding="async"/ ></div>STM
                        </span><span class="price"><span>0.00003787</span></span><span class="orders" title="13">13</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="">
                <stencil-route-link class="hydrated"><a class="" href="/trade/MANA-WETH"><span class="coin" title="Decentraland">
                            <div class="token-icon"><img src="/assets/tokens/img/mana.svg" title="MANA" class="token-field-img"
                                    decoding="async" /></div>MANA
                        </span><span class="price"><span>0.00055496</span></span><span class="orders" title="12">12</span><span
                            class="change" title="0.13%">0.13%</span><span class="volume" title="4.94132687">4.941</span></a></stencil-route-link>
            </div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/DNT-WETH"><span class="coin" title="district0x">
                            <div class="token-icon"><img src="/assets/tokens/img/dnt.webp" title="DNT" class="token-field-img"
                                    decoding="async"/></div>DNT
                        </span><span class="price"><span>0.00011946</span></span><span class="orders" title="11">11</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="">
                <stencil-route-link class="hydrated"><a class="" href="/trade/REP-WETH"><span class="coin" title="Augur">
                            <div class="token-icon"><img src="/assets/tokens/img/rep.svg" title="REP" class="token-field-img"
                                    decoding="async"/></div>REP
                        </span><span class="price"><span>0.07300000</span></span><span class="orders" title="11">11</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/SNT-WETH"><span class="coin" title="StatusNetwork">
                            <div class="token-icon"><img src="/assets/tokens/img/snt.svg" title="SNT" class="token-field-img"
                                    decoding="async"/></div>SNT
                        </span><span class="price"><span>0.00016378</span></span><span class="orders" title="11">11</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="">
                <stencil-route-link class="hydrated"><a class="" href="/trade/TVAL-WETH"><span class="coin" title="Alvalor">
                            <div class="token-icon"><img src="/assets/tokens/img/tval.webp" title="TVAL" class="token-field-img"
                                    decoding="async"/></div>TVAL
                        </span><span class="price"><span>0.00000000</span></span><span class="orders" title="11">11</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/DGD-WETH"><span class="coin" title="Digix DAO Token">
                            <div class="token-icon"><img src="/assets/tokens/img/dgd.webp" title="DGD" class="token-field-img"
                                    decoding="async"/></div>DGD
                        </span><span class="price"><span>0.16298559</span></span><span class="orders" title="10">10</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="">
                <stencil-route-link class="hydrated"><a class="" href="/trade/ZIL-WETH"><span class="coin" title="Zilliqa">
                            <div class="token-icon"><img src="/assets/tokens/img/zil.svg" title="ZIL" class="token-field-img"
                                    decoding="async"/></div>ZIL
                        </span><span class="price"><span>0.00015463</span></span><span class="orders" title="10">10</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/AMIS-WETH"><span class="coin" title="AMIS">
                            <div class="token-icon"><img src="/assets/tokens/img/amis.webp" title="AMIS" class="token-field-img"
                                    decoding="async"/></div>AMIS
                        </span><span class="price"><span>3.00000000</span></span><span class="orders" title="9">9</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="">
                <stencil-route-link class="hydrated"><a class="" href="/trade/HYDRO-WETH"><span class="coin" title="Hydro">
                            <div class="token-icon"><img src="/assets/tokens/img/hydro.webp" title="HYDRO" class="token-field-img"
                                    decoding="async"/></div>HYDRO
                        </span><span class="price"><span>0.00002500</span></span><span class="orders" title="9">9</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/MILL-WETH"><span class="coin" title="Millionaire">
                            <div class="token-icon-place"></div>MILL
                        </span><span class="price"><span>0.00000001</span></span><span class="orders" title="9">9</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="">
                <stencil-route-link class="hydrated"><a class="" href="/trade/ANT-WETH"><span class="coin" title="Aragon">
                            <div class="token-icon"><img src="/assets/tokens/img/ant.webp" title="ANT" class="token-field-img"
                                    decoding="async"/></div>ANT
                        </span><span class="price"><span>0.00372229</span></span><span class="orders" title="8">8</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/LINK-WETH"><span class="coin" title="ChainLink">
                            <div class="token-icon"><img src="/assets/tokens/img/link.svg" title="LINK" class="token-field-img"
                                    decoding="async"/></div>LINK
                        </span><span class="price"><span>0.00224719</span></span><span class="orders" title="8">8</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="">
                <stencil-route-link class="hydrated"><a class="" href="/trade/CRED-WETH"><span class="coin" title="Verify Token">
                            <div class="token-icon"><img src="/assets/tokens/img/cred.webp" title="CRED" class="token-field-img"
                                    decoding="async"/></div>CRED
                        </span><span class="price"><span>0.00027678</span></span><span class="orders" title="7">7</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/KNC-WETH"><span class="coin" title="Kyber Network Crystal">
                            <div class="token-icon"><img src="/assets/tokens/img/knc.svg" title="KNC" class="token-field-img"
                                    decoding="async"/></div>KNC
                        </span><span class="price"><span>0.00251136</span></span><span class="orders" title="6">6</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="">
                <stencil-route-link class="hydrated"><a class="" href="/trade/QSP-WETH"><span class="coin" title="QSP">
                            <div class="token-icon"><img src="/assets/tokens/img/qsp.webp" title="QSP" class="token-field-img"
                                    decoding="async"/></div>QSP
                        </span><span class="price"><span>0.00014904</span></span><span class="orders" title="6">6</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
            <div class="even">
                <stencil-route-link class="hydrated"><a class="" href="/trade/DGPT-WETH"><span class="coin" title="DigiPulse Token">
                            <div class="token-icon"><img src="/assets/tokens/img/dgpt.webp" title="DGPT" class="token-field-img"
                                    decoding="async"/></div>DGPT
                        </span><span class="price"><span>0.00000000</span></span><span class="orders" title="5">5</span><span
                            class="change" title="0.00%">0.00%</span><span class="volume" title="0">0.000</span></a></stencil-route-link>
            </div>
        </div>
        <div class="show-all">Show All 345 Tokens</div>
    </div>
</div>


  
        </Web3Provider>
        </div>
      );
    }
    };
  

export default DashboardContainer;




    
    
 