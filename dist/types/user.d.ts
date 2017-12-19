export interface UserLevel {
    id?: string;
    name: string;
    canRate: Array<string>;
}
export declare enum UserLevels {
    Attending = 0,
    Fellow = 1,
    Resident = 2,
}
export declare enum UserLevelsFilter {
    All = 0,
    Attending = 1,
    Fellow = 2,
    Resident = 3,
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
    emailVerified?: boolean;
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
