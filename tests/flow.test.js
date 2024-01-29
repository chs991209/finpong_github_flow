const request = require('supertest');
const { createApp } = require('../app');
const { appDataSource } = require('../src/utils/dataSource');
const supplies = require('./testSupplies.js');

describe('get ping', () => {
  let app;

  beforeAll(async () => {
    app = createApp();
  });

  afterEach(async () => {});

  test('SUCCESS : get pong', async () => {
    const res = await request(app).get('/ping');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({
      message: 'pong',
    });
  });
});