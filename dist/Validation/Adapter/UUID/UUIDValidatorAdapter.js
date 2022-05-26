"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDValidatorAdapter = void 0;
const isUUID_1 = __importDefault(require("validator/lib/isUUID"));
class UUIDValidatorAdapter {
    isUUIDValid(uuid) {
        return (0, isUUID_1.default)(uuid);
    }
}
exports.UUIDValidatorAdapter = UUIDValidatorAdapter;
