import { logText } from '../../lib/log-utils';

import { BaseOrder, OrderType } from './models';

/**
 * Exercise 11 - Discriminated Unions
 *
 * In this exercise the goals is to apply Discriminated Unions by setting up different type of Orders and then providing a simple Type Guard
 * for each of the Order types.
 * We have already set up the BaseOrder interface and the OrderType enum which you can use.
 *
 * Create an interface ConfirmedOrder (extending the BaseOrder), that has the following additional properties:
 * - type: OrderType.Confirmed;
 * - confirmationMessage: string;
 *
 * Create an interface PlannedOrder (extending the BaseOrder), that has the following additional properties:
 * - type: OrderType.Planned;
 * - plannedDate: Date;
 *
 * Create an interface CompletedOrder (extending the BaseOrder), that has the following additional properties:
 * - type: OrderType.Completed;
 * - hadIssues: boolean;
 *
 * Create a union type Order that can be either a ConfirmedOrder, PlannedOrder, or CompletedOrder.
 *
 * Create a Type Guard for each of the Order types (isConfirmedOrder, isPlannedOrder, isCompletedOrder).
 */

// EXERCISE: Follow the instructions in the description above and write code directly below this



// SOLUTION-CHECKER: Code below is to check your solution
const ORDERS: Order[] = [
  {
    type: OrderType.Confirmed,
    orderNumber: 'CO-456',
    confirmationMessage: 'Confirmed order CO-456',
  },
  {
    type: OrderType.Planned,
    orderNumber: 'PO-123',
    plannedDate: new Date('2030-01-01'),
  },
  {
    type: OrderType.Completed,
    orderNumber: 'CO-789',
    hadIssues: false,
  },
];

function handleOrders(orders: Order[]): void {
  for (const order of orders) {
    if (isConfirmedOrder(order)) {
      logText(`Confirmed order ${order.orderNumber} is confirmed with message: ${order.confirmationMessage}`);
    } else if (isPlannedOrder(order)) {
      logText(`Planned order ${order.orderNumber} is planned for ${order.plannedDate}`);
    } else if (isCompletedOrder(order)) {
      logText(`Completed order ${order.orderNumber} was completed and had ${order.hadIssues ? '' : 'no '}issues`);
    }
  }
}

handleOrders(ORDERS);
