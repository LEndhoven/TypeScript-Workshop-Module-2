/**
 * Exercise 04
 *
 * A feature request has come in to add the possibility to make the `brand` part optional.
 * So it should be possible to search for vehicles by:
 *
 * - brand only
 * - registration status only
 * - brand and registration status
 *
 *
 * Can you alter the `findVehicles` function to support this feature, and also keeping the return type such that when registered vehicles are requested,
 * the function returns with a `RegisteredVehicle` type?
 *
 */

import { logText } from "lib/log-utils";
import { RegisteredVehicle, Vehicle } from "./models";
import { REGISTERED_VEHICLES, UNREGISTERED_VEHICLES } from "./data";

// Can you add function overloads for this function such that when registered vehicles are requested, the return type is `RegisteredVehicle[]`?
// And if registered vehicles are not requested, the return type is `Vehicle[]`?

function findVehicles(/** define function parameters */): Vehicle[] | RegisteredVehicle[] {
  return [...UNREGISTERED_VEHICLES, ...REGISTERED_VEHICLES];
}

const allBMWs = findVehicles('BMW');
logText(`There are ${allBMWs.length} BMWs in the collection.`);

const allRegisteredBMWs = findVehicles('BMW', true);
for(const registeredBMW of allRegisteredBMWs) {
  logText(`Registered ${registeredBMW.brand} with id ${registeredBMW.id} belongs to ${registeredBMW.owner.name}`);
}

