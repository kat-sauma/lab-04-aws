const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/utils/aws');
const s3Client = require('../lib/utils/aws');

jest.mock('s3Client', () => () => ({
  uploads: {
    create: jest.fn(),
  },
}));

describe('CRUD routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let upload;
  beforeEach(async() => {
    upload = await Upload.insert({ quantity: 10 })
  });

  it('', )
});
