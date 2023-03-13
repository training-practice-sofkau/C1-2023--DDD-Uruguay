import { Injectable } from '@nestjs/common';

import { RoomKeyMySqlService } from '../databases/mysql/services';

@Injectable()
export class RoomKeyService extends RoomKeyMySqlService {}