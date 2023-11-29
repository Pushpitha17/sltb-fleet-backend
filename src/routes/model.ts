import express from 'express';

import { getAllModels, getModel, createModel, updateModel, deleteModel } from '../controllers/models';
import { isAuthenticated } from '../middlewares';

export default (router: express.Router) => {
  router.get('/models', getAllModels);
  router.get('/models/:id', getModel);
  router.post('/model', isAuthenticated, createModel);
  router.put('/model/:id', isAuthenticated, updateModel);
  router.delete('/model/:id', isAuthenticated, deleteModel);
};