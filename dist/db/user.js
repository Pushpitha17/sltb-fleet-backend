"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserBySession = exports.getUserByEmail = exports.getUserByID = exports.listUsers = void 0;
const client_1 = require("./client");
const listUsers = async () => {
    return client_1.prisma.user.findMany();
};
exports.listUsers = listUsers;
const getUserByID = async (id) => {
    return client_1.prisma.user.findUnique({
        where: {
            id,
        }
    });
};
exports.getUserByID = getUserByID;
const getUserByEmail = async (email) => {
    return client_1.prisma.user.findUnique({
        where: {
            email,
        }
    });
};
exports.getUserByEmail = getUserByEmail;
const getUserBySession = async (sessionToken) => {
    return client_1.prisma.user.findFirst({
        where: {
            sessionToken,
        }
    });
};
exports.getUserBySession = getUserBySession;
const createUser = async (user) => {
    return client_1.prisma.user.create({
        data: {
            ...user
        }
    });
};
exports.createUser = createUser;
const updateUser = async (id, user) => {
    return client_1.prisma.user.update({
        where: { id },
        data: {
            ...user
        }
    });
};
exports.updateUser = updateUser;
const deleteUser = async (id) => {
    return client_1.prisma.user.delete({
        where: {
            id,
        }
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=user.js.map