/**
 * In this scenario a third party, called the sender, submits the cancel operation on behalf of the maker.
 * This allows a sender to pay the gas for the maker. It can be combined with a custom sender
 * contract with additional business logic (e.g checking a whitelist). Or the sender
 * can choose how and when the transaction should be submitted, if at all.
 * The maker creates and signs the order. The signed order and cancelOrder parameters for the
 * execute transaction function call are signed by the maker as a proof of cancellation.
 */
export declare function scenarioAsync(): Promise<void>;
