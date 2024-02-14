"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../controllers/models");
const middlewares_1 = require("../middlewares");
exports.default = (router) => {
    router.get('/models', models_1.getAllModels);
    router.get('/models/:id', models_1.getModel);
    router.post('/model', middlewares_1.isAuthenticated, models_1.createModel);
    router.put('/model/:id', middlewares_1.isAuthenticated, models_1.updateModel);
    router.delete('/model/:id', middlewares_1.isAuthenticated, models_1.deleteModel);
};
//# sourceMappingURL=model.js.map