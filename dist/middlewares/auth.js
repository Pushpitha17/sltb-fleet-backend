"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = void 0;
const lodash_1 = require("lodash");
const user_1 = require("../db/user");
const isAuthenticated = async (req, res, next) => {
    try {
        const sessionToken = req.cookies['AUTH'];
        if (!sessionToken) {
            return res.sendStatus(403);
        }
        const existingUser = await (0, user_1.getUserBySession)(sessionToken);
        if (!existingUser) {
            return res.sendStatus(403);
        }
        (0, lodash_1.merge)(req, { identity: existingUser });
        return next();
    }
    catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};
exports.isAuthenticated = isAuthenticated;
//# sourceMappingURL=auth.js.map