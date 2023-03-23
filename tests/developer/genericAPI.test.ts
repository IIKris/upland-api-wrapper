import { expect } from 'chai';
import { describe, it } from 'mocha';
import DeveloperAPI from '../../src/developer/index';
import * as dotenv from 'dotenv';
import { ICollection } from '../../src/developer/generic/models';
import { sleep } from '../../src/utils';

// Load environment variables from .env file
dotenv.config();

describe('GenericAPI', () => {
    const applicationID = process.env.APPLICATION_ID ? parseInt(process.env.APPLICATION_ID) : 0;
    const accessToken = process.env.ACCESS_TOKEN ? process.env.ACCESS_TOKEN : '';
    const developerAPI = new DeveloperAPI(applicationID, accessToken);

    describe('getProperties', () => {
        it('should return an object with properties and a next() function', async () => {
            const result = await developerAPI.generic.getProperties({ currentPage: 1, pageSize: 10});
            expect(result).to.be.an('object');
            expect(result.data).to.be.an('object');
            expect(result.data.results).to.be.an('array');
            expect(result.data.totalResults).to.be.a('number');
            expect(result.data.currentPage).to.be.a('number');
            expect(result.data.pageSize).to.be.a('number');
            expect(result.next).to.be.a('function');

            // just to not run into rate limit
            await sleep(1000);
        });

        it('should fetch properties and provide next function', async () => {
            const firstPage = await developerAPI.generic.getProperties({ currentPage: 1, pageSize: 10});
            const secondPage = firstPage.next ? await firstPage.next() : null;
            
            expect(secondPage).to.be.an('object');
            expect(secondPage?.data.results).to.be.an('array');
            expect(secondPage?.data.results[0].id).to.not.equal(firstPage.data.results[0].id);
        
            // just to not run into rate limit
            await sleep(1000);
        });
    });

    describe('getTreasureHistory', () => {
        it('should fetch treasure history and provide next function', async () => {

            const treasureHistory = await developerAPI.generic.getTreasureHistory();
            expect(treasureHistory.data.results).to.be.an('array');
            expect(treasureHistory.data.totalResults).to.be.a('number');
            expect(treasureHistory.data.currentPage).to.be.a('number');
            expect(treasureHistory.data.pageSize).to.be.a('number');
            if(treasureHistory.data.results.length < treasureHistory.data.totalResults) {
                expect(treasureHistory.next).to.be.a('function');
            } else {
                expect(treasureHistory.next).to.be.null;
            }

            // just to not run into rate limit
            await sleep(1000);
        });
    });

    describe('getCities', () => {
        it('should fetch cities and provide next function', async () => {
            const cities = await developerAPI.generic.getCities();
            expect(cities).to.be.an('array');
            expect(cities[0].id).to.be.a('number');
            expect(cities[0].name).to.be.a('string');
            expect(cities[0].stateName).to.be.a('string');
            expect(cities[0].countryName).to.be.a('string');

            // just to not run into rate limit
            await sleep(1000);
        });
    });

    describe('getPropertyById', () => {
        it('should fetch a property by ID', async () => {
            const property = await developerAPI.generic.getPropertyById(79519475681868);
            expect(property).to.be.an('object');
            expect(property.id).to.be.a('number');
            expect(property.address).to.be.a('string');
            expect(property.city).to.be.a('object');
            expect(property.city.id).to.be.a('number');
            expect(property.city.name).to.be.a('string');
            expect(property.neighborhood).to.be.a('object');
            expect(property.neighborhood.id).to.be.a('number');
            expect(property.neighborhood.name).to.be.a('string');
            expect(property.status).to.be.a('string');

            // just to not run into rate limit
            await sleep(1000);
        });
    });
    
    describe('getBuildingsByBoundaries', () => {
        it('should fetch buildings by boundaries', async () => {
            const boundaries = [[[-73.94995354750152,40.79764803583233],[-73.95016658055549,40.79773759364341],[-73.95034145705101,40.797497440043074],[-73.95012842519215,40.79740788188198],[-73.94995354750152,40.79764803583233]]];
            const buildings = await developerAPI.generic.getBuildingsByBoundaries(boundaries);
            expect(buildings).to.be.an('array');
            expect(buildings[0].id).to.be.a('number');
            expect(buildings[0].model_id).to.be.a('number');
            expect(buildings[0].lat).to.be.a('string');
            expect(buildings[0].lng).to.be.a('string');
            expect(buildings[0].rotate).to.be.a('array');
            expect(buildings[0].meshes).to.be.a('object');
            expect(buildings[0].propertyId).to.be.a('string');
            expect(buildings[0].model).to.be.a('string');
            expect(buildings[0].altitude).to.be.a('number');
            expect(buildings[0].scale).to.be.a('number');
            expect(buildings[0].name).to.be.a('string');

            // just to not run into rate limit
            await sleep(1000);
        });
    });

    describe('getCollections', () => {
        it('should fetch collections', async () => {
            const collections = await developerAPI.generic.getCollections();
            const king_of_the_street = collections.find((collection: ICollection) => collection.id === 1);
            const city_collection = collections.find((collection: ICollection) => collection.id === 2);

            expect(collections).to.be.an('array');
            expect(collections[0].id).to.be.a('number');
            expect(collections[0].name).to.be.a('string');
            expect(collections[0].amount).to.be.a('number');
            expect(collections[0].rarityLevel).to.be.a('number');
            expect(collections[0].description).to.be.a('string');
            expect(collections[0].requirements).to.be.a('string');
            expect(collections[0].yieldBoost).to.be.a('number');
            expect(collections[0].oneTimeReward).to.be.a('number');
            expect(collections[0].image).to.be.a('string');
            expect(collections[0].imageThumbnail).to.be.a('string');
            expect(king_of_the_street?.cityId).to.be.null;
            expect(city_collection?.cityId).to.be.a('number');

            // just to not run into rate limit
            await sleep(1000);
        });
    });

    describe('getNeighborhoods', () => {
        it('should fetch neighborhoods', async () => {
            const neighborhoods_all = await developerAPI.generic.getNeighborhoods();
            expect(neighborhoods_all).to.be.an('array');
            expect(neighborhoods_all[0].id).to.be.a('number');
            expect(neighborhoods_all[0].name).to.be.a('string');
            expect(neighborhoods_all[0].cityId).to.be.a('number');
            expect(neighborhoods_all[0].area).to.be.a('number');
            expect(neighborhoods_all[0].boundaries).to.be.a('array');
            expect(neighborhoods_all[0].boundaries[0]).to.be.a('array');
            expect(neighborhoods_all[0].boundaries[0][0]).to.be.a('array');
            expect(neighborhoods_all[0].boundaries[0][0][0]).to.be.a('number');
            expect(neighborhoods_all[0].boundaries[0][0][1]).to.be.a('number');
            expect(neighborhoods_all[0].center).to.be.a('array');
            expect(neighborhoods_all[0].center[0]).to.be.a('number');
            expect(neighborhoods_all[0].center[1]).to.be.a('number');

            // just to not run into rate limit
            await sleep(1000);
        });

        it('should fetch neighborhoods by city', async () => {
            const neighborhoods = await developerAPI.generic.getNeighborhoods({ cityId: 1 });
            expect(neighborhoods).to.be.an('array');
            expect(neighborhoods[0].cityId).to.equal(1);

            // just to not run into rate limit
            await sleep(1000);
        });

        it('should fetch neighborhoods by name', async () => {
            const neighborhoods = await developerAPI.generic.getNeighborhoods({ textSearch: 'BUSHWICK' });
            expect(neighborhoods).to.be.an('array');
            expect(neighborhoods[0].name).to.equal('BUSHWICK');

            // just to not run into rate limit
            await sleep(1000);
        });

        it('should fetch neighborhoods by city and name', async () => {
            const neighborhoods = await developerAPI.generic.getNeighborhoods({ cityId: 1, textSearch: 'SEACLIFF' });
            expect(neighborhoods).to.be.an('array');
            expect(neighborhoods[0].name).to.equal('SEACLIFF');
            expect(neighborhoods[0].cityId).to.equal(1);

            // just to not run into rate limit
            await sleep(1000);
        });

    });
});
