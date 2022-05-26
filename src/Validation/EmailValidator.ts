import { BaseUserValidationHandler } from './BaseValidator';
import { User } from '../User/User';
import { EmailValidatorAdapter } from './Adapter/Email/EmailValidatorAdapter';

export class EmailHandler extends BaseUserValidationHandler {
  handle(user: User, ): User {
    const emailValidator: EmailValidatorAdapter = new EmailValidatorAdapter();

    if(emailValidator.isEmail(user.email)){
        console.log(`${user.email} é um email válido!`)
    } else {
        console.log(`${user.email} não é um email válido!`)
    }

    return super.handle(user);
  }
}