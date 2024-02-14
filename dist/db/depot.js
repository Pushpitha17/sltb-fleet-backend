"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDepot = exports.updateDepot = exports.createDepot = exports.getDepotByName = exports.getDepot = exports.listDepots = void 0;
const client_1 = require("../db/client");
const listDepots = async () => {
    return client_1.prisma.depot.findMany();
};
exports.listDepots = listDepots;
const getDepot = async (id) => {
    return client_1.prisma.depot.findUnique({
        where: {
            id,
        }
    });
};
exports.getDepot = getDepot;
const getDepotByName = async (name) => {
    return client_1.prisma.depot.findUnique({
        where: {
            name,
        }
    });
};
exports.getDepotByName = getDepotByName;
const createDepot = async (depotName) => {
    return client_1.prisma.depot.create({
        data: {
            name: depotName
        }
    });
};
exports.createDepot = createDepot;
const updateDepot = async (id, depotName) => {
    return client_1.prisma.depot.update({
        where: { id },
        data: {
            name: depotName
        }
    });
};
exports.updateDepot = updateDepot;
const deleteDepot = async (id) => {
    return client_1.prisma.depot.delete({
        where: {
            id,
        }
    });
};
exports.deleteDepot = deleteDepot;
//# sourceMappingURL=depot.js.map