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
exports.updateDepot = exports.createDepot = exports.deleteDepot = exports.getDepot = exports.getAllDepots = void 0;
const depotServices = __importStar(require("../db/depot"));
const getAllDepots = async (req, res) => {
    try {
        const depots = await depotServices.listDepots();
        return res.status(200).json(depots);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getAllDepots = getAllDepots;
const getDepot = async (req, res) => {
    try {
        const { id } = req.params;
        const depot = await depotServices.getDepot(Number(id));
        return res.status(200).json(depot);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getDepot = getDepot;
const deleteDepot = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDepot = await depotServices.deleteDepot(Number(id));
        return res.json(deletedDepot);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.deleteDepot = deleteDepot;
const createDepot = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.sendStatus(400);
        }
        const depot = await depotServices.createDepot(name);
        return res.status(200).json(depot).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.createDepot = createDepot;
const updateDepot = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        if (!name) {
            return res.sendStatus(400);
        }
        const depot = await depotServices.updateDepot(Number(id), name);
        return res.status(200).json(depot).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.updateDepot = updateDepot;
//# sourceMappingURL=depots.js.map