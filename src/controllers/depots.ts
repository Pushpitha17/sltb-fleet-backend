import express from 'express';

import * as depotServices from '../db/depot';

export const getAllDepots = async (req: express.Request, res: express.Response) => {
  try {
    const depots = await depotServices.listDepots();

    return res.status(200).json(depots);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getDepot = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const depot = await depotServices.getDepot(Number(id));

    return res.status(200).json(depot);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteDepot = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedDepot = await depotServices.deleteDepot(Number(id));

    return res.json(deletedDepot);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const createDepot = async (req: express.Request, res: express.Response) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    const depot = await depotServices.createDepot(name);

    return res.status(200).json(depot).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateDepot = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    if (!name) {
      return res.sendStatus(400);
    }

    const depot = await depotServices.updateDepot(Number(id), name);

    return res.status(200).json(depot).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}