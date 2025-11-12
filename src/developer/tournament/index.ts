/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosInstance } from 'axios';
import { fetchPaginatedData, PaginatedResult, testPageSize } from '../../utils';
import {
    CreateTournamentOptions,
    CreateTournamentSettingsOptions,
    EditTournamentSettingsOptions,
    GetTournamentParticipantsOptions,
    GetTournamentSettingsOptions,
    ICurrentPrizeDistribution,
    IScoreboard,
    ITournament,
    ITournamentParticipant,
    ITournamentParticipantsList,
    ITournamentSettings,
    ITournamentSettingsList,
    RegisterScoresOptions,
    ResolveTournamentOptions
} from './models';

/**
 * The TournamentAPI class contains methods for managing rumble tournaments.
 */
export class TournamentAPI {

    /**
     * Represents the TournamentAPI class.
     *
     * @constructor
     * @param {AxiosInstance} _axiosInstance The Axios instance to use for making requests.
     * @returns {TournamentAPI} An instance of the TournamentAPI class.
     */
    constructor(private readonly _axiosInstance: AxiosInstance) {}

    /* Tournament Settings Methods */

    /**
     * Get rumble tournament settings.
     *
     * @example
     * const settings = await devAPI.tournament.getTournamentSettings({ currentPage: 1, pageSize: 10 });
     *
     * @param {Object} options - The options for fetching tournament settings.
     * @param {number} [options.currentPage=1] - The current page number.
     * @param {number} [options.pageSize=100] - The page size between 10 and 100.
     * @param {number} [options.maxParticipants] - Filter by maximum participants.
     * @param {number} [options.minParticipants] - Filter by minimum participants.
     * @param {string} [options.status] - Filter by status.
     *
     * @returns {Promise<PaginatedResult<ITournamentSettingsList>>} - Paginated tournament settings.
     */
    public async getTournamentSettings(options: GetTournamentSettingsOptions = {}): Promise<PaginatedResult<ITournamentSettingsList>> {
        const {
            currentPage = 1,
            pageSize = 100,
            maxParticipants,
            minParticipants,
            status
        } = options;

        if (!testPageSize(pageSize)) {
            throw new Error('Page size must be between 10 and 100.');
        }

        const endpoint = '/rumble-tournament-settings';
        const params: any = { currentPage, pageSize };

        if (maxParticipants !== undefined) {
            params.maxParticipants = maxParticipants;
        }
        if (minParticipants !== undefined) {
            params.minParticipants = minParticipants;
        }
        if (status) {
            params.status = status;
        }

        return fetchPaginatedData<ITournamentSettingsList>(endpoint, params, this._axiosInstance);
    }

    /**
     * Create rumble tournament settings.
     *
     * @example
     * const settings = await devAPI.tournament.createTournamentSettings({
     *   name: 'My Tournament',
     *   description: 'A fun tournament',
     *   minParticipants: 2,
     *   maxParticipants: 10,
     *   registrationFeeInUpx: 100,
     *   prizeDistributionRules: [{ minParticipants: 2, distribution: [70, 30] }]
     * });
     *
     * @param {CreateTournamentSettingsOptions} options - The tournament settings to create.
     * @returns {Promise<ITournamentSettings>} - The created tournament settings.
     */
    public async createTournamentSettings(options: CreateTournamentSettingsOptions): Promise<ITournamentSettings> {
        try {
            const response = await this._axiosInstance.post('/rumble-tournament-settings', options);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Get rumble tournament settings by ID.
     *
     * @example
     * const settings = await devAPI.tournament.getTournamentSettingsById('settingsId');
     *
     * @param {string} id - The tournament settings ID.
     * @returns {Promise<ITournamentSettings>} - The tournament settings.
     */
    public async getTournamentSettingsById(id: string): Promise<ITournamentSettings> {
        if (!id) {
            throw new Error('Tournament settings ID is required.');
        }
        try {
            const response = await this._axiosInstance.get(`/rumble-tournament-settings/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Edit rumble tournament settings.
     *
     * @example
     * const settings = await devAPI.tournament.editTournamentSettings('settingsId', {
     *   name: 'Updated Tournament Name'
     * });
     *
     * @param {string} id - The tournament settings ID.
     * @param {EditTournamentSettingsOptions} options - The fields to update.
     * @returns {Promise<ITournamentSettings>} - The updated tournament settings.
     */
    public async editTournamentSettings(id: string, options: EditTournamentSettingsOptions): Promise<ITournamentSettings> {
        if (!id) {
            throw new Error('Tournament settings ID is required.');
        }
        try {
            const response = await this._axiosInstance.patch(`/rumble-tournament-settings/${id}`, options);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /* Tournament Methods */

    /**
     * Create a new rumble tournament.
     *
     * @example
     * const tournament = await devAPI.tournament.createTournament({
     *   settingsId: 'settingsId'
     * });
     *
     * @param {CreateTournamentOptions} options - The tournament creation options.
     * @returns {Promise<ITournament>} - The created tournament.
     */
    public async createTournament(options: CreateTournamentOptions): Promise<ITournament> {
        try {
            const response = await this._axiosInstance.post('/rumble-tournaments', options);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Get rumble tournament by ID.
     *
     * @example
     * const tournament = await devAPI.tournament.getTournamentById('tournamentId');
     *
     * @param {string} id - The tournament ID.
     * @returns {Promise<ITournament>} - The tournament.
     */
    public async getTournamentById(id: string): Promise<ITournament> {
        if (!id) {
            throw new Error('Tournament ID is required.');
        }
        try {
            const response = await this._axiosInstance.get(`/rumble-tournaments/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Start a rumble tournament.
     *
     * @example
     * await devAPI.tournament.startTournament('tournamentId');
     *
     * @param {string} id - The tournament ID.
     * @returns {Promise<void>}
     */
    public async startTournament(id: string): Promise<void> {
        if (!id) {
            throw new Error('Tournament ID is required.');
        }
        try {
            await this._axiosInstance.patch(`/rumble-tournaments/${id}/start`);
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Register participant scores for a rumble tournament.
     *
     * @example
     * await devAPI.tournament.registerScores('tournamentId', {
     *   scores: [{ userId: 'user1', value: 100 }, { userId: 'user2', value: 200 }]
     * });
     *
     * @param {string} id - The tournament ID.
     * @param {RegisterScoresOptions} options - The scores to register.
     * @returns {Promise<void>}
     */
    public async registerScores(id: string, options: RegisterScoresOptions): Promise<void> {
        if (!id) {
            throw new Error('Tournament ID is required.');
        }
        if (!options.scores || options.scores.length === 0) {
            throw new Error('Scores array cannot be empty.');
        }
        try {
            await this._axiosInstance.post(`/rumble-tournaments/${id}/scores`, options);
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Resolve rumble tournament and distribute prizes.
     *
     * @example
     * const scoreboard = await devAPI.tournament.resolveTournament('tournamentId', {
     *   forceResolutionWithNullScore: false
     * });
     *
     * @param {string} id - The tournament ID.
     * @param {ResolveTournamentOptions} options - The resolution options.
     * @returns {Promise<IScoreboard>} - The tournament scoreboard with prize distribution.
     */
    public async resolveTournament(id: string, options: ResolveTournamentOptions = {}): Promise<IScoreboard> {
        if (!id) {
            throw new Error('Tournament ID is required.');
        }
        try {
            const response = await this._axiosInstance.post(`/rumble-tournaments/${id}/resolve`, options);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Cancel rumble tournament and refund participants.
     *
     * @example
     * await devAPI.tournament.cancelTournament('tournamentId');
     *
     * @param {string} id - The tournament ID.
     * @returns {Promise<void>}
     */
    public async cancelTournament(id: string): Promise<void> {
        if (!id) {
            throw new Error('Tournament ID is required.');
        }
        try {
            await this._axiosInstance.post(`/rumble-tournaments/${id}/cancel`);
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Close rumble tournament registration.
     *
     * @example
     * await devAPI.tournament.closeRegistration('tournamentId');
     *
     * @param {string} id - The tournament ID.
     * @returns {Promise<void>}
     */
    public async closeRegistration(id: string): Promise<void> {
        if (!id) {
            throw new Error('Tournament ID is required.');
        }
        try {
            await this._axiosInstance.patch(`/rumble-tournaments/${id}/close-registration`);
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Get rumble tournament current prize distribution.
     *
     * @example
     * const prizeDistribution = await devAPI.tournament.getPrizeDistribution('tournamentId');
     *
     * @param {string} id - The tournament ID.
     * @returns {Promise<ICurrentPrizeDistribution>} - The current prize distribution.
     */
    public async getPrizeDistribution(id: string): Promise<ICurrentPrizeDistribution> {
        if (!id) {
            throw new Error('Tournament ID is required.');
        }
        try {
            const response = await this._axiosInstance.get(`/rumble-tournaments/${id}/prize-distribution`);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Get rumble tournament participants.
     *
     * @example
     * const participants = await devAPI.tournament.getParticipants('tournamentId', {
     *   currentPage: 1,
     *   pageSize: 10
     * });
     *
     * @param {string} id - The tournament ID.
     * @param {GetTournamentParticipantsOptions} options - The pagination options.
     * @returns {Promise<PaginatedResult<ITournamentParticipantsList>>} - Paginated participants list.
     */
    public async getParticipants(id: string, options: GetTournamentParticipantsOptions = {}): Promise<PaginatedResult<ITournamentParticipantsList>> {
        if (!id) {
            throw new Error('Tournament ID is required.');
        }

        const { currentPage = 1, pageSize = 100, status } = options;

        if (!testPageSize(pageSize)) {
            throw new Error('Page size must be between 10 and 100.');
        }

        const endpoint = `/rumble-tournaments/${id}/participants`;
        const params: any = { currentPage, pageSize };

        if (status) {
            params.status = status;
        }

        return fetchPaginatedData<ITournamentParticipantsList>(endpoint, params, this._axiosInstance);
    }

    /**
     * Get rumble tournament participant info.
     *
     * @example
     * const participant = await devAPI.tournament.getParticipantInfo('tournamentId', 'userId');
     *
     * @param {string} id - The tournament ID.
     * @param {string} userId - The user ID.
     * @returns {Promise<ITournamentParticipant>} - The participant info.
     */
    public async getParticipantInfo(id: string, userId: string): Promise<ITournamentParticipant> {
        if (!id || !userId) {
            throw new Error('Tournament ID and user ID are required.');
        }
        try {
            const response = await this._axiosInstance.get(`/rumble-tournaments/${id}/participants/${userId}`);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Get rumble tournament scoreboard.
     *
     * @example
     * const scoreboard = await devAPI.tournament.getScoreboard('tournamentId');
     *
     * @param {string} id - The tournament ID.
     * @returns {Promise<IScoreboard>} - The tournament scoreboard.
     */
    public async getScoreboard(id: string): Promise<IScoreboard> {
        if (!id) {
            throw new Error('Tournament ID is required.');
        }
        try {
            const response = await this._axiosInstance.get(`/rumble-tournaments/${id}/scoreboard`);
            return response.data;
        } catch (error) {
            throw new Error(String(error));
        }
    }
}

/**
 * The UserTournamentAPI class contains user-specific tournament methods (requires Bearer auth).
 */
export class UserTournamentAPI {

    /**
     * Represents the UserTournamentAPI class.
     *
     * @constructor
     * @param {AxiosInstance} _axiosInstance The Axios instance to use for making requests.
     * @returns {UserTournamentAPI} An instance of the UserTournamentAPI class.
     */
    constructor(private readonly _axiosInstance: AxiosInstance) {}

    /**
     * Join a rumble tournament as a user.
     *
     * @example
     * await user.tournament.joinTournament('tournamentId');
     *
     * @param {string} id - The tournament ID.
     * @returns {Promise<void>}
     */
    public async joinTournament(id: string): Promise<void> {
        if (!id) {
            throw new Error('Tournament ID is required.');
        }
        try {
            await this._axiosInstance.post(`/rumble-tournaments/${id}/join`);
        } catch (error) {
            throw new Error(String(error));
        }
    }
}
