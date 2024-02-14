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
exports.createType = exports.deleteType = exports.getType = void 0;
const typeServices = __importStar(require("../db/type"));
const getType = async (req, res) => {
    try {
        const { id } = req.params;
        const prefix = await typeServices.getType(Number(id));
        return res.status(200).json(prefix);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getType = getType;
const deleteType = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPrefix = await typeServices.deleteType(Number(id));
        return res.json(deletedPrefix);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.deleteType = deleteType;
const createType = async (req, res) => {
    try {
        const { name, modelId } = req.body;
        if (!name) {
            return res.sendStatus(400);
        }
        const model = await typeServices.createType({ modelId, name });
        return res.status(200).json(model).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.createType = createType;
//# sourceMappingURL=type.js.map