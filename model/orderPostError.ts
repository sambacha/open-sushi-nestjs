/**
 * @file orderPostError
 */

export interface OrderPostError {
  errorType?: OrderPostError.ErrorTypeEnum;
  description?: string;
}
export namespace OrderPostError {
  export type ErrorTypeEnum =
    | 'MissingOrderData'
    | 'InvalidSignature'
    | 'DuplicateOrder'
    | 'InsufficientFunds';
  export const ErrorTypeEnum = {
    MissingOrderData: 'MissingOrderData' as ErrorTypeEnum,
    InvalidSignature: 'InvalidSignature' as ErrorTypeEnum,
    DuplicateOrder: 'DuplicateOrder' as ErrorTypeEnum,
    InsufficientFunds: 'InsufficientFunds' as ErrorTypeEnum,
  };
}
