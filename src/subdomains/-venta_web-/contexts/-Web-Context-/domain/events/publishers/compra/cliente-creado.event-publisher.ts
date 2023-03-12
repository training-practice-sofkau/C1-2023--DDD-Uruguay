import { EventPublisherBase } from "src/libs/sofka/bases/event-publisher.base";
import { ClienteDomainEntity } from "../../../entities/common-entities/cliente.domain-entity";


export abstract class ClienteCreadoEventPublisher<Response = ClienteDomainEntity> extends EventPublisherBase<Response> {

    //ESTE METODO RETORNA UNA PROMESA QUE DE MOMENTO RETORNA UN RESULTADO GENERICO
    publish<Result = any>(): Promise<Result> {
        return this.emit('web-context.cliente-creado', JSON.stringify({ data: this.response }))
    }

    /*
    Dentro del método publish(), la clase ClienteCreadoEventPublisher llama al método emit()
    heredado de la clase EventPublisherBase para emitir un evento llamado 'web-context.cliente-creado'.
    Este evento contiene los datos del cliente recién creado, que se serializan como una cadena
    JSON utilizando el método JSON.stringify().
    */

}