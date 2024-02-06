const http = require('http');
const dotenv = require('dotenv');
dotenv.config();

const { createApp } = require('./app');
const { appDataSource } = require('./src/utils/dataSource');

const startServer = async () => {
  const app = createApp();
  appDataSource
    .initialize()
    .then(() => {
      console.log('DataSource has been initialized!');
    })
    .catch((err) => {
      console.error('Error occurred during DataSource initialization', err);
    });

  const server = http.createServer(app);
  const PORT = process.env.TYPEORM_SERVER_PORT;

  server.listen(PORT, () => {
    console.log(`Server is listening on Port ${PORT}`);
  });
};

startServer();