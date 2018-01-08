import { Domain } from './procedure';
import { Speciality, User } from './user';

export interface Procedure {
    id?: string;
    name: string;
    description: string;
    speciality: Speciality;
    visible: boolean;
    domains?: Array<Domain>;
    version?: string;
}

export interface Domain {
    id?: string;
    name: string;
    subDomains: Array<SubDomain>;
    position: number;
    trainee: User;
    trainer: User;
    total?: number;
    completed?: boolean;
    subDomainsCompleted?: number;
    startTime?: string;
    endTime?: string;
    totalTime?: number;
    required:boolean;
}

export interface SubDomain {
    id?: string;
    name: string;
    options: Array<SubDomainOption>;
    position: number;
    score?: number;
}

export interface SubDomainOption {
    id?: string;
    text: string;
    position: number;
    value: number;
    image: string;
}

export interface SubDomainScoredEvent {
    id?: string;
    index: number;
    score: number;
}

export interface DomainScore {
    trainee: User;
    trainer: User;
    totalScore: number;
    totalTime?: number;
    subDomainScores: Array<SubDomainScore>;
}

export interface SubDomainScore {
    position: number;
    score: number;
}
