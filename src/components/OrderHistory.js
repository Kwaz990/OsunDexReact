import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';




class OrderHistory extends Component {
    render(){
        return(
      <div>
          <div class="order-table">
    <table>
        <thead>
            <tr class="no-select">
                <th class="time down">TIME</th>
                <th class="type">TYPE</th>
                <th class="price"><span class="hide-xs">Price (WETH)</span><span class="show-xs">PRICE</span></th>
                <th class="amount text-right">ZRX</th>
                <th class="total text-right">WETH</th>
            </tr>
        </thead>
        <tbody>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x0e301a3c5990e032339928d0c8bd1b466825ace95ea77a442139e961a19bb6a8"
                        target="_blank" title="View on Etherscan">12/2/2018, 6:06:09 PM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00346877</td>
                <td class="amount text-right">29.00000000</td>
                <td class="total text-right">0.10059434</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x0e301a3c5990e032339928d0c8bd1b466825ace95ea77a442139e961a19bb6a8"
                        target="_blank" title="View on Etherscan">12/2/2018, 6:06:09 PM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00354201</td>
                <td class="amount text-right">29.00000000</td>
                <td class="total text-right">0.10271829</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x7d592c27a2936f2838c5c292eb3e81459a02d4924a18140afa52f7393a3e7431"
                        target="_blank" title="View on Etherscan">12/2/2018, 6:05:38 PM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00346877</td>
                <td class="amount text-right">300.00000000</td>
                <td class="total text-right">1.04063112</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x7d592c27a2936f2838c5c292eb3e81459a02d4924a18140afa52f7393a3e7431"
                        target="_blank" title="View on Etherscan">12/2/2018, 6:05:38 PM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00348000</td>
                <td class="amount text-right">300.00000000</td>
                <td class="total text-right">1.04400000</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0xc819d0bf3edd05d515111bcf2de74bfca3773ab39b60bb8b7973ac5fa22d6fe6"
                        target="_blank" title="View on Etherscan">12/1/2018, 4:52:17 PM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00354200</td>
                <td class="amount text-right">212.96817391</td>
                <td class="total text-right">0.75433540</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x803742bd554aec76f5d423061c18ff2341c55eacd13636b6e4dcf738ea99accc"
                        target="_blank" title="View on Etherscan">12/1/2018, 1:45:28 PM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00358129</td>
                <td class="amount text-right">299.99999999</td>
                <td class="total text-right">1.07438999</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x1a8cd29d6e778eef46953ce30df0fe8d19e253f9f54d65cf81dff116cd2c0a55"
                        target="_blank" title="View on Etherscan">11/30/2018, 6:28:30 PM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00353382</td>
                <td class="amount text-right">1.00000000</td>
                <td class="total text-right">0.00353382</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x15f049af7da2728a98da8accdb925edcaca1ea19c966b6269aa5a21f474ac304"
                        target="_blank" title="View on Etherscan">11/30/2018, 5:57:11 PM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00356933</td>
                <td class="amount text-right">20.83333333</td>
                <td class="total text-right">0.07436111</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x45f205e146c38f650e445bdf631c095253d58760b233a291590a762c907a79ea"
                        target="_blank" title="View on Etherscan">11/30/2018, 12:48:09 PM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00365749</td>
                <td class="amount text-right">0.99999999</td>
                <td class="total text-right">0.00365749</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x83e14a5af19656e3ea88fa2fc4fa2a92df11b0380e66a65ff52f6b742a476c8e"
                        target="_blank" title="View on Etherscan">11/30/2018, 11:14:52 AM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00345376</td>
                <td class="amount text-right">9.00000000</td>
                <td class="total text-right">0.03108387</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x6af1a165382361ef248ff1d4d190e55963d99e83c4254b735a9c3fd6e7eecf59"
                        target="_blank" title="View on Etherscan">11/30/2018, 10:51:15 AM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00351681</td>
                <td class="amount text-right">109.99999999</td>
                <td class="total text-right">0.38684940</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x31e62f48e34ddfe60f2222f26c55121126a428240c921156a69b9243f3f33b25"
                        target="_blank" title="View on Etherscan">11/30/2018, 8:07:38 AM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00336599</td>
                <td class="amount text-right">5.00000000</td>
                <td class="total text-right">0.01682999</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x60b9c448af9deeeb85a8a952dda24b6ce5344ac132c845d067ea0ca64e441374"
                        target="_blank" title="View on Etherscan">11/30/2018, 7:08:04 AM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00378170</td>
                <td class="amount text-right">9.99999999</td>
                <td class="total text-right">0.03781699</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x32ac922dd7f5a644113aec3aecf323115ebd7c64f9220e7bd117dff526b7acf7"
                        target="_blank" title="View on Etherscan">11/30/2018, 7:08:04 AM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00378429</td>
                <td class="amount text-right">0.00000000</td>
                <td class="total text-right">0.00000000</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x9e9c1834703039d5f22305af931ff8a4933402895236d9e488aff28ad3e196fb"
                        target="_blank" title="View on Etherscan">11/30/2018, 1:23:50 AM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00355913</td>
                <td class="amount text-right">10.00000000</td>
                <td class="total text-right">0.03559130</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x9e9c1834703039d5f22305af931ff8a4933402895236d9e488aff28ad3e196fb"
                        target="_blank" title="View on Etherscan">11/30/2018, 1:23:50 AM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00338117</td>
                <td class="amount text-right">10.00000000</td>
                <td class="total text-right">0.03381174</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x8063054f13085679fc76583219970459f4ddd2a0e9116b2624f1b54bb7f4453b"
                        target="_blank" title="View on Etherscan">11/30/2018, 1:23:23 AM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00355913</td>
                <td class="amount text-right">2.50000000</td>
                <td class="total text-right">0.00889782</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x0a9d88a330851c631948380915fe0bfb6e5c693f76492391e2dfd1a40df0ae79"
                        target="_blank" title="View on Etherscan">11/30/2018, 12:52:44 AM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00360423</td>
                <td class="amount text-right">10.00000000</td>
                <td class="total text-right">0.03604237</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x0a9d88a330851c631948380915fe0bfb6e5c693f76492391e2dfd1a40df0ae79"
                        target="_blank" title="View on Etherscan">11/30/2018, 12:52:44 AM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00342402</td>
                <td class="amount text-right">10.00000000</td>
                <td class="total text-right">0.03424025</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x334c248a158676f097aab986c8e0bdf2aa3e8bb04a2f1b59755d23b5c3e0721e"
                        target="_blank" title="View on Etherscan">11/30/2018, 12:52:28 AM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00360423</td>
                <td class="amount text-right">2.50000000</td>
                <td class="total text-right">0.00901059</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x6bb7f099f39ecfb6de4eccb88598788d23d5545b8a7d62391199e45ed36697d6"
                        target="_blank" title="View on Etherscan">11/30/2018, 12:44:51 AM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00360518</td>
                <td class="amount text-right">10.00000000</td>
                <td class="total text-right">0.03605189</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x6bb7f099f39ecfb6de4eccb88598788d23d5545b8a7d62391199e45ed36697d6"
                        target="_blank" title="View on Etherscan">11/30/2018, 12:44:51 AM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00342493</td>
                <td class="amount text-right">10.00000000</td>
                <td class="total text-right">0.03424930</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x762afa023907f0f680e64f86768b6ff2d886f8012aa818c018a6b0f119656080"
                        target="_blank" title="View on Etherscan">11/30/2018, 12:44:35 AM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00360518</td>
                <td class="amount text-right">2.50000000</td>
                <td class="total text-right">0.00901297</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x91285be80ba027f7a413cd360c55d7decb24baec194872db6a0c3120f80d9739"
                        target="_blank" title="View on Etherscan">11/29/2018, 6:57:41 PM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00375994</td>
                <td class="amount text-right">24.99999999</td>
                <td class="total text-right">0.09399863</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x81616d6760f6d10359c8a80bccbc4033d9d03162f6de5e776616e4487284c5ef"
                        target="_blank" title="View on Etherscan">11/29/2018, 4:58:06 PM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00367647</td>
                <td class="amount text-right">78.16291481</td>
                <td class="total text-right">0.28736426</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x81616d6760f6d10359c8a80bccbc4033d9d03162f6de5e776616e4487284c5ef"
                        target="_blank" title="View on Etherscan">11/29/2018, 4:58:06 PM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00371020</td>
                <td class="amount text-right">78.16291481</td>
                <td class="total text-right">0.29000004</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0xd0278707d730eeeaab8f4515b82817bc4fe6b7ee44a8482f7cf5c07b2d4ff6bb"
                        target="_blank" title="View on Etherscan">11/29/2018, 12:33:40 PM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00377608</td>
                <td class="amount text-right">642.19963498</td>
                <td class="total text-right">2.42500000</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x558000b9fcbf55de1fb537d3801b1e9f9329c7eb6b4ca79c825c5647e5e6de84"
                        target="_blank" title="View on Etherscan">11/29/2018, 9:58:41 AM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00377552</td>
                <td class="amount text-right">2.99329026</td>
                <td class="total text-right">0.01130122</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0xae2b58811b59c9f9674f284f4640de3076a485fc614d7143e894949749f5c0da"
                        target="_blank" title="View on Etherscan">11/29/2018, 7:02:50 AM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00375100</td>
                <td class="amount text-right">0.15995693</td>
                <td class="total text-right">0.00060000</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x4cc28df7e6c17a1bdd4383232e39216f1a530a64bf6e5878c8e2d56002d25be6"
                        target="_blank" title="View on Etherscan">11/29/2018, 6:44:50 AM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00378972</td>
                <td class="amount text-right">5.00000000</td>
                <td class="total text-right">0.01894862</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x63410d1437a8ea54966f9e1f3d9519d0d3c9168b617634d55e6f8980c222e961"
                        target="_blank" title="View on Etherscan">11/29/2018, 6:42:02 AM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00386887</td>
                <td class="amount text-right">1.49999946</td>
                <td class="total text-right">0.00580330</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x69d0c585c485d5136d5d3b872079b65ee42c902a28d815d12e910dfb7f48857b"
                        target="_blank" title="View on Etherscan">11/29/2018, 6:34:17 AM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00375100</td>
                <td class="amount text-right">125.99999999</td>
                <td class="total text-right">0.47262722</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x9e9bf6b81384f2c525adefcf41f7723ad2f3f01305551e28fd32562a5628caf4"
                        target="_blank" title="View on Etherscan">11/29/2018, 4:18:17 AM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00366972</td>
                <td class="amount text-right">123.66666666</td>
                <td class="total text-right">0.45382220</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x8ff7eff6b1a607eab7bf7ed43954d48f07af31bf28359ffd8f88a5ce3dece906"
                        target="_blank" title="View on Etherscan">11/29/2018, 2:11:55 AM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00364175</td>
                <td class="amount text-right">2.49999999</td>
                <td class="total text-right">0.00910439</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0xa921943372865e8b2b54235987badcfb51279083fd360eb28bf285af1a96dcee"
                        target="_blank" title="View on Etherscan">11/29/2018, 1:47:52 AM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00363881</td>
                <td class="amount text-right">200.00000000</td>
                <td class="total text-right">0.72776283</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0xa921943372865e8b2b54235987badcfb51279083fd360eb28bf285af1a96dcee"
                        target="_blank" title="View on Etherscan">11/29/2018, 1:47:52 AM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00362220</td>
                <td class="amount text-right">200.00000000</td>
                <td class="total text-right">0.72444000</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0xda7774b859031899806bd7b16f0dca184368325df5588f78def4d8691b81e99a"
                        target="_blank" title="View on Etherscan">11/28/2018, 11:08:05 PM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00352742</td>
                <td class="amount text-right">100.00000000</td>
                <td class="total text-right">0.35274270</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x2993fea7500f4725d715d7c20abbaa2d9b42206de941bfbbb788f24f1ab3c47e"
                        target="_blank" title="View on Etherscan">11/28/2018, 7:50:40 PM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00363663</td>
                <td class="amount text-right">0.00003333</td>
                <td class="total text-right">0.00000012</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0xb0cee3b72de5f941a44591a0e9ff02594c5b135648062f1e4980c411d9d5a30d"
                        target="_blank" title="View on Etherscan">11/28/2018, 7:27:24 PM</a></td>
                <td class="type buy-type">BUY</td>
                <td class="price">0.00356000</td>
                <td class="amount text-right">455.00000000</td>
                <td class="total text-right">1.61980000</td>
            </tr>
            <tr data-type="h">
                <td class="time"><a rel="noopener" href="https://etherscan.io/tx/0x28c80061f35d8ac6690be0df44fa54f7af0c3e535527ca07fcce77299d4fb8a9"
                        target="_blank" title="View on Etherscan">11/28/2018, 6:47:01 PM</a></td>
                <td class="type sell-type">SELL</td>
                <td class="price">0.00348144</td>
                <td class="amount text-right">600.00000000</td>
                <td class="total text-right">2.08886428</td>
            </tr>
        </tbody>
    </table>
</div>


    </div>
        );
    };
}
export default OrderHistory;
