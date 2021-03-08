/**
 * @file
 */

/**
 * EIP712 signature of struct OrderCancellation { orderUid: bytes } from the order\'s owner
 */
export interface OrderCancellation {
  /**
   * 65 bytes encoded as hex with `0x` prefix. r + s + v from the spec.
   */
  signature?: object;
}
