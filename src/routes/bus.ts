import express from 'express';

import { getAllFromDepot, getAllFromModel, getBus, createBus, updateBus, deleteBus } from '../controllers/bus';
import { isAuthenticated } from '../middlewares';

export default (router: express.Router) => {
  router.get('/bus/depot/:id', getAllFromDepot);
  router.get('/bus/model/:id', getAllFromModel);
  router.get('/bus/:id', getBus);
  router.post('/bus', isAuthenticated, createBus);
  router.put('/bus/:id', isAuthenticated, updateBus);
  router.delete('/bus/:id', isAuthenticated, deleteBus);
};