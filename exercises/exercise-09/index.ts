/**
 * Exercise 09
 *
 * A shift can have break windows during which an employee can take a break.
 * However, it is not mandatory for a shift to have break windows.
 *
 * Therefore, the `Shift` type has a `breakWindows` property that is optional.
 * However, some functionality in the application only works with shifts that have break windows.
 * Therefore a new type `ShiftWithBreakWindows` is introduced that requires the `breakWindows` property to be present.
 * This type is used in the application where necessary.
 *
 * Can you improve the definition of the `ShiftWithBreakWindows` type such that the `breakWindows` property is required?
 */

import { logText } from "../../lib/log-utils";
import { Shift } from "./model";

// Can you improve the definition of the `ShiftWithBreakWindows` type such that the `breakWindows` property is required?
// Try not to redeclare the complete structure of the `breakWindows` property
// Hint: Use an intersection type combined with the `Pick` and `Required` utility types of TypeScript
type ShiftWithBreakWindows = Shift;

function getShiftWithBreakWindows(): ShiftWithBreakWindows {
  return {
    start: new Date('2023-01-01T08:00:00'),
    end: new Date('2023-01-01T16:00:00'),
    breakWindows: []
  }
}

logText(`The shift contains ${getShiftWithBreakWindows().breakWindows.length} break windows`);
