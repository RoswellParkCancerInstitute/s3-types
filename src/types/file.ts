export const IMAGE_TYPES = {
    LOGO: 'logo',
    PROFILE: 'profile',
    PROCEDURE: 'procedure',
    SUBDOMAIN_OPTION: 'subdomain_option'
};

export const IMAGE_BASE_PATHS = {
    LOGO: '/organizations',
    PROFILE: '/users',
    PROCEDURE: '/procedures',
    SUBDOMAIN_OPTION: '/procedures'
};

export const UPLOAD_STATUS = {
    UPLAOD: 'upload',
    UPLAODING: 'uploading',
    UPLAODED: 'uploaded'
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

export const FILE_TYPES = {
    ICON: 'icon',
    IMAGE: 'image',
    VIDEO: 'video'
};
