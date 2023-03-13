import { MangaRepository } from './../repositories/Manga-repository';
import { MangaDomainService } from 'src/subdomains/Store/contexts/Customer-Service/domain/services';
import { MangaEntityDb } from '../entities/Manga-entity-db';

export class MangaMySqlServicez
 implements MangaDomainService<MangaEntityDb> {

    constructor(private readonly MangaRepository: MangaRepository){}


     UpdateName(data: MangaEntityDb): Promise<MangaEntityDb> {
         return this.MangaRepository.update(data.Mangaid, data)        
       }

    
    UpdateState(data: MangaEntityDb): Promise<MangaEntityDb> {
        return this.MangaRepository.update(data.Mangaid, data );
    }

    UpdatePrice(data: MangaEntityDb): Promise<MangaEntityDb> {
        return this.MangaRepository.update(data.Mangaid, data );
    }





}
