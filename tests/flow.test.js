const request = require('supertest');
const { createApp } = require('../app');
const { appDataSource } = require('../src/utils/dataSource');
const supplies = require('./testSupplies.js');

describe('get ping', () => {
  const app = createApp();

  beforeAll(async () => {
    await appDataSource.initialize().then(() => {
      console.log('test: DataSource has been initialized');
    }).catch((err) => {
      console.error('Error occurred while initializing DataSource', err);
    });
  });

  afterEach(async () => {
  });

  test('SUCCESS : get pong', async () => {
    const res = await request(app).get('/ping');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: 'pong',
    });
  });
});