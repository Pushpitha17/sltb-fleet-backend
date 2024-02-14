"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regprefix_1 = require("../controllers/regprefix");
const middlewares_1 = require("../middlewares");
exports.default = (router) => {
    router.get('/prefixes', regprefix_1.getAllPrefixes);
    router.get('/prefix/:id', regprefix_1.getPrefix);
    router.post('/prefix', middlewares_1.isAuthenticated, regprefix_1.createPrefix);
    router.put('/prefix/:id', middlewares_1.isAuthenticated, regprefix_1.updatePrefix);
    router.delete('/prefix/:id', middlewares_1.isAuthenticated, regprefix_1.deletePrefix);
};
//# sourceMappingURL=prefix.js.map