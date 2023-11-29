import express from 'express';

import * as BusServices from '../db/bus';

export const getAllFromModel = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const buses = await BusServices.listBusesFromModel(Number(id));

    return res.status(200).json(buses);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getAllFromDepot = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const buses = await BusServices.listBusesFromDepot(Number(id));

    return res.status(200).json(buses);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const getBus = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const bus = await BusServices.getBusByID(Number(id));

    return res.status(200).json(bus);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteBus = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;

    const deletedBus = await BusServices.deleteBus(Number(id));

    return res.json(deletedBus);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const createBus = async (req: express.Request, res: express.Response) => {
  try {
    const { R_No, R_from, img_url, articl_url, modelId, depotId, typeId, prefixId } = req.body;

    const createData = {
      R_No, R_from, img_url, articl_url, createdAt: new Date(),
    }

    const bus = await BusServices.addBus(
      createData,
      modelId,
      depotId,
      typeId,
      prefixId
    );

    return res.status(200).json(bus).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}

export const updateBus = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const model = await BusServices.updateBus(Number(id), updateData);

    return res.status(200).json(model).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}