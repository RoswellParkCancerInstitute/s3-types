import { IOrganization } from './organization';

export interface IUserLevel {
    id?: string;
    name: string;
    canRate: Array<string>;
}

export enum UserLevels {
    Attending,
    Fellow,
    Resident
}

export enum UserLevelsFilter {
    All,
    Attending,
    Fellow,
    Resident
}

export interface IUserInfo {
    uid: string;
    name: string;
    displayName: string;
    firstName: string;
    lastName: string;
    email: string;
    organizationId: string;
    token?: string;
    level: string;
    emailVerified: boolean;
    levelId: string;
    assessments?: Array<string>;
    profileImageURL: string;
}

export interface ISpeciality {
    name: string;
    visible: boolean;
    procedures?: Array<string>;
}

export interface ISwapUserEvent {
    trainee: IUserInfo;
    trainer: IUserInfo;
}
