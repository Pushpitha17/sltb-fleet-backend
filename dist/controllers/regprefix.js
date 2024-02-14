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
exports.updatePrefix = exports.createPrefix = exports.deletePrefix = exports.getPrefix = exports.getAllPrefixes = void 0;
const regPrefix = __importStar(require("../db/regPrefix"));
const getAllPrefixes = async (req, res) => {
    try {
        const prefixes = await regPrefix.listPrefix();
        return res.status(200).json(prefixes);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getAllPrefixes = getAllPrefixes;
const getPrefix = async (req, res) => {
    try {
        const { id } = req.params;
        const prefix = await regPrefix.getPrefix(Number(id));
        return res.status(200).json(prefix);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.getPrefix = getPrefix;
const deletePrefix = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPrefix = await regPrefix.deletePrefix(Number(id));
        return res.json(deletedPrefix);
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.deletePrefix = deletePrefix;
const createPrefix = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.sendStatus(400);
        }
        const model = await regPrefix.createPrefix(name);
        return res.status(200).json(model).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.createPrefix = createPrefix;
const updatePrefix = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        if (!name) {
            return res.sendStatus(400);
        }
        const model = await regPrefix.updatePrefix(Number(id), name);
        return res.status(200).json(model).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.updatePrefix = updatePrefix;
//# sourceMappingURL=regprefix.js.map