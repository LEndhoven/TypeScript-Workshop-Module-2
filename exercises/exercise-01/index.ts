/**
 * Exercise 01
 *
 * You are working on a project that has modelled some domain entities well.
 * One of these entities in of type `Vehicle` and has the following properties:
 *
 * - id,
 * - brand
 * - fuelType (optional)
 *
 * The code below shows the definition of a `Vehicle` as well as two functions.
 * Further down, an object is created and passed to the two functions.
 * The code compiles, but it has a runtime error.
 * It also uses the non-null assertion operator (!) which is a bad practice.
 *
 * Your job is to fix the runtime error and to remove the non-null assertion operator (!) from the code.
 */


import { Vehicle } from "./models";
import { getFuelPrice, registerVehicle } from "./utilities";

// Can you change the way the vehicle is defined such that the code below doesn't have any runtime errors?
// Hint: You might see the `brand` property is missing, but the code still compiles. First try to get the code not to compile anymore
// to make sure the compiler recognizes the missing property.
const vehicle = {
  id: '123',
  fuelType: 'diesel'
} as Vehicle;

registerVehicle(vehicle);
getFuelPrice(vehicle.fuelType!);
