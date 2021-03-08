/**
 * @file
 */
import { OrderMetaData } from './orderMetaData';
import { OrderCreation } from './orderCreation';
import { OrderType } from './orderType';

export interface Order {
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
   * Amount of a token. uint256 encoded in decimal.
   */
  buyAmount?: string;
  /**
   * Unix timestamp until the order is valid. uint32.
   */
  validTo?: number;
  /**
   * Arbitrary identifier sent along with the order. Could be used to track the interface or other meta-aspects of the order. uint32 encoded
   */
  appData?: number;
  /**
   * Amount of a token. uint256 encoded in decimal.
   */
  feeAmount?: string;
  kind?: OrderType;
  /**
   * Is this a fill-or-kill order or a partially fillable order?
   */
  partiallyFillable?: boolean;
  /**
   * 65 bytes encoded as hex with `0x` prefix. r + s + v from the spec.
   */
  Signature?: object;
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
