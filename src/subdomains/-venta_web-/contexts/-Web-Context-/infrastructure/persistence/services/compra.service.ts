import { Injectable } from '@nestjs/common';
import {CompraMySqlService } from '../databases/mysql/services';

@Injectable()
export class CompraService extends CompraMySqlService {
    
}