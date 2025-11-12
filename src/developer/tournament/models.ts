/* Tournament Settings Models */
export interface IPrizeDistributionRule {
    minParticipants: number;
    distribution: number[];
}

export interface IFeeDistribution {
    percentage: number;
    targetEosId: string;
}

export interface ITournamentSettings {
    id: string;
    createdAt: string;
    description: string;
    maxParticipants: number;
    minParticipants: number;
    name: string;
    prizeDistributionRules: IPrizeDistributionRule[];
    registrationFeeInUpx: number;
    status: 'ACTIVE' | 'INACTIVE';
    updatedAt: string;
    developerFee?: IFeeDistribution;
    stakeholderFeePercentage?: number;
}

export interface ITournamentSettingsList {
    results: ITournamentSettings[];
    currentPage: number;
    pageSize: number;
    totalResults: number;
}

export interface CreateTournamentSettingsOptions {
    description: string;
    maxParticipants: number;
    minParticipants: number;
    name: string;
    prizeDistributionRules: IPrizeDistributionRule[];
    registrationFeeInUpx: number;
    developerFeePercentage?: number;
    stakeholderFeePercentage?: number;
}

export interface EditTournamentSettingsOptions {
    description?: string;
    developerFeePercentage?: number;
    maxParticipants?: number;
    minParticipants?: number;
    name?: string;
    prizeDistributionRules?: IPrizeDistributionRule[];
    registrationFeeInUpx?: number;
    stakeholderFeePercentage?: number;
}

export interface GetTournamentSettingsOptions {
    currentPage?: number;
    pageSize?: number;
    maxParticipants?: number;
    minParticipants?: number;
    status?: string;
}

/* Tournament Models */
export interface ITournamentSettingsSnapshot {
    minParticipants: number;
    maxParticipants: number;
    prizeDistributionRules: IPrizeDistributionRule[];
    registrationFeeInUpx: number;
    developerFeePercentage: number;
    stakeholderFeePercentage: number;
}

export interface ITournament {
    appId: number;
    baseSettingsSnapshot: ITournamentSettingsSnapshot;
    containerId: number;
    createdAt: string;
    endedAt?: string;
    id: string;
    resolutionTransactionId?: string;
    startedAt?: string;
    status: 'WAITING_FOR_PARTICIPANTS' | 'WAITING_PAYMENT' | 'REGISTRATION_CLOSED' | 'IN_PROGRESS' | 'DISTRIBUTING_PRIZES' | 'CLOSED' | 'FAILED';
    updatedAt: string;
}

export interface CreateTournamentOptions {
    settingsId: string;
    registrationFeeInUpx?: number;
    stakeholderEosId?: string;
}

export interface IScore {
    userId: string;
    value: number;
}

export interface RegisterScoresOptions {
    scores: IScore[];
}

export interface ResolveTournamentOptions {
    forceResolutionWithNullScore?: boolean;
}

/* Tournament Participant Models */
export interface ITournamentParticipant {
    createdAt: string;
    id: string;
    joinedAt?: string;
    registrationTransactionId?: string;
    score?: number;
    scoredAt?: string;
    status: 'WAITING_PAYMENT' | 'PROCESSING_PAYMENT' | 'ACTIVE' | 'REMOVED';
    updatedAt: string;
    userId: string;
}

export interface ITournamentParticipantsList {
    results: ITournamentParticipant[];
    currentPage: number;
    pageSize: number;
    totalResults: number;
}

export interface GetTournamentParticipantsOptions {
    currentPage?: number;
    pageSize?: number;
    status?: string;
}

/* Prize Distribution Models */
export interface IPrizeDistributionByPlace {
    userId: string;
    userEosId: string;
    score: number;
    prizeInUpx: number;
    place: number;
}

export interface IScoreboard {
    participantsAmount: number;
    developerFeeInUpx: number;
    totalPrizePoolInUpx: number;
    stakeholderFeeInUpx?: number;
    prizeDistributions: IPrizeDistributionByPlace[];
}

export interface IDistribution {
    place: number;
    prize: number;
}

export interface ICurrentPrizeDistribution {
    developerFeeInUpx: number;
    distribution: IDistribution[];
    stakeholderFeeInUpx: number;
}
