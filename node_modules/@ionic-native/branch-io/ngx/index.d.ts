import { IonicNativePlugin } from '@ionic-native/core';
export interface BranchIoPromise {
    $identity_id?: number;
    $one_time_use?: boolean;
    '+click_timestamp'?: number;
    '+clicked_branch_link'?: boolean;
    '+is_first_session'?: boolean;
    '+match_guaranteed'?: boolean;
    contentMetadata?: string;
    source?: string;
    '~campaign'?: string;
    '~channel'?: string;
    '~creation_source'?: string;
    '~feature'?: string;
    '~id'?: number;
    '~referring_link:'?: string;
    [x: string]: any;
}
export interface BranchIoAnalytics {
    channel?: string;
    feature?: string;
    campaign?: string;
    stage?: string;
    tags?: string[];
    [x: string]: any;
}
export interface BranchIoProperties {
    contentMetadata?: {
        [x: string]: any;
    };
    [x: string]: any;
}
export interface BranchUniversalObject {
    generateShortUrl(analytics: BranchIoAnalytics, properties: BranchIoProperties): Promise<any>;
    registerView(): Promise<any>;
    showShareSheet(analytics: BranchIoAnalytics, properties: BranchIoProperties, shareText: string): Promise<any>;
    onShareSheetLaunched(callback: any): void;
    onShareSheetDismissed(callback: any): void;
    onLinkShareResponse(callback: any): void;
    onChannelSelected(callback: any): void;
    listOnSpotlight(): Promise<any>;
}
/**
 * @name BranchIo
 * @description
 * Branch.io is an attribution service for deeplinking and invitation links
 *
 * @usage
 * ```
 * import { BranchIo } from '@ionic-native/branch-io/ngx';
 *
 *
 * constructor(private branch: BranchIo) { }
 *
 * ```
 *
 * @interfaces
 * BranchIoPromise
 * BranchIoAnalytics
 * BranchIoProperties
 * BranchUniversalObject
 *
 */
export declare class BranchIo extends IonicNativePlugin {
    /**
     * for development and debugging only
     * @param {boolean} enable Enable debug
     * @return {Promise<any>}
     */
    setDebug(enable: boolean): Promise<any>;
    /**
     * Disable tracking
     * @param {boolean} disable disable tracking
     * @return {Promise<any>}
     */
    disableTracking(disable: boolean): Promise<any>;
    /**
     * Initializes Branch
     * @return {Promise<any>}
     */
    initSession(): Promise<BranchIoPromise>;
    /**
     * Set Request Metadata
     * @return {Promise<any>}
     */
    setRequestMetadata(): Promise<any>;
    /**
     * for better Android matching
     * @param {string} linkDomain LinkDomain at branch
     * @return {Promise<any>}
     */
    setCookieBasedMatching(linkDomain: string): Promise<any>;
    /**
     * First data
     * @return {Promise<any>}
     */
    getFirstReferringParams(): Promise<any>;
    /**
     * Latest data
     * @return {Promise<any>}
     */
    getLatestReferringParams(): Promise<any>;
    /**
     * Set identy of user
     * @param {string} userId
     * @return {Promise<any>}
     */
    setIdentity(userId: string): Promise<any>;
    /**
     * Logout user
     * @return {Promise<any>}
     */
    logout(): Promise<any>;
    /**
     * Registers a custom event
     * @param {string} eventName
     * @param {any} metaData
     * @return {Promise<any>}
     */
    userCompletedAction(eventName: string, metaData: any): Promise<any>;
    /**
     * Send Commerce Event
     * @param {string} event
     * @param {any} metaData
     * @return {Promise<any>}
     */
    sendCommerceEvent(event: string, metaData: any): Promise<any>;
    /**
     * create a branchUniversalObj variable to reference with other Branch methods
     * @param {BranchIoProperties} properties
     * @return {Promise<BranchUniversalObject>}
     */
    createBranchUniversalObject(properties: BranchIoProperties): Promise<BranchUniversalObject>;
    /**
     * Load credits
     * @param {any} bucket
     * @return {Promise<any>}
     */
    loadRewards(bucket: any): Promise<any>;
    /**
     * Redeem Rewards
     * @param {string} value
     * @param {any} bucket
     * @return {Promise<any>}
     */
    redeemRewards(value: string, bucket: any): Promise<any>;
    /**
     * Show credit history
     * @return {Promise<any>}
     */
    creditHistory(): Promise<any>;
}
