export interface IOrganization {
    id: string;
    name: string;
    shortName: string;
    domain: string;
    authUrl: string;
    thumbnailURL?: string;
    bannerURL?: string;
    users?: Array<{
        string: boolean;
    }>;
}
