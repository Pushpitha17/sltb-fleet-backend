"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bus_1 = require("../controllers/bus");
const middlewares_1 = require("../middlewares");
exports.default = (router) => {
    router.get('/bus/depot/:id', bus_1.getAllFromDepot);
    router.get('/bus/model/:id', bus_1.getAllFromModel);
    router.get('/bus/:id', bus_1.getBus);
    router.post('/bus', middlewares_1.isAuthenticated, bus_1.createBus);
    router.put('/bus/:id', middlewares_1.isAuthenticated, bus_1.updateBus);
    router.delete('/bus/:id', middlewares_1.isAuthenticated, bus_1.deleteBus);
};
//# sourceMappingURL=bus.js.map