/**
 * @file
 */


export interface OrderCancellationError { 
    errorType?: OrderCancellationError.ErrorTypeEnum;
    description?: string;
}
export namespace OrderCancellationError {
    export type ErrorTypeEnum = 'InvalidSignature' | 'InvalidOrderUid';
    export const ErrorTypeEnum = {
        InvalidSignature: 'InvalidSignature' as ErrorTypeEnum,
        InvalidOrderUid: 'InvalidOrderUid' as ErrorTypeEnum
    };
}


