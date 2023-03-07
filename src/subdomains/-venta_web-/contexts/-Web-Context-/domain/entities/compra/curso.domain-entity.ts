import { CostoValueObject } from "../../value-objects/common-value-objects/costo/costo.value-object";
import { FullnameValueObject } from "../../value-objects/common-value-objects/fullname/fullname.value-object";
import { UuidValueObject } from "../../value-objects/common-value-objects/uuid/uuid.value-object";
import { ICursoDomainEntityInterface } from "../interfaces/i-curso.domain-entity.interface";
import { v4 as uuidv4 } from 'uuid';

export class CursoDomainEntity implements ICursoDomainEntityInterface{
    idCurso: string | UuidValueObject;
    nombreCurso: string | FullnameValueObject;
    nombreTeacher: string | FullnameValueObject;
    costoCurso: number | CostoValueObject;

    constructor( _data? : ICursoDomainEntityInterface ){
        
        if(_data.idCurso) this.idCurso = _data.idCurso
        
        else this.idCurso = uuidv4();

        if (_data?.nombreCurso) this.nombreCurso = _data.nombreCurso;

        if (_data?.nombreTeacher) this.nombreTeacher = _data.nombreTeacher;

        if (_data?.costoCurso) this.costoCurso = _data.costoCurso;

    }



}
