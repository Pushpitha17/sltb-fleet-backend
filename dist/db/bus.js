"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBus = exports.updateBus = exports.addBus = exports.checkExisting = exports.getBusByID = exports.listBusesFromDepot = exports.listBusesFromModel = void 0;
const client_1 = require("./client");
const listBusesFromModel = async (modelId) => {
    return client_1.prisma.bus.findMany({
        where: {
            modelId,
        },
        include: {
            model: true,
            type: true,
            depot: true,
        },
    });
};
exports.listBusesFromModel = listBusesFromModel;
const listBusesFromDepot = async (depotId) => {
    return client_1.prisma.bus.findMany({
        where: {
            depotId,
        },
        include: {
            model: true,
            type: true,
            depot: true,
        },
    });
};
exports.listBusesFromDepot = listBusesFromDepot;
const getBusByID = async (id) => {
    return client_1.prisma.bus.findUnique({
        where: {
            id,
        },
        include: {
            model: true,
            type: true,
            depot: true,
        },
    });
};
exports.getBusByID = getBusByID;
const checkExisting = async (R_No, prefixId, modelId, depotId, typeId) => {
    return client_1.prisma.bus.findMany({
        where: {
            R_No,
            prefixId
        }
    });
};
exports.checkExisting = checkExisting;
const addBus = async (createData, modelId, depotId, typeId, prefixId) => {
    return client_1.prisma.bus.create({
        data: {
            ...createData,
            model: { connect: { id: modelId } },
            depot: { connect: { id: depotId } },
            type: { connect: { id: typeId } },
            prefix: { connect: { id: prefixId } },
        }
    });
};
exports.addBus = addBus;
const updateBus = async (id, updateData) => {
    return client_1.prisma.bus.update({
        where: { id },
        data: {
            ...updateData
        }
    });
};
exports.updateBus = updateBus;
const deleteBus = async (id) => {
    return client_1.prisma.bus.delete({
        where: {
            id,
        }
    });
};
exports.deleteBus = deleteBus;
//# sourceMappingURL=bus.js.map