/**
 * Exercise 05 - Generics
 *
 * Below are a few utility functions to coerce values into an array.
 * The developer who wrote these functions made it convenient to support different types without losing type information.
 * It has been well received by the team members, who are using this extensively.
 *
 * There is one problem though: for each type, a new overload has to be added.
 * Support for `Employee` and `Shift` types is needed as well.
 *
 * Your job is to add support for the `Employee` and `Shift` types, but also ensuring this is the last time the function needs to be updated
 * by making it generic.
 */

import { logText } from "../../lib/log-utils";
import { EMPLOYEES, SHIFT } from "./data";

// EXERCISE: Right now, only `number`, `string`, and `boolean` types are supported.
// Can you add support for the `Employee` and `Shift` types, but also making sure this is the last time the function needs to be updated?
// Hint: Make use of generics
function coerceToArray(value: number | number[]): number[];
function coerceToArray(value: string | string[]): string[];
function coerceToArray(value: boolean | boolean[]): boolean[];
function coerceToArray(value: unknown | unknown[]): unknown[] {
  return Array.isArray(value) ? value : [value];
}

// SOLUTION CHECKER: Code below is to check your solution
logText(`Total number of employees: ${coerceToArray(EMPLOYEES).length}`);
logText(`Total number of shifts: ${coerceToArray(SHIFT).length}`);
logText(`Total number of objects: ${coerceToArray([{}, {}, {}]).length}`);
