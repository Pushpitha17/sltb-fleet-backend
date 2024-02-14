"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePrefix = exports.updatePrefix = exports.createPrefix = exports.getPrefixByName = exports.getPrefix = exports.listPrefix = void 0;
const client_1 = require("./client");
const listPrefix = async () => {
    return client_1.prisma.regPrefix.findMany();
};
exports.listPrefix = listPrefix;
const getPrefix = async (id) => {
    return client_1.prisma.regPrefix.findUnique({
        where: {
            id,
        }
    });
};
exports.getPrefix = getPrefix;
const getPrefixByName = async (prefix) => {
    return client_1.prisma.regPrefix.findFirst({
        where: {
            prefix,
        }
    });
};
exports.getPrefixByName = getPrefixByName;
const createPrefix = async (prefix) => {
    return client_1.prisma.regPrefix.create({
        data: {
            prefix: prefix
        }
    });
};
exports.createPrefix = createPrefix;
const updatePrefix = async (id, prefix) => {
    return client_1.prisma.regPrefix.update({
        where: { id },
        data: {
            prefix: prefix
        }
    });
};
exports.updatePrefix = updatePrefix;
const deletePrefix = async (id) => {
    return client_1.prisma.regPrefix.delete({
        where: {
            id,
        }
    });
};
exports.deletePrefix = deletePrefix;
//# sourceMappingURL=regPrefix.js.map