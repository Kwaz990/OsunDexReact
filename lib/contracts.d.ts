import { ContractWrappersConfig } from '0x.js';
import { DummyERC721TokenContract } from '@0x/abi-gen-wrappers';
import { ContractAddresses } from '@0x/contract-addresses';
export declare const dummyERC721TokenContracts: DummyERC721TokenContract[];
/**
 * Returns the deployed contract addresses for the network. Including the Ganache Snapshot
 * networkId: 50
 * @param networkId  the id of the network (1 == Mainnet, 3 == Ropsten, 42 == Kovan, 50 == Ganache)
 */
export declare function getContractAddressesForNetwork(networkId: number): ContractAddresses;
/**
 * Returns a constructed ContractWrappersConfig object for the given network.
 * @param networkId the id of the network
 */
export declare function getContractWrappersConfig(networkId: number): ContractWrappersConfig;
