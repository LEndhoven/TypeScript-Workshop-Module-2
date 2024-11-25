export interface BaseOrder {
  orderNumber: string;
}

export interface ConfirmedOrder extends BaseOrder {
  confirmationMNessage: string;
}

export interface PlannedOrder extends BaseOrder {
  plannedDate: Date;
}

export interface CompletedOrder extends BaseOrder {
  hadIssues: boolean;
}

export type Order = PlannedOrder | ConfirmedOrder | CompletedOrder;

export function isConfirmedOrder(order: Order): order is ConfirmedOrder {
  return 'confirmationMNessage' in order;
}

export function isPlannedOrder(order: Order): order is PlannedOrder {
  return 'plannedDate' in order;
}

export function isCompletedOrder(order: Order): order is CompletedOrder {
  return 'hadIssues' in order;
}

export const CONFIRMED_ORDER: ConfirmedOrder = {
  orderNumber: 'CO-456',
  confirmationMNessage: 'Confirmed order CO-456',
};

export const PLANNED_ORDER: PlannedOrder = {
  orderNumber: 'PO-123',
  plannedDate: new Date('2030-01-01'),
};

export const COMPLETED_ORDER: CompletedOrder = {
  orderNumber: 'CO-789',
  hadIssues: false,
};
