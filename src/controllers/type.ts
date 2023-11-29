import express from 'express';

import * as typeServices from '../db/type';



export const getType = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const prefix = await typeServices.getType(Number(id));

    return res.status(200).json(prefix);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};


export const deleteType = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedPrefix = await typeServices.deleteType(Number(id));

    return res.json(deletedPrefix);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const createType = async (req: express.Request, res: express.Response) => {
  try {
    const { name, modelId } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    const model = await typeServices.createType({ modelId, name });

    return res.status(200).json(model).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

