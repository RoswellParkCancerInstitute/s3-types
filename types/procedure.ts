import { IDomain } from './procedure';
import { ISpeciality, IUserInfo } from './user';

export interface IProcedure {
    name: string;
    description: string;
    speciality: ISpeciality;
    visible: boolean;
    domains?: Array<IDomain>;
    version?: string;
}

export interface IDomain {
    name: string;
    subDomains: Array<ISubDomain>;
    position: number;
    trainee: IUserInfo;
    trainer: IUserInfo;
    total?: number;
    completed?: boolean;
    subDomainsCompleted?: number;
    startTime?: string;
    endTime?: string;
    totalTime?: number;
}

export interface ISubDomain {
    name: string;
    options: Array<ISubDomainOption>;
    position: number;
    score?: number;
}

export interface ISubDomainOption {
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
    trainee: IUserInfo;
    trainer: IUserInfo;
    totalScore: number;
    totalTime?: number;
    subDomainScores: Array<ISubDomainScore>;
}

export interface ISubDomainScore {
    position: number;
    score: number;
}
