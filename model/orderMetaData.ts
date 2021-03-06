/**
 * @file
 */

/**
 * Extra order data that is returned to users when querying orders but not provided by users when creating orders.
 */
export interface OrderMetaData {
  /**
   * Creation time of the order. Encoded as ISO 8601 UTC.
   */
  creationTime?: string;
  /**
   * Ethereum 40 byte address encoded as a hex with `0x` prefix.
   */
  owner?: string;
  /**
   * Unique identifier for the order: 56 bytes encoded as hex with `0x` prefix. Bytes 0 to 32 are the order digest, bytes 30 to 52 the owner address and bytes 52..56 valid to,
   */
  UID?: string;
  /**
   * Amount of a token. uint256 encoded in decimal.
   */
  availableBalance?: string;
  /**
   * A big unsigned integer encoded in decimal.
   */
  executedSellAmount?: string;
  /**
   * A big unsigned integer encoded in decimal.
   */
  executedSellAmountBeforeFees?: string;
  /**
   * A big unsigned integer encoded in decimal.
   */
  executedBuyAmount?: string;
  /**
   * A big unsigned integer encoded in decimal.
   */
  executedFeeAmount?: string;
  /**
   * Has this order been invalidated?
   */
  invalidated?: boolean;
}
