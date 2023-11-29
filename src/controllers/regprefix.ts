import express from 'express';

import * as regPrefix from '../db/regPrefix';

export const getAllPrefixes = async (req: express.Request, res: express.Response) => {
  try {
    const prefixes = await regPrefix.listPrefix();

    return res.status(200).json(prefixes);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getPrefix = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const prefix = await regPrefix.getPrefix(Number(id));

    return res.status(200).json(prefix);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deletePrefix = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedPrefix = await regPrefix.deletePrefix(Number(id));

    return res.json(deletedPrefix);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const createPrefix = async (req: express.Request, res: express.Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    const model = await regPrefix.createPrefix(name);

    return res.status(200).json(model).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updatePrefix = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    const model = await regPrefix.updatePrefix(Number(id), name);

    return res.status(200).json(model).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}