"use strict";
exports.__esModule = true;
var _0x_js_1 = require("0x.js");
var bodyParser = require("body-parser");
var express = require("express");
var configs_1 = require("./configs");
var constants_1 = require("./constants");
var provider_engine_1 = require("./provider_engine");
var HTTP_OK_STATUS = 200;
var HTTP_BAD_REQUEST_STATUS = 400;
var HTTP_PORT = 3000;
// Global state
var orders = [];
var ordersByHash = {};
// We subscribe to the Exchange Events to remove any filled or cancelled orders
var contractWrappers = new _0x_js_1.ContractWrappers(provider_engine_1.providerEngine, { networkId: configs_1.NETWORK_CONFIGS.networkId });
contractWrappers.exchange.subscribe(_0x_js_1.ExchangeEvents.Fill, {}, function (err, decodedLogEvent) {
    if (err) {
        console.log('error:', err);
    }
    else if (decodedLogEvent) {
        var fillLog = decodedLogEvent.log;
        var orderHash = fillLog.args.orderHash;
        console.log("Order filled " + fillLog.args.orderHash);
        removeOrder(orderHash);
    }
});
// Listen for Cancel Exchange Events and remove any orders
contractWrappers.exchange.subscribe(_0x_js_1.ExchangeEvents.Cancel, {}, function (err, decodedLogEvent) {
    if (err) {
        console.log('error:', err);
    }
    else if (decodedLogEvent) {
        var fillLog = decodedLogEvent.log;
        var orderHash = fillLog.args.orderHash;
        console.log("Order cancelled " + fillLog.args.orderHash);
        removeOrder(orderHash);
    }
});
// HTTP Server
var app = express();
app.use(bodyParser.json());
/**
 * GET Orderbook endpoint retrieves the orderbook for a given asset pair.
 * http://sra-spec.s3-website-us-east-1.amazonaws.com/#operation/getOrderbook
 */
app.get('/v2/orderbook', function (req, res) {
    console.log('HTTP: GET orderbook');
    var baseAssetData = req.query.baseAssetData;
    var quoteAssetData = req.query.quoteAssetData;
    var networkIdRaw = req.query.networkId;
    // tslint:disable-next-line:custom-no-magic-numbers
    var networkId = parseInt(networkIdRaw, 10);
    if (networkId !== configs_1.NETWORK_CONFIGS.networkId) {
        console.log("Incorrect Network ID: " + networkId);
        res.status(HTTP_BAD_REQUEST_STATUS).send({});
    }
    else {
        var orderbookResponse = renderOrderbookResponse(baseAssetData, quoteAssetData);
        res.status(HTTP_OK_STATUS).send(orderbookResponse);
    }
});
/**
 * POST Order config endpoint retrives the values for order fields that the relayer requires.
 * http://sra-spec.s3-website-us-east-1.amazonaws.com/#operation/getOrderConfig
 */
app.post('/v2/order_config', function (req, res) {
    console.log('HTTP: POST order config');
    var networkIdRaw = req.query.networkId;
    // tslint:disable-next-line:custom-no-magic-numbers
    var networkId = parseInt(networkIdRaw, 10);
    if (networkId !== configs_1.NETWORK_CONFIGS.networkId) {
        console.log("Incorrect Network ID: " + networkId);
        res.status(HTTP_BAD_REQUEST_STATUS).send({});
    }
    else {
        var orderConfigResponse = {
            senderAddress: constants_1.NULL_ADDRESS,
            feeRecipientAddress: constants_1.NULL_ADDRESS,
            makerFee: constants_1.ZERO,
            takerFee: '1000'
        };
        res.status(HTTP_OK_STATUS).send(orderConfigResponse);
    }
});
/**
 * POST Order endpoint submits an order to the Relayer.
 * http://sra-spec.s3-website-us-east-1.amazonaws.com/#operation/postOrder
 */
app.post('/v2/order', function (req, res) {
    console.log('HTTP: POST order');
    var networkIdRaw = req.query.networkId;
    // tslint:disable-next-line:custom-no-magic-numbers
    var networkId = parseInt(networkIdRaw, 10);
    if (networkId !== configs_1.NETWORK_CONFIGS.networkId) {
        console.log("Incorrect Network ID: " + networkId);
        res.status(HTTP_BAD_REQUEST_STATUS).send({});
    }
    else {
        var signedOrder = parseHTTPOrder(req.body);
        var orderHash = _0x_js_1.orderHashUtils.getOrderHashHex(signedOrder);
        ordersByHash[orderHash] = signedOrder;
        orders.push(signedOrder);
        res.status(HTTP_OK_STATUS).send({});
    }
});
app.listen(HTTP_PORT, function () { return console.log('Standard relayer API (HTTP) listening on port 3000!'); });
function renderOrderbookResponse(baseAssetData, quoteAssetData) {
    var bidOrders = orders.filter(function (order) {
        return order.takerAssetData === baseAssetData && order.makerAssetData === quoteAssetData;
    });
    var askOrders = orders.filter(function (order) {
        return order.takerAssetData === quoteAssetData && order.makerAssetData === baseAssetData;
    });
    var bidApiOrders = bidOrders.map(function (order) {
        return { metaData: {}, order: order };
    });
    var askApiOrders = askOrders.map(function (order) {
        return { metaData: {}, order: order };
    });
    return {
        bids: {
            records: bidApiOrders,
            page: 1,
            perPage: 100,
            total: bidOrders.length
        },
        asks: {
            records: askApiOrders,
            page: 1,
            perPage: 100,
            total: askOrders.length
        }
    };
}
// As the orders come in as JSON they need to be turned into the correct types such as BigNumber
function parseHTTPOrder(signedOrder) {
    signedOrder.salt = new _0x_js_1.BigNumber(signedOrder.salt);
    signedOrder.makerAssetAmount = new _0x_js_1.BigNumber(signedOrder.makerAssetAmount);
    signedOrder.takerAssetAmount = new _0x_js_1.BigNumber(signedOrder.takerAssetAmount);
    signedOrder.makerFee = new _0x_js_1.BigNumber(signedOrder.makerFee);
    signedOrder.takerFee = new _0x_js_1.BigNumber(signedOrder.takerFee);
    signedOrder.expirationTimeSeconds = new _0x_js_1.BigNumber(signedOrder.expirationTimeSeconds);
    return signedOrder;
}
function removeOrder(orderHash) {
    var order = ordersByHash[orderHash];
    var orderIndex = orders.indexOf(order);
    if (orderIndex > -1) {
        orders.splice(orderIndex, 1);
    }
}
//# sourceMappingURL=sra_server.js.map