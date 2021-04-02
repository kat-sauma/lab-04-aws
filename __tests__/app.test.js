const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');
const Upload = require('../lib/models/Upload');


// jest.mock('../lib/utils/aws');
// const s3Client = require('../lib/utils/aws');

// jest.mock('s3Client', () => () => ({
//   uploads: {
//     create: jest.fn(),
//   },
// }));


describe('CRUD routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let upload;
  beforeEach(async() => {
    upload = await Upload.insert({ fileName: 'Screen Shot 2020-08-27 at 2.33.36 PM.png' })
    // s3Client.mockReset();
  });

  it('creates a new file to upload to our database', async () => {
    const res = await request(app)
      .post('/api/v1/uploads')
      .send({ fileName: 'a-plant-photo.png' });

      expect(res.body).toEqual({
      id: '2',
      filePath: 'https://crabbucket.s3-us-west-1.amazonaws.com/a-plant-photo.png',
    });
  });

});
