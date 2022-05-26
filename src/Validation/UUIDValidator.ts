import { BaseUserValidationHandler } from './BaseValidator';
import { User } from '../User/User';
import { UUIDValidatorAdapter } from './Adapter/UUID/UUIDValidatorAdapter';

export class UUIDHandler extends BaseUserValidationHandler {
  handle(user: User): User {
    const uuidValidator: UUIDValidatorAdapter = new UUIDValidatorAdapter();
    if(uuidValidator.isUUIDValid(user.id)){
      console.log(`${user.id} é um uuid válido`);
    } else {
      console.log(`${user.id} não é um uuid válido`);
    }

    return super.handle(user);
  }
}