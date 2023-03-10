import { CostoValueObject } from "../../value-objects/common-value-objects/costo/costo.value-object";
import { FullnameValueObject } from "../../value-objects/common-value-objects/fullname/fullname.value-object";
import { UuidValueObject } from "../../value-objects/common-value-objects/uuid/uuid.value-object";

export interface ICursoDomainEntityInterface {


    idCurso? : string | UuidValueObject;
    nombreCurso : string | FullnameValueObject,
    nombreTeacher : string | FullnameValueObject,
    costoCurso : number | CostoValueObject;

}
