import { TeamPostgreService } from "../../databases";
import { Injectable } from '@nestjs/common';

@Injectable()
export class TeamService extends TeamPostgreService {}