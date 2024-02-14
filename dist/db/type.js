"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteType = exports.updateType = exports.createType = exports.getTypeByModelandName = exports.getType = exports.listTypesInModel = void 0;
const client_1 = require("./client");
const listTypesInModel = async (modelId) => {
    return client_1.prisma.type.findMany({
        where: {
            modelId,
        }
    });
};
exports.listTypesInModel = listTypesInModel;
const getType = async (id) => {
    return client_1.prisma.type.findUnique({
        where: {
            id,
        }
    });
};
exports.getType = getType;
const getTypeByModelandName = async (modelId, name) => {
    return client_1.prisma.type.findFirst({
        where: {
            modelId,
            name
        }
    });
};
exports.getTypeByModelandName = getTypeByModelandName;
const createType = async (type) => {
    return client_1.prisma.type.create({
        data: {
            name: type.name,
            model: { connect: { id: type.modelId } },
        }
    });
};
exports.createType = createType;
const updateType = async (id, type) => {
    return client_1.prisma.type.update({
        where: { id },
        data: {
            ...type
        }
    });
};
exports.updateType = updateType;
const deleteType = async (id) => {
    return client_1.prisma.type.delete({
        where: {
            id,
        }
    });
};
exports.deleteType = deleteType;
//# sourceMappingURL=type.js.map