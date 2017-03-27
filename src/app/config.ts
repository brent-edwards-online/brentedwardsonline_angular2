/**
 * Configuration data for the app, as in Config.cs.
 */
export class Config {

    /**
     * @see https://identityserver4.readthedocs.io/en/dev/endpoints/token.html
     */
    public static readonly AUTHORIZATION_URL: string = "http://localhost:5000";

    public static readonly TOKEN_ENDPOINT: string = "/connect/token";

    public static readonly REVOCATION_ENDPOINT: string = "/connect/revocation";

    /**
     * @see https://identityserver4.readthedocs.io/en/dev/endpoints/userinfo.html
     */
    public static readonly USERINFO_ENDPOINT: string = "/connect/userinfo";

    public static readonly CLIENT_ID: string = "resourceOwner";

    public static readonly CLIENT_SECRET: string = "secret";

    /**
     * Resource Owner Password Credential grant.
     */
    public static readonly GRANT_TYPE: string = "password";

    /**
     * The Web API, refresh token (offline_access) & user info (openid profile roles).
     */
    public static readonly SCOPE: string = "api1 openid";

}