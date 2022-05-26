import isUUID from "validator/lib/isUUID";
import { IUUIDValidator } from "./IUUIDValidator";

export class UUIDValidatorAdapter implements IUUIDValidator{
    isUUIDValid(uuid: string): boolean {
        return isUUID(uuid);   
    }
}