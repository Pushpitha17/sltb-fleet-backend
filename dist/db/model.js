"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteModel = exports.updateModel = exports.createModel = exports.getModelByName = exports.getModel = exports.listModels = void 0;
const client_1 = require("../db/client");
const listModels = async () => {
    return client_1.prisma.model.findMany();
};
exports.listModels = listModels;
const getModel = async (id) => {
    return client_1.prisma.model.findUnique({
        where: {
            id,
        }
    });
};
exports.getModel = getModel;
const getModelByName = async (name) => {
    return client_1.prisma.model.findUnique({
        where: {
            name,
        }
    });
};
exports.getModelByName = getModelByName;
const createModel = async (modelName) => {
    return client_1.prisma.model.create({
        data: {
            name: modelName
        }
    });
};
exports.createModel = createModel;
const updateModel = async (id, modelName) => {
    return client_1.prisma.model.update({
        where: { id },
        data: {
            name: modelName
        }
    });
};
exports.updateModel = updateModel;
const deleteModel = async (id) => {
    return client_1.prisma.model.delete({
        where: {
            id,
        }
    });
};
exports.deleteModel = deleteModel;
//# sourceMappingURL=model.js.map