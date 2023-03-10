import { EmailValueObject } from "../../value-objects/cliente/email/email.value-object";
import { PhoneValueObject } from "../../value-objects/cliente/phone/phone.value-object";
import { FullnameValueObject } from "../../value-objects/common-value-objects/fullname/fullname.value-object";
import { UuidValueObject } from "../../value-objects/common-value-objects/uuid/uuid.value-object";

export interface IClienteDomainEntityInterface {

    idCliente? : string | UuidValueObject;
    nombreCliente : string | FullnameValueObject,
    phoneCliente : string | PhoneValueObject,
    emailCliente : string | EmailValueObject;

}

/*
ESTA ES LA INTERFAZ DE MI ENTIDAD.
LA MISMA DECLARA SUS ATRIBUTOS CON DOBLE TIPO DE DATO.
LOS ATRIBUTOS PUEDEN CONTENER UN CADENA DE TEXTO O UNN OBJETO DE TIPO
"FullnameValueObject" DEPENDIENDO DEL VALOR QUE SE LE ASIGNE.
*/