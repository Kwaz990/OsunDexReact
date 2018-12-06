"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var _0x_js_1 = require("0x.js");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var configs_1 = require("../configs");
var constants_1 = require("../constants");
var contracts_1 = require("../contracts");
var print_utils_1 = require("../print_utils");
var provider_engine_1 = require("../provider_engine");
var utils_1 = require("../utils");
/**
 * In this scenario, the maker creates and signs an order for selling an ERC721 token for WETH.
 * The taker fills it via the 0x Exchange contract.
 */
function scenarioAsync() {
    return __awaiter(this, void 0, void 0, function () {
        var contractWrappers, contractAddresses, etherTokenAddress, dummyERC721TokenContract, web3Wrapper, _a, maker, taker, printUtils, makerAssetAmount, takerAssetAmount, tokenId, makerAssetData, takerAssetData, txHash, mintTxHash, makerERC721ApprovalTxHash, takerWETHApprovalTxHash, takerWETHDepositTxHash, randomExpiration, exchangeAddress, order, orderHashHex, signature, signedOrder, txReceipt;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    print_utils_1.PrintUtils.printScenario('Fill Order ERC721');
                    contractWrappers = new _0x_js_1.ContractWrappers(provider_engine_1.providerEngine, contracts_1.getContractWrappersConfig(configs_1.NETWORK_CONFIGS.networkId));
                    contractAddresses = contracts_1.getContractAddressesForNetwork(configs_1.NETWORK_CONFIGS.networkId);
                    etherTokenAddress = contractAddresses.etherToken;
                    dummyERC721TokenContract = contracts_1.dummyERC721TokenContracts[0];
                    if (!dummyERC721TokenContract) {
                        console.log('No Dummy ERC721 Tokens deployed on this network');
                        return [2 /*return*/];
                    }
                    web3Wrapper = new web3_wrapper_1.Web3Wrapper(provider_engine_1.providerEngine);
                    return [4 /*yield*/, web3Wrapper.getAvailableAddressesAsync()];
                case 1:
                    _a = _b.sent(), maker = _a[0], taker = _a[1];
                    printUtils = new print_utils_1.PrintUtils(web3Wrapper, contractWrappers, { maker: maker, taker: taker }, { WETH: etherTokenAddress });
                    printUtils.printAccounts();
                    makerAssetAmount = new _0x_js_1.BigNumber(1);
                    takerAssetAmount = web3_wrapper_1.Web3Wrapper.toBaseUnitAmount(new _0x_js_1.BigNumber(0.1), constants_1.DECIMALS);
                    tokenId = _0x_js_1.generatePseudoRandomSalt();
                    makerAssetData = _0x_js_1.assetDataUtils.encodeERC721AssetData(dummyERC721TokenContract.address, tokenId);
                    takerAssetData = _0x_js_1.assetDataUtils.encodeERC20AssetData(etherTokenAddress);
                    return [4 /*yield*/, dummyERC721TokenContract.mint.sendTransactionAsync(maker, tokenId, { from: maker })];
                case 2:
                    mintTxHash = _b.sent();
                    return [4 /*yield*/, printUtils.awaitTransactionMinedSpinnerAsync('Mint ERC721 Token', mintTxHash)];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, contractWrappers.erc721Token.setProxyApprovalForAllAsync(dummyERC721TokenContract.address, maker, true)];
                case 4:
                    makerERC721ApprovalTxHash = _b.sent();
                    return [4 /*yield*/, printUtils.awaitTransactionMinedSpinnerAsync('Maker ERC721 Approval', makerERC721ApprovalTxHash)];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, contractWrappers.erc20Token.setUnlimitedProxyAllowanceAsync(etherTokenAddress, taker)];
                case 6:
                    takerWETHApprovalTxHash = _b.sent();
                    return [4 /*yield*/, printUtils.awaitTransactionMinedSpinnerAsync('Taker WETH Approval', takerWETHApprovalTxHash)];
                case 7:
                    _b.sent();
                    return [4 /*yield*/, contractWrappers.etherToken.depositAsync(etherTokenAddress, takerAssetAmount, taker)];
                case 8:
                    takerWETHDepositTxHash = _b.sent();
                    return [4 /*yield*/, printUtils.awaitTransactionMinedSpinnerAsync('Taker WETH Deposit', takerWETHDepositTxHash)];
                case 9:
                    _b.sent();
                    print_utils_1.PrintUtils.printData('Setup', [
                        ['Mint ERC721', mintTxHash],
                        ['Maker ERC721 Approval', makerERC721ApprovalTxHash],
                        ['Taker WETH Approval', takerWETHApprovalTxHash],
                        ['Taker WETH Deposit', takerWETHDepositTxHash],
                    ]);
                    randomExpiration = utils_1.getRandomFutureDateInSeconds();
                    exchangeAddress = contractAddresses.exchange;
                    order = {
                        exchangeAddress: exchangeAddress,
                        makerAddress: maker,
                        takerAddress: constants_1.NULL_ADDRESS,
                        senderAddress: constants_1.NULL_ADDRESS,
                        feeRecipientAddress: constants_1.NULL_ADDRESS,
                        expirationTimeSeconds: randomExpiration,
                        salt: _0x_js_1.generatePseudoRandomSalt(),
                        makerAssetAmount: makerAssetAmount,
                        takerAssetAmount: takerAssetAmount,
                        makerAssetData: makerAssetData,
                        takerAssetData: takerAssetData,
                        makerFee: constants_1.ZERO,
                        takerFee: constants_1.ZERO
                    };
                    printUtils.printOrder(order);
                    // Print out the Balances and Allowances
                    return [4 /*yield*/, printUtils.fetchAndPrintContractAllowancesAsync()];
                case 10:
                    // Print out the Balances and Allowances
                    _b.sent();
                    return [4 /*yield*/, printUtils.fetchAndPrintContractBalancesAsync()];
                case 11:
                    _b.sent();
                    return [4 /*yield*/, printUtils.fetchAndPrintERC721OwnerAsync(dummyERC721TokenContract.address, tokenId)];
                case 12:
                    _b.sent();
                    orderHashHex = _0x_js_1.orderHashUtils.getOrderHashHex(order);
                    return [4 /*yield*/, _0x_js_1.signatureUtils.ecSignHashAsync(provider_engine_1.providerEngine, orderHashHex, maker)];
                case 13:
                    signature = _b.sent();
                    signedOrder = __assign({}, order, { signature: signature });
                    return [4 /*yield*/, contractWrappers.exchange.fillOrderAsync(signedOrder, takerAssetAmount, taker, {
                            gasLimit: configs_1.TX_DEFAULTS.gas
                        })];
                case 14:
                    // Fill the Order via 0x.js Exchange contract
                    txHash = _b.sent();
                    return [4 /*yield*/, printUtils.awaitTransactionMinedSpinnerAsync('fillOrder', txHash)];
                case 15:
                    txReceipt = _b.sent();
                    printUtils.printTransaction('fillOrder', txReceipt, [['orderHash', orderHashHex]]);
                    // Print the Balances
                    return [4 /*yield*/, printUtils.fetchAndPrintContractBalancesAsync()];
                case 16:
                    // Print the Balances
                    _b.sent();
                    return [4 /*yield*/, printUtils.fetchAndPrintERC721OwnerAsync(dummyERC721TokenContract.address, tokenId)];
                case 17:
                    _b.sent();
                    // Stop the Provider Engine
                    provider_engine_1.providerEngine.stop();
                    return [2 /*return*/];
            }
        });
    });
}
exports.scenarioAsync = scenarioAsync;
void (function () { return __awaiter(_this, void 0, void 0, function () {
    var e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!!module.parent) return [3 /*break*/, 2];
                return [4 /*yield*/, scenarioAsync()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [3 /*break*/, 4];
            case 3:
                e_1 = _a.sent();
                console.log(e_1);
                provider_engine_1.providerEngine.stop();
                process.exit(1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); })();
//# sourceMappingURL=fill_order_erc721.js.map