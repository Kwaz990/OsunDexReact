"use strict";
exports.__esModule = true;
var abi_gen_wrappers_1 = require("@0x/abi-gen-wrappers");
var contract_addresses_1 = require("@0x/contract-addresses");
var contract_artifacts_1 = require("@0x/contract-artifacts");
var configs_1 = require("./configs");
var provider_engine_1 = require("./provider_engine");
// The deployed addresses from the Ganache snapshot
var GANACHE_ERC721_TOKENS = ['0x131855dda0aaff096f6854854c55a4debf61077a'];
var GANACHE_CONTRACT_ADDRESSES = {
    exchange: '0x48bacb9266a570d521063ef5dd96e61686dbe788',
    erc20Proxy: '0x1dc4c1cefef38a777b15aa20260a54e584b16c48',
    erc721Proxy: '0x1d7022f5b17d2f8b695918fb48fa1089c9f85401',
    zrxToken: '0x871dd7c2b4b25e1aa18728e9d5f2af4c4e431f5c',
    etherToken: '0x0b1ba0af832d7c05fd64161e0db78e85978e8082',
    assetProxyOwner: '0x34d402f14d58e001d8efbe6585051bf9706aa064',
    forwarder: '0xb69e673309512a9d726f87304c6984054f87a93b',
    orderValidator: '0xe86bb98fcf9bff3512c74589b78fb168200cc546'
};
exports.dummyERC721TokenContracts = [];
if (configs_1.NETWORK_CONFIGS.networkId === configs_1.GANACHE_CONFIGS.networkId) {
    for (var _i = 0, GANACHE_ERC721_TOKENS_1 = GANACHE_ERC721_TOKENS; _i < GANACHE_ERC721_TOKENS_1.length; _i++) {
        var tokenAddress = GANACHE_ERC721_TOKENS_1[_i];
        exports.dummyERC721TokenContracts.push(new abi_gen_wrappers_1.DummyERC721TokenContract(contract_artifacts_1.DummyERC721Token.compilerOutput.abi, tokenAddress, provider_engine_1.providerEngine));
    }
}
/**
 * Returns the deployed contract addresses for the network. Including the Ganache Snapshot
 * networkId: 50
 * @param networkId  the id of the network (1 == Mainnet, 3 == Ropsten, 42 == Kovan, 50 == Ganache)
 */
function getContractAddressesForNetwork(networkId) {
    if (networkId === configs_1.GANACHE_CONFIGS.networkId) {
        return GANACHE_CONTRACT_ADDRESSES;
    }
    else {
        var contractAddresses = contract_addresses_1.getContractAddressesForNetworkOrThrow(networkId);
        return contractAddresses;
    }
}
exports.getContractAddressesForNetwork = getContractAddressesForNetwork;
/**
 * Returns a constructed ContractWrappersConfig object for the given network.
 * @param networkId the id of the network
 */
function getContractWrappersConfig(networkId) {
    var contractAddresses = getContractAddressesForNetwork(networkId);
    var config = { networkId: networkId, contractAddresses: contractAddresses };
    return config;
}
exports.getContractWrappersConfig = getContractWrappersConfig;
//# sourceMappingURL=contracts.js.map