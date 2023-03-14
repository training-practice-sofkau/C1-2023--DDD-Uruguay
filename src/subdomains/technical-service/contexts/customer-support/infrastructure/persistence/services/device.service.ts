import { Injectable } from "@nestjs/common";
import { DeviceMySqlService } from "../databases/mysql/services/device.service";

@Injectable()
export class DeviceService extends DeviceMySqlService {}