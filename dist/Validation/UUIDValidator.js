"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UUIDHandler = void 0;
const BaseValidator_1 = require("./BaseValidator");
const UUIDValidatorAdapter_1 = require("./Adapter/UUID/UUIDValidatorAdapter");
class UUIDHandler extends BaseValidator_1.BaseUserValidationHandler {
    handle(user) {
        const uuidValidator = new UUIDValidatorAdapter_1.UUIDValidatorAdapter();
        if (uuidValidator.isUUIDValid(user.id)) {
            console.log(`${user.id} é um uuid válido`);
        }
        else {
            console.log(`${user.id} não é um uuid válido`);
        }
        return super.handle(user);
    }
}
exports.UUIDHandler = UUIDHandler;
