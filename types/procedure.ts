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

export interface SubDomainScoredEvent {
    index: number;
    score: number;
}

export interface DomainScore {
    trainee: UserInfo;
    trainer: UserInfo;
    totalScore: number;
    totalTime?: number;
    subDomainScores: Array<SubDomainScore>;
}

export interface SubDomainScore {
    position: number;
    score: number;
}
