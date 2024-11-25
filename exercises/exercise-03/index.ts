/**
 * Exercise 03 - function overloads
 *
 * The application should be able to list all vehicles of a certain brand.
 * Some vehicles are registered, and some are not.
 * Next to listing all vehicles of a certain brand, the application should also be able to list all vehicles of a certain brand that are registered.
 *
 * Below is an attempt to implement this functionality.
 * However, the code doesn't compile.
 *
 * Can you add the neccessary function overloads for the `findVehicles` function?
 */

import { logText } from "../../lib/log-utils";
import { Vehicle } from "./models";
import { REGISTERED_VEHICLES, UNREGISTERED_VEHICLES } from "./data";

// EXERCISE: Can you add function overloads for this function such that when only registered vehicles requested, the return type is `RegisteredVehicle[]`?
// And if the `registeredOnly` property is not set to `true`, the return type is `Vehicle[]`?
function findVehicles(brand: string, registeredOnly?: boolean): Vehicle[] {
  return [...REGISTERED_VEHICLES, ...(registeredOnly ? [] : UNREGISTERED_VEHICLES)].filter(vehicle => vehicle.brand === brand);
}

// SOLUTION CHECKER: Code below is to check your solution
const allBMWs = findVehicles('BMW');
logText(`There are ${allBMWs.length} BMWs in the collection.`);

const allRegisteredBMWs = findVehicles('BMW', true);
for(const registeredBMW of allRegisteredBMWs) {
  logText(`Registered ${registeredBMW.brand} with id ${registeredBMW.id} belongs to ${registeredBMW.owner.name}`);
}

