import { Organization } from './organization';

export interface UserLevel {
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

export interface UserInfo {
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

export interface Speciality {
    name: string;
    visible: boolean;
    procedures?: Array<string>;
}

export interface SwapUserEvent {
    trainee: UserInfo;
    trainer: UserInfo;
}
