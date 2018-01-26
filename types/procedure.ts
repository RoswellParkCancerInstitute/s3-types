import { Domain } from './procedure';
import { Speciality, User } from './user';

export interface Procedure {
    id?: string;
    name: string;
    description: string;
    specialities: { [specialityId: string]: boolean };
    visible: boolean;
    domains?: Array<Domain>;
    subDomains?: Array<SubDomain>;
    subDomainOptions?: Array<SubDomainOption>;
    images?: Array<ImageSet>;
    version?: string;
}

export interface Domain {
    id?: string;
    name: string;
    position: number;
    required: boolean;
}

export interface SubDomain {
    id?: string;
    domainId: string;
    name: string;
    position: number;
}

export interface SubDomainOption {
    domainId: string;
    subDomainId: string;
    id?: string;
    text: string;
    position: number;
    imageId: string;
}
export interface ImageSet {
    id: string;
    imageURL: string;
    thumbnailURL: string;
}
