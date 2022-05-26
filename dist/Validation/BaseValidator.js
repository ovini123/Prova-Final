"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseUserValidationHandler = void 0;
class BaseUserValidationHandler {
    constructor() {
        this.nextHandler = null;
    }
    setNextHandler(handler) {
        this.nextHandler = handler;
        return handler;
    }
    handle(user) {
        if (this.nextHandler)
            return this.nextHandler.handle(user);
        return user;
    }
}
exports.BaseUserValidationHandler = BaseUserValidationHandler;
