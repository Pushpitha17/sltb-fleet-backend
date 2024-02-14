"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./auth"));
const bus_1 = __importDefault(require("./bus"));
const depots_1 = __importDefault(require("./depots"));
const model_1 = __importDefault(require("./model"));
const prefix_1 = __importDefault(require("./prefix"));
const type_1 = __importDefault(require("./type"));
const router = express_1.default.Router();
exports.default = () => {
    (0, auth_1.default)(router);
    (0, bus_1.default)(router);
    (0, depots_1.default)(router);
    (0, model_1.default)(router);
    (0, prefix_1.default)(router);
    (0, type_1.default)(router);
    return router;
};
//# sourceMappingURL=index.js.map