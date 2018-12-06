/**
 * In this scenario, we will subscribe to the Exchange events, listening for Fills. This
 * will create a process to listen to the events, execute another scenario such as fill_order
 * to see the logs printed out.
 */
export declare function scenarioAsync(): Promise<void>;
