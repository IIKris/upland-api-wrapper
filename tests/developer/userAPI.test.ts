import { expect } from 'chai';
import { describe, it } from 'mocha';
import DeveloperAPI from '../../src/developer/index';
import * as dotenv from 'dotenv';
import { sleep } from '../../src/utils';

// Load environment variables from .env file
dotenv.config();