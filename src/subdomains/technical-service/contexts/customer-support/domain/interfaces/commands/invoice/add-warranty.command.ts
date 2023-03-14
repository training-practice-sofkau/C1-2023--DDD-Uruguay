export interface IAddWarrantyCommand {
    startDate?:  Date;
    endDate?:  Date;
    itemsCovered?: string[];
    warrantyStatus?: string;    
}