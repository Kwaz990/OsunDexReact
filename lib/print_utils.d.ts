import { BigNumber, ContractWrappers, Order, OrderInfo, SignedOrder } from '0x.js';
import { Web3Wrapper } from '@0x/web3-wrapper';
import { TransactionReceiptWithDecodedLogs } from 'ethereum-types';
declare const Table: any;
declare type TableCol = string[] | BigNumber[];
declare type TableData = string[][] | BigNumber[][];
interface Table {
    push(data: TableCol): void;
    toString(): string;
}
export declare class PrintUtils {
    private readonly _contractWrappers;
    private readonly _web3Wrapper;
    private readonly _accounts;
    private readonly _tokens;
    static printScenario(header: string): void;
    static printData(header: string, tableData: TableData): void;
    static printHeader(header: string): void;
    static pushAndPrint(table: Table, tableData: TableData): void;
    constructor(web3Wrapper: Web3Wrapper, contractWrappers: ContractWrappers, accounts: {
        [name: string]: string;
    }, tokens: {
        [name: string]: string;
    });
    printAccounts(): void;
    fetchAndPrintContractBalancesAsync(): Promise<void>;
    fetchAndPrintContractAllowancesAsync(): Promise<void>;
    awaitTransactionMinedSpinnerAsync(message: string, txHash: string): Promise<TransactionReceiptWithDecodedLogs>;
    printTransaction(header: string, txReceipt: TransactionReceiptWithDecodedLogs, data?: string[][], eventNames?: string[]): void;
    printOrderInfos(orderInfos: {
        [orderName: string]: OrderInfo;
    }): void;
    printOrder(order: Order | SignedOrder): void;
    fetchAndPrintERC721OwnerAsync(erc721TokenAddress: string, tokenId: BigNumber): Promise<void>;
}
export {};
