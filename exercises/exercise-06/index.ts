/**
 * Exercise 06
 *
 * In this exercise, you are going to fix and improve a function that can return unique values for a given property from a list of objects.
 *
 * Currently, the function doesn't compile because some of the types are defined as `unknown`.
 * Also, the return values of the function are not as specific as they could be, making the code that uses this functions not compile as well.
 *
 * Your job is to replace the `unknown` types in the `getUniqueValues` function with the correct types.
 */

import { logText } from "../../lib/log-utils";
import { Person } from "./models";
import { PERSONS } from "./data";

// Can you replace the `unknown` types in the function below with the correct types?
// Hint1: Use a generic parameter with an `extends` contraint
// Hint2: The return type is based on the `property` parameter.
//        For this particular exercise, if the `property` is 'firstName' or 'lastName', the return type should be `string[]`.
//        And if the `property` is 'age', the return type should be `number[]`.
function getUniqueValues(persons: Person[], property: unknown): unknown {
  return Array.from(new Set(persons.map((person) => person[property])));
}


const uniqueFirstNames = getUniqueValues(PERSONS, 'firstName'); // expected to be string[]
logText(`The list of person records contains ${uniqueFirstNames.length} unique first names.`);
const longestName = uniqueFirstNames.reduce((longest, current) => current.length > longest.length ? current : longest, '');
logText(`The longest first name is ${longestName}.`);
logText(`The list of person records contains ${getUniqueValues(PERSONS, 'lastName').length} unique last names.`);
const allAges = getUniqueValues(PERSONS, 'age'); // expected to be number[]
logText(`The oldest persion is ${Math.max(...allAges)} years old.`);
