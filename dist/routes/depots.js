"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const depots_1 = require("../controllers/depots");
const middlewares_1 = require("../middlewares");
exports.default = (router) => {
    router.get('/depots', depots_1.getAllDepots);
    router.get('/depots/:id', depots_1.getDepot);
    router.post('/depot', middlewares_1.isAuthenticated, depots_1.createDepot);
    router.put('/depot/:id', middlewares_1.isAuthenticated, depots_1.updateDepot);
    router.delete('/depot/:id', middlewares_1.isAuthenticated, depots_1.deleteDepot);
};
//# sourceMappingURL=depots.js.map