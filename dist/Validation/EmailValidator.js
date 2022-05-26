"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailHandler = void 0;
const BaseValidator_1 = require("./BaseValidator");
const EmailValidatorAdapter_1 = require("./Adapter/Email/EmailValidatorAdapter");
class EmailHandler extends BaseValidator_1.BaseUserValidationHandler {
    handle(user) {
        const emailValidator = new EmailValidatorAdapter_1.EmailValidatorAdapter();
        if (emailValidator.isEmail(user.email)) {
            console.log(`${user.email} é um email válido!`);
        }
        else {
            console.log(`${user.email} não é um email válido!`);
        }
        return super.handle(user);
    }
}
exports.EmailHandler = EmailHandler;
