import { expect } from 'chai';
import { describe, it } from 'mocha';
import DeveloperAPI from '../../src/developer/index';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

describe('DeveloperAPI', () => {
    const applicationID = process.env.APPLICATION_ID ? parseInt(process.env.APPLICATION_ID) : 0;
    const accessToken = process.env.ACCESS_TOKEN ? process.env.ACCESS_TOKEN : '';
    const developerAPI = new DeveloperAPI(applicationID, accessToken);

    describe('generateAuthCode', () => {
        it('should return an object with an auth code and an expiration date', async () => {
            const result = await developerAPI.generateAuthCode();
            expect(result).to.be.an('object');
            expect(result.code).to.be.a('string');
            expect(result.expireAt).to.be.a('string');
        });
    });
});