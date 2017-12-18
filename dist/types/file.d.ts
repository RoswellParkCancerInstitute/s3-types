export declare const IMAGE_TYPES: {
    LOGO: string;
    PROFILE: string;
    PROCEDURE: string;
    SUBDOMAIN_OPTION: string;
};
export declare const IMAGE_BASE_PATHS: {
    LOGO: string;
    PROFILE: string;
    PROCEDURE: string;
    SUBDOMAIN_OPTION: string;
};
export declare const UPLOAD_STATUS: {
    UPLAOD: string;
    UPLAODING: string;
    UPLAODED: string;
};
export interface IFileProperties {
    type: string | 'image' | 'icon' | 'video';
    name: string;
}
export interface IImageUploadStatus {
    state: string;
    progress: number;
    downloadURL: string;
}
export interface IFileTypes {
    ICON: 'icon';
    IMAGE: 'image';
    VIDEO: 'video';
}
export declare const FILE_TYPES: {
    ICON: string;
    IMAGE: string;
    VIDEO: string;
};
