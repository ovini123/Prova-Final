import { User } from "./User/User";
import { EmailHandler } from "./Validation/EmailValidator";
import { UUIDHandler } from "./Validation/UUIDValidator";

const user1 = new User("maria@gmail.com", "1");
const user2 = new User("ana@gmail.com", "2");
const user3 = new User("ricardo@gmail.com", "3");
const user4 = new User("josue@gmail.com", "4");
const user5 = new User("frank@gmail.com", "5");
const user6 = new User("mateus@gmail.com", "e3ef83b5-0f29-4bd5-b86f-6d8ebd36508c");
const user7 = new User("roberta@gmail.com", "f7c715ad-627c-4269-843b-8864dfc32e68");
const user8 = new User("magda@gmail.com", "c670df28-b0c7-4295-a48b-131c0216809f");
const user9 = new User("isaias@gmail.com", "b72b066e-25ce-43a4-bcf9-7fafaf4fe1db");
const user10 = new User("joao@gmail.com", "b07aa3bc-5afb-48f8-9adf-5a122966d944");

const validator = new EmailHandler()
validator.setNextHandler(new UUIDHandler())

console.log('_______________________________________________________');
validator.handle(user1);
console.log('_______________________________________________________');
validator.handle(user2);
console.log('_______________________________________________________');
validator.handle(user3);
console.log('_______________________________________________________');
validator.handle(user4);
console.log('_______________________________________________________');
validator.handle(user5);
console.log('_______________________________________________________');
validator.handle(user6);
console.log('_______________________________________________________');
validator.handle(user7);
console.log('_______________________________________________________');
validator.handle(user8);
console.log('_______________________________________________________');
validator.handle(user9);
console.log('_______________________________________________________');
validator.handle(user10);
