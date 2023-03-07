export interface IWarrantyDomainService {

    AddItemCovered(): Promise<boolean>;

    RemoveItemCovered(): Promise<boolean>;

    ChangeWarrantyStatus(): Promise<boolean>;

}