import { Injectable } from '@nestjs/common';

import { RoomMySqlService } from '../databases/mysql/services';

@Injectable()
export class RoomService extends RoomMySqlService {}