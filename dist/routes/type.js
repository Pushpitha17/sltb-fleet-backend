"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_1 = require("../controllers/type");
const middlewares_1 = require("../middlewares");
exports.default = (router) => {
    router.get('/type/:id', type_1.getType);
    router.post('/type', middlewares_1.isAuthenticated, type_1.createType);
    router.delete('/type/:id', middlewares_1.isAuthenticated, type_1.deleteType);
};
//# sourceMappingURL=type.js.map