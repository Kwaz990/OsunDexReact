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
exports.__esModule = true;
var _0x_js_1 = require("0x.js");
var web3_wrapper_1 = require("@0x/web3-wrapper");
var _ = require("lodash");
var ora = require("ora");
var constants_1 = require("./constants");
// tslint:disable-next-line:no-var-requires
var Table = require('cli-table');
var EMPTY_DATA = [];
var DEFAULT_EVENTS = ['Fill', 'Transfer', 'CancelUpTo', 'Cancel'];
var erc721IconRaw = [
    '    ____  ',
    '  .X +.    .',
    '.Xx + -.     .',
    'XXx++ -..      ',
    'XXxx++--..    ',
    " XXXxx+++--  ",
    "  XXXxxx'     ",
    '     ""     ',
];
var erc721Icon = erc721IconRaw.join('\n');
var defaultSchema = {
    style: {
        head: ['green']
    }
};
var borderlessSchema = __assign({}, defaultSchema, { chars: {
        top: '',
        'top-mid': '',
        'top-left': '',
        'top-right': '',
        bottom: '',
        'bottom-mid': '',
        'bottom-left': '',
        'bottom-right': '',
        left: '',
        'left-mid': '',
        mid: '',
        'mid-mid': '',
        right: '',
        'right-mid': '',
        middle: ' '
    }, style: { 'padding-left': 1, 'padding-right': 0, head: ['blue'] } });
var dataSchema = __assign({}, borderlessSchema, { style: { 'padding-left': 1, 'padding-right': 0, head: ['yellow'] } });
var PrintUtils = /** @class */ (function () {
    function PrintUtils(web3Wrapper, contractWrappers, accounts, tokens) {
        this._contractWrappers = contractWrappers;
        this._web3Wrapper = web3Wrapper;
        this._accounts = accounts;
        this._tokens = tokens;
        this._web3Wrapper.abiDecoder.addABI(contractWrappers.exchange.abi);
        this._web3Wrapper.abiDecoder.addABI(contractWrappers.erc20Token.abi);
        this._web3Wrapper.abiDecoder.addABI(contractWrappers.erc721Token.abi);
    }
    PrintUtils.printScenario = function (header) {
        var table = new Table(__assign({}, defaultSchema, { head: [header] }));
        PrintUtils.pushAndPrint(table, EMPTY_DATA);
    };
    PrintUtils.printData = function (header, tableData) {
        var table = new Table(__assign({}, dataSchema, { head: [header, ''] }));
        PrintUtils.pushAndPrint(table, tableData);
    };
    PrintUtils.printHeader = function (header) {
        var table = new Table(__assign({}, borderlessSchema, { style: { 'padding-left': 0, 'padding-right': 0, head: ['blue'] }, head: [header] }));
        console.log('');
        PrintUtils.pushAndPrint(table, EMPTY_DATA);
    };
    PrintUtils.pushAndPrint = function (table, tableData) {
        for (var _i = 0, tableData_1 = tableData; _i < tableData_1.length; _i++) {
            var col = tableData_1[_i];
            for (var i in col) {
                if (col[i] === constants_1.UNLIMITED_ALLOWANCE_IN_BASE_UNITS.toString()) {
                    col[i] = 'MAX_UINT';
                }
            }
            table.push(col);
        }
        console.log(table.toString());
    };
    PrintUtils.prototype.printAccounts = function () {
        var data = [];
        _.forOwn(this._accounts, function (address, name) {
            var accountName = name.charAt(0).toUpperCase() + name.slice(1);
            data.push([accountName, address]);
        });
        PrintUtils.printData('Accounts', data);
    };
    PrintUtils.prototype.fetchAndPrintContractBalancesAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var flattenedBalances, flattenedAccounts, _a, _b, _i, tokenSymbol, balances, tokenAddress, _c, _d, _e, account, address, balanceBaseUnits, balance, table;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        flattenedBalances = [];
                        flattenedAccounts = Object.keys(this._accounts).map(function (account) { return account.charAt(0).toUpperCase() + account.slice(1); });
                        _a = [];
                        for (_b in this._tokens)
                            _a.push(_b);
                        _i = 0;
                        _f.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        tokenSymbol = _a[_i];
                        balances = [tokenSymbol];
                        tokenAddress = this._tokens[tokenSymbol];
                        _c = [];
                        for (_d in this._accounts)
                            _c.push(_d);
                        _e = 0;
                        _f.label = 2;
                    case 2:
                        if (!(_e < _c.length)) return [3 /*break*/, 5];
                        account = _c[_e];
                        address = this._accounts[account];
                        return [4 /*yield*/, this._contractWrappers.erc20Token.getBalanceAsync(tokenAddress, address)];
                    case 3:
                        balanceBaseUnits = _f.sent();
                        balance = web3_wrapper_1.Web3Wrapper.toUnitAmount(balanceBaseUnits, constants_1.DECIMALS);
                        balances.push(balance.toString());
                        _f.label = 4;
                    case 4:
                        _e++;
                        return [3 /*break*/, 2];
                    case 5:
                        flattenedBalances.push(balances);
                        _f.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7:
                        table = new Table(__assign({}, dataSchema, { head: ['Token'].concat(flattenedAccounts) }));
                        PrintUtils.printHeader('Balances');
                        PrintUtils.pushAndPrint(table, flattenedBalances);
                        return [2 /*return*/];
                }
            });
        });
    };
    PrintUtils.prototype.fetchAndPrintContractAllowancesAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var erc20ProxyAddress, flattenedAllowances, flattenedAccounts, _a, _b, _i, tokenSymbol, allowances, tokenAddress, _c, _d, _e, account, address, balance, table;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0:
                        erc20ProxyAddress = this._contractWrappers.erc20Proxy.address;
                        flattenedAllowances = [];
                        flattenedAccounts = Object.keys(this._accounts).map(function (account) { return account.charAt(0).toUpperCase() + account.slice(1); });
                        _a = [];
                        for (_b in this._tokens)
                            _a.push(_b);
                        _i = 0;
                        _f.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        tokenSymbol = _a[_i];
                        allowances = [tokenSymbol];
                        tokenAddress = this._tokens[tokenSymbol];
                        _c = [];
                        for (_d in this._accounts)
                            _c.push(_d);
                        _e = 0;
                        _f.label = 2;
                    case 2:
                        if (!(_e < _c.length)) return [3 /*break*/, 5];
                        account = _c[_e];
                        address = this._accounts[account];
                        return [4 /*yield*/, this._contractWrappers.erc20Token.getAllowanceAsync(tokenAddress, address, erc20ProxyAddress)];
                    case 3:
                        balance = _f.sent();
                        allowances.push(balance.toString());
                        _f.label = 4;
                    case 4:
                        _e++;
                        return [3 /*break*/, 2];
                    case 5:
                        flattenedAllowances.push(allowances);
                        _f.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7:
                        table = new Table(__assign({}, dataSchema, { head: ['Token'].concat(flattenedAccounts) }));
                        PrintUtils.printHeader('Allowances');
                        PrintUtils.pushAndPrint(table, flattenedAllowances);
                        return [2 /*return*/];
                }
            });
        });
    };
    PrintUtils.prototype.awaitTransactionMinedSpinnerAsync = function (message, txHash) {
        return __awaiter(this, void 0, void 0, function () {
            var spinner, receipt, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        spinner = ora(message + ": " + txHash).start();
                        if (!spinner.isSpinning) {
                            console.log(message, txHash);
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this._web3Wrapper.awaitTransactionMinedAsync(txHash)];
                    case 2:
                        receipt = _a.sent();
                        receipt.status === 1 ? spinner.stop() : spinner.fail(message);
                        return [2 /*return*/, receipt];
                    case 3:
                        e_1 = _a.sent();
                        spinner.fail(message);
                        throw e_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    PrintUtils.prototype.printTransaction = function (header, txReceipt, data, eventNames) {
        if (data === void 0) { data = []; }
        if (eventNames === void 0) { eventNames = DEFAULT_EVENTS; }
        PrintUtils.printHeader('Transaction');
        var headerColor = txReceipt.status === 1 ? 'green' : 'red';
        var table = new Table(__assign({}, defaultSchema, { head: [header, txReceipt.transactionHash], style: __assign({}, defaultSchema.style, { head: [headerColor] }) }));
        // HACK gasUsed is actually a hex string sometimes
        // tslint:disable:custom-no-magic-numbers
        var gasUsed = txReceipt.gasUsed.toString().startsWith('0x')
            ? parseInt(txReceipt.gasUsed.toString(), 16).toString()
            : txReceipt.gasUsed;
        // tslint:enable:custom-no-magic-numbers
        var status = txReceipt.status === 1 ? 'Success' : 'Failure';
        var tableData = data.concat([['gasUsed', gasUsed.toString()], ['status', status]]);
        PrintUtils.pushAndPrint(table, tableData);
        if (txReceipt.logs.length > 0) {
            PrintUtils.printHeader('Logs');
            for (var _i = 0, _a = txReceipt.logs; _i < _a.length; _i++) {
                var log = _a[_i];
                var decodedLog = this._web3Wrapper.abiDecoder.tryToDecodeLogOrNoop(log);
                // tslint:disable:no-unnecessary-type-assertion
                var event = log.event;
                if (event && eventNames.includes(event)) {
                    // tslint:disable:no-unnecessary-type-assertion
                    var args = decodedLog.args;
                    var logData = [['contract', log.address]].concat(Object.entries(args));
                    PrintUtils.printData("" + event, logData);
                }
            }
        }
    };
    // tslint:disable-next-line:prefer-function-over-method
    PrintUtils.prototype.printOrderInfos = function (orderInfos) {
        var data = [];
        _.forOwn(orderInfos, function (value, key) { return data.push([key, _0x_js_1.OrderStatus[value.orderStatus]]); });
        PrintUtils.printData('Order Info', data);
    };
    // tslint:disable-next-line:prefer-function-over-method
    PrintUtils.prototype.printOrder = function (order) {
        PrintUtils.printData('Order', Object.entries(order));
    };
    PrintUtils.prototype.fetchAndPrintERC721OwnerAsync = function (erc721TokenAddress, tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var flattenedBalances, flattenedAccounts, tokenSymbol, balances, owner, account, address, balance, table;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        flattenedBalances = [];
                        flattenedAccounts = Object.keys(this._accounts).map(function (account) { return account.charAt(0).toUpperCase() + account.slice(1); });
                        tokenSymbol = 'ERC721';
                        balances = [tokenSymbol];
                        return [4 /*yield*/, this._contractWrappers.erc721Token.getOwnerOfAsync(erc721TokenAddress, tokenId)];
                    case 1:
                        owner = _a.sent();
                        for (account in this._accounts) {
                            address = this._accounts[account];
                            balance = owner === address ? erc721Icon : '';
                            balances.push(balance);
                        }
                        flattenedBalances.push(balances);
                        table = new Table(__assign({}, dataSchema, { head: ['Token'].concat(flattenedAccounts) }));
                        PrintUtils.printHeader('ERC721 Owner');
                        PrintUtils.pushAndPrint(table, flattenedBalances);
                        return [2 /*return*/];
                }
            });
        });
    };
    return PrintUtils;
}());
exports.PrintUtils = PrintUtils;
//# sourceMappingURL=print_utils.js.map