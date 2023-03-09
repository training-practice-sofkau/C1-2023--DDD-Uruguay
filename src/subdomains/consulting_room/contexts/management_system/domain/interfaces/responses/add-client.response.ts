import { ClientDomainEntitybase } from '../../entities';

export interface IAddClientResponse {
  success: boolean;
  data: ClientDomainEntitybase | null;
}
