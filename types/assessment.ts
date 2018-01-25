
import { User } from './user';

export interface Assessment {
    id?: string;
    procedureId: string;
    users?:User[];
    trainer: User;
    trainee: User;
    score: number;
    maxScore: number;
    domainsCompleted: number;
    domainsCompletedPercentage: number;
    startTime?: string;
    endTime?: string;
    totalTime?: number;
    proportionOfDomainsCompleted?: number;
    domainScores: DomainScore[];
    subDomainScores: SubDomainScore[];
}

export interface SubDomainScoredEvent {
    id?: string;
    index: number;
    score: number;
}

export interface DomainScore {
    trainee: User;
    trainer: User;
    score: number;
    maxScore: number;
    startTime: number;
    endTime: number;
    totalTime?: number;
}

export interface SubDomainScore {
    domainId: string;
    score: number;
}
