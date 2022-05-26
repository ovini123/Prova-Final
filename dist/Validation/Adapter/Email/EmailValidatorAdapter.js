"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidatorAdapter = void 0;
const isEmail_1 = __importDefault(require("validator/lib/isEmail"));
class EmailValidatorAdapter {
    isEmail(email) {
        return (0, isEmail_1.default)(email);
    }
}
exports.EmailValidatorAdapter = EmailValidatorAdapter;
