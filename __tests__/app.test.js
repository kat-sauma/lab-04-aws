const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

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
    upload = await Upload.insert({ 
      fileName: 'Screen Shot 2020-08-27 at 2.13.30 PM',
      fileBody: fileContent })
    // s3Client.mockReset();
  });

  it('ASYNC/AWAIT: creates a new file to upload to our database', async () => {
    const res = await request(app)
      .post('/api/v1/orders')
      .send({ file: 'Screen Shot 2020-08-27 at 2.13.30 PM' });

      expect(res.body).toEqual({
      id: '2',
      file: 'Screen Shot 2020-08-27 at 2.13.30 PM',
    });
  });

  it('', )
});
