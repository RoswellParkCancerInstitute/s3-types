
import { DomainScore, Procedure } from './procedure';
import { User } from './user';

export interface Assessment {
    id?: string;
    procedure: Procedure;
    trainer: User;
    trainee: User;
    score?: {
        total: number;
        domainsCompleted: number;
        percentComplete: number;
        domains: Array<{
        }>
    };
    totalScore: number;
    domainsCompleted: number;
    domainsCompletedPercentage: number;
    startTime?: string;
    endTime?: string;
    totalTime?: number;
    maxScore: number;
    proportionOfDomainsCompleted?: number;
    domainScores?: Array<DomainScore>;
}
