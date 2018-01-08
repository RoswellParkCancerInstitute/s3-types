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

export interface User {
    uid: string;
    displayName: string;
    initials: string;
    profileImageURL: string;
}

export interface UserProfile extends User {
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    specialityId: string;
    levelId: string;
    yearOfBirth?: number;
    yearsOfExperience?: number;
    dateCreated: Date;
}

export interface SAMLUser {
    email: string;
    name: string;
    issuer: string;
    uid: string;
    sessionIndex: number;
    token: string;
}

export interface Speciality {
    id?: string;
    name: string;
    visible: boolean;
    procedures?: Array<string>;
}

export interface SwapUserEvent {
    trainee: User;
    trainer: User;
}
