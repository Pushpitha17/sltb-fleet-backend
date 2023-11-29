import express from 'express';

import * as modelServices from '../db/model';

export const getAllModels = async (req: express.Request, res: express.Response) => {
  try {
    const models = await modelServices.listModels();

    return res.status(200).json(models);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getModel = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const model = await modelServices.getModel(Number(id));

    return res.status(200).json(model);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteModel = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedModel = await modelServices.deleteModel(Number(id));

    return res.json(deletedModel);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const createModel = async (req: express.Request, res: express.Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    const model = await modelServices.createModel(name);

    return res.status(200).json(model).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateModel = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    const model = await modelServices.updateModel(Number(id), name);

    return res.status(200).json(model).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}