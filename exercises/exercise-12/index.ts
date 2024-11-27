import { logError, logText } from '../../lib/log-utils';

import { COMPLETED_ORDER, CompletedOrder, CONFIRMED_ORDER, ConfirmedOrder, isCompletedOrder, isPlannedOrder, Order, PLANNED_ORDER, PlannedOrder } from './models';

/**
 * Exercise 12 - Conditional Types
 *
 * This exercise is based on the same idea as the previous exercise. Unfortunately, somebody else already created all of the interfaces,
 * but did apparently not know about Discriminated Unions and the advantage of having a literal enum value as type on the interfaces.
 *
 * The interfaces ConfirmedOrder, PlannedOrder and CompletedOrder are already defined and cannot be changed, but are all missing the
 * `type` property from the previous exercise.
 *
 * It is your task to create a new type UniqueOrderPropertyType<TOrder extends Order> that returns the type of the unique property of each
 * of the Order types. The type should be:
 * - string for ConfirmedOrder
 * - Date for PlannedOrder
 * - boolean for CompletedOrder
 */

// EXERCISE: Follow the instructions in the description above and write code directly below this
type UniqueOrderPropertyType<TOrder extends Order> = TOrder extends ConfirmedOrder
  ? string
  : TOrder extends PlannedOrder
    ? Date
    : TOrder extends CompletedOrder
      ? boolean
      : never;

// SOLUTION-CHECKER: Code below is to check your solution
function getUniquePropertyValue<TOrder extends Order>(order: TOrder): UniqueOrderPropertyType<TOrder> {
  if (isCompletedOrder(order)) {
    return order.hadIssues as UniqueOrderPropertyType<TOrder>;
  }

  if (isPlannedOrder(order)) {
    return order.plannedDate as UniqueOrderPropertyType<TOrder>;
  }

  return order.confirmationMNessage as UniqueOrderPropertyType<TOrder>;
}

function verify(): void {
  if (typeof getUniquePropertyValue(CONFIRMED_ORDER) !== 'string') {
    logError('Incorrect type for Confirmed order');
  } else {
    logText('Confirmed order correct');
  }

  if (!(getUniquePropertyValue(PLANNED_ORDER) instanceof Date)) {
    logError('Incorrect type for Planned order');
  } else {
    logText('Planned order correct');
  }

  if (typeof getUniquePropertyValue(COMPLETED_ORDER) !== 'boolean') {
    logError('Incorrect type for Completed order');
  } else {
    logText('Completed order correct');
  }
}

verify();
