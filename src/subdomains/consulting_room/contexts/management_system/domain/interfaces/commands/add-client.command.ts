export interface IAddClientCommand {
  clientId?: string;
  fullName?: string;
  phone?: string;
  createdAt?: number | Date;
  updatedAt?: number | Date;
  deletedAt?: number | Date;
}
