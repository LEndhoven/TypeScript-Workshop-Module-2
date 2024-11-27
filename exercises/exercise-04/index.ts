/**
 * Exercise 04 - function overloads
 *
 * A feature request has come in to add the possibility to make the `brand` part optional.
 * So it should be possible to search for vehicles by:
 *
 * - brand only
 * - registration status only
 * - brand and registration status
 *
 * Can you alter the `findVehicles` function to support this feature, and also keeping the return type such that when registered vehicles are requested,
 * the function returns with a `RegisteredVehicle` type?
 *
 */

import { logText } from "../../lib/log-utils";
import { RegisteredVehicle, Vehicle } from "./models";
import { REGISTERED_VEHICLES, UNREGISTERED_VEHICLES } from "./data";

// EXERCISE:
// Can you add function overloads for this function such that all requirements are met? So it should be possible to fetch vehicles:
//
//  - by providing no arguments at all. In this case, all vehicles should be returned.
//  - by only providing a brand. In this case, all vehicles of that brand should be returned, regardless of registration status.
//  - by only providing a parameter that indicates if only registered vehicles should be returned. In this case, all registered vehicles should be returned.
//  - by both providing a brand and a parameter that indicates if only registered vehicles should be returned. In this case, all registered vehicles of that brand should be returned.
//
// Make sure that in the situations where registered vehicles are requested, the return type is `RegisteredVehicle[]`?
// And if registered vehicles are not requested, the return type is `Vehicle[]`?

function findVehicles(): Vehicle[];
function findVehicles(brand: string): Vehicle[];
function findVehicles(registeredOnly: false): Vehicle[];
function findVehicles(registeredOnly: true): RegisteredVehicle[];
function findVehicles(brand: string, registeredOnly: true): RegisteredVehicle[];
function findVehicles(brandOrRegisteredOnly?: string | boolean, registeredOnly?: boolean): Vehicle[] {
  if (brandOrRegisteredOnly === undefined) {
    return [...UNREGISTERED_VEHICLES, ...REGISTERED_VEHICLES];
  }

  if (typeof brandOrRegisteredOnly === 'boolean') {
    return brandOrRegisteredOnly ? REGISTERED_VEHICLES : [...UNREGISTERED_VEHICLES, ...REGISTERED_VEHICLES];
  }

  if (registeredOnly === false) {
    return [...UNREGISTERED_VEHICLES, ...REGISTERED_VEHICLES].filter((vehicle) => vehicle.brand === brandOrRegisteredOnly);
  }

  if (registeredOnly) {
    return REGISTERED_VEHICLES.filter((vehicle) => vehicle.brand === brandOrRegisteredOnly);
  }

  return [...UNREGISTERED_VEHICLES, ...REGISTERED_VEHICLES].filter((vehicle) => vehicle.brand === brandOrRegisteredOnly);
}

// SOLUTION CHECKER: Code below is to check your solution
const allBMWs = findVehicles('BMW');
logText(`There are ${allBMWs.length} BMWs in the collection.`);

const allVehicles = findVehicles();
logText(`There are ${allVehicles.length} vehicles in the collection.`);

const allRegisteredVehicles = findVehicles(true);
for(const registeredVehicle of allRegisteredVehicles) {
  logText(`Registered ${registeredVehicle.brand} with id ${registeredVehicle.id} belongs to ${registeredVehicle.owner.name}`);
}

const allUnregisteredVehicles = findVehicles(false);
for(const unregisteredVehicle of allUnregisteredVehicles) {
  logText(`Vehicle ${unregisteredVehicle.brand} with id ${unregisteredVehicle.id} is not registered.`);
}

const allRegisteredBMWs = findVehicles('BMW', true);
for(const registeredBMW of allRegisteredBMWs) {
  logText(`Registered ${registeredBMW.brand} with id ${registeredBMW.id} belongs to ${registeredBMW.owner.name}`);
}
