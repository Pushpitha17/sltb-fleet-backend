"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBus = exports.createBus = exports.deleteBus = exports.getBus = exports.getAllFromDepot = exports.getAllFromModel = void 0;
const BusServices = __importStar(require("../db/bus"));
const getAllFromModel = async (req, res) => {
    try {
        const { id } = req.params;
        const buses = await BusServices.listBusesFromModel(Number(id));
        return res.status(200).json(buses);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getAllFromModel = getAllFromModel;
const getAllFromDepot = async (req, res) => {
    try {
        const { id } = req.params;
        const buses = await BusServices.listBusesFromDepot(Number(id));
        return res.status(200).json(buses);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getAllFromDepot = getAllFromDepot;
const getBus = async (req, res) => {
    try {
        const { id } = req.params;
        const bus = await BusServices.getBusByID(Number(id));
        return res.status(200).json(bus);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getBus = getBus;
const deleteBus = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBus = await BusServices.deleteBus(Number(id));
        return res.json(deletedBus);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.deleteBus = deleteBus;
const createBus = async (req, res) => {
    try {
        const { R_No, R_from, img_url, articl_url, modelId, depotId, typeId, prefixId } = req.body;
        const createData = {
            R_No, R_from, img_url, articl_url, createdAt: new Date(),
        };
        const bus = await BusServices.addBus(createData, modelId, depotId, typeId, prefixId);
        return res.status(200).json(bus).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.createBus = createBus;
const updateBus = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const model = await BusServices.updateBus(Number(id), updateData);
        return res.status(200).json(model).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.updateBus = updateBus;
//# sourceMappingURL=bus.js.map