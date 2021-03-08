/**
 * @file
 */

/**
 * Is this a buy order or sell order?
 */
export type OrderType = 'buy' | 'sell';

export const OrderType = {
  Buy: 'buy' as OrderType,
  Sell: 'sell' as OrderType,
};
