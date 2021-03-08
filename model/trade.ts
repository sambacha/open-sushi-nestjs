/**
 * @file
 */


/**
 * Trade data such as executed amounts, fees, order id and block number. 
 */
export interface Trade { 
    /**
     * Block in which trade occurred.
     */
    blockNumber?: number;
    /**
     * Index in which transaction was included in block.
     */
    logIndex?: number;
    /**
     * Unique identifier for the order: 56 bytes encoded as hex with `0x` prefix. Bytes 0 to 32 are the order digest, bytes 30 to 52 the owner address and bytes 52..56 valid to, 
     */
    orderUid?: string;
    /**
     * Ethereum 40 byte address encoded as a hex with `0x` prefix.
     */
    owner?: string;
    /**
     * Ethereum 40 byte address encoded as a hex with `0x` prefix.
     */
    sellToken?: string;
    /**
     * Ethereum 40 byte address encoded as a hex with `0x` prefix.
     */
    buyToken?: string;
    /**
     * Amount of a token. uint256 encoded in decimal.
     */
    sellAmount?: string;
    /**
     * A big unsigned integer encoded in decimal.
     */
    sellAmountBeforeFees?: string;
    /**
     * Amount of a token. uint256 encoded in decimal.
     */
    buyAmount?: string;
}

