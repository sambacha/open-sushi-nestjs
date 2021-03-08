/**
 * @file
 */
/* tslint:disable:no-unused-variable member-ordering */

import { HttpService, Inject, Injectable }                      from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable }                                        from 'rxjs';
import { FeeInformation } from '../model/feeInformation';
import { Order } from '../model/order';
import { OrderCancellation } from '../model/orderCancellation';
import { OrderCreation } from '../model/orderCreation';
import { OrderPostError } from '../model/orderPostError';
import { Trade } from '../model/trade';
import { Configuration }                                     from '../configuration';
import { COLLECTION_FORMATS }                     from '../variables';


@Injectable()
export class DefaultService {

    protected basePath = 'https://sushi.backbonecabal.xyz';
    public defaultHeaders = new Map()
    public configuration = new Configuration();

    constructor(protected httpClient: HttpService, configuration: Configuration) {
        this.configuration = configuration;
        this.basePath = basePath || configuration.basePath || this.basePath;
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        return consumes.includes(form);
    }

    /**
     * Get existing orders.
     * By default all currently valid orders are returned. The set of returned orders can be reduced by setting owner, sell token, buy token filters. It can be increased by disabling different order validity exclusion criteria. 
     * @param owner Ethereum 40 byte address encoded as a hex with &#x60;0x&#x60; prefix.
     * @param sellToken Ethereum 40 byte address encoded as a hex with &#x60;0x&#x60; prefix.
     * @param buyToken Ethereum 40 byte address encoded as a hex with &#x60;0x&#x60; prefix.
     * @param includeFullyExecuted Should fully executed orders be returned?
     * @param includeInvalidated Should orders that have been invalidated in the smart contract be returned?
     * @param includeInsufficientBalance Should fill or kill orders that are not sufficiently funded be included?
     * @param minValidTo Minimum valid_to timestamp for included orders. The default is the current time. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1OrdersGet(owner?: string, sellToken?: string, buyToken?: string, includeFullyExecuted?: boolean, includeInvalidated?: boolean, includeInsufficientBalance?: boolean, minValidTo?: number, ): Observable<AxiosResponse<Array<Order>>>;
    public apiV1OrdersGet(owner?: string, sellToken?: string, buyToken?: string, includeFullyExecuted?: boolean, includeInvalidated?: boolean, includeInsufficientBalance?: boolean, minValidTo?: number, ): Observable<any> {








        let queryParameters = {};   
        if (owner !== undefined && owner !== null) {
            queryParameters['owner'] <any>owner;
        }
        if (sellToken !== undefined && sellToken !== null) {
            queryParameters['sellToken'] <any>sellToken;
        }
        if (buyToken !== undefined && buyToken !== null) {
            queryParameters['buyToken'] <any>buyToken;
        }
        if (includeFullyExecuted !== undefined && includeFullyExecuted !== null) {
            queryParameters['includeFullyExecuted'] <any>includeFullyExecuted;
        }
        if (includeInvalidated !== undefined && includeInvalidated !== null) {
            queryParameters['includeInvalidated'] <any>includeInvalidated;
        }
        if (includeInsufficientBalance !== undefined && includeInsufficientBalance !== null) {
            queryParameters['includeInsufficientBalance'] <any>includeInsufficientBalance;
        }
        if (minValidTo !== undefined && minValidTo !== null) {
            queryParameters['minValidTo'] <any>minValidTo;
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<Order>>(`${this.basePath}/api/v1/orders`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Create a new order.
     * 
     * @param body The order to create.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1OrdersPost(body: OrderCreation, ): Observable<AxiosResponse<string>>;
    public apiV1OrdersPost(body: OrderCreation, ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling apiV1OrdersPost.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.post<string>(`${this.basePath}/api/v1/orders`,
            body,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Cancels order by marking it invalid with a timestamp.
     * The successful deletion might not prevent solvers from settling the order Authentication must be provided by signing the following message: 
     * @param uID Unique identifier for the order: 56 bytes encoded as hex with &#x60;0x&#x60; prefix. Bytes 0 to 32 are the order digest, bytes 30 to 52 the owner address and bytes 52..56 valid to, 
     * @param body Signed OrderCancellation
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1OrdersUIDDelete(uID: string, body: OrderCancellation, ): Observable<AxiosResponse<any>>;
    public apiV1OrdersUIDDelete(uID: string, body: OrderCancellation, ): Observable<any> {

        if (uID === null || uID === undefined) {
            throw new Error('Required parameter uID was null or undefined when calling apiV1OrdersUIDDelete.');
        }

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling apiV1OrdersUIDDelete.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers['Content-Type'] = httpContentTypeSelected;
        }
        return this.httpClient.delete<any>(`${this.basePath}/api/v1/orders/${encodeURIComponent(String(UID))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Get existing order from UID.
     * 
     * @param uID Unique identifier for the order: 56 bytes encoded as hex with &#x60;0x&#x60; prefix. Bytes 0 to 32 are the order digest, bytes 30 to 52 the owner address and bytes 52..56 valid to, 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1OrdersUIDGet(uID: string, ): Observable<AxiosResponse<Array<Order>>>;
    public apiV1OrdersUIDGet(uID: string, ): Observable<any> {

        if (uID === null || uID === undefined) {
            throw new Error('Required parameter uID was null or undefined when calling apiV1OrdersUIDGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<Order>>(`${this.basePath}/api/v1/orders/${encodeURIComponent(String(UID))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Get solvable orders.
     * The set of orders that solvers should be solving right now. These orders are determined to be valid at the time of the request. 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1SolvableOrdersGet(): Observable<AxiosResponse<Array<Order>>>;
    public apiV1SolvableOrdersGet(): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<Order>>(`${this.basePath}/api/v1/solvable_orders`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * 
     * The fee that is charged for placing an order. The fee is described by a minimum fee - in order to cover the gas costs for onchain settling - and a feeRatio charged to the users for using the service. 
     * @param sellToken Ethereum 40 byte address encoded as a hex with &#x60;0x&#x60; prefix.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1TokensSellTokenFeeGet(sellToken: string, ): Observable<AxiosResponse<FeeInformation>>;
    public apiV1TokensSellTokenFeeGet(sellToken: string, ): Observable<any> {

        if (sellToken === null || sellToken === undefined) {
            throw new Error('Required parameter sellToken was null or undefined when calling apiV1TokensSellTokenFeeGet.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<FeeInformation>(`${this.basePath}/api/v1/tokens/${encodeURIComponent(String(sellToken))}/fee`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
    /**
     * Get existing Trades.
     * By default all trades are returned. Queries can be refined by specifiying owner or order_uid. 
     * @param owner Ethereum 40 byte address encoded as a hex with &#x60;0x&#x60; prefix.
     * @param orderUid Unique identifier for the order: 56 bytes encoded as hex with &#x60;0x&#x60; prefix. Bytes 0 to 32 are the order digest, bytes 30 to 52 the owner address and bytes 52..56 valid to, 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiV1TradesGet(owner?: string, orderUid?: string, ): Observable<AxiosResponse<Array<Trade>>>;
    public apiV1TradesGet(owner?: string, orderUid?: string, ): Observable<any> {



        let queryParameters = {};   
        if (owner !== undefined && owner !== null) {
            queryParameters['owner'] <any>owner;
        }
        if (orderUid !== undefined && orderUid !== null) {
            queryParameters['orderUid'] <any>orderUid;
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers['Accept'] = httpHeaderAcceptSelected;
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];
        return this.httpClient.get<Array<Trade>>(`${this.basePath}/api/v1/trades`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers
            }
        );
    }
}
