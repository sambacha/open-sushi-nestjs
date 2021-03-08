/**
 * @file feeInformation
 * @summary Provides the information to calculate the fees. 
 */
export interface FeeInformation { 
    /**
     * Expiration date of the offered fee. Order service might not accept the fee after this expiration date. Encoded as ISO 8601 UTC. 
     */
    expirationDate?: string;
    /**
     * Amount of a token. uint256 encoded in decimal.
     */
    minimalFee?: string;
    /**
     * The fee ratio charged on a sellAmount. Denoted in basis points
     */
    feeRatio?: number;
}
