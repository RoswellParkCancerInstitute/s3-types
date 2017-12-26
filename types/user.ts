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
    specialityId: string;
    organizationId?: string;
    token?: string;
    emailVerified?: boolean;
    levelId: string;
    assessments?: Array<string>;
    profileImageURL: string;
    age?: number;
    yearsOfExperience?: number;
    dateCreated: Date;
}

export interface SAMLUser {
    email: string,
    name: string,
    issuer: string,
    uid: string,
    sessionIndex: number,
    token: string
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
