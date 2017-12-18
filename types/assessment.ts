
import { IDomainScore, IProcedure } from './procedure';
import { IUserInfo } from './user';

export interface IAssessment {
    id?: string;
    procedure: IProcedure;
    trainer: IUserInfo;
    trainee: IUserInfo;
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
    domainScores?: Array<IDomainScore>;
}
