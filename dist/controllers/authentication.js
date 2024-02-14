"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const user_1 = require("../db/user");
const auth_1 = require("../utils/auth");
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.sendStatus(400);
        }
        const user = await (0, user_1.getUserByEmail)(email);
        if (!user) {
            return res.sendStatus(400);
        }
        const expectedHash = (0, auth_1.authentication)(user.salt, password);
        if (user.password != expectedHash) {
            return res.sendStatus(403);
        }
        const salt = (0, auth_1.random)();
        user.sessionToken = (0, auth_1.authentication)(salt, user.id.toString());
        await (0, user_1.updateUser)(user.id, user);
        res.cookie('AUTH', user.sessionToken, { domain: 'localhost', path: '/' });
        return res.status(200).json(user).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.login = login;
const register = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.sendStatus(400);
        }
        const existingUser = await (0, user_1.getUserByEmail)(email);
        if (existingUser) {
            return res.sendStatus(400);
        }
        const salt = (0, auth_1.random)();
        const user = await (0, user_1.createUser)({
            email,
            username,
            salt,
            password: (0, auth_1.authentication)(salt, password)
        });
        return res.status(200).json(user).end();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.register = register;
//# sourceMappingURL=authentication.js.map