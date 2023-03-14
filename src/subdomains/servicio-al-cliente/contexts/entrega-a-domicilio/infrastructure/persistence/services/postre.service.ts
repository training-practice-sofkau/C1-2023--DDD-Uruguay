import { Injectable } from '@nestjs/common';

import { PostreMySqlService } from '../databases/mysql/services';

@Injectable()
export class PostreService extends PostreMySqlService {}