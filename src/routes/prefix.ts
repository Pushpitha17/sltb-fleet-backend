import express from 'express';

import { getAllPrefixes, getPrefix, createPrefix, updatePrefix, deletePrefix } from '../controllers/regprefix';
import { isAuthenticated } from '../middlewares';

export default (router: express.Router) => {
  router.get('/prefixes', getAllPrefixes);
  router.get('/prefix/:id', getPrefix);
  router.post('/prefix', isAuthenticated, createPrefix);
  router.put('/prefix/:id', isAuthenticated, updatePrefix);
  router.delete('/prefix/:id', isAuthenticated, deletePrefix);
};