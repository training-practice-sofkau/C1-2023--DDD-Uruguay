import { Injectable } from "@nestjs/common";
import { ProductMySqlService } from "../databases/mysql/services/product.service";

@Injectable()
export class ProductService extends ProductMySqlService { }