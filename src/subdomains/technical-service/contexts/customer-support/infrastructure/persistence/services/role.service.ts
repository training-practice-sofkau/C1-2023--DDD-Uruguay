import { Injectable } from '@nestjs/common/';
import { RoleMySqlService } from '../databases/mysql';

@Injectable()
export class RoleService extends RoleMySqlService {}