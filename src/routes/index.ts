import express from 'express';

import authentication from './auth';
import bus from './bus';
import depots from './depots';
import model from './model';
import prefix from './prefix';
import typeRoutes from './type';

const router = express.Router();

export default (): express.Router => {
  authentication(router);
  bus(router);
  depots(router);
  model(router);
  prefix(router);
  typeRoutes(router);

  return router;
};