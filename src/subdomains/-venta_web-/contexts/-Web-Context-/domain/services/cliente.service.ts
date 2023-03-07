
export interface ClienteService {

    updatePhone(idCliente : string, phone : number) : Promise<number>
}
