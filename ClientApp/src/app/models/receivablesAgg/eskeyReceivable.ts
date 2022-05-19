import { EskeyReceivableDetail } from './eskeyReceivableDetail';
export interface EskeyReceivable {
  id: number;
  count: number;
  location: string;
  arrivalDateTime: string;
  operatorId: number;
  dateProcessed: string;
  dateTimeReceived: string;
  charter: string;
  eskeyReceivableDetails: EskeyReceivableDetail[];
}
