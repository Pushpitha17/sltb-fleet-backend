import express from 'express';

import { getAllDepots, getDepot, createDepot, updateDepot, deleteDepot } from '../controllers/depots';
import { isAuthenticated } from '../middlewares';

export default (router: express.Router) => {
  router.get('/depots', getAllDepots);
  router.get('/depots/:id', getDepot);
  router.post('/depot', isAuthenticated, createDepot);
  router.put('/depot/:id', isAuthenticated, updateDepot);
  router.delete('/depot/:id', isAuthenticated, deleteDepot);
};