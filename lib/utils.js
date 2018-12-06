"use strict";
exports.__esModule = true;
var _0x_js_1 = require("0x.js");
var constants_1 = require("./constants");
/**
 * Returns an amount of seconds that is greater than the amount of seconds since epoch.
 */
exports.getRandomFutureDateInSeconds = function () {
    return new _0x_js_1.BigNumber(Date.now() + constants_1.TEN_MINUTES_MS).div(constants_1.ONE_SECOND_MS).ceil();
};
//# sourceMappingURL=utils.js.map