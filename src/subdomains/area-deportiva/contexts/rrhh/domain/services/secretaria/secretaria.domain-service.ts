import { SecretariaDomainEntity } from '../../entities/secretaria/secretaria.domain-entity';


export interface ISecretariaDomainService<T extends SecretariaDomainEntity = SecretariaDomainEntity>{

    CrearSecretaria(secretaria: T ):Promise<T>;

    

    
    
 

}
