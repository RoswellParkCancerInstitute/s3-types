import { DomainScore, Procedure } from './procedure';
import { UserInfo } from './user';
export interface Assessment {
    id?: string;
    procedure: Procedure;
    trainer: UserInfo;
    trainee: UserInfo;
    score?: {
        total: number;
        domainsCompleted: number;
        percentComplete: number;
        domains: Array<{}>;
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
