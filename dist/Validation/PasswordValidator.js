"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordHandler = void 0;
const BaseValidator_1 = require("./BaseValidator");
class PasswordHandler extends BaseValidator_1.BaseUserValidationHandler {
    handle(user) {
        console.log(`${user.password} is a valid password`);
        return super.handle(user);
    }
}
exports.PasswordHandler = PasswordHandler;
