import { EskeyReceivableDetail } from './eskeyReceivableDetail';
export interface EskeyReceivable {
  id: number;
  count: number;
  location: string;
  arrivalDateTime: Date;
  operatorId: number;
  dateProcessed: Date;
  dateTimeReceived: Date;
  charter: string;
  eskeyReceivableDetails: EskeyReceivableDetail[];
}
