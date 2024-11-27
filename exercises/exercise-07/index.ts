/**
 * Exercise 07 - Generics
 *
 * This exercise continues from the previous one.
 * Now that you have a nice generic function to get all unique values for a given property value of from a list of `Person` objects,
 * you also want such a function for a list of `Shift` objects.
 *
 * You can re-use the previous function and make it more generic such that it works on an list of objects of `Person` or `Shift` type.
 * If you implement it correctly, it should work for even more types in a generic way.
 */

import { logText } from "../../lib/log-utils";
import { PERSONS, SHIFTS } from "./data";

// EXERCISE: Can you replace the `unknown` types in the function below with the correct types?
// Hint: Use two generic parameters
function getUniqueValues<TObject, TKey extends keyof TObject>(items: TObject[], property: TKey): TObject[TKey][] {
  return Array.from(new Set(items.map((item) => item[property])));
}

// SOLUTION CHECKER: Code below is to check your solution
const uniqueFirstNames = getUniqueValues(PERSONS, 'firstName'); // expected to be string[]
logText(`The list of person records contains ${uniqueFirstNames.length} unique first names.`);
const longestName = uniqueFirstNames.reduce((longest, current) => current.length > longest.length ? current : longest, '');
logText(`The longest first name is ${longestName}.`);
logText(`The list of person records contains ${getUniqueValues(PERSONS, 'lastName').length} unique last names.`);
const allAges = getUniqueValues(PERSONS, 'age'); // expected to be number[]
logText(`The oldest persion is ${Math.max(...allAges)} years old.`);

const uniqueShiftStarts = getUniqueValues(SHIFTS, 'start'); // expected to be Date[]
logText(`The list of shift records contains ${uniqueShiftStarts.length} unique start dates.`);
const earliestShift = uniqueShiftStarts.reduce((earliest, current) => current.valueOf() < earliest.valueOf() ? current : earliest);
logText(`The earliest shift starts at ${earliestShift.toLocaleString()}.`);
