import { Domain } from './procedure';
import { Speciality, UserInfo } from './user';

export interface Procedure {
    name: string;
    description: string;
    speciality: Speciality;
    visible: boolean;
    domains?: Array<Domain>;
    version?: string;
}

export interface Domain {
    name: string;
    subDomains: Array<SubDomain>;
    position: number;
    trainee: UserInfo;
    trainer: UserInfo;
    total?: number;
    completed?: boolean;
    subDomainsCompleted?: number;
    startTime?: string;
    endTime?: string;
    totalTime?: number;
}

export interface SubDomain {
    name: string;
    options: Array<SubDomainOption>;
    position: number;
    score?: number;
}

export interface SubDomainOption {
    text: string;
    position: number;
    value: number;
    image: string;
}

export interface ISubDomainScoredEvent {
    index: number;
    score: number;
}

export interface IDomainScore {
    trainee: UserInfo;
    trainer: UserInfo;
    totalScore: number;
    totalTime?: number;
    subDomainScores: Array<ISubDomainScore>;
}

export interface ISubDomainScore {
    position: number;
    score: number;
}
