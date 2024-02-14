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
exports.updateModel = exports.createModel = exports.deleteModel = exports.getModel = exports.getAllModels = void 0;
const modelServices = __importStar(require("../db/model"));
const getAllModels = async (req, res) => {
    try {
        const models = await modelServices.listModels();
        return res.status(200).json(models);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getAllModels = getAllModels;
const getModel = async (req, res) => {
    try {
        const { id } = req.params;
        const model = await modelServices.getModel(Number(id));
        return res.status(200).json(model);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getModel = getModel;
const deleteModel = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedModel = await modelServices.deleteModel(Number(id));
        return res.json(deletedModel);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.deleteModel = deleteModel;
const createModel = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.sendStatus(400);
        }
        const model = await modelServices.createModel(name);
        return res.status(200).json(model).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.createModel = createModel;
const updateModel = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        if (!name) {
            return res.sendStatus(400);
        }
        const model = await modelServices.updateModel(Number(id), name);
        return res.status(200).json(model).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.updateModel = updateModel;
//# sourceMappingURL=models.js.map