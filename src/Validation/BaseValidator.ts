import { User } from '../User/User';

export abstract class BaseUserValidationHandler {
  protected nextHandler: BaseUserValidationHandler | null = null;

  setNextHandler(handler: BaseUserValidationHandler): BaseUserValidationHandler {
    this.nextHandler = handler;
    return handler;
  }

  handle(user: User): User {
    if (this.nextHandler) return this.nextHandler.handle(user);
    return user;
  }
}