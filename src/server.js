/* eslint-disable no-console */
import http from 'http';
import app from './app';
import config from './helpers/config';

const PORT = config.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`server up and running on ${PORT}`));
