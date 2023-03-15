import { Injectable } from '@nestjs/common';
import { SecretariaMySqlService } from '../databases/mysql/services/secretaria.service';

@Injectable()
export class SecretariaService extends SecretariaMySqlService {}
