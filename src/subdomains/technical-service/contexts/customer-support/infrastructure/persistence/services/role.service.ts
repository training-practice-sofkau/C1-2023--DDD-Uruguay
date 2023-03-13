import { Injectable } from '@nestjs/common/';
import { RoleMySqlService } from '../databases';

@Injectable()
export class RoleService extends RoleMySqlService {}