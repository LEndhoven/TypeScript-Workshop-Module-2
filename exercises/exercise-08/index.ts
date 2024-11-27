/**
 * Exercise 08 - Generics
 *
 * This exercise continues from the previous one.
 * As you might have noticed, the number of unique starts retrieved from the `Shift` collection is not correct.
 * This is because by default, objects are compared by reference to check for equality.
 * Since the `Date` object is a class, two instances with the same value will not be considered equal.
 *
 * However, we would like to be able to compare `Date` objects based on their value.
 * Therefore, we want to add an optional function parameter that generates an `id` for a given value.
 * This `id` will be used to compare the values instead of the values themselves.
 */

import { logText } from "../../lib/log-utils";
import { PERSONS, SHIFTS } from "./data";


// EXERCISE: Can you make the `idSelector` argument generic such that the test code below this function compiles and runs without errors?
// You will also have to change one of the `unknown` types of the `Map` object at line 25.
function getUniqueValues<TObject, TKey extends keyof TObject>(items: TObject[], property: TKey, idSelector?: (propertyValue: TObject[TKey]) => unknown): TObject[TKey][] {
  if (!idSelector) {
    return Array.from(new Set(items.map((item) => item[property])));
  }

  const uniqueValueById = new Map<unknown, TObject[TKey]>();
  for(const item of items) {
    const propertyValue = item[property];
    const id = idSelector(propertyValue);
    if (!uniqueValueById.has(id)) {
      uniqueValueById.set(id, propertyValue);
    }
  }

  return Array.from(uniqueValueById.values());
}

// SOLUTION CHECKER: Code below is to check your solution
const uniqueStarts = getUniqueValues(SHIFTS, 'start', (date) => date.valueOf());
const uniqueFirstNames = getUniqueValues(PERSONS, 'firstName');
const uniqueFirstNamesCaseInsensitive = getUniqueValues(PERSONS, 'firstName', (name) => name.toLowerCase());

logText(`The list of shift records contains ${uniqueStarts.length} unique start dates.`); // Expected to be 14
logText(`The list of person records contains ${uniqueFirstNames.length} unique first names.`); // Expected to be 8
logText(`The list of person records contains ${uniqueFirstNamesCaseInsensitive.length} unique first names (case-insensitive).`); // Expected to be 5
