/**
 * In this scenario, the leftMaker creates and signs an order (leftOrder) for selling ZRX for WETH.
 * The rightMaker has a matched (or mirrored) order (rightOrder) of WETH for ZRX.
 * The matcher submits both orders and the 0x Exchange contract calling matchOrders.
 * The matcher pays taker fees on both orders, the leftMaker pays the leftOrder maker fee
 * and the rightMaker pays the rightOrder maker fee.
 * Any spread in the two orders is sent to the sender.
 */
export declare function scenarioAsync(): Promise<void>;
