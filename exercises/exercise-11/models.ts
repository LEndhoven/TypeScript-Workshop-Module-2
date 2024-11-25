export enum OrderType {
  Confirmed = 'Confirmed',
  Planned = 'Planned',
  Completed = 'Completed'
}

export interface BaseOrder {
  orderNumber: string;
}
