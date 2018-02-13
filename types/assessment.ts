
import { User } from './user';

export interface Assessment {
    id?: string;
    procedureId: string;
    surgeons:{[userId:string]:number},
    score: number;
    maxScore: number;
    totalDomains: number;
    domainsCompleted: number;
    domainsCompletedPercentage: number;
    startTime?: number;
    endTime?: number;
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
    traineeId: string;
    trainerId: string;
    score: number;
    maxScore: number;
    startTime: number;
    endTime: number;
    totalTime?: number;
    domainId: string;
    required: boolean;
}

export interface SubDomainScore {
    domainId: string;
    subDomainId: string;
    score: number;
}
