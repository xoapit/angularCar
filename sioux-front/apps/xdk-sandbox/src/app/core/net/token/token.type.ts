export interface TokenData {
  /**
     * TOKEN Value
     */
  access_token: string;
  /**
     * TOKEN Expire time
     */
  expire_time: number;

  /**
     * TOKEN value use to refresh token
     */
  refresh_token?: string;

  /**
     * Expire time of Refresh Token value
     */
  refresh_token_valid_time?: number;

  [key: string]: any;
}
