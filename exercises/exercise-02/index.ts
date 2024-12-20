/**
 * Exercise 2
 *
 * The application fetches vehicles from a data source.
 * The function to retrieve vehicles is generic and can return vehicles of different types.
 * However, when you know the type of vehicles you want to retrieve upfront, you should be able to narrow down the return type to only the vehicles of that type.
 *
 * Currently, the `fetchVehicles` function always returns an array of `Vehicle` objects. Even when only vehicles of type `Car` are requested.
 * Your job is to change the definition of the `VehicleTypeOf` type such that depending on the function input, the correct return type is inferred.
 */

import { logText } from "../../lib/log-utils";
import { Vehicle, Car, Truck, Motorcycle, VehicleType } from "./models";

// EXERCISE: Can you change the definition of the `VehicleTypeOf` type such that the code below compiles?
// HINT: Vehicle is a union type of `Car`, `Truck`, and `Motorcycle`. Each of these types have a unique property { type: VehicleType } with a literal type assigned
// HINT2: Can you use that literal type property to differentiate them using the built-in TypeScript utility `Extract` in the right-hand-side of VehicleTypeOf?
// HINT3: Check the function `fetchVehicles` to see how the `VehicleType` enum is used as a generic type parameter. Can you do that here as well by replacing the <T = unknown>?
type VehicleTypeOf<T = unknown> = Vehicle;

// SOLUTION CHECKER: Code below is to check your solution

// Expect return type of the `fetchVehicles` function to be of `Motorcycle[]`, so we should be able to safely access the `topSpeed` property.
const allMotorCycles = fetchVehicles(VehicleType.Motorcycle);
const fastestMotorCycle = allMotorCycles.reduce((fastest, current) => current.topSpeed > fastest.topSpeed ? current : fastest);
logText(`The fastest motorcycle is a ${fastestMotorCycle.brand} with a top speed of ${fastestMotorCycle.topSpeed} km/h.`);

// Expect return type of the `fetchVehicles` function to be of `(Truck | Car)[]`. Both `Truck` and `Car` have the `isInsured` property, so we should be able to access it.
const allTrucksAndCars = fetchVehicles(VehicleType.Truck, VehicleType.Car);
const numberOfNonInsuredVehicles = allTrucksAndCars.filter(vehicle => !vehicle.isInsured).length;
logText(`There are ${numberOfNonInsuredVehicles} non-insured vehicles.`);

function fetchVehicles<T extends VehicleType>(...vehicleTypes: T[]): VehicleTypeOf<T>[] {
  const carCollection: Car[] = [
    {
      id: '1',
      brand: 'Toyota',
      buildYear: 2018,
      type: VehicleType.Car,
      numberOfDoors: 4,
      isInsured: true
    },
    {
      id: '2',
      brand: 'Ford',
      buildYear: 2019,
      type: VehicleType.Car,
      numberOfDoors: 2,
      isInsured: false
    }
  ];

  const truckCollection: Truck[] = [
    {
      id: '3',
      brand: 'Volvo',
      buildYear: 2015,
      type: VehicleType.Truck,
      capacity: 2000,
      isInsured: true
    },
    {
      id: '4',
      brand: 'Scania',
      buildYear: 2017,
      type: VehicleType.Truck,
      capacity: 3000,
      isInsured: false
    }
  ];

  const motorcycleCollection: Motorcycle[] = [
    {
      id: '5',
      brand: 'Yamaha',
      buildYear: 2020,
      type: VehicleType.Motorcycle,
      topSpeed: 280
    },
    {
      id: '6',
      brand: 'Honda',
      buildYear: 2019,
      type: VehicleType.Motorcycle,
      topSpeed: 250
    }
  ];

  // This assignment is needed to avoid a compile error
  const nonGenericVehicleTypes: VehicleType[] = vehicleTypes;

  return [
    ...(nonGenericVehicleTypes.includes(VehicleType.Car) ? carCollection : []),
    ...(nonGenericVehicleTypes.includes(VehicleType.Truck) ? truckCollection : []),
    ...(nonGenericVehicleTypes.includes(VehicleType.Motorcycle) ? motorcycleCollection: [])
  ] as VehicleTypeOf<T>[];
}
