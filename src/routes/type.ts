import express from 'express';

import { getType, deleteType, createType } from '../controllers/type';
import { isAuthenticated } from '../middlewares';

export default (router: express.Router) => {
  router.get('/type/:id', getType);
  router.post('/type', isAuthenticated, createType);
  router.delete('/type/:id', isAuthenticated, deleteType);
};